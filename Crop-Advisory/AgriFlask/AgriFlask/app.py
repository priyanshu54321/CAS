from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import timedelta
from geopy.geocoders import Nominatim
from sqlalchemy.exc import IntegrityError
import requests
import os
import json
from datetime import datetime
from models import init_db, get_session, User, ForumPost, ForumAnswer

app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)

app.config['JWT_SECRET_KEY'] = os.environ.get('SESSION_SECRET', 'farmer-advisory-secret-key-2024')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=7)

jwt = JWTManager(app)

OPENWEATHER_API_KEY = os.environ.get('OPENWEATHER_API_KEY', '')

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    
    session = get_session()
    try:
        existing_user = session.query(User).filter_by(username=username).first()
        if existing_user:
            return jsonify({'error': 'Username already exists'}), 400
        
        hashed_password = generate_password_hash(password)
        new_user = User(username=username, password=hashed_password)
        session.add(new_user)
        session.commit()
        
        access_token = create_access_token(identity=username)
        return jsonify({
            'message': 'Registration successful',
            'access_token': access_token,
            'user': {'username': username}
        }), 201
    except Exception as e:
        session.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        session.close()

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    
    session = get_session()
    try:
        user = session.query(User).filter_by(username=username).first()
        if not user or not check_password_hash(user.password, password):
            return jsonify({'error': 'Invalid username or password'}), 401
        
        access_token = create_access_token(identity=username)
        return jsonify({
            'message': 'Login successful',
            'access_token': access_token,
            'user': {'username': username}
        }), 200
    finally:
        session.close()

@app.route('/api/auth/profile', methods=['GET'])
@jwt_required()
def get_profile():
    current_user = get_jwt_identity()
    session = get_session()
    try:
        user = session.query(User).filter_by(username=current_user).first()
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        return jsonify({
            'id': user.id,
            'username': user.username,
            'created_at': user.created_at.isoformat(),
            'posts_count': len(user.posts),
            'answers_count': len(user.answers)
        }), 200
    finally:
        session.close()

@app.route('/api/crops/advisory', methods=['GET'])
def get_crop_advisory():
    lang = request.args.get('lang', 'en')
    
    try:
        with open('data/crops.json', 'r', encoding='utf-8') as f:
            crops_data = json.load(f)
        
        return jsonify(crops_data.get(lang, crops_data['en'])), 200
    except FileNotFoundError:
        return jsonify([]), 200

@app.route('/api/location/reverse-geocode', methods=['GET'])
def reverse_geocode():
    lat = request.args.get('lat', '')
    lon = request.args.get('lon', '')
    
    if not lat or not lon:
        return jsonify({'error': 'Latitude and longitude are required'}), 400
    
    try:
        geolocator = Nominatim(user_agent="farmer_advisory_app")
        location = geolocator.reverse(f"{lat}, {lon}", language='en')
        
        if location and location.address:
            address_parts = location.raw.get('address', {})
            
            # Try to extract meaningful location info
            city = address_parts.get('city') or address_parts.get('town') or address_parts.get('village') or address_parts.get('county')
            state = address_parts.get('state')
            country = address_parts.get('country')
            
            location_name = ', '.join(filter(None, [city, state, country]))
            
            return jsonify({
                'location_name': location_name or location.address,
                'city': city,
                'state': state,
                'country': country
            }), 200
        else:
            return jsonify({'error': 'Location not found'}), 404
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/weather/current', methods=['GET'])
def get_weather():
    # Accept either lat/lon OR location name (prioritize lat/lon for accuracy)
    lat = request.args.get('lat', '')
    lon = request.args.get('lon', '')
    location = request.args.get('location', '')
    lang = request.args.get('lang', 'en')
    
    # If coordinates provided, use them directly (most accurate)
    if lat and lon:
        try:
            latitude = float(lat)
            longitude = float(lon)
        except ValueError:
            return jsonify({'error': 'Invalid coordinates'}), 400
    # Otherwise try to geocode location name
    elif location:
        try:
            geolocator = Nominatim(user_agent="farmer_advisory_app")
            geo_location = geolocator.geocode(location)
            
            if not geo_location:
                return jsonify({'error': 'Location not found'}), 404
            
            latitude = geo_location.latitude
            longitude = geo_location.longitude
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'Location or coordinates required'}), 400
    
    try:
        if OPENWEATHER_API_KEY:
            weather_url = f"https://api.openweathermap.org/data/2.5/weather"
            params = {
                'lat': latitude,
                'lon': longitude,
                'appid': OPENWEATHER_API_KEY,
                'units': 'metric',
                'lang': lang
            }
            response = requests.get(weather_url, params=params, timeout=10)
            
            if response.status_code == 200:
                weather_data = response.json()
                temp = weather_data['main']['temp']
                feels_like = weather_data['main']['feels_like']
                wind_speed = weather_data['wind']['speed'] * 3.6
                weather_desc = weather_data['weather'][0]['description']
                humidity = weather_data['main']['humidity']
                pressure = weather_data['main']['pressure']
                
                is_safe = True
                if temp > 40 or temp < 5 or wind_speed > 40:
                    is_safe = False
                
                return jsonify({
                    'current': {
                        'temperature': round(temp, 1),
                        'feels_like': round(feels_like, 1),
                        'windspeed': round(wind_speed, 1),
                        'weather_condition': weather_desc.capitalize(),
                        'humidity': humidity,
                        'pressure': pressure,
                        'is_safe_for_farming': is_safe,
                        'data_source': 'OpenWeather API',
                        'timestamp': datetime.fromtimestamp(weather_data['dt']).isoformat()
                    }
                }), 200
            elif response.status_code == 401:
                print(f"OpenWeather API Error: Invalid API key")
                return jsonify({'error': 'Invalid weather API key. Please check OPENWEATHER_API_KEY environment variable.'}), 500
            else:
                print(f"OpenWeather API Error: Status {response.status_code}, Response: {response.text}")
                return jsonify({'error': f'Weather API returned status {response.status_code}'}), 500
        else:
            print("Warning: OPENWEATHER_API_KEY not set, returning demo data")
            return jsonify({
                'current': {
                    'temperature': 28.5,
                    'feels_like': 29.0,
                    'windspeed': 12.3,
                    'weather_condition': 'Partly cloudy',
                    'humidity': 65,
                    'pressure': 1013,
                    'is_safe_for_farming': True,
                    'data_source': 'Demo Data',
                    'timestamp': datetime.now().isoformat()
                },
                'warning': 'Using demo data. Set OPENWEATHER_API_KEY environment variable for real weather data.'
            }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/market/prices', methods=['GET'])
def get_market_prices():
    crop = request.args.get('crop', '')
    state = request.args.get('state', '')
    limit = int(request.args.get('limit', 20))
    lang = request.args.get('lang', 'en')
    
    try:
        with open('data/market_prices.json', 'r', encoding='utf-8') as f:
            market_data = json.load(f)
        
        prices = market_data.get(lang, market_data['en'])
        
        if crop:
            prices = [p for p in prices if crop.lower() in p['crop'].lower()]
        
        if state:
            prices = [p for p in prices if state.lower() in p['state'].lower()]
        
        return jsonify(prices[:limit]), 200
    except FileNotFoundError:
        return jsonify([]), 200

@app.route('/api/fertilizer/recommendation', methods=['GET'])
def get_fertilizer_recommendation():
    crop = request.args.get('crop', '')
    stage = request.args.get('stage', 'vegetative')
    organic = request.args.get('organic', 'false').lower() == 'true'
    lang = request.args.get('lang', 'en')
    
    try:
        with open('data/fertilizer.json', 'r', encoding='utf-8') as f:
            fertilizer_data = json.load(f)
        
        # Get recommendations for the requested language
        recommendations = fertilizer_data.get(lang, fertilizer_data['en'])
        
        if crop:
            # Try to match crop name (case-insensitive, partial match)
            crop_lower = crop.lower()
            matching = None
            
            # First try exact match in current language
            for r in recommendations:
                if crop_lower in r['crop'].lower() or r['crop'].lower() in crop_lower:
                    matching = r
                    break
            
            # If not found and not in English, try matching with English names too
            if not matching and lang != 'en':
                en_recommendations = fertilizer_data.get('en', [])
                for idx, r in enumerate(en_recommendations):
                    if crop_lower in r['crop'].lower() or r['crop'].lower() in crop_lower:
                        # Found match in English, return the corresponding item in requested language
                        if idx < len(recommendations):
                            matching = recommendations[idx]
                        break
            
            if matching:
                rec = matching.copy()
                if organic and 'dosage_reduction' in rec:
                    rec['note'] = rec['dosage_reduction']
                return jsonify(rec), 200
        
        return jsonify({'message': 'No specific recommendation found'}), 404
    except FileNotFoundError:
        return jsonify({'message': 'Fertilizer data not available'}), 404

@app.route('/api/government/schemes', methods=['GET'])
def get_government_schemes():
    lang = request.args.get('lang', 'en')
    
    try:
        with open('data/schemes.json', 'r', encoding='utf-8') as f:
            schemes_data = json.load(f)
        
        return jsonify(schemes_data.get(lang, schemes_data['en'])), 200
    except FileNotFoundError:
        return jsonify([]), 200

@app.route('/api/forum/questions', methods=['GET'])
def get_forum_questions():
    per_page = int(request.args.get('per_page', 10))
    session = get_session()
    try:
        posts = session.query(ForumPost).order_by(ForumPost.created_at.desc()).limit(per_page).all()
        posts_data = []
        for post in posts:
            answer_count = len(post.answers)
            user = session.query(User).filter_by(username=post.author).first()
            posts_data.append({
                'id': post.id,
                'author': {'username': post.author} if user else {'username': 'Anonymous'},
                'title': post.title,
                'content': post.content,
                'created_at': post.created_at.isoformat(),
                'answer_count': answer_count,
                'answers': [{
                    'author': ans.author,
                    'content': ans.content,
                    'created_at': ans.created_at.isoformat()
                } for ans in post.answers]
            })
        return jsonify({'questions': posts_data}), 200
    finally:
        session.close()

@app.route('/api/forum/questions', methods=['POST'])
@jwt_required()
def post_forum_question():
    current_user = get_jwt_identity()
    data = request.get_json()
    
    title = data.get('title', '')
    content = data.get('content', '')
    
    if not content:
        return jsonify({'error': 'Content is required'}), 400
    
    session = get_session()
    try:
        new_post = ForumPost(
            author=current_user,
            title=title,
            content=content
        )
        session.add(new_post)
        session.commit()
        
        post_data = {
            'id': new_post.id,
            'author': new_post.author,
            'title': new_post.title,
            'content': new_post.content,
            'answers': [],
            'created_at': new_post.created_at.isoformat()
        }
        
        return jsonify(post_data), 201
    except Exception as e:
        session.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        session.close()

@app.route('/api/forum/questions/<int:question_id>/answers', methods=['POST'])
@jwt_required()
def post_forum_answer(question_id):
    current_user = get_jwt_identity()
    data = request.get_json()
    answer_text = data.get('answer', '')
    
    if not answer_text:
        return jsonify({'error': 'Answer is required'}), 400
    
    session = get_session()
    try:
        post = session.query(ForumPost).filter_by(id=question_id).first()
        if not post:
            return jsonify({'error': 'Question not found'}), 404
        
        new_answer = ForumAnswer(
            post_id=question_id,
            author=current_user,
            content=answer_text
        )
        session.add(new_answer)
        session.commit()
        
        answer_data = {
            'author': new_answer.author,
            'content': new_answer.content,
            'created_at': new_answer.created_at.isoformat()
        }
        
        return jsonify(answer_data), 201
    except Exception as e:
        session.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        session.close()

if __name__ == '__main__':
    os.makedirs('data', exist_ok=True)
    os.makedirs('static', exist_ok=True)
    
    # Initialize database tables
    try:
        init_db()
        print("Database initialized successfully")
    except Exception as e:
        print(f"Database initialization error: {e}")
        print("Make sure DATABASE_URL is set in your environment variables")
    
    app.run(host='0.0.0.0', port=5000, debug=True)
