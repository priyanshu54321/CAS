// API Base URL
const API_BASE_URL = '/api';

// Language Translations
const translations = {
    en: {
        logoText: "Crop Advisory",
        navHome: "Home",
        navAdvisory: "Advisory",
        navWeather: "Weather",
        navMarket: "Market",
        navSchemes: "Schemes",
        navForum: "Forum",
        loginBtn: "Login",
        signupBtn: "Sign Up",
        heroTitleEn: "Empowering Farmers with Knowledge, Not Guesswork.",
        heroTitleHi: "किसानों को दे ज्ञान की शक्ति, अंदाज़े की नहीं।",
        ctaBtn: "Get Started",
        dashboardTitle: "Farmer Dashboard",
        cropAdvisoryTitle: "Crop & Soil Advisory",
        cropAdvisoryDescEn: "Get personalized crop recommendations based on your soil type",
        cropAdvisoryDescHi: "अपनी मिट्टी के प्रकार के आधार पर फसल की सलाह पाएं",
        weatherTitle: "Weather Updates",
        weatherDescEn: "Real-time weather forecasts for better farming decisions",
        weatherDescHi: "बेहतर खेती के लिए मौसम का पूर्वानुमान",
        marketTitle: "Market Prices",
        marketDescEn: "Latest mandi rates and price trends for your crops",
        marketDescHi: "अपनी फसलों के लिए ताज़ा मंडी भाव",
        fertilizerTitle: "Fertilizer Recommendations",
        fertilizerDescEn: "Optimal fertilizer guidance for healthy crop growth",
        fertilizerDescHi: "स्वस्थ फसल के लिए उर्वरक की सही सलाह",
        schemesTitle: "Government Schemes",
        schemesDescEn: "Access information about government benefits and subsidies",
        schemesDescHi: "सरकारी योजनाओं और सब्सिडी की जानकारी",
        forumTitle: "Community Forum",
        forumDescEn: "Connect with fellow farmers and share experiences",
        forumDescHi: "अन्य किसानों से जुड़ें और अनुभव साझा करें",
        learnMore: "Learn More",
        footerText: "© 2024 Farmer-Friendly Crop Advisory System. Empowering Indian Farmers."
    },
    hi: {
        logoText: "फसल सलाहकार",
        navHome: "होम",
        navAdvisory: "सलाह",
        navWeather: "मौसम",
        navMarket: "बाज़ार",
        navSchemes: "योजनाएं",
        navForum: "मंच",
        loginBtn: "लॉगिन",
        signupBtn: "साइन अप",
        heroTitleEn: "Empowering Farmers with Knowledge, Not Guesswork.",
        heroTitleHi: "किसानों को दे ज्ञान की शक्ति, अंदाज़े की नहीं।",
        ctaBtn: "शुरू करें",
        dashboardTitle: "किसान डैशबोर्ड",
        cropAdvisoryTitle: "फसल और मिट्टी सलाह",
        cropAdvisoryDescEn: "अपनी मिट्टी के प्रकार के आधार पर फसल की सलाह पाएं",
        cropAdvisoryDescHi: "स्वस्थ फसल के लिए विशेष सुझाव",
        weatherTitle: "मौसम अपडेट",
        weatherDescEn: "बेहतर खेती के लिए मौसम का पूर्वानुमान",
        weatherDescHi: "सटीक मौसम की जानकारी",
        marketTitle: "बाज़ार मूल्य",
        marketDescEn: "अपनी फसलों के लिए ताज़ा मंडी भाव",
        marketDescHi: "फसल की कीमतों की जानकारी",
        fertilizerTitle: "उर्वरक सिफारिशें",
        fertilizerDescEn: "स्वस्थ फसल के लिए उर्वरक की सही सलाह",
        fertilizerDescHi: "सही खाद का चुनाव",
        schemesTitle: "सरकारी योजनाएं",
        schemesDescEn: "सरकारी योजनाओं और सब्सिडी की जानकारी",
        schemesDescHi: "लाभ और सहायता की जानकारी",
        forumTitle: "समुदाय मंच",
        forumDescEn: "अन्य किसानों से जुड़ें और अनुभव साझा करें",
        forumDescHi: "किसान भाइयों से बात करें",
        learnMore: "और जानें",
        footerText: "© 2024 किसान-अनुकूल फसल सलाहकार प्रणाली। भारतीय किसानों को सशक्त बनाना।"
    }
};

// Current language and auth state
let currentLanguage = 'en';
let isLoggedIn = false;
let authToken = null;
let currentUser = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('languageSelector');
    languageSelector.addEventListener('change', function() {
        changeLanguage(this.value);
    });
/*
    const micBtn = document.getElementById('micBtn');
    if (micBtn) {
        micBtn.addEventListener('click', toggleSpeechRecognition);
    }*/

    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', showLoginMessage);
    }

    const signupBtn = document.querySelector('.signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', showSignupMessage);
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    changeLanguage('en');
    loadGovernmentSchemes();
    loadForumDiscussions();
});

// Change Language Function
function changeLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Speech Recognition Toggle
function toggleSpeechRecognition() {
    alert('🎤 Voice input is coming soon!\n\nThis feature will allow you to use voice commands to search for information and navigate the app.');
}

// Show signup message
function showSignupMessage() {
    openModal('signupModal');
}

// Show login message
function showLoginMessage() {
    openModal('loginModal');
}

// Handle Signup
async function handleSignup(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const phoneNumber = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;

    if (!username || !phoneNumber || !password) {
        alert('Please fill in all fields');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                phone_number: phoneNumber,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            isLoggedIn = true;
            authToken = data.access_token;
            currentUser = data.user;
            closeModal('signupModal');
            document.getElementById('loginBtn').textContent = `Welcome, ${currentUser.username}!`;
            alert(`✅ Registration successful! Welcome ${currentUser.username}!`);
            document.getElementById('signupForm').reset();
        } else {
            alert(`❌ Registration failed: ${data.error || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Signup error:', error);
        alert('❌ Registration failed. Please try again.');
    }
}

// Scroll to Dashboard
function scrollToDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.scrollIntoView({ behavior: 'smooth' });
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Login Handler
async function handleLogin(e) {
    e.preventDefault();
    const phoneNumber = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!phoneNumber || !password) {
        alert('Please enter both phone number and password');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone_number: phoneNumber,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            isLoggedIn = true;
            authToken = data.access_token;
            currentUser = data.user;
            closeModal('loginModal');
            document.getElementById('loginBtn').textContent = `Welcome, ${currentUser.username}!`;
            alert(`✅ Login successful! Welcome ${currentUser.username}!`);
        } else {
            alert(`❌ Login failed: ${data.error || 'Invalid credentials'}\n\nNote: You need to register first. Use phone number in format: 9876543210`);
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('❌ Login failed. Please try again.\n\nDemo: For testing, try registering a new account first.');
    }
}

// Crop Advisory Functions
async function openCropAdvisory() {
    openModal('cropAdvisoryModal');
}

async function getCropAdvisory() {
    const location = document.getElementById('cropLocation').value.trim();
    const resultsDiv = document.getElementById('cropResults');

    if (!location) {
        alert('Please enter a location');
        return;
    }

    resultsDiv.innerHTML = '<p>Loading crop advisory...</p>';

    try {
        // Get crop recommendations
        const response = await fetch(`${API_BASE_URL}/crops/advisory?lang=${currentLanguage}`);
        const allCrops = await response.json();

        if (allCrops && allCrops.length > 0) {
            // Randomly select crops based on location to simulate location-specific recommendations
            const locationHash = location.split('').reduce((a, b) => {
                a = ((a << 5) - a) + b.charCodeAt(0);
                return a & a;
            }, 0);
            
            const startIndex = Math.abs(locationHash) % allCrops.length;
            const numCrops = Math.min(5, allCrops.length);
            const selectedCrops = [];
            
            for (let i = 0; i < numCrops; i++) {
                selectedCrops.push(allCrops[(startIndex + i) % allCrops.length]);
            }

            resultsDiv.innerHTML = `
                <h3>Recommended Crops for ${location}</h3>
                ${selectedCrops.map(crop => `
                    <div class="result-card">
                        <h4>${crop.crop.name} ${crop.crop.name_hindi ? '(' + crop.crop.name_hindi + ')' : ''}</h4>
                        <p><strong>Category:</strong> ${crop.crop.category}</p>
                        <p><strong>Season:</strong> ${crop.crop.season}</p>
                        <p><strong>Duration:</strong> ${crop.crop.duration_days} days</p>
                        ${crop.fertilizer_recommendation ? `<p><strong>Fertilizer:</strong> ${crop.fertilizer_recommendation}</p>` : ''}
                        ${crop.irrigation_requirement ? `<p><strong>Irrigation:</strong> ${crop.irrigation_requirement}</p>` : ''}
                        ${crop.pest_alerts ? `<p><strong>Pest Alert:</strong> ${crop.pest_alerts}</p>` : ''}
                    </div>
                `).join('')}
            `;
        } else {
            resultsDiv.innerHTML = '<p>No crop recommendations available at the moment.</p>';
        }
    } catch (error) {
        console.error('Error fetching crop advisory:', error);
        resultsDiv.innerHTML = '<p>Error loading crop advisory. Please try again.</p>';
    }
}

// Weather Updates Functions
async function openWeatherUpdates() {
    openModal('weatherModal');
}

async function getWeatherUpdates() {
    const location = document.getElementById('weatherLocation').value.trim();
    const resultsDiv = document.getElementById('weatherResults');

    if (!location) {
        alert('Please enter a location');
        return;
    }

    resultsDiv.innerHTML = '<p>Loading weather data...</p>';

    try {
        const response = await fetch(`${API_BASE_URL}/weather/current?location=${encodeURIComponent(location)}`);
        const data = await response.json();

        if (response.ok && data.current) {
            const farmingSafety = data.current.is_safe_for_farming 
                ? '✅ Safe for farming' 
                : '⚠️ Not recommended for farming';

            resultsDiv.innerHTML = `
                <h3>Current Weather for ${data.location}</h3>
                <div class="weather-info">
                    <div class="weather-item">
                        <i class="fas fa-thermometer-half"></i>
                        <h4>Temperature</h4>
                        <p>${data.current.temperature}°C</p>
                    </div>
                    <div class="weather-item">
                        <i class="fas fa-wind"></i>
                        <h4>Wind Speed</h4>
                        <p>${data.current.windspeed} km/h</p>
                    </div>
                    <div class="weather-item">
                        <i class="fas fa-cloud-sun"></i>
                        <h4>Condition</h4>
                        <p>${data.current.weather_condition}</p>
                    </div>
                </div>
                <div class="result-card" style="margin-top: 1rem;">
                    <h4>Farming Safety Alert</h4>
                    <p style="font-size: 1.2rem;">${farmingSafety}</p>
                </div>
            `;
        } else {
            resultsDiv.innerHTML = `<p>Could not fetch weather data for "${location}". Please try another location.</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        resultsDiv.innerHTML = '<p>Error loading weather data. Please try again.</p>';
    }
}

// Market Prices Functions
async function openMarketPrices() {
    openModal('marketModal');
}

async function getMarketPrices() {
    const crop = document.getElementById('marketCrop').value.trim();
    const location = document.getElementById('marketLocation').value.trim();
    const resultsDiv = document.getElementById('marketResults');

    if (!crop) {
        alert('Please enter a crop name');
        return;
    }

    resultsDiv.innerHTML = '<p>Loading market prices...</p>';

    try {
        const params = new URLSearchParams({
            crop: crop,
            limit: 20
        });
        
        if (location) {
            params.append('state', location);
        }

        const response = await fetch(`${API_BASE_URL}/market/prices?${params}`);
        const prices = await response.json();

        if (prices && prices.length > 0) {
            resultsDiv.innerHTML = `
                <h3>Market Prices for ${crop}${location ? ` in ${location}` : ''}</h3>
                <table class="price-table">
                    <thead>
                        <tr>
                            <th>Market</th>
                            <th>Location</th>
                            <th>Min Price</th>
                            <th>Max Price</th>
                            <th>Modal Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${prices.map(price => `
                            <tr>
                                <td>${price.market_name}</td>
                                <td>${price.district || ''}, ${price.state || ''}</td>
                                <td>₹${price.min_price || '-'}</td>
                                <td>₹${price.max_price || '-'}</td>
                                <td>₹${price.modal_price || '-'}</td>
                                <td>${price.price_date ? new Date(price.price_date).toLocaleDateString() : '-'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        } else {
            resultsDiv.innerHTML = `
                <div class="result-card">
                    <h4>No Market Data Available</h4>
                    <p>No market price records found for "${crop}"${location ? ` in ${location}` : ''}.</p>
                    <p style="margin-top: 1rem;">This could be because:</p>
                    <ul style="text-align: left; margin: 0.5rem 0;">
                        <li>The crop name might be spelled differently in the database</li>
                        <li>No recent price data is available for this location</li>
                        <li>The database needs to be populated with market data</li>
                    </ul>
                    <p style="margin-top: 1rem; font-style: italic;">Try searching for: Wheat, Rice, Cotton, or Onion</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error fetching market prices:', error);
        resultsDiv.innerHTML = `
            <div class="result-card">
                <h4>Error Loading Market Prices</h4>
                <p>Could not fetch market data. Please try again later.</p>
                <p style="margin-top: 0.5rem; color: #666;">Error: ${error.message}</p>
            </div>
        `;
    }
}

// Fertilizer Recommendation Functions
async function openFertilizerRecommendation() {
    openModal('fertilizerModal');
}

async function getFertilizerRecommendation() {
    const crop = document.getElementById('fertilizerCrop').value.trim();
    const resultsDiv = document.getElementById('fertilizerResults');

    if (!crop) {
        alert('Please enter a crop name');
        return;
    }

    resultsDiv.innerHTML = '<p>Loading fertilizer recommendations...</p>';

    try {
        const response = await fetch(`${API_BASE_URL}/crops/advisory?lang=${currentLanguage}`);
        const recommendations = await response.json();

        const matching = recommendations.find(r => 
            r.crop.name.toLowerCase().includes(crop.toLowerCase())
        );

        if (matching && matching.fertilizer_recommendation) {
            resultsDiv.innerHTML = `
                <div class="result-card">
                    <h4>Fertilizer Recommendation for ${matching.crop.name}</h4>
                    <p>${matching.fertilizer_recommendation}</p>
                    ${matching.irrigation_requirement ? `
                        <p><strong>Irrigation:</strong> ${matching.irrigation_requirement}</p>
                    ` : ''}
                    ${matching.pest_alerts ? `
                        <p><strong>Pest Alerts:</strong> ${matching.pest_alerts}</p>
                    ` : ''}
                </div>
            `;
        } else {
            resultsDiv.innerHTML = `<p>No specific fertilizer recommendation found for "${crop}". Please consult with local agricultural experts.</p>`;
        }
    } catch (error) {
        console.error('Error fetching fertilizer recommendation:', error);
        resultsDiv.innerHTML = '<p>Error loading fertilizer recommendations. Please try again.</p>';
    }
}

// Government Schemes Functions
async function openGovernmentSchemes() {
    openModal('schemesModal');
    loadGovernmentSchemes();
}

async function loadGovernmentSchemes() {
    const schemesDiv = document.getElementById('schemesContent');
    schemesDiv.innerHTML = '<p>Loading government schemes...</p>';

    try {
        const response = await fetch(`${API_BASE_URL}/government/schemes?lang=${currentLanguage}`);
        const schemes = await response.json();

        if (schemes && schemes.length > 0) {
            schemesDiv.innerHTML = schemes.map(scheme => `
                <div class="scheme-card">
                    <h3>${currentLanguage === 'hi' && scheme.title_hindi ? scheme.title_hindi : scheme.title}</h3>
                    <p>${currentLanguage === 'hi' && scheme.description_hindi ? scheme.description_hindi : scheme.description}</p>
                    ${scheme.eligibility ? `<p><strong>Eligibility:</strong> ${scheme.eligibility}</p>` : ''}
                    ${scheme.benefits ? `<p class="scheme-benefit"><strong>Benefits:</strong> ${scheme.benefits}</p>` : ''}
                    ${scheme.application_process ? `<p><strong>How to Apply:</strong> ${scheme.application_process}</p>` : ''}
                    ${scheme.website_url ? `<p><a href="${scheme.website_url}" target="_blank" style="color: var(--deep-green);">Visit Official Website →</a></p>` : ''}
                </div>
            `).join('');
        } else {
            schemesDiv.innerHTML = '<p>No government schemes available at the moment.</p>';
        }
    } catch (error) {
        console.error('Error loading schemes:', error);
        schemesDiv.innerHTML = '<p>Error loading government schemes. Please try again.</p>';
    }
}

// Community Forum Functions
async function openCommunityForum() {
    if (!isLoggedIn) {
        alert('🔐 Please login first to access the Community Forum');
        openModal('loginModal');
        return;
    }
    openModal('forumModal');
    loadForumDiscussions();
}

async function postQuestion() {
    if (!isLoggedIn) {
        alert('🔐 Please login first to post questions');
        return;
    }

    const questionText = document.getElementById('forumQuestion').value.trim();
    if (!questionText) {
        alert('Please type your question');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/forum/questions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                title: questionText.substring(0, 100),
                content: questionText,
                language: currentLanguage,
                category: 'General'
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert('✅ Your question has been posted successfully!');
            document.getElementById('forumQuestion').value = '';
            loadForumDiscussions();
        } else {
            alert(`❌ Failed to post question: ${data.error || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error posting question:', error);
        alert('❌ Failed to post question. Please try again.');
    }
}

async function loadForumDiscussions() {
    const discussionsDiv = document.getElementById('forumDiscussions');
    discussionsDiv.innerHTML = '<p>Loading discussions...</p>';

    try {
        const response = await fetch(`${API_BASE_URL}/forum/questions?per_page=10&lang=${currentLanguage}`);
        const data = await response.json();

        if (data && data.questions && data.questions.length > 0) {
            discussionsDiv.innerHTML = data.questions.map(q => `
                <div class="forum-post">
                    <div class="post-author">${q.author ? q.author.username : 'Anonymous'}</div>
                    <div class="post-question">${q.title}</div>
                    <p style="margin: 0.5rem 0; color: #666;">${q.content}</p>
                    <div class="post-time">${new Date(q.created_at).toLocaleDateString()} - ${q.answer_count} answers</div>
                </div>
            `).join('');
        } else {
            discussionsDiv.innerHTML = '<p>No discussions yet. Be the first to ask a question!</p>';
        }
    } catch (error) {
        console.error('Error loading forum discussions:', error);
        discussionsDiv.innerHTML = '<p>Error loading discussions. Please try again.</p>';
    }
}
