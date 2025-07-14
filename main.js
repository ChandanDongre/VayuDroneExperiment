// Global variables
let currentPage = 'loading';
let loadingProgress = 0;
let loadingInterval;

document.addEventListener('DOMContentLoaded', function () {
    showPage('loading');

    loadingInterval = setInterval(function () {
        loadingProgress += 20;
        if (loadingProgress >= 100) {
            loadingProgress = 100;
            clearInterval(loadingInterval);
            setTimeout(function () {
                showPage('welcome');
            }, 100);
        }
        document.getElementById('loading-bar').style.width = loadingProgress + '%';
    }, 400);

    setupEventListeners();
});

function navigateTo(pageId) {
    showPage(pageId);

    // Delay to allow new DOM to render
    if (['login', 'register'].includes(pageId)) {
        setTimeout(setupEventListeners, 100);
    }
}

function showPage(pageId) {
    const currentPageEl = document.getElementById(currentPage);
    if (currentPageEl) {
        currentPageEl.classList.remove('active-page', 'fade-in');
    }

    const newPageEl = document.getElementById(pageId);
    if (newPageEl) {
        newPageEl.classList.add('active-page');
        setTimeout(() => {
            newPageEl.classList.add('fade-in');
        }, 10);
        currentPage = pageId;
    }

    if (pageId === 'welcome') {
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }

    window.scrollTo(0, 0);
}

function setupEventListeners() {
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
            showPage('home');
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
            showPage('home');
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
        showPage('home');
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
