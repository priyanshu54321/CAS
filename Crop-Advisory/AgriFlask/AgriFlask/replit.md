# Farmer-Friendly Crop Advisory System

## Overview

This is a web-based agricultural advisory platform designed to empower Indian farmers with data-driven insights for better farming decisions. The system provides multilingual support (English, Hindi, Marathi, Bengali, Telugu, Punjabi) and offers comprehensive features including crop recommendations, weather forecasts, market prices, fertilizer guidance, government scheme information, and a community forum.

The application targets small to medium-scale farmers across India, making agricultural knowledge accessible through a simple, localized interface that bridges the gap between traditional farming practices and modern agricultural science.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML/CSS/JavaScript (no framework dependencies)
- Font Awesome for icons
- Google Fonts for multilingual typography support
- Responsive design with CSS Grid and Flexbox

**Design Decisions:**
- **Multilingual Support**: Implemented client-side translation system using a key-value mapping structure in JavaScript. This approach was chosen over server-side translation to reduce API calls and provide instant language switching without page reloads.
- **Static Asset Delivery**: Frontend assets are served from a `/static` directory, allowing for efficient caching and CDN integration in production environments.
- **Component-Based UI**: Although not using a framework, the interface is organized into logical sections (header, hero, dashboard cards, modals) for maintainability.

**Pros**: Lightweight, fast loading, no build process required, easy to customize.
**Cons**: Manual DOM manipulation can become complex as features grow; no built-in state management.

### Backend Architecture

**Technology Stack:**
- Flask (Python web framework)
- Flask-CORS for cross-origin resource sharing
- Flask-JWT-Extended for authentication
- Werkzeug for password hashing
- GeoPy for geocoding services

**Design Decisions:**

1. **Monolithic Flask Application**: All routes and business logic are contained in `app.py`. This was chosen for simplicity and rapid development, suitable for a small to medium-scale application.
   - **Pros**: Easy to understand, quick setup, minimal boilerplate
   - **Cons**: May become difficult to maintain as the application scales; all components are tightly coupled

2. **In-Memory Data Storage**: User data and forum posts are stored in Python dictionaries (`users_db`, `forum_posts`) rather than a persistent database.
   - **Problem Addressed**: Quick prototyping without database setup complexity
   - **Cons**: Data is lost on server restart; not suitable for production; no data persistence; limited scalability
   - **Note**: This should be migrated to a persistent database (PostgreSQL, MongoDB, etc.) for production deployment

3. **JWT-Based Authentication**: Uses JSON Web Tokens for stateless authentication with 7-day token expiration.
   - **Rationale**: Stateless authentication allows for easier horizontal scaling and mobile app integration
   - **Implementation**: Tokens are generated on login/registration and must be included in protected route requests
   - **Security**: Uses environment variable for secret key (`SESSION_SECRET`)

4. **RESTful API Design**: Backend exposes JSON APIs under `/api` prefix for frontend consumption.
   - **Structure**: `/api/auth/*` for authentication, likely additional routes for weather, market prices, etc.
   - **Response Format**: Consistent JSON responses with error handling

### Data Architecture

**Static JSON Data Files**: Agricultural data is stored in JSON files under `/data` directory:
- `crops.json`: Crop information, seasons, fertilizer recommendations, pest alerts
- `fertilizer.json`: Detailed fertilizer schedules by crop type
- `market_prices.json`: Market price data from various APMCs (Agricultural Produce Market Committees)
- `schemes.json`: Government scheme information with multilingual descriptions

**Design Rationale:**
- **Problem**: Need for structured agricultural data that doesn't change frequently
- **Solution**: File-based storage allows for easy updates and version control
- **Pros**: Simple to manage, can be edited without database migrations, git-trackable
- **Cons**: Not scalable for real-time data; requires application restart for updates; no query optimization

**Multilingual Data Support**: Each JSON file contains language-specific keys (`en`, `hi`, etc.) for localized content delivery.

### Authentication & Authorization

**Implementation:**
- Password hashing using Werkzeug's `generate_password_hash` and `check_password_hash`
- JWT tokens with configurable expiration (currently 7 days)
- Protected routes use `@jwt_required()` decorator
- Identity extracted from tokens using `get_jwt_identity()`

**Security Considerations:**
- Secret key should be stored in environment variables (currently defaults to hardcoded value in development)
- HTTPS should be enforced in production to protect token transmission
- Token refresh mechanism not implemented (users must re-login after 7 days)

### Session Management

**Approach**: Stateless JWT-based sessions
- No server-side session storage required
- Client stores token (typically in localStorage or sessionStorage)
- Token sent with each API request via Authorization header

## External Dependencies

### Third-Party APIs

1. **OpenWeather API**
   - **Purpose**: Real-time weather data and forecasts for farming locations
   - **Configuration**: API key stored in `OPENWEATHER_API_KEY` environment variable
   - **Integration**: Likely used for weather advisory features
   - **Requirement**: API key must be obtained from OpenWeatherMap

2. **GeoPy/Nominatim**
   - **Purpose**: Geocoding service to convert location names to coordinates
   - **Use Case**: Location-based crop recommendations and weather data
   - **Note**: Uses OpenStreetMap's Nominatim service (free, but rate-limited)

### Python Package Dependencies

- **flask**: Core web framework
- **flask-cors**: Enable CORS for API access from different origins
- **flask-jwt-extended**: JWT authentication implementation
- **werkzeug**: Password hashing utilities (bundled with Flask)
- **geopy**: Geocoding library
- **requests**: HTTP library for external API calls

### Frontend Dependencies (CDN-based)

- **Font Awesome 6.4.0**: Icon library for UI elements
- **Google Fonts**: 
  - Poppins (Latin characters)
  - Noto Sans Devanagari (Hindi/Marathi)
  - Noto Sans Bengali (Bengali)
  - Additional Noto Sans variants for Telugu, Punjabi support

### Environment Variables

Required configuration:
- `SESSION_SECRET`: JWT signing key (defaults to `'farmer-advisory-secret-key-2024'` if not set)
- `OPENWEATHER_API_KEY`: API key for weather service integration

### Data Sources

- **APMC Market Data**: Market price information references real Indian agricultural markets (Kaithal, Karnal, Bathinda, Lasalgaon, Agra)
- **Government Schemes**: Information about Indian government agricultural programs (PM-KISAN, PMFBY, KCC, PM-KUSUM, Soil Health Card)
- **Agricultural Best Practices**: Crop recommendations, fertilizer schedules, and pest management data