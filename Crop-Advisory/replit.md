# Farmer-Friendly Crop Advisory System - Replit Setup

## Overview

This is a web-based agricultural advisory platform designed to empower Indian farmers with data-driven insights for better farming decisions. The system provides multilingual support (English, Hindi, Marathi, Bengali, Telugu, Punjabi) and offers comprehensive features including crop recommendations, weather forecasts, market prices, fertilizer guidance, government scheme information, and a community forum.

**Last Updated**: November 9, 2025

## Recent Changes

### November 9, 2025 - Replit Environment Setup
- Configured Python 3.11 environment with all dependencies
- Set up Flask application to run on port 5000 with webview output
- Consolidated all dependencies into root `pyproject.toml` for easier deployment
- Configured deployment using Gunicorn with autoscale mode
- Added comprehensive .gitignore for Python projects
- Application is now fully functional in Replit environment

## User Preferences

Preferred communication style: Simple, everyday language

## Project Structure

```
AgriFlask/
  AgriFlask/
    data/               # JSON data files for crops, fertilizer, prices, schemes
    static/             # Frontend HTML, CSS, JS files
    app.py             # Main Flask application
    pyproject.toml     # Nested project file (legacy)
pyproject.toml         # Root project dependencies (active)
.replit               # Replit configuration with workflow and deployment
.gitignore            # Python-specific ignore patterns
```

## Technology Stack

### Frontend
- Pure HTML/CSS/JavaScript (no framework dependencies)
- Font Awesome for icons
- Google Fonts for multilingual typography
- Responsive design with CSS Grid and Flexbox

### Backend
- **Flask 3.1.2**: Python web framework
- **Flask-CORS**: Cross-origin resource sharing
- **Flask-JWT-Extended**: JWT authentication
- **Werkzeug**: Password hashing
- **GeoPy**: Geocoding services
- **Gunicorn**: Production WSGI server

## Replit Configuration

### Development Workflow
- **Command**: `cd AgriFlask/AgriFlask && python app.py`
- **Port**: 5000 (automatically mapped)
- **Output**: Webview (user sees the web interface)
- **Server Host**: 0.0.0.0 (required for Replit proxy)

### Deployment Configuration
- **Target**: Autoscale (stateless web application)
- **Command**: `cd AgriFlask/AgriFlask && gunicorn --bind=0.0.0.0:5000 --reuse-port --workers=4 app:app`
- **Workers**: 4 (for handling concurrent requests)
- **Port**: 5000 (exposed externally as port 80)

### Dependencies
All Python dependencies are managed via `pyproject.toml` in the root directory and installed using `uv`:
- flask>=3.1.2
- flask-cors>=6.0.1
- flask-jwt-extended>=4.7.1
- geopy>=2.4.1
- python-dotenv>=1.2.1
- requests>=2.32.5
- werkzeug>=3.1.3
- gunicorn>=23.0.0

## Environment Variables

### Required (Optional - has fallbacks)
- `OPENWEATHER_API_KEY`: API key for OpenWeather service (app uses demo data if not set)

### Optional
- `SESSION_SECRET`: JWT signing key (defaults to 'farmer-advisory-secret-key-2024')

**To add environment variables**: Use the Replit Secrets tool in the left sidebar.

## Data Storage

### Current Implementation
- **User Data**: Stored in-memory (non-persistent)
- **Forum Posts**: Stored in-memory (non-persistent)
- **Agricultural Data**: Static JSON files in `data/` directory

**Important**: User accounts and forum posts will be lost when the server restarts. This is suitable for development and testing, but not for production use.

### For Production Use
To enable persistent data storage:
1. Create a PostgreSQL database using Replit's Database tool
2. Update `app.py` to use database connections instead of in-memory dictionaries
3. Implement database migrations for user and forum tables
4. Connection credentials will be automatically available as environment variables

## Features

1. **Crop Advisory**: Location-based crop recommendations using agro-climatic zones
2. **Weather Updates**: Real-time weather forecasts (via OpenWeather API)
3. **Market Prices**: Latest mandi rates from Indian agricultural markets
4. **Fertilizer Recommendations**: Optimal fertilizer guidance by crop type
5. **Government Schemes**: Information about agricultural subsidies and programs
6. **Community Forum**: Q&A platform for farmers (requires login)

## Authentication

- **Method**: JWT-based stateless authentication
- **Token Expiration**: 7 days
- **Password Security**: Bcrypt hashing via Werkzeug
- **Protected Routes**: Forum posting requires authentication

## Known Limitations

1. **Data Persistence**: User accounts and forum posts are not persisted across restarts
2. **Weather API**: Requires OPENWEATHER_API_KEY for real weather data (uses demo data otherwise)
3. **Scalability**: In-memory storage limits horizontal scaling
4. **Rate Limiting**: No rate limiting implemented on API endpoints

## Development Guidelines

### Running Locally
The development server runs automatically via the configured workflow. Changes to Python files will auto-reload.

### Adding New Features
1. Backend API routes go in `app.py`
2. Frontend updates go in `static/` directory
3. Data files go in `data/` directory with multilingual support
4. Always test with multiple languages (use language selector in header)

### Code Conventions
- Follow existing Flask patterns and routing structure
- Maintain multilingual support for all user-facing text
- Use consistent JSON response formats
- Add appropriate error handling for API routes

## Security Considerations

- HTTPS should be enforced in production (automatic via Replit deployments)
- Change `SESSION_SECRET` in production environment
- Consider adding rate limiting for API endpoints
- Implement CSRF protection for state-changing operations
- Add input validation for all user-submitted data

## Troubleshooting

### App not loading
1. Check workflow status (should show "RUNNING")
2. View logs in the console tab
3. Ensure port 5000 is not blocked

### Weather API not working
1. Verify OPENWEATHER_API_KEY is set in Secrets
2. Check API key is valid at openweathermap.org
3. App will use demo data if key is missing or invalid

### Forum posts disappearing
This is expected behavior with in-memory storage. Set up PostgreSQL database for persistence.
