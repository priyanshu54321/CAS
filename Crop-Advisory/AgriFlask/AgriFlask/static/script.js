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
        logoutBtn: "Logout",
        heroTitleEn: "Empowering Farmers with Knowledge, Not Guesswork.",
        heroTitleHi: "किसानों को दे ज्ञान की शक्ति, अंदाज़े की नहीं।",
        ctaBtn: "Get Started",
        dashboardTitle: "Farmer Dashboard",
        cropAdvisoryTitle: "Crop Advisory",
        cropAdvisoryDesc: "Get personalized crop recommendations based on your location and agro-climatic zone",
        weatherTitle: "Weather Updates",
        weatherDesc: "Real-time weather forecasts for better farming decisions",
        marketTitle: "Market Prices",
        marketDesc: "Latest mandi rates and price trends for your crops",
        fertilizerTitle: "Fertilizer Recommendations",
        fertilizerDesc: "Optimal fertilizer guidance for healthy crop growth",
        schemesTitle: "Government Schemes",
        schemesDesc: "Access information about government benefits and subsidies",
        forumTitle: "Community Forum",
        forumDesc: "Connect with fellow farmers and share experiences",
        learnMore: "Learn More",
        footerText: "© 2024 Farmer-Friendly Crop Advisory System. Empowering Indian Farmers.",
        recommendedCrops: "Recommended Crops",
        foundCrops: "Found",
        suitableCrop: "suitable crop",
        suitableCrops: "suitable crops",
        season: "Season",
        duration: "Duration",
        days: "days",
        yield: "Yield",
        sowing: "Sowing",
        fertilizer: "Fertilizer",
        irrigation: "Irrigation",
        pestAlert: "Pest Alert",
        currentWeather: "Current Weather",
        temperature: "Temperature",
        windSpeed: "Wind Speed",
        condition: "Condition",
        humidity: "Humidity",
        pressure: "Pressure",
        farmingSafety: "Farming Safety Alert",
        safeForFarming: "Safe for farming",
        notSafeForFarming: "Not recommended for farming",
        marketPricesFor: "Market Prices for",
        cropName: "Crop Name",
        location: "Location",
        getPrices: "Get Prices",
        getRecommendation: "Get Recommendation",
        askQuestion: "Ask a Question",
        postQuestion: "Post Question",
        recentDiscussions: "Recent Discussions",
        answers: "answers"
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
        cropAdvisoryTitle: "फसल सलाह",
        weatherTitle: "मौसम अपडेट",
        marketTitle: "बाज़ार मूल्य",
        fertilizerTitle: "उर्वरक सिफारिशें",
        schemesTitle: "सरकारी योजनाएं",
        forumTitle: "समुदाय मंच",
        learnMore: "और जानें",
        footerText: "© 2024 किसान-अनुकूल फसल सलाहकार प्रणाली। भारतीय किसानों को सशक्त बनाना।",
        logoutBtn: "लॉगआउट",
        cropAdvisoryDesc: "अपनी स्थान और कृषि-जलवायु क्षेत्र के आधार पर फसल की सलाह पाएं",
        weatherDesc: "बेहतर खेती निर्णयों के लिए वास्तविक समय मौसम पूर्वानुमान",
        marketDesc: "अपनी फसलों के लिए नवीनतम मंडी दरें और मूल्य रुझान",
        fertilizerDesc: "स्वस्थ फसल वृद्धि के लिए इष्टतम उर्वरक मार्गदर्शन",
        schemesDesc: "सरकारी लाभ और सब्सिडी के बारे में जानकारी प्राप्त करें",
        forumDesc: "साथी किसानों से जुड़ें और अनुभव साझा करें",
        recommendedCrops: "अनुशंसित फसलें",
        foundCrops: "मिला",
        suitableCrop: "उपयुक्त फसल",
        suitableCrops: "उपयुक्त फसलें",
        season: "मौसम",
        duration: "अवधि",
        days: "दिन",
        yield: "उपज",
        sowing: "बुवाई",
        fertilizer: "उर्वरक",
        irrigation: "सिंचाई",
        pestAlert: "कीट चेतावनी",
        currentWeather: "वर्तमान मौसम",
        temperature: "तापमान",
        windSpeed: "हवा की गति",
        condition: "स्थिति",
        humidity: "आर्द्रता",
        pressure: "दबाव",
        farmingSafety: "खेती सुरक्षा चेतावनी",
        safeForFarming: "खेती के लिए सुरक्षित",
        notSafeForFarming: "खेती के लिए अनुशंसित नहीं",
        marketPricesFor: "के लिए बाज़ार मूल्य",
        cropName: "फसल का नाम",
        location: "स्थान",
        getPrices: "कीमत प्राप्त करें",
        getRecommendation: "सिफारिश प्राप्त करें",
        askQuestion: "प्रश्न पूछें",
        postQuestion: "प्रश्न पोस्ट करें",
        recentDiscussions: "हाल की चर्चाएं",
        answers: "उत्तर"
    },
    mr: {
        logoText: "पीक सल्लागार",
        navHome: "मुख्यपृष्ठ",
        navAdvisory: "सल्ला",
        navWeather: "हवामान",
        navMarket: "बाजार",
        navSchemes: "योजना",
        navForum: "मंच",
        loginBtn: "लॉगिन",
        signupBtn: "साइन अप",
        ctaBtn: "सुरू करा",
        dashboardTitle: "शेतकरी डॅशबोर्ड",
        cropAdvisoryTitle: "पीक सल्लागार",
        cropAdvisoryDesc: "तुमच्या स्थानावर आणि कृषी-हवामान क्षेत्रावर आधारित वैयक्तिक पीक शिफारसी मिळवा",
        weatherTitle: "हवामान अपडेट",
        weatherDesc: "चांगल्या शेती निर्णयांसाठी रिअल-टाइम हवामान अंदाज",
        marketTitle: "बाजार किंमती",
        marketDesc: "तुमच्या पिकांसाठी नवीनतम मंडी दर आणि किंमत ट्रेंड",
        fertilizerTitle: "खत शिफारसी",
        fertilizerDesc: "निरोगी पीक वाढीसाठी इष्टतम खत मार्गदर्शन",
        schemesTitle: "सरकारी योजना",
        schemesDesc: "सरकारी लाभ आणि अनुदानाविषयी माहिती मिळवा",
        forumTitle: "समुदाय मंच",
        forumDesc: "सहकारी शेतकऱ्यांशी संपर्क साधा आणि अनुभव शेअर करा",
        learnMore: "अधिक जाणून घ्या",
        footerText: "© 2024 शेतकरी-अनुकूल पीक सल्लागार प्रणाली। भारतीय शेतकऱ्यांना सशक्त बनवणे।",
        logoutBtn: "लॉगआउट"
    },
    bn: {
        logoText: "ফসল পরামর্শদাতা",
        navHome: "হোম",
        navAdvisory: "পরামর্শ",
        navWeather: "আবহাওয়া",
        navMarket: "বাজার",
        navSchemes: "প্রকল্প",
        navForum: "ফোরাম",
        loginBtn: "লগইন",
        signupBtn: "সাইন আপ",
        ctaBtn: "শুরু করুন",
        dashboardTitle: "কৃষক ড্যাশবোর্ড",
        cropAdvisoryTitle: "ফসল পরামর্শ",
        cropAdvisoryDesc: "আপনার অবস্থান এবং কৃষি-জলবায়ু অঞ্চলের উপর ভিত্তি করে ব্যক্তিগতকৃত ফসল সুপারিশ পান",
        weatherTitle: "আবহাওয়া আপডেট",
        weatherDesc: "ভাল চাষের সিদ্ধান্তের জন্য রিয়েল-টাইম আবহাওয়া পূর্বাভাস",
        marketTitle: "বাজার মূল্য",
        marketDesc: "আপনার ফসলের জন্য সর্বশেষ মান্ডি দর এবং মূল্য প্রবণতা",
        fertilizerTitle: "সার সুপারিশ",
        fertilizerDesc: "সুস্থ ফসল বৃদ্ধির জন্য সর্বোত্তম সার নির্দেশিকা",
        schemesTitle: "সরকারি প্রকল্প",
        schemesDesc: "সরকারি সুবিধা এবং ভর্তুকি সম্পর্কে তথ্য অ্যাক্সেস করুন",
        forumTitle: "সম্প্রদায় ফোরাম",
        forumDesc: "সহকর্মী কৃষকদের সাথে সংযুক্ত হন এবং অভিজ্ঞতা ভাগ করুন",
        learnMore: "আরও জানুন",
        footerText: "© 2024 কৃষক-বান্ধব ফসল পরামর্শ ব্যবস্থা। ভারতীয় কৃষকদের ক্ষমতায়ন।",
        logoutBtn: "লগআউট"
    },
    te: {
        logoText: "పంట సలహాదారు",
        navHome: "హోమ్",
        navAdvisory: "సలహా",
        navWeather: "వాతావరణం",
        navMarket: "మార్కెట్",
        navSchemes: "పథకాలు",
        navForum: "ఫోరమ్",
        loginBtn: "లాగిన్",
        signupBtn: "సైన్ అప్",
        ctaBtn: "ప్రారంభించండి",
        dashboardTitle: "రైతు డ్యాష్‌బోర్డ్",
        cropAdvisoryTitle: "పంట సలహా",
        cropAdvisoryDesc: "మీ స్థానం మరియు వ్యవసాయ-వాతావరణ ప్రాంతం ఆధారంగా వ్యక్తిగతీకరించిన పంట సిఫార్సులను పొందండి",
        weatherTitle: "వాతావరణ నవీకరణలు",
        weatherDesc: "మెరుగైన వ్యవసాయ నిర్ణయాల కోసం రియల్-టైమ్ వాతావరణ అంచనాలు",
        marketTitle: "మార్కెట్ ధరలు",
        marketDesc: "మీ పంటల కోసం తాజా మండి రేట్లు మరియు ధర ధోరణులు",
        fertilizerTitle: "ఎరువుల సిఫార్సులు",
        fertilizerDesc: "ఆరోగ్యకరమైన పంట పెరుగుదల కోసం సరైన ఎరువుల మార్గదర్శకత్వం",
        schemesTitle: "ప్రభుత్వ పథకాలు",
        schemesDesc: "ప్రభుత్వ ప్రయోజనాలు మరియు సబ్సిడీల గురించి సమాచారాన్ని యాక్సెస్ చేయండి",
        forumTitle: "కమ్యూనిటీ ఫోరమ్",
        forumDesc: "తోటి రైతులతో కనెక్ట్ అవ్వండి మరియు అనుభవాలను పంచుకోండి",
        learnMore: "మరింత తెలుసుకోండి",
        footerText: "© 2024 రైతు-అనుకూల పంట సలహా వ్యవస్థ। భారతీయ రైతులను శక్తివంతం చేయడం।",
        logoutBtn: "లాగ్అవుట్"
    },
    pa: {
        logoText: "ਫਸਲ ਸਲਾਹਕਾਰ",
        navHome: "ਹੋਮ",
        navAdvisory: "ਸਲਾਹ",
        navWeather: "ਮੌਸਮ",
        navMarket: "ਮਾਰਕੀਟ",
        navSchemes: "ਯੋਜਨਾਵਾਂ",
        navForum: "ਫੋਰਮ",
        loginBtn: "ਲੌਗਇਨ",
        signupBtn: "ਸਾਈਨ ਅੱਪ",
        ctaBtn: "ਸ਼ੁਰੂ ਕਰੋ",
        dashboardTitle: "ਕਿਸਾਨ ਡੈਸ਼ਬੋਰਡ",
        cropAdvisoryTitle: "ਫਸਲ ਸਲਾਹ",
        cropAdvisoryDesc: "ਆਪਣੀ ਸਥਿਤੀ ਅਤੇ ਖੇਤੀ-ਜਲਵਾਯੂ ਖੇਤਰ ਦੇ ਆਧਾਰ ਤੇ ਵਿਅਕਤੀਗਤ ਫਸਲ ਸਿਫ਼ਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
        weatherTitle: "ਮੌਸਮ ਅਪਡੇਟ",
        weatherDesc: "ਬਿਹਤਰ ਖੇਤੀ ਫੈਸਲਿਆਂ ਲਈ ਰੀਅਲ-ਟਾਈਮ ਮੌਸਮ ਪੂਰਵ-ਅਨੁਮਾਨ",
        marketTitle: "ਮਾਰਕੀਟ ਕੀਮਤਾਂ",
        marketDesc: "ਤੁਹਾਡੀਆਂ ਫਸਲਾਂ ਲਈ ਨਵੀਨਤਮ ਮੰਡੀ ਦਰਾਂ ਅਤੇ ਕੀਮਤ ਰੁਝਾਨ",
        fertilizerTitle: "ਖਾਦ ਸਿਫਾਰਿਸ਼ਾਂ",
        fertilizerDesc: "ਸਿਹਤਮੰਦ ਫਸਲ ਵਾਧੇ ਲਈ ਸਰਵੋਤਮ ਖਾਦ ਮਾਰਗਦਰਸ਼ਨ",
        schemesTitle: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ",
        schemesDesc: "ਸਰਕਾਰੀ ਲਾਭਾਂ ਅਤੇ ਸਬਸਿਡੀਆਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰੋ",
        forumTitle: "ਕਮਿਊਨਿਟੀ ਫੋਰਮ",
        forumDesc: "ਸਾਥੀ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ ਅਤੇ ਤਜਰਬੇ ਸਾਂਝੇ ਕਰੋ",
        learnMore: "ਹੋਰ ਜਾਣੋ",
        footerText: "© 2024 ਕਿਸਾਨ-ਅਨੁਕੂਲ ਫਸਲ ਸਲਾਹਕਾਰ ਪ੍ਰਣਾਲੀ। ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਨੂੰ ਸ਼ਕਤੀਕਰਨ।",
        logoutBtn: "ਲਾੱਗਆਉਟ"
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

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
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
    const password = document.getElementById('signupPassword').value;

    if (!username || !password) {
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
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            isLoggedIn = true;
            authToken = data.access_token;
            currentUser = data.user;
            closeModal('signupModal');
            updateAuthUI();
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
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            isLoggedIn = true;
            authToken = data.access_token;
            currentUser = data.user;
            closeModal('loginModal');
            updateAuthUI();
            alert(`✅ Login successful! Welcome ${currentUser.username}!`);
        } else {
            alert(`❌ Login failed: ${data.error || 'Invalid credentials'}`);
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('❌ Login failed. Please try again.');
    }
}

// Logout Handler
function handleLogout() {
    isLoggedIn = false;
    authToken = null;
    currentUser = null;
    updateAuthUI();
    alert('✅ You have been logged out successfully');
}

// Update Auth UI
function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (isLoggedIn && currentUser) {
        loginBtn.textContent = `Welcome, ${currentUser.username}!`;
        loginBtn.style.display = 'inline-block';
        loginBtn.style.pointerEvents = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    } else {
        loginBtn.textContent = translations[currentLanguage].loginBtn || 'Login';
        loginBtn.style.display = 'inline-block';
        loginBtn.style.pointerEvents = 'auto';
        signupBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
    }
}

// Crop Advisory Functions
async function openCropAdvisory() {
    openModal('cropAdvisoryModal');
}

async function getCropAdvisory() {
    const resultsDiv = document.getElementById('cropResults');
    const seasonFilter = document.getElementById('seasonSelect').value;
    const categoryFilter = document.getElementById('categorySelect').value;
    
    resultsDiv.innerHTML = '<p>Loading crop advisory...</p>';

    // Use Geolocation API to get the user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            
            try {
                // First, get the location name from coordinates
                let locationName = `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`;
                try {
                    const locationResponse = await fetch(`${API_BASE_URL}/location/reverse-geocode?lat=${latitude}&lon=${longitude}`);
                    if (locationResponse.ok) {
                        const locationData = await locationResponse.json();
                        locationName = locationData.location_name || locationName;
                    }
                } catch (locError) {
                    console.error('Error fetching location name:', locError);
                }

                // Get all crops from the API
                const response = await fetch(`${API_BASE_URL}/crops/advisory?lang=${currentLanguage}`);
                const allCrops = await response.json();
                
                // Also get English data for filtering purposes (since non-English data lacks season_code and category)
                const enResponse = await fetch(`${API_BASE_URL}/crops/advisory?lang=en`);
                const enCrops = await enResponse.json();

                if (allCrops && allCrops.length > 0) {
                    // Filter crops by season and category using English data
                    let filteredIndices = [];
                    
                    enCrops.forEach((enCrop, index) => {
                        let matches = true;
                        
                        if (seasonFilter !== 'all' && enCrop.crop.season_code !== seasonFilter) {
                            matches = false;
                        }
                        
                        if (categoryFilter !== 'all' && !enCrop.crop.category.toLowerCase().includes(categoryFilter)) {
                            matches = false;
                        }
                        
                        if (matches && index < allCrops.length) {
                            filteredIndices.push(index);
                        }
                    });
                    
                    // Get the filtered crops in the current language
                    let filteredCrops = filteredIndices.map(i => allCrops[i]);

                    if (filteredCrops.length === 0) {
                        resultsDiv.innerHTML = `
                            <div class="result-card">
                                <h4>No Crops Found</h4>
                                <p>No crops match your selected filters. Try selecting different season or category options.</p>
                            </div>
                        `;
                        return;
                    }

                    // Deduplicate crops - keep only one variety per crop type
                    const uniqueCropsMap = new Map();
                    filteredCrops.forEach(crop => {
                        const baseCropName = crop.crop.name.split('(')[0].trim();
                        if (!uniqueCropsMap.has(baseCropName)) {
                            uniqueCropsMap.set(baseCropName, crop);
                        }
                    });
                    
                    const uniqueCrops = Array.from(uniqueCropsMap.values());
                    
                    // Shuffle crops based on location to create a pseudo-random but consistent selection
                    const locationSeed = Math.floor(latitude * 1000 + longitude * 1000);
                    
                    // Fisher-Yates shuffle with seeded random
                    const shuffledCrops = [...uniqueCrops];
                    let seed = locationSeed;
                    const seededRandom = () => {
                        seed = (seed * 9301 + 49297) % 233280;
                        return seed / 233280;
                    };
                    
                    for (let i = shuffledCrops.length - 1; i > 0; i--) {
                        const j = Math.floor(seededRandom() * (i + 1));
                        [shuffledCrops[i], shuffledCrops[j]] = [shuffledCrops[j], shuffledCrops[i]];
                    }
                    
                    // Select unique crops (all if filtered list is small, otherwise all)
                    const selectedCrops = shuffledCrops;

                    const seasonText = seasonFilter !== 'all' ? ` for ${seasonFilter.charAt(0).toUpperCase() + seasonFilter.slice(1)} Season` : '';
                    const categoryText = categoryFilter !== 'all' ? ` (${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)})` : '';

                    resultsDiv.innerHTML = `
                        <h3>Recommended Crops${seasonText}${categoryText}</h3>
                        <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">📍 ${locationName}</p>
                        <p style="color: #2c5f2d; font-size: 0.9rem; margin-bottom: 1.5rem; background: #f0f8f0; padding: 0.75rem; border-radius: 8px;">
                            <strong>Found ${selectedCrops.length} suitable crop${selectedCrops.length > 1 ? 's' : ''}</strong>
                        </p>
                        ${selectedCrops.map((crop, index) => {
                            return `
                            <div class="result-card">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                                    <h4 style="margin: 0;">${index + 1}. ${crop.crop.name}</h4>
                                    <span style="background: #2c5f2d; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem;">
                                        ${crop.crop.category}
                                    </span>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin: 1rem 0;">
                                    <div>
                                        <p style="margin: 0.25rem 0;"><strong>🌾 Season:</strong> ${crop.crop.season}</p>
                                        <p style="margin: 0.25rem 0;"><strong>⏱️ Duration:</strong> ${crop.crop.duration_days} days</p>
                                    </div>
                                    <div>
                                        ${crop.crop.yield_potential ? `<p style="margin: 0.25rem 0;"><strong>📈 Yield:</strong> ${crop.crop.yield_potential}</p>` : ''}
                                        ${crop.sowing_period ? `<p style="margin: 0.25rem 0;"><strong>🌱 Sowing:</strong> ${crop.sowing_period}</p>` : ''}
                                    </div>
                                </div>
                                ${crop.fertilizer_recommendation ? `
                                    <div style="background: #f9f9f9; padding: 0.75rem; border-radius: 6px; margin: 0.5rem 0;">
                                        <p style="margin: 0;"><strong>💧 Fertilizer:</strong> ${crop.fertilizer_recommendation}</p>
                                    </div>
                                ` : ''}
                                ${crop.irrigation_requirement ? `<p style="margin: 0.5rem 0;"><strong>💧 Irrigation:</strong> ${crop.irrigation_requirement}</p>` : ''}
                                ${crop.pest_alerts ? `
                                    <div style="background: #fff3cd; padding: 0.75rem; border-radius: 6px; border-left: 4px solid #ffc107; margin: 0.5rem 0;">
                                        <p style="margin: 0;"><strong>⚠️ Pest Alert:</strong> ${crop.pest_alerts}</p>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                        }).join('')}
                    `;
                } else {
                    resultsDiv.innerHTML = '<p>No crop recommendations available at the moment.</p>';
                }
            } catch (error) {
                console.error('Error fetching crop advisory:', error);
                resultsDiv.innerHTML = '<p>Error fetching crop advisory. Please try again.</p>';
            }
        }, (error) => {
            console.error('Geolocation error:', error);
            resultsDiv.innerHTML = `
                <div class="result-card">
                    <h4>⚠️ Location Access Denied</h4>
                    <p>Unable to retrieve your location. This could be because:</p>
                    <ul style="text-align: left; margin: 0.5rem 0;">
                        <li>You denied location permission</li>
                        <li>Location services are disabled on your device</li>
                        <li>Your browser doesn't support geolocation</li>
                    </ul>
                    <p style="margin-top: 1rem;">Please enable location access and try again, or contact support for manual recommendations.</p>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = `
            <div class="result-card">
                <h4>❌ Geolocation Not Supported</h4>
                <p>Your browser doesn't support geolocation. Please use a modern browser or contact support for manual crop recommendations.</p>
            </div>
        `;
    }
}

// Weather Updates Functions
async function openWeatherUpdates() {
    openModal('weatherModal');
}

async function getWeatherUpdates() {
    const resultsDiv = document.getElementById('weatherResults');
    
    resultsDiv.innerHTML = '<p>Detecting your location...</p>';

    // Use Geolocation API to get the user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            
            resultsDiv.innerHTML = '<p>Loading weather data...</p>';
            
            try {
                // First, get the location name from coordinates for display
                let locationName = `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`;
                try {
                    const locationResponse = await fetch(`${API_BASE_URL}/location/reverse-geocode?lat=${latitude}&lon=${longitude}`);
                    if (locationResponse.ok) {
                        const locationData = await locationResponse.json();
                        locationName = locationData.location_name || locationName;
                    }
                } catch (locError) {
                    console.error('Error fetching location name:', locError);
                }

                // Get weather data using EXACT GPS coordinates for hyperlocal accuracy
                const response = await fetch(`${API_BASE_URL}/weather/current?lat=${latitude}&lon=${longitude}&lang=${currentLanguage}`);
                const data = await response.json();

                if (response.ok && data.current) {
                    const farmingSafety = data.current.is_safe_for_farming 
                        ? '✅ Safe for farming' 
                        : '⚠️ Not recommended for farming';
                    
                    const dataSource = data.current.data_source || 'Unknown';
                    const timestamp = data.current.timestamp ? new Date(data.current.timestamp).toLocaleString() : '';
                    const isDemo = dataSource === 'Demo Data';

                    resultsDiv.innerHTML = `
                        <h3>Current Weather</h3>
                        <p style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">📍 ${locationName}</p>
                        ${isDemo ? `
                        <p style="color: #d32f2f; font-size: 0.85rem; margin-bottom: 1rem; background: #ffebee; padding: 0.5rem; border-radius: 6px; border-left: 4px solid #d32f2f;">
                            <strong>⚠️ Warning:</strong> Showing demo data. To get real weather data, set the OPENWEATHER_API_KEY environment variable.
                        </p>
                        ` : `
                        <p style="color: #1976d2; font-size: 0.8rem; margin-bottom: 1rem; background: #e3f2fd; padding: 0.5rem; border-radius: 6px;">
                            <strong>🌐 Data Source:</strong> ${dataSource} ${timestamp ? `| Updated: ${timestamp}` : ''}
                        </p>
                        `}
                        <div class="weather-info">
                            <div class="weather-item">
                                <i class="fas fa-thermometer-half"></i>
                                <h4>Temperature</h4>
                                <p>${data.current.temperature}°C</p>
                                ${data.current.feels_like ? `<small style="color: #666;">Feels like ${data.current.feels_like}°C</small>` : ''}
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
                            ${data.current.humidity ? `
                            <div class="weather-item">
                                <i class="fas fa-tint"></i>
                                <h4>Humidity</h4>
                                <p>${data.current.humidity}%</p>
                            </div>
                            ` : ''}
                            ${data.current.pressure ? `
                            <div class="weather-item">
                                <i class="fas fa-tachometer-alt"></i>
                                <h4>Pressure</h4>
                                <p>${data.current.pressure} hPa</p>
                            </div>
                            ` : ''}
                        </div>
                        <div class="result-card" style="margin-top: 1rem;">
                            <h4>Farming Safety Alert</h4>
                            <p style="font-size: 1.2rem;">${farmingSafety}</p>
                        </div>
                    `;
                } else {
                    resultsDiv.innerHTML = `<p>Could not fetch weather data for your location. ${data.error || 'Please try again.'}</p>`;
                }
            } catch (error) {
                console.error('Error fetching weather:', error);
                resultsDiv.innerHTML = '<p>Error loading weather data. Please try again.</p>';
            }
        }, (error) => {
            console.error('Geolocation error:', error);
            resultsDiv.innerHTML = `
                <div class="result-card">
                    <h4>⚠️ Location Access Denied</h4>
                    <p>Unable to retrieve your location. This could be because:</p>
                    <ul style="text-align: left; margin: 0.5rem 0;">
                        <li>You denied location permission</li>
                        <li>Location services are disabled on your device</li>
                        <li>Your browser doesn't support geolocation</li>
                    </ul>
                    <p style="margin-top: 1rem;">Please enable location access and try again.</p>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = `
            <div class="result-card">
                <h4>❌ Geolocation Not Supported</h4>
                <p>Your browser doesn't support geolocation. Please use a modern browser to access weather updates.</p>
            </div>
        `;
    }
}

// Market Prices Functions
let detectedMarketLocation = null;

async function openMarketPrices() {
    openModal('marketModal');
    detectMarketLocation();
}

async function detectMarketLocation() {
    const resultsDiv = document.getElementById('marketResults');
    const locationInput = document.getElementById('marketLocation');
    
    resultsDiv.innerHTML = '<p>Detecting your location...</p>';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            
            try {
                const locationResponse = await fetch(`${API_BASE_URL}/location/reverse-geocode?lat=${latitude}&lon=${longitude}`);
                if (locationResponse.ok) {
                    const locationData = await locationResponse.json();
                    const state = locationData.state || '';
                    const city = locationData.city || '';
                    
                    detectedMarketLocation = state;
                    locationInput.value = state;
                    
                    resultsDiv.innerHTML = `
                        <div class="result-card">
                            <h4>📍 Location Detected</h4>
                            <p><strong>Location:</strong> ${city ? city + ', ' : ''}${state}</p>
                            <p style="margin-top: 1rem; color: #666;">Enter the crop name above and click "Get Prices" to see market rates for your area.</p>
                        </div>
                    `;
                } else {
                    resultsDiv.innerHTML = `
                        <div class="result-card">
                            <h4>⚠️ Location Detected</h4>
                            <p>Could not determine location name. Please enter your state manually.</p>
                        </div>
                    `;
                }
            } catch (error) {
                console.error('Error fetching location name:', error);
                resultsDiv.innerHTML = `
                    <div class="result-card">
                        <h4>⚠️ Location Error</h4>
                        <p>Could not fetch location details. Please enter your location manually.</p>
                    </div>
                `;
            }
        }, (error) => {
            console.error('Geolocation error:', error);
            resultsDiv.innerHTML = `
                <div class="result-card">
                    <h4>⚠️ Location Access Denied</h4>
                    <p>Unable to retrieve your location. Please enter your location manually in the field above.</p>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = `
            <div class="result-card">
                <h4>❌ Geolocation Not Supported</h4>
                <p>Your browser doesn't support geolocation. Please enter your location manually.</p>
            </div>
        `;
    }
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
        // Fetch from fertilizer endpoint with language support
        const response = await fetch(`${API_BASE_URL}/fertilizer/recommendation?crop=${encodeURIComponent(crop)}&lang=${currentLanguage}`);
        
        if (response.ok) {
            const data = await response.json();
            
            if (data.crop) {
                let scheduleHtml = '';
                if (data.fertilizer_schedule) {
                    scheduleHtml = '<div style="background: #f9f9f9; padding: 1rem; border-radius: 6px; margin: 1rem 0;">';
                    scheduleHtml += '<h5 style="margin-top: 0;">Fertilizer Schedule:</h5>';
                    scheduleHtml += '<ul style="list-style: none; padding-left: 0;">';
                    for (const [stage, instruction] of Object.entries(data.fertilizer_schedule)) {
                        scheduleHtml += `<li style="margin: 0.5rem 0;"><strong>${stage.replace(/_/g, ' ').toUpperCase()}:</strong> ${instruction}</li>`;
                    }
                    scheduleHtml += '</ul></div>';
                }
                
                resultsDiv.innerHTML = `
                    <div class="result-card">
                        <h4>Fertilizer Recommendation for ${data.crop}</h4>
                        ${scheduleHtml}
                        ${data.organic_alternative ? `
                            <div style="background: #e8f5e9; padding: 0.75rem; border-radius: 6px; margin: 0.5rem 0; border-left: 4px solid #4caf50;">
                                <p style="margin: 0;"><strong>🌱 Organic Alternative:</strong> ${data.organic_alternative}</p>
                            </div>
                        ` : ''}
                        ${data.dosage_reduction ? `
                            <div style="background: #fff3e0; padding: 0.75rem; border-radius: 6px; margin: 0.5rem 0; border-left: 4px solid #ff9800;">
                                <p style="margin: 0;"><strong>ℹ️ Note:</strong> ${data.dosage_reduction}</p>
                            </div>
                        ` : ''}
                    </div>
                `;
            } else {
                resultsDiv.innerHTML = `<p>No specific fertilizer recommendation found for "${crop}". Please consult with local agricultural experts.</p>`;
            }
        } else {
            // Fallback to crop advisory if fertilizer endpoint doesn't find a match
            const cropResponse = await fetch(`${API_BASE_URL}/crops/advisory?lang=${currentLanguage}`);
            const cropRecommendations = await cropResponse.json();

            const matching = cropRecommendations.find(r => 
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
                resultsDiv.innerHTML = `
                    <div class="result-card">
                        <h4>No Fertilizer Data Found</h4>
                        <p>No specific fertilizer recommendation found for "${crop}".</p>
                        <p style="margin-top: 1rem; font-style: italic;">Try searching for: Wheat (गेहूं), Rice (धान), Cotton (कपास), Potato (आलू), or Tomato (टमाटर)</p>
                    </div>
                `;
            }
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
