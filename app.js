/* 🚀 Ard Al-Dyafa Coming Soon - Client Script */

// Translation Dictionary
const translations = {
    ar: {
        badge: "✨ قريباً | Coming Soon",
        heroTitle: `نصنع للفخامة <span class="highlight">أرضاً</span> وللضيافة عنواناً`,
        heroDesc: "نحن نعمل خلف الكواليس لإطلاق منصة استثنائية تقدم أفضل حلول الضيافة الراقية، تنظيم الفعاليات الكبرى، وخدمات التموين الفاخرة التي تليق بمناسباتكم.",
        labelDays: "أيام",
        labelHours: "ساعات",
        labelMinutes: "دقائق",
        labelSeconds: "ثواني",
        subTitle: "كن أول من يعلم عند الإطلاق",
        subDesc: "سجل بريدك الإلكتروني للحصول على دعوة حصرية وخصومات خاصة عند الافتتاح الرسمي.",
        emailPlaceholder: "أدخل بريدك الإلكتروني...",
        btnText: "اشترك الآن",
        feat1Title: "طهي وتموين فاخر",
        feat1Desc: "قوائم طعام معدّة بأيدي نخبة من الطهاة الحائزين على جوائز لتناسب أذواق ضيوفكم.",
        feat2Title: "تنظيم الفعاليات",
        feat2Desc: "من التخطيط الإبداعي وحتى التنفيذ المتكامل للمؤتمرات، المعارض، والاحتفالات الخاصة.",
        feat3Title: "ضيافة VIP",
        feat3Desc: "خدمات استقبال وتنسيق مخصصة تضمن لضيوفك الكرام تجربة استثنائية تفوق التوقعات.",
        footerCopy: "جميع الحقوق محفوظة &copy; 2026 أرض الضيافة.",
        errorInvalidEmail: "الرجاء إدخال بريد إلكتروني صحيح.",
        errorEmptyEmail: "حقل البريد الإلكتروني مطلوب.",
        toastSuccess: "تم الاشتراك بنجاح! سنقوم بإعلامك فور الإطلاق.",
        langBtnText: "English"
    },
    en: {
        badge: "✨ Coming Soon | قريباً",
        heroTitle: `Creating a <span class="highlight">Haven</span> of Premium Hospitality`,
        heroDesc: "We are working behind the scenes to launch an exceptional platform offering premium hospitality services, grand event management, and fine catering tailored to your high standards.",
        labelDays: "Days",
        labelHours: "Hours",
        labelMinutes: "Minutes",
        labelSeconds: "Seconds",
        subTitle: "Be the First to Know",
        subDesc: "Sign up with your email address to receive exclusive invitations and updates when we launch.",
        emailPlaceholder: "Enter your email address...",
        btnText: "Subscribe Now",
        feat1Title: "Fine Catering & Dining",
        feat1Desc: "Custom menus crafted by award-winning chefs to suit the sophisticated tastes of your guests.",
        feat2Title: "Event Orchestration",
        feat2Desc: "From creative planning to complete execution of conferences, exhibitions, and private gatherings.",
        feat3Title: "VIP Hospitality",
        feat3Desc: "Bespoke reception and host services ensuring your distinguished guests receive an elite experience.",
        footerCopy: "All Rights Reserved &copy; 2026 Ard Al-Dyafa.",
        errorInvalidEmail: "Please enter a valid email address.",
        errorEmptyEmail: "Email field is required.",
        toastSuccess: "Subscribed successfully! We will notify you at launch.",
        langBtnText: "العربية"
    }
};

// State Variables
let currentLang = localStorage.getItem('dyafa_lang') || 'ar';

// DOM Selectors
const langBtn = document.getElementById('lang-btn');
const badgeText = document.getElementById('badge-text');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const labelDays = document.getElementById('label-days');
const labelHours = document.getElementById('label-hours');
const labelMinutes = document.getElementById('label-minutes');
const labelSeconds = document.getElementById('label-seconds');
const subTitle = document.getElementById('sub-title');
const subDesc = document.getElementById('sub-desc');
const subscribeEmail = document.getElementById('subscribe-email');
const btnText = document.getElementById('btn-text');
const feat1Title = document.getElementById('feat-1-title');
const feat1Desc = document.getElementById('feat-1-desc');
const feat2Title = document.getElementById('feat-2-title');
const feat2Desc = document.getElementById('feat-2-desc');
const feat3Title = document.getElementById('feat-3-title');
const feat3Desc = document.getElementById('feat-3-desc');
const footerCopy = document.getElementById('footer-copy');
const subscribeForm = document.getElementById('subscribe-form');
const errorMessage = document.getElementById('error-message');
const toastContainer = document.getElementById('toast-container');

// Set Initial Direction & Language on Load
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    startCountdown();
});

// Switch Language Function
function applyLanguage(lang) {
    const htmlNode = document.documentElement;
    htmlNode.setAttribute('lang', lang);
    htmlNode.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Toggle Fonts based on language
    if (lang === 'ar') {
        htmlNode.style.fontFamily = "var(--font-ar)";
    } else {
        htmlNode.style.fontFamily = "var(--font-en)";
    }

    const dict = translations[lang];
    
    // Update texts
    langBtn.textContent = dict.langBtnText;
    badgeText.textContent = dict.badge;
    heroTitle.innerHTML = dict.heroTitle;
    heroDesc.textContent = dict.heroDesc;
    labelDays.textContent = dict.labelDays;
    labelHours.textContent = dict.labelHours;
    labelMinutes.textContent = dict.labelMinutes;
    labelSeconds.textContent = dict.labelSeconds;
    subTitle.textContent = dict.subTitle;
    subDesc.textContent = dict.subDesc;
    subscribeEmail.placeholder = dict.emailPlaceholder;
    btnText.textContent = dict.btnText;
    feat1Title.textContent = dict.feat1Title;
    feat1Desc.textContent = dict.feat1Desc;
    feat2Title.textContent = dict.feat2Title;
    feat2Desc.textContent = dict.feat2Desc;
    feat3Title.textContent = dict.feat3Title;
    feat3Desc.textContent = dict.feat3Desc;
    footerCopy.innerHTML = dict.footerCopy;

    // Reset error messages if visible
    errorMessage.classList.remove('visible');
    
    localStorage.setItem('dyafa_lang', lang);
    currentLang = lang;
}

// Language Button Click Event
langBtn.addEventListener('click', () => {
    const targetLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(targetLang);
});

// Countdown Timer Logic
function startCountdown() {
    // Set Target Date to 60 Days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 60);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function update() {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        if (difference < 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Format to double digit
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// Subscription Form Submission & Validation
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = subscribeEmail.value.trim();
    const dict = translations[currentLang];

    // Validation
    if (!email) {
        showError(dict.errorEmptyEmail);
        return;
    }

    if (!validateEmail(email)) {
        showError(dict.errorInvalidEmail);
        return;
    }

    // Success flow - Clear Errors & Disable Input during process
    errorMessage.classList.remove('visible');
    const submitBtn = document.getElementById('subscribe-btn');
    const originalBtnText = btnText.textContent;
    
    // Show Loading state
    submitBtn.disabled = true;
    btnText.textContent = currentLang === 'ar' ? 'جاري الاشتراك...' : 'Subscribing...';
    
    // Simulate API Call
    setTimeout(() => {
        showToast(dict.toastSuccess, '👑');
        subscribeEmail.value = '';
        submitBtn.disabled = false;
        btnText.textContent = originalBtnText;

        // Optionally store locally
        const subscribers = JSON.parse(localStorage.getItem('dyafa_subscribers') || '[]');
        subscribers.push({ email: email, date: new Date().toISOString() });
        localStorage.setItem('dyafa_subscribers', JSON.stringify(subscribers));
    }, 1500);
});

// Helper validation functions
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.add('visible');
    subscribeEmail.focus();
}

// Custom Toast Notification System
function showToast(message, icon = '✨') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;
    
    toastContainer.appendChild(toast);

    // Fade out and remove after delay
    setTimeout(() => {
        toast.classList.add('fade-out');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 4000);
}
