// Global variables
let currentPage = 'loading';
let loadingProgress = 0;
let loadingInterval;

document.addEventListener('DOMContentLoaded', function () {
    navigateTo('welcome');
});

function navigateTo(pageId) {
    const pageUrl = `pages/${pageId}.html`;
    fetch(pageUrl)
        .then(response => response.text())
        .then(html => {
            const mainContainer = document.querySelector('.max-w-md');
            mainContainer.innerHTML = html;
            currentPage = pageId;
            setupEventListeners();

            if (pageId === 'home') {
                getWeather(26.9124, 75.7873); // Jaipur, India
            }
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}

function getWeather(lat, lon) {
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.querySelector('.bg-gradient-to-r');
            if (weatherDiv) {
                const temp = Math.round(data.main.temp);
                const description = data.weather[0].description;
                const humidity = data.main.humidity;
                const wind = data.wind.speed;

                weatherDiv.querySelector('.text-3xl').textContent = `${temp}°C`;
                weatherDiv.querySelector('.text-sm').textContent = description;
                weatherDiv.querySelector('.text-right p:nth-child(1)').textContent = `Humidity: ${humidity}%`;
                weatherDiv.querySelector('.text-right p:nth-child(2)').textContent = `Wind: ${wind} km/h`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

async function translatePage(targetLanguage) {
    const allTextElements = document.querySelectorAll('h1, h2, p, span, label, button, a');
    const textsToTranslate = Array.from(allTextElements).map(el => el.innerText);

    const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: textsToTranslate,
            source: "auto",
            target: targetLanguage,
            format: "text",
        }),
        headers: { "Content-Type": "application/json" }
    });

    const { translatedText } = await res.json();

    allTextElements.forEach((el, index) => {
        el.innerText = translatedText[index];
    });
}

function setupEventListeners() {
    // Language selection logic
    const saveLanguageButton = document.getElementById('save-language');
    if (saveLanguageButton) {
        saveLanguageButton.addEventListener('click', function() {
            const selectedLanguage = document.getElementById('language-select').value;
            translatePage(selectedLanguage);
            navigateTo('profile');
        });
    }

    // Notification screen logic
    const markAsReadButtons = document.querySelectorAll('.text-sm.text-blue-500');
    markAsReadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const notificationCard = this.closest('.card');
            notificationCard.remove();
        });
    });

    // Login screen logic
    const mobileInput = document.getElementById('mobile');
    const otpInput = document.getElementById('otp');
    const sendOtpBtn = document.getElementById('send-otp');
    const loginBtn = document.getElementById('login-btn');

    if (sendOtpBtn) {
        sendOtpBtn.addEventListener('click', function () {
            if (mobileInput.value.length === 10) {
                sendOtpBtn.textContent = 'Resend OTP';
                sendOtpBtn.disabled = true;
                otpInput.disabled = false;

                setTimeout(() => {
                    sendOtpBtn.disabled = false;
                }, 30000);
            } else {
                alert('Please enter a valid 10-digit mobile number');
            }
        });
    }

    if (otpInput && loginBtn) {
        otpInput.addEventListener('input', function () {
            loginBtn.disabled = otpInput.value.length !== 6;
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            navigateTo('home');
        });
    }

    // Register screen logic
    const regOtp = document.getElementById('reg-otp');
    const createBtn = document.getElementById('create-account');
    const regSendOtp = document.getElementById('reg-send-otp');
    const regMobile = document.getElementById('reg-mobile');

    if (regSendOtp) {
        regSendOtp.addEventListener('click', function () {
            if (regMobile.value.length === 10) {
                regSendOtp.textContent = 'Resend OTP';
                regSendOtp.disabled = true;
                regOtp.disabled = false;

                setTimeout(() => {
                    regSendOtp.disabled = false;
                }, 30000);
            } else {
                alert('Please enter a valid 10-digit mobile number');
            }
        });
    }

    if (regOtp && createBtn) {
        regOtp.addEventListener('input', function () {
            createBtn.disabled = regOtp.value.length !== 6;
        });
    }

    if (createBtn) {
        createBtn.addEventListener('click', function () {
            navigateTo('home');
        });
    }

    // Agreements
    const agreeTerms = document.getElementById('agree-terms');
    if (agreeTerms) {
        agreeTerms.addEventListener('change', function () {
            document.getElementById('continue-privacy').disabled = !this.checked;
        });
    }

    const agreePrivacy = document.getElementById('agree-privacy');
    if (agreePrivacy) {
        agreePrivacy.addEventListener('change', function () {
            document.getElementById('accept-continue').disabled = !this.checked;
        });
    }

    window.completeRegistration = function () {
        navigateTo('home');
    };

    // Service quantity controls
    document.querySelectorAll('.service-card').forEach(card => {
        const minusBtn = card.querySelector('.fa-minus').parentElement;
        const plusBtn = card.querySelector('.fa-plus').parentElement;
        const quantitySpan = card.querySelector('.mx-3');
        const priceSpan = card.querySelector('.font-medium:last-child');

        let quantity = 0;
        const pricePerUnit = parseInt(priceSpan.textContent.replace(/[^0-9]/g, '')) / (quantity || 1);

        minusBtn.addEventListener('click', function () {
            if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
                priceSpan.textContent = '₹' + (quantity * pricePerUnit);
                updateBookingSummary();
            }
        });

        plusBtn.addEventListener('click', function () {
            quantity++;
            quantitySpan.textContent = quantity;
            priceSpan.textContent = '₹' + (quantity * pricePerUnit);
            updateBookingSummary();
        });
    });
}

function updateBookingSummary() {
    let totalQuantity = 0;
    let totalCost = 0;

    document.querySelectorAll('.service-card').forEach(card => {
        const quantity = parseInt(card.querySelector('.mx-3').textContent);
        const price = parseInt(card.querySelector('.font-medium:last-child').textContent.replace(/[^0-9]/g, ''));

        totalQuantity += quantity;
        totalCost += price;
    });

    const summaryEl = document.querySelector('.bg-gray-50');
    if (summaryEl) {
        summaryEl.querySelector('span:first-child').textContent = totalQuantity + ' acres';
        summaryEl.querySelector('span:last-child').textContent = '₹' + totalCost;
    }
}

function startCountdown() {
    let hours = 2;
    let minutes = 35;
    let seconds = 18;

    const countdownInterval = setInterval(function () {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            clearInterval(countdownInterval);
            return;
        }

        document.getElementById('eta-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('eta-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('eta-seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

document.addEventListener('click', function (e) {
    if (e.target && (e.target.matches('[onclick*="drone-status"]') || e.target.closest('[onclick*="drone-status"]'))) {
        setTimeout(startCountdown, 1000);
    }
});
