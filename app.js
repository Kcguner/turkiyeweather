const provinces = [
    { id: 1, name: "Adana", lat: 37.0000, lon: 35.3213, region: "akdeniz" },
    { id: 2, name: "Adıyaman", lat: 37.7648, lon: 38.2786, region: "guneydogu-anadolu" },
    { id: 3, name: "Afyonkarahisar", lat: 38.7507, lon: 30.5567, region: "ege" },
    { id: 4, name: "Ağrı", lat: 39.7191, lon: 43.0503, region: "dogu-anadolu" },
    { id: 5, name: "Amasya", lat: 40.6499, lon: 35.8353, region: "karadeniz" },
    { id: 6, name: "Ankara", lat: 39.9334, lon: 32.8597, region: "ic-anadolu" },
    { id: 7, name: "Antalya", lat: 36.8841, lon: 30.7056, region: "akdeniz" },
    { id: 8, name: "Artvin", lat: 41.1828, lon: 41.8183, region: "karadeniz" },
    { id: 9, name: "Aydın", lat: 37.8444, lon: 27.8458, region: "ege" },
    { id: 10, name: "Balıkesir", lat: 39.6484, lon: 27.8826, region: "marmara" },
    { id: 11, name: "Bilecik", lat: 40.1451, lon: 29.9799, region: "marmara" },
    { id: 12, name: "Bingöl", lat: 38.8854, lon: 40.4980, region: "dogu-anadolu" },
    { id: 13, name: "Bitlis", lat: 38.4006, lon: 42.1095, region: "dogu-anadolu" },
    { id: 14, name: "Bolu", lat: 40.7350, lon: 31.6061, region: "karadeniz" },
    { id: 15, name: "Burdur", lat: 37.7204, lon: 30.2908, region: "akdeniz" },
    { id: 16, name: "Bursa", lat: 40.1885, lon: 29.0610, region: "marmara" },
    { id: 17, name: "Çanakkale", lat: 40.1553, lon: 26.4142, region: "marmara" },
    { id: 18, name: "Çankırı", lat: 40.6013, lon: 33.6134, region: "ic-anadolu" },
    { id: 19, name: "Çorum", lat: 40.5506, lon: 34.9556, region: "karadeniz" },
    { id: 20, name: "Denizli", lat: 37.7765, lon: 29.0864, region: "ege" },
    { id: 21, name: "Diyarbakır", lat: 37.9144, lon: 40.2306, region: "guneydogu-anadolu" },
    { id: 22, name: "Edirne", lat: 41.6771, lon: 26.5557, region: "marmara" },
    { id: 23, name: "Elazığ", lat: 38.6810, lon: 39.2264, region: "dogu-anadolu" },
    { id: 24, name: "Erzincan", lat: 39.7500, lon: 39.5000, region: "dogu-anadolu" },
    { id: 25, name: "Erzurum", lat: 39.9043, lon: 41.2679, region: "dogu-anadolu" },
    { id: 26, name: "Eskişehir", lat: 39.7767, lon: 30.5206, region: "ic-anadolu" },
    { id: 27, name: "Gaziantep", lat: 37.0662, lon: 37.3833, region: "guneydogu-anadolu" },
    { id: 28, name: "Giresun", lat: 40.9128, lon: 38.3895, region: "karadeniz" },
    { id: 29, name: "Gümüşhane", lat: 40.4600, lon: 39.4814, region: "karadeniz" },
    { id: 30, name: "Hakkari", lat: 37.5833, lon: 43.7333, region: "dogu-anadolu" },
    { id: 31, name: "Hatay", lat: 36.4018, lon: 36.3498, region: "akdeniz" },
    { id: 32, name: "Isparta", lat: 37.7648, lon: 30.5566, region: "akdeniz" },
    { id: 33, name: "Mersin", lat: 36.8000, lon: 34.6333, region: "akdeniz" },
    { id: 34, name: "İstanbul", lat: 41.0082, lon: 28.9784, region: "marmara" },
    { id: 35, name: "İzmir", lat: 38.4192, lon: 27.1287, region: "ege" },
    { id: 36, name: "Kars", lat: 40.6013, lon: 43.0975, region: "dogu-anadolu" },
    { id: 37, name: "Kastamonu", lat: 41.3887, lon: 33.7827, region: "karadeniz" },
    { id: 38, name: "Kayseri", lat: 38.7312, lon: 35.4787, region: "ic-anadolu" },
    { id: 39, name: "Kırklareli", lat: 41.7333, lon: 27.2167, region: "marmara" },
    { id: 40, name: "Kırşehir", lat: 39.1425, lon: 34.1709, region: "ic-anadolu" },
    { id: 41, name: "Kocaeli", lat: 40.8533, lon: 29.8815, region: "marmara" },
    { id: 42, name: "Konya", lat: 37.8667, lon: 32.4833, region: "ic-anadolu" },
    { id: 43, name: "Kütahya", lat: 39.4167, lon: 29.9833, region: "ege" },
    { id: 44, name: "Malatya", lat: 38.3552, lon: 38.3095, region: "dogu-anadolu" },
    { id: 45, name: "Manisa", lat: 38.6191, lon: 27.4289, region: "ege" },
    { id: 46, name: "Kahramanmaraş", lat: 37.5858, lon: 36.9371, region: "akdeniz" },
    { id: 47, name: "Mardin", lat: 37.3212, lon: 40.7245, region: "guneydogu-anadolu" },
    { id: 48, name: "Muğla", lat: 37.2153, lon: 28.3636, region: "ege" },
    { id: 49, name: "Muş", lat: 38.9462, lon: 41.7539, region: "dogu-anadolu" },
    { id: 50, name: "Nevşehir", lat: 38.6939, lon: 34.6857, region: "ic-anadolu" },
    { id: 51, name: "Niğde", lat: 37.9667, lon: 34.6833, region: "ic-anadolu" },
    { id: 52, name: "Ordu", lat: 40.9839, lon: 37.8764, region: "karadeniz" },
    { id: 53, name: "Rize", lat: 41.0201, lon: 40.5234, region: "karadeniz" },
    { id: 54, name: "Sakarya", lat: 40.7569, lon: 30.3783, region: "marmara" },
    { id: 55, name: "Samsun", lat: 41.2867, lon: 36.3300, region: "karadeniz" },
    { id: 56, name: "Siirt", lat: 37.9333, lon: 41.9500, region: "guneydogu-anadolu" },
    { id: 57, name: "Sinop", lat: 42.0231, lon: 35.1531, region: "karadeniz" },
    { id: 58, name: "Sivas", lat: 39.7477, lon: 37.0179, region: "ic-anadolu" },
    { id: 59, name: "Tekirdağ", lat: 40.9833, lon: 27.5167, region: "marmara" },
    { id: 60, name: "Tokat", lat: 40.3167, lon: 36.5500, region: "karadeniz" },
    { id: 61, name: "Trabzon", lat: 41.0015, lon: 39.7178, region: "karadeniz" },
    { id: 62, name: "Tunceli", lat: 39.1079, lon: 39.5401, region: "dogu-anadolu" },
    { id: 63, name: "Şanlıurfa", lat: 37.1674, lon: 38.7939, region: "guneydogu-anadolu" },
    { id: 64, name: "Uşak", lat: 38.6823, lon: 29.4082, region: "ege" },
    { id: 65, name: "Van", lat: 38.4891, lon: 43.4089, region: "dogu-anadolu" },
    { id: 66, name: "Yozgat", lat: 39.8181, lon: 34.8147, region: "ic-anadolu" },
    { id: 67, name: "Zonguldak", lat: 41.4564, lon: 31.7987, region: "karadeniz" },
    { id: 68, name: "Aksaray", lat: 38.3687, lon: 34.0370, region: "ic-anadolu" },
    { id: 69, name: "Bayburt", lat: 40.2552, lon: 40.2249, region: "karadeniz" },
    { id: 70, name: "Karaman", lat: 37.1759, lon: 33.2287, region: "ic-anadolu" },
    { id: 71, name: "Kırıkkale", lat: 39.8468, lon: 33.5153, region: "ic-anadolu" },
    { id: 72, name: "Batman", lat: 37.8812, lon: 41.1351, region: "guneydogu-anadolu" },
    { id: 73, name: "Şırnak", lat: 37.5164, lon: 42.4611, region: "guneydogu-anadolu" },
    { id: 74, name: "Bartın", lat: 41.6344, lon: 32.3375, region: "karadeniz" },
    { id: 75, name: "Ardahan", lat: 41.1105, lon: 42.7022, region: "dogu-anadolu" },
    { id: 76, name: "Iğdır", lat: 39.9975, lon: 44.0450, region: "dogu-anadolu" },
    { id: 77, name: "Yalova", lat: 40.6500, lon: 29.2667, region: "marmara" },
    { id: 78, name: "Karabük", lat: 41.2061, lon: 32.6204, region: "karadeniz" },
    { id: 79, name: "Kilis", lat: 36.7184, lon: 37.1212, region: "guneydogu-anadolu" },
    { id: 80, name: "Osmaniye", lat: 37.0742, lon: 36.2478, region: "akdeniz" },
    { id: 81, name: "Düzce", lat: 40.8438, lon: 31.1565, region: "karadeniz" }
];

const WEATHER_CODES = {
    0: { label: 'Açık', icon: '☀️' },
    1: { label: 'Az Bulutlu', icon: '🌤️' },
    2: { label: 'Parçalı Bulutlu', icon: '⛅' },
    3: { label: 'Kapalı', icon: '☁️' },
    45: { label: 'Sisli', icon: '🌫️' },
    48: { label: 'Kırağı', icon: '🌫️' },
    51: { label: 'Hafif Çisenti', icon: '🌧️' },
    53: { label: 'Çisenti', icon: '🌧️' },
    55: { label: 'Yoğun Çisenti', icon: '🌧️' },
    56: { label: 'Hafif Dondurucu Çisenti', icon: '🌨️' },
    57: { label: 'Yoğun Dondurucu Çisenti', icon: '🌨️' },
    61: { label: 'Hafif Yağmurlu', icon: '🌧️' },
    63: { label: 'Yağmurlu', icon: '🌧️' },
    65: { label: 'Şiddetli Yağmur', icon: '⛈️' },
    66: { label: 'Hafif Dondurucu Yağmur', icon: '🌨️' },
    67: { label: 'Yoğun Dondurucu Yağmur', icon: '🌨️' },
    71: { label: 'Hafif Kar Yağışlı', icon: '🌨️' },
    73: { label: 'Kar Yağışlı', icon: '❄️' },
    75: { label: 'Yoğun Kar Yağışlı', icon: '❄️' },
    77: { label: 'Kar Taneleri', icon: '❄️' },
    80: { label: 'Hafif Sağanak', icon: '🌦️' },
    81: { label: 'Sağanak', icon: '🌦️' },
    82: { label: 'Şiddetli Sağanak', icon: '⛈️' },
    85: { label: 'Hafif Kar Sağanağı', icon: '🌨️' },
    86: { label: 'Yoğun Kar Sağanağı', icon: '❄️' },
    95: { label: 'Fırtına', icon: '⚡' },
    96: { label: 'Dolu ile Karışık Fırtına', icon: '⛈️' },
    99: { label: 'Şiddetli Fırtına', icon: '⛈️' }
};

// State
let allWeatherData = {};
let currentRegion = 'all';

// DOM Elements
const citiesGrid = document.getElementById('citiesGrid');
const regionTabs = document.getElementById('regionTabs');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const currentLocationWeather = document.getElementById('currentLocationWeather');
const loadingOverlay = document.getElementById('loadingOverlay');

// Modal Elements
const cityModal = document.getElementById('cityModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    setupEventListeners();
    getUserLocation();
    await fetchAllCitiesWeather();
}

function setupEventListeners() {
    // Region Filtering
    regionTabs.addEventListener('click', (e) => {
        const tab = e.target.closest('.region-tab');
        if (!tab) return;

        // Update active class
        document.querySelectorAll('.region-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update state
        currentRegion = tab.dataset.region;
        renderCities();
    });

    // Search Functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const filteredProvinces = provinces.filter(p =>
            p.name.toLowerCase().includes(query)
        );

        renderSearchResults(filteredProvinces);
    });

    // Close Search
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchResults.classList.remove('active');
        }
    });

    // Modal Events
    modalClose.addEventListener('click', closeCityModal);
    cityModal.addEventListener('click', (e) => {
        if (e.target === cityModal || e.target.classList.contains('modal-overlay')) {
            closeCityModal();
        }
    });

    // Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCityModal();
    });
}

function closeCityModal() {
    cityModal.classList.remove('active');
}

async function fetchAllCitiesWeather() {
    loadingOverlay.style.display = 'flex';

    const chunk1 = provinces.slice(0, 50);
    const chunk2 = provinces.slice(50);

    try {
        const [data1, data2] = await Promise.all([
            fetchWeatherBatch(chunk1),
            fetchWeatherBatch(chunk2)
        ]);

        const combinedData = [...data1, ...data2];

        provinces.forEach((province, index) => {
            if (combinedData[index]) {
                const current = combinedData[index].current;
                const daily = combinedData[index].daily;

                allWeatherData[province.id] = {
                    temp: Math.round(current.temperature_2m),
                    code: current.weather_code,
                    humidity: current.relative_humidity_2m,
                    windSpeed: current.wind_speed_10m,
                    minTemp: Math.round(daily.temperature_2m_min[0]),
                    maxTemp: Math.round(daily.temperature_2m_max[0]),
                    isDay: current.is_day
                };
            }
        });

        renderCities();
        loadingOverlay.style.display = 'none';

        document.getElementById('lastUpdate').textContent = new Date().toLocaleTimeString('tr-TR');

    } catch (error) {
        console.error('Error fetching weather data:', error);
        loadingOverlay.innerHTML = '<p class="error">Veriler alınamadı. Lütfen sayfayı yenileyin.</p>';
    }
}

async function fetchWeatherBatch(provinceList) {
    const lats = provinceList.map(p => p.lat).join(',');
    const lons = provinceList.map(p => p.lon).join(',');

    // Original lightweight fetch for the main grid
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,is_day&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('API Error');
    return await response.json();
}

function renderCities() {
    citiesGrid.innerHTML = '';

    const filteredProvinces = currentRegion === 'all'
        ? provinces
        : provinces.filter(p => p.region === currentRegion);

    filteredProvinces.forEach(province => {
        const weather = allWeatherData[province.id];
        if (!weather) return;

        const weatherInfo = WEATHER_CODES[weather.code] || WEATHER_CODES[0];

        const card = document.createElement('div');
        card.className = 'city-card';
        card.innerHTML = `
            <div class="city-header">
                <h3 class="city-name">${province.name}</h3>
                <span class="city-region">${getRegionName(province.region)}</span>
            </div>
            <div class="weather-icon-wrapper">
                <div style="font-size: 3rem; text-align: center;">${weatherInfo.icon}</div>
            </div>
            <div class="weather-temp">${weather.temp}°</div>
            <div class="weather-desc">${weatherInfo.label}</div>
            <div class="weather-details">
                <div class="weather-detail-item">
                    <span>Nem</span>
                    <span class="weather-detail-value">%${weather.humidity}</span>
                </div>
                <div class="weather-detail-item">
                    <span>Rüzgar</span>
                    <span class="weather-detail-value">${weather.windSpeed} km/s</span>
                </div>
                <div class="weather-detail-item">
                    <span>Min/Max</span>
                    <span class="weather-detail-value">${weather.minTemp}° / ${weather.maxTemp}°</span>
                </div>
            </div>
        `;

        // Add click event for modal with detailed data
        card.addEventListener('click', () => {
            openCityModal(province);
        });

        citiesGrid.appendChild(card);
    });
}

// ----------------------
// Detailed Modal Feature
// ----------------------
async function openCityModal(province) {
    cityModal.classList.add('active');
    modalBody.innerHTML = `
        <div style="padding: 4rem; text-align: center;">
            <div class="spinner" style="margin: 0 auto 1rem;"></div>
            <p>Detaylı veriler yükleniyor...</p>
        </div>
    `;

    try {
        const start = new Date().toISOString().split('T')[0];
        const end = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        // Parallel requests for Weather and Air Quality
        // Open-Meteo separates these into two different subdomains/APIs
        const weatherPromise = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${province.lat}&longitude=${province.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&start_date=${start}&end_date=${end}`).then(r => r.json());

        const aqiPromise = fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${province.lat}&longitude=${province.lon}&current=us_aqi&timezone=auto`).then(r => r.json()).catch(() => ({ current: { us_aqi: null } }));

        const [weatherData, aqiData] = await Promise.all([weatherPromise, aqiPromise]);

        // Merge AQI into weather data for rendering
        if (aqiData && aqiData.current) {
            weatherData.current.us_aqi = aqiData.current.us_aqi;
        } else {
            weatherData.current.us_aqi = null;
        }

        renderModalContent(weatherData, province);

    } catch (e) {
        console.error("Detail error:", e);
        modalBody.innerHTML = '<p style="text-align:center; padding: 2rem; color: #f87171;">Veriler alınamadı.</p>';
        setTimeout(() => {
            closeCityModal();
        }, 2000);
    }
}

function renderModalContent(data, province) {
    const current = data.current;
    const weatherInfo = WEATHER_CODES[current.weather_code] || WEATHER_CODES[0];
    const daily = data.daily;
    const hourly = data.hourly;

    // Get next 24 hours for chart
    const currentHourIndex = new Date().getHours();
    const next24HoursTemp = hourly.temperature_2m.slice(currentHourIndex, currentHourIndex + 24);
    const next24HoursTimes = hourly.time.slice(currentHourIndex, currentHourIndex + 24);

    // AQI Handling - Fix for 'null'
    let aqi = current.us_aqi;
    let aqiClass = 'aqi-good';
    let aqiText = 'Belirsiz';
    let aqiValueDisplay = '--';

    if (aqi !== null && aqi !== undefined) {
        aqiValueDisplay = aqi;
        if (aqi <= 50) { aqiClass = 'aqi-good'; aqiText = 'İyi'; }
        else if (aqi <= 100) { aqiClass = 'aqi-moderate'; aqiText = 'Orta'; }
        else if (aqi <= 150) { aqiClass = 'aqi-bad'; aqiText = 'Hassas'; }
        else { aqiClass = 'aqi-bad'; aqiText = 'Sağlıksız'; }
    } else {
        aqiClass = 'aqi-moderate'; // Neutral style for missing data
        aqiText = 'Veri Yok';
    }

    const dateStr = new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' });

    let html = `
        <div class="modal-header-detail">
            <h2 class="modal-city-name">${province.name}</h2>
            <div class="modal-date">${dateStr}</div>
            <div class="modal-current-temp">${Math.round(current.temperature_2m)}°</div>
            <div class="modal-condition">${weatherInfo.label}</div>
            <div style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                Hissedilen: ${Math.round(current.apparent_temperature)}°
            </div>
        </div>

        <div class="detail-grid">
            <div class="detail-card">
                <div style="font-size: 0.8rem; color: var(--text-secondary);">Hava Kalitesi</div>
                <div style="font-size: 1.5rem; margin: 0.25rem 0;">${aqiValueDisplay}</div>
                <span class="aqi-badge ${aqiClass}">${aqiText}</span>
            </div>
            <div class="detail-card">
                <div style="font-size: 0.8rem; color: var(--text-secondary);">Basınç</div>
                <div style="font-size: 1.25rem; font-weight: 600; margin-top: 0.5rem;">${Math.round(current.surface_pressure)} hPa</div>
            </div>
            <div class="detail-card">
                <div style="font-size: 0.8rem; color: var(--text-secondary);">Nem</div>
                <div style="font-size: 1.25rem; font-weight: 600; margin-top: 0.5rem;">%${current.relative_humidity_2m}</div>
            </div>
        </div>

        <div class="chart-section">
            <div class="section-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                24 Saatlik Sıcaklık Trendi
            </div>
            <div class="chart-container">
                ${createHourlyChart(next24HoursTemp, next24HoursTimes)}
            </div>
        </div>

        <div class="forecast-list">
            <div class="section-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                7 Günlük Tahmin
            </div>
    `;

    // 7 Days Loop
    for (let i = 0; i < 7; i++) {
        const dDate = new Date(daily.time[i]);
        const dayName = dDate.toLocaleDateString('tr-TR', { weekday: 'long' });
        const dCode = daily.weather_code[i];
        const dInfo = WEATHER_CODES[dCode] || WEATHER_CODES[0];
        const min = Math.round(daily.temperature_2m_min[i]);
        const max = Math.round(daily.temperature_2m_max[i]);

        html += `
            <div class="forecast-item">
                <div class="forecast-day">${i === 0 ? 'Bugün' : dayName}</div>
                <div class="forecast-icon">${dInfo.icon}</div>
                <div class="forecast-temps">
                    <span class="temp-max">${max}°</span>
                    <span class="temp-min">${min}°</span>
                </div>
            </div>
        `;
    }

    html += `</div>`; // Close forecast-list
    modalBody.innerHTML = html;
}

function createHourlyChart(temps, times) {
    const width = 800;
    const height = 150;
    const padding = 20;

    const minTemp = Math.min(...temps) - 2;
    const maxTemp = Math.max(...temps) + 2;

    const xScale = (index) => padding + (index * (width - 2 * padding) / (temps.length - 1));
    const yScale = (temp) => height - padding - ((temp - minTemp) * (height - 2 * padding) / (maxTemp - minTemp));

    let pathD = `M ${xScale(0)} ${yScale(temps[0])}`;
    let pointsHtml = '';

    temps.forEach((temp, i) => {
        const x = xScale(i);
        const y = yScale(temp);

        if (i > 0) {
            // Bezier curve for smoothness
            const prevX = xScale(i - 1);
            const prevY = yScale(temps[i - 1]);
            const cp1x = prevX + (x - prevX) / 2;
            const cp1y = prevY;
            const cp2x = prevX + (x - prevX) / 2;
            const cp2y = y;
            pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
        }

        // Add point circle and label
        pointsHtml += `
            <circle cx="${x}" cy="${y}" r="3" fill="#fff" />
            <text x="${x}" y="${y - 10}" fill="#fff" font-size="10" text-anchor="middle">${Math.round(temp)}°</text>
            <text x="${x}" y="${height - 5}" fill="#94a3b8" font-size="10" text-anchor="middle">${times[i].split('T')[1].substring(0, 2)}:00</text>
        `;
    });

    return `
        <svg class="chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
            <path d="${pathD}" fill="none" stroke="var(--secondary-color)" stroke-width="2" />
            ${pointsHtml}
        </svg>
    `;
}

function getRegionName(slug) {
    const regions = {
        'marmara': 'Marmara',
        'ege': 'Ege',
        'akdeniz': 'Akdeniz',
        'karadeniz': 'Karadeniz',
        'ic-anadolu': 'İç Anadolu',
        'dogu-anadolu': 'Doğu Anadolu',
        'guneydogu-anadolu': 'G.Doğu Anadolu'
    };
    return regions[slug] || slug;
}

function renderSearchResults(results) {
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">Sonuç bulunamadı</div>';
        searchResults.classList.add('active');
        return;
    }

    results.forEach(province => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.textContent = province.name;
        item.onclick = () => {
            currentRegion = province.region;

            document.querySelectorAll('.region-tab').forEach(t => {
                if (t.dataset.region === currentRegion) t.classList.add('active');
                else t.classList.remove('active');
            });

            renderCities();
            searchInput.value = '';
            searchResults.classList.remove('active');

            setTimeout(() => {
                const cards = document.querySelectorAll('.city-name');
                for (let card of cards) {
                    if (card.textContent === province.name) {
                        card.closest('.city-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.closest('.city-card').click(); // Open the modal automatically on search
                        break;
                    }
                }
            }, 100);
        };
        searchResults.appendChild(item);
    });

    searchResults.classList.add('active');
}

// User Location Logic
function getUserLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                updateLocationWeather(lat, lon);
            },
            (error) => {
                console.error("Konum hatası:", error);
                currentLocationWeather.innerHTML = `
                    <div style="text-align: center; color: var(--text-secondary); font-size: 0.8rem;">
                        <p>Konum izni verilmedi</p>
                    </div>
                `;
            }
        );
    } else {
        currentLocationWeather.style.display = 'none';
    }
}

async function updateLocationWeather(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`);
        const data = await response.json();

        const weatherCode = data.current.weather_code;
        const temp = Math.round(data.current.temperature_2m);
        const info = WEATHER_CODES[weatherCode] || WEATHER_CODES[0];

        let locationName = "Konumunuz";
        try {
            const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=tr`);
            const geoData = await geoRes.json();
            if (geoData.city || geoData.locality) {
                locationName = geoData.city || geoData.locality;
            }
        } catch (e) {
            console.log("City name fetch failed", e);
        }

        currentLocationWeather.innerHTML = `
            <div class="local-weather-content">
                <div style="font-size: 2.5rem;">${info.icon}</div>
                <div class="local-weather-info">
                    <h3>${locationName}</h3>
                    <div class="local-temp">${temp}°C</div>
                    <div class="local-desc">${info.label}</div>
                </div>
            </div>
        `;

    } catch (error) {
        console.error("Local weather info fetch failed", error);
        currentLocationWeather.innerHTML = '<p>Hava durumu alınamadı</p>';
    }
}
