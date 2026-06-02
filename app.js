/* 🚀 Ard Al-Dyafa - Client Interaction Script */

// Translation Dictionary
const translations = {
    ar: {
        title: "أرض الضيافة | عاملات وخادمات منزليات بعقود شهرية في قطر",
        navSubtitle: "للخدمات والتجارة",
        navCtaText: "احجز الآن",
        heroBadge: "✨ خدمة موثوقة وجودة مستمرة في قطر",
        heroTitle: "هل تبحث عن الراحة والاهتمام الكامل بمنزلك؟",
        heroSubtitle: "أرض الضيافة للخدمات والتجارة توفر لكم عاملات منزليات محترفات بخبرة عالية في جميع أعمال المنزل، مع عقود شهرية مرنة تناسب احتياجات الأسرة وتضمن لكم الراحة والأمان.",
        heroBtnBook: "احجز الآن",
        heroBtnCall: "اتصل بنا",
        servicesBadge: "ماذا نقدم لكم",
        servicesTitle: "خدماتنا تشمل",
        servicesSubtitle: "نلبي جميع احتياجات منزلك بدقة وعناية فائقة من خلال فريق متخصص.",
        srv1Title: "تنظيف وترتيب المنازل",
        srv1Desc: "تنظيف شامل ودقيق للغرف والصالونات والفلل والشقق لضمان بيئة صحية ومرتبة.",
        srv2Title: "غسيل وكي الملابس",
        srv2Desc: "الاعتناء بملابسك وغسلها وكيها بطرق احترافية تحافظ على جودتها وأناقتها.",
        srv3Title: "تنظيف المطابخ والحمامات",
        srv3Desc: "تعقيم وتنظيف عميق للمطابخ وإزالة الدهون، وتطهير الحمامات بأفضل المعقمات.",
        srv4Title: "العناية اليومية بالمنزل",
        srv4Desc: "ترتيب يومي ومتابعة مستمرة لتفاصيل المنزل ليبقى دائماً مهيأً لاستقبال عائلتك وضيوفتك.",
        srv5Title: "الأعمال المنزلية المختلفة",
        srv5Desc: "مساعدة مرنة في شتى المهام المنزلية التي تطلبها الأسرة لتوفير الوقت والجهد.",
        whyUsBadge: "لماذا تختارنا",
        whyUsTitle: "مميزات الخدمة في أرض الضيافة",
        whyUsDesc: "نسعى دائماً لتقديم الأفضل لعملائنا لضمان رضاهم التام واستمرارية الخدمة.",
        feat1Title: "عاملات مدربات وخبرة",
        feat1Desc: "عاملات منزليات يمتلكن المهارة والكفاءة العالية في إدارة وتنظيف المنازل والتعامل اللبق.",
        feat2Title: "التزام كامل بالمواعيد",
        feat2Desc: "نحترم وقتكم الثمين، ونلتزم بالوصول وتأدية المهام المطلوبة في الوقت المحدد تماماً.",
        feat3Title: "خدمة احترافية وجودة",
        feat3Desc: "نهتم بأدق التفاصيل ونستخدم أحدث الطرق لضمان جودة مستمرة تنال ثقتكم.",
        feat4Title: "أسعار مناسبة وعقود مرنة",
        feat4Desc: "عقود شهرية مرنة وباقات متنوعة تلائم ميزانيتك واحتياجات أسرتك الخاصة.",
        feat5Title: "دعم عملاء 24/7",
        feat5Desc: "فريق دعم متواجد على مدار الساعة للرد على استفساراتكم وتلبية طلباتكم فوراً.",
        galleryBadge: "معرض الصور",
        galleryTitle: "معرض الإعلانات والخدمات",
        gallerySubtitle: "تصفح إعلاناتنا وعروضنا الحالية لخدمات العمالة المنزلية في دولة قطر.",
        bookBadgeTxt: "احجز موعدك اليوم",
        bookInfoTitle: "ابدأ رحلة الراحة في منزلك",
        bookInfoDesc: "أرض الضيافة للخدمات والتجارة - خبرة، ثقة، وراحة تبدأ من منزلك. يمكنك ملء النموذج وسيقوم نظامنا بتوجيهك فوراً لإرسال حجزك عبر الواتساب، أو الاتصال بنا مباشرة.",
        phoneLabel1: "للحجز والاستفسار (هاتف 1):",
        phoneLabel2: "للحجز والاستفسار (هاتف 2):",
        locationLabel: "نطاق الخدمة:",
        locationValue: "جميع مناطق دولة قطر",
        quickCallBtn: "📞 اتصل بنا الآن",
        quickWhatsappBtn: "💬 راسلنا واتساب",
        formTitle: "نموذج حجز عاملة منزلية",
        formSubtitle: "يرجى إدخال بياناتك وسنتواصل معك لتأكيد العقد",
        labelName: "الاسم بالكامل *",
        placeholderName: "أدخل اسمك الكريم",
        labelPhone: "رقم الجوال (في قطر) *",
        placeholderPhone: "مثال: 30207961",
        labelService: "الخدمة المطلوبة *",
        optSelect: "اختر الخدمة...",
        opt1: "تنظيف وترتيب المنازل والفلل",
        opt2: "غسيل وكي الملابس",
        opt3: "تنظيف وتعقيم المطابخ والحمامات",
        opt4: "العناية اليومية المتكاملة بالمنزل",
        opt5: "مساعدة عامة في الأعمال المنزلية",
        labelDuration: "مدة العقد المفضلة *",
        dur1: "عقد شهري (شهر واحد قابل للتجديد)",
        dur2: "عقد 3 أشهر",
        dur3: "عقد 6 أشهر",
        dur4: "عقد سنوي (12 شهر)",
        btnSubmitBooking: "تأكيد الحجز عبر واتساب",
        errorFields: "يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح ورقم جوال قطري صحيح (8 أرقام).",
        footerAboutDesc: "خبرة، ثقة، وراحة تبدأ من منزلك. شريككم الأمثل للعناية بنظافة وترتيب منازلكم في قطر.",
        footerLinksTitle: "روابط سريعة",
        lnkHome: "الرئيسية",
        lnkServices: "خدماتنا",
        lnkWhy: "مميزاتنا",
        lnkGallery: "معرض الصور",
        lnkBook: "احجز الآن",
        footerContactTitle: "اتصل بنا",
        footerCopyText: "جميع الحقوق محفوظة &copy; 2026 أرض الضيافة للخدمات والتجارة.",
        toastSuccess: "تم إنشاء طلبك! جاري تحويلك إلى الواتساب للتأكيد...",
        langBtnText: "English"
    },
    en: {
        title: "Ard Al-Dyafa | Domestic Maids & Workers Monthly Contracts in Qatar",
        navSubtitle: "for Services & Trade",
        navCtaText: "Book Now",
        heroBadge: "✨ Reliable Service and Continuous Quality in Qatar",
        heroTitle: "Are you looking for comfort and full attention to your home?",
        heroSubtitle: "Ard Al-Dyafa for Services & Trade provides highly experienced professional domestic workers for all household tasks, with flexible monthly contracts tailored to your family needs, ensuring absolute peace of mind.",
        heroBtnBook: "Book Now",
        heroBtnCall: "Call Us",
        servicesBadge: "What We Offer",
        servicesTitle: "Our Services Include",
        servicesSubtitle: "We cater to all your home needs with extreme precision and care through our specialized team.",
        srv1Title: "Home Cleaning & Organizing",
        srv1Desc: "Comprehensive cleaning of rooms, salons, apartments, and villas, ensuring a healthy and neat environment.",
        srv2Title: "Laundry & Ironing",
        srv2Desc: "Caring for your garments, washing, and ironing using professional techniques that preserve fabrics.",
        srv3Title: "Kitchen & Bathroom Cleaning",
        srv3Desc: "Deep sanitization of kitchens, grease removal, and thorough bathroom disinfection using top-grade products.",
        srv4Title: "Daily Home Maintenance",
        srv4Desc: "Daily tidying up and constant attention to the details of your home to keep it clean and guest-ready.",
        srv5Title: "Various Household Tasks",
        srv5Desc: "Flexible assistance in all other household duties requested by families to save your time and effort.",
        whyUsBadge: "Why Choose Us",
        whyUsTitle: "Our Service Features",
        whyUsDesc: "We constantly strive to provide the best services to guarantee our clients' complete satisfaction.",
        feat1Title: "Trained & Experienced",
        feat1Desc: "Domestic workers possessing high skills and competence in house management and polite communication.",
        feat2Title: "Punctuality & Reliability",
        feat2Desc: "We respect your valuable time, guaranteeing prompt arrival and completion of all tasks.",
        feat3Title: "Professionalism & Quality",
        feat3Desc: "We pay attention to the smallest details and use modern methods to maintain excellent standards.",
        feat4Title: "Affordable Prices & Flex Contracts",
        feat4Desc: "Flexible monthly contracts and a variety of packages designed to fit your budget and family needs.",
        feat5Title: "24/7 Customer Support",
        feat5Desc: "A dedicated support team active round the clock to respond to your queries and manage requests instantly.",
        galleryBadge: "Photo Gallery",
        galleryTitle: "Ads & Services Exhibition",
        gallerySubtitle: "Browse our current flyers and announcements for domestic maid services in the State of Qatar.",
        bookBadgeTxt: "Book Your Slot Today",
        bookInfoTitle: "Start Your Home Comfort Journey",
        bookInfoDesc: "Ard Al-Dyafa for Services & Trade - Experience, trust, and comfort starting from your home. Fill in the form and our system will route you to WhatsApp to send your request, or call us directly.",
        phoneLabel1: "Booking & Inquiries (Phone 1):",
        phoneLabel2: "Booking & Inquiries (Phone 2):",
        locationLabel: "Service Range:",
        locationValue: "All areas of the State of Qatar",
        quickCallBtn: "📞 Call Us Now",
        quickWhatsappBtn: "💬 Text Us on WhatsApp",
        formTitle: "Domestic Worker Booking Form",
        formSubtitle: "Enter your information and we will contact you to finalize the contract details",
        labelName: "Full Name *",
        placeholderName: "Enter your full name",
        labelPhone: "Phone Number (in Qatar) *",
        placeholderPhone: "e.g., 30207961",
        labelService: "Requested Service *",
        optSelect: "Select service...",
        opt1: "Cleaning & organizing homes and villas",
        opt2: "Laundry & ironing garments",
        opt3: "Deep kitchen & bathroom cleaning",
        opt4: "Full daily house maintenance",
        opt5: "General household helper assistance",
        labelDuration: "Preferred Contract Duration *",
        dur1: "Monthly Contract (1 month, renewable)",
        dur2: "3-Month Contract",
        dur3: "6-Month Contract",
        dur4: "Annual Contract (12 Months)",
        btnSubmitBooking: "Confirm Booking on WhatsApp",
        errorFields: "Please fill out all required fields correctly and provide a valid Qatar phone number (8 digits).",
        footerAboutDesc: "Experience, trust, and comfort starting from your home. Your ideal partner to take care of the neatness and cleanliness of your home in Qatar.",
        footerLinksTitle: "Quick Links",
        lnkHome: "Home",
        lnkServices: "Our Services",
        lnkWhy: "Why Choose Us",
        lnkGallery: "Gallery",
        lnkBook: "Book Now",
        footerContactTitle: "Contact Us",
        footerCopyText: "All Rights Reserved &copy; 2026 Ard Al-Dyafa for Services & Trade.",
        toastSuccess: "Your request has been generated! Redirecting to WhatsApp for confirmation...",
        langBtnText: "العربية"
    }
};

// State Variables
let currentLang = localStorage.getItem('ard_dyafa_lang') || 'ar';
let activeHeroSlide = 0;
let activeGallerySlide = 0;
const phoneList = ["97430207961", "97455487821"];
let heroInterval;

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle-btn');
const maidForm = document.getElementById('maid-booking-form');

// Elements that require translation
const translatableElements = {
    'nav-subtitle': 'navSubtitle',
    'nav-cta-text': 'navCtaText',
    'hero-badge-txt': 'heroBadge',
    'hero-main-title': 'heroTitle',
    'hero-desc-txt': 'heroSubtitle',
    'hero-btn-book': 'heroBtnBook',
    'hero-btn-call': 'heroBtnCall',
    'services-badge': 'servicesBadge',
    'services-title': 'servicesTitle',
    'services-subtitle-desc': 'servicesSubtitle',
    'srv-1-title': 'srv1Title',
    'srv-1-desc': 'srv1Desc',
    'srv-2-title': 'srv2Title',
    'srv-2-desc': 'srv2Desc',
    'srv-3-title': 'srv3Title',
    'srv-3-desc': 'srv3Desc',
    'srv-4-title': 'srv4Title',
    'srv-4-desc': 'srv4Desc',
    'srv-5-title': 'srv5Title',
    'srv-5-desc': 'srv5Desc',
    'why-us-badge': 'whyUsBadge',
    'why-us-title': 'whyUsTitle',
    'why-us-desc': 'whyUsDesc',
    'feat-1-title': 'feat1Title',
    'feat-1-desc': 'feat1Desc',
    'feat-2-title': 'feat2Title',
    'feat-2-desc': 'feat2Desc',
    'feat-3-title': 'feat3Title',
    'feat-3-desc': 'feat3Desc',
    'feat-4-title': 'feat4Title',
    'feat-4-desc': 'feat4Desc',
    'feat-5-title': 'feat5Title',
    'feat-5-desc': 'feat5Desc',
    'gallery-badge': 'galleryBadge',
    'gallery-title': 'galleryTitle',
    'gallery-subtitle': 'gallerySubtitle',
    'book-badge-txt': 'bookBadgeTxt',
    'book-info-title': 'bookInfoTitle',
    'book-info-desc': 'bookInfoDesc',
    'phone-label-1': 'phoneLabel1',
    'phone-label-2': 'phoneLabel2',
    'location-label': 'locationLabel',
    'location-value': 'locationValue',
    'form-title-txt': 'formTitle',
    'form-subtitle-txt': 'formSubtitle',
    'label-name': 'labelName',
    'label-phone': 'labelPhone',
    'label-service': 'labelService',
    'opt-select': 'optSelect',
    'opt-1': 'opt1',
    'opt-2': 'opt2',
    'opt-3': 'opt3',
    'opt-4': 'opt4',
    'opt-5': 'opt5',
    'label-duration': 'labelDuration',
    'dur-1': 'dur1',
    'dur-2': 'dur2',
    'dur-3': 'dur3',
    'dur-4': 'dur4',
    'btn-submit-booking': 'btnSubmitBooking',
    'footer-about-desc': 'footerAboutDesc',
    'footer-links-title': 'footerLinksTitle',
    'lnk-home': 'lnkHome',
    'lnk-services': 'lnkServices',
    'lnk-why': 'lnkWhy',
    'lnk-gallery': 'lnkGallery',
    'lnk-book': 'lnkBook',
    'footer-contact-title': 'footerContactTitle',
    'footer-copy-text': 'footerCopyText'
};

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    initHeroSlider();
    initGalleryCarousel();
    initNavbarScroll();
});

// Localization logic
function applyLanguage(lang) {
    const htmlNode = document.documentElement;
    htmlNode.setAttribute('lang', lang);
    htmlNode.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Change document title
    document.title = translations[lang].title;

    // Apply translations to all mapped elements
    for (const [elementId, key] of Object.entries(translatableElements)) {
        const element = document.getElementById(elementId);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (key === 'labelName') element.placeholder = translations[lang].placeholderName;
                if (key === 'labelPhone') element.placeholder = translations[lang].placeholderPhone;
            } else if (elementId === 'btn-submit-booking') {
                element.querySelector('span').textContent = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    }

    // Set placeholder values explicitly
    document.getElementById('client-name').placeholder = translations[lang].placeholderName;
    document.getElementById('client-phone').placeholder = translations[lang].placeholderPhone;

    // Switch text inside language toggle button
    langToggleBtn.textContent = translations[lang].langBtnText;

    // Update quick buttons in booking section
    const quickCall = document.querySelector('.quick-btn.call-btn');
    const quickWA = document.querySelector('.quick-btn.whatsapp-direct-btn');
    if (quickCall) quickCall.textContent = translations[lang].quickCallBtn;
    if (quickWA) quickWA.textContent = translations[lang].quickWhatsappBtn;

    // Re-align slider direction settings
    updateGallerySliderPosition();
    
    // Store lang selection
    localStorage.setItem('ard_dyafa_lang', lang);
    currentLang = lang;
}

// Lang button listener
langToggleBtn.addEventListener('click', () => {
    const targetLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(targetLang);
});

// Scroll Listener for Navbar styling
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Hero background slider logic
function initHeroSlider() {
    const slides = document.querySelectorAll('#hero-slider-slides .hero-slide');
    const dotsContainer = document.getElementById('hero-slider-dots');
    if (slides.length === 0) return;
    
    // Create dots
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Flyer slide ${idx + 1}`);
        dot.addEventListener('click', () => {
            goToHeroSlide(idx);
        });
        dotsContainer.appendChild(dot);
    });

    function nextHeroSlide() {
        slides[activeHeroSlide].classList.remove('active');
        activeHeroSlide = (activeHeroSlide + 1) % slides.length;
        slides[activeHeroSlide].classList.add('active');
        updateHeroDots();
    }

    function goToHeroSlide(idx) {
        clearInterval(heroInterval);
        slides[activeHeroSlide].classList.remove('active');
        activeHeroSlide = idx;
        slides[activeHeroSlide].classList.add('active');
        updateHeroDots();
        startHeroInterval();
    }

    function updateHeroDots() {
        const dots = document.querySelectorAll('#hero-slider-dots .slider-dot');
        dots.forEach((dot, idx) => {
            if (idx === activeHeroSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function startHeroInterval() {
        heroInterval = setInterval(nextHeroSlide, 5000);
    }

    startHeroInterval();
}

// Photo Gallery Carousel slider logic
let slidesNode = [];
function initGalleryCarousel() {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    
    slidesNode = document.querySelectorAll('.carousel-slide');
    if (slidesNode.length === 0) return;
    
    // Create Indicators
    indicatorsContainer.innerHTML = '';
    slidesNode.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
        indicator.addEventListener('click', () => {
            goToGallerySlide(index);
        });
        indicatorsContainer.appendChild(indicator);
    });

    nextBtn.addEventListener('click', () => {
        let target = activeGallerySlide + 1;
        if (target >= slidesNode.length) target = 0;
        goToGallerySlide(target);
    });

    prevBtn.addEventListener('click', () => {
        let target = activeGallerySlide - 1;
        if (target < 0) target = slidesNode.length - 1;
        goToGallerySlide(target);
    });

    // Mobile swipe touch gestures
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const threshold = 50;
        const dir = document.documentElement.getAttribute('dir') || 'rtl';
        
        if (touchStartX - touchEndX > threshold) {
            // Swiped left
            if (dir === 'rtl') {
                prevSlide();
            } else {
                nextSlide();
            }
        } else if (touchEndX - touchStartX > threshold) {
            // Swiped right
            if (dir === 'rtl') {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    function nextSlide() {
        let target = activeGallerySlide + 1;
        if (target >= slidesNode.length) target = 0;
        goToGallerySlide(target);
    }

    function prevSlide() {
        let target = activeGallerySlide - 1;
        if (target < 0) target = slidesNode.length - 1;
        goToGallerySlide(target);
    }
}

function goToGallerySlide(index) {
    activeGallerySlide = index;
    updateGallerySliderPosition();
}

function updateGallerySliderPosition() {
    const track = document.getElementById('carousel-track');
    if (!track || slidesNode.length === 0) return;
    
    const dir = document.documentElement.getAttribute('dir') || 'rtl';
    
    track.style.transform = `translateX(-${activeGallerySlide * 100}%)`;
    if (dir === 'rtl') {
        track.style.transform = `translateX(${activeGallerySlide * 100}%)`;
    }

    // Update indicators
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    indicators.forEach((indicator, index) => {
        if (index === activeGallerySlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Form handling & validation
maidForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const clientNameInput = document.getElementById('client-name');
    const clientPhoneInput = document.getElementById('client-phone');
    const serviceTypeSelect = document.getElementById('service-type');
    const contractDurationSelect = document.getElementById('contract-duration');
    const errorMsg = document.getElementById('booking-error');
    
    const name = clientNameInput.value.trim();
    const phone = clientPhoneInput.value.trim();
    const serviceText = serviceTypeSelect.options[serviceTypeSelect.selectedIndex]?.text || '';
    const serviceVal = serviceTypeSelect.value;
    const durationText = contractDurationSelect.options[contractDurationSelect.selectedIndex]?.text || '';
    
    // Simple Qatar phone format check: 8 digits
    const qatarPhoneRegex = /^[34567][0-9]{7}$/;
    
    if (!name || !phone || !serviceVal || !qatarPhoneRegex.test(phone)) {
        errorMsg.textContent = translations[currentLang].errorFields;
        errorMsg.classList.add('visible');
        return;
    }
    
    errorMsg.classList.remove('visible');
    
    // Success Flow - Compile WhatsApp text
    let message = "";
    if (currentLang === 'ar') {
        message = `مرحباً أرض الضيافة، أود حجز خدمة عاملة منزلية:\n` +
                  `- الاسم: ${name}\n` +
                  `- الجوال: ${phone}\n` +
                  `- الخدمة: ${serviceText}\n` +
                  `- مدة العقد: ${durationText}\n` +
                  `تاريخ الطلب: ${new Date().toLocaleDateString('ar-QA')}`;
    } else {
        message = `Hello Ard Al-Dyafa, I would like to book a domestic worker service:\n` +
                  `- Name: ${name}\n` +
                  `- Phone: ${phone}\n` +
                  `- Service: ${serviceText}\n` +
                  `- Duration: ${durationText}\n` +
                  `Date of Request: ${new Date().toLocaleDateString('en-US')}`;
    }
    
    const targetPhone = phoneList[Math.floor(Math.random() * phoneList.length)];
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(message)}`;
    
    // Show Toast Success
    showToast(translations[currentLang].toastSuccess, '👍');
    
    // Save to local storage as safety backup
    const bookings = JSON.parse(localStorage.getItem('dyafa_bookings') || '[]');
    bookings.push({
        name,
        phone,
        service: serviceVal,
        duration: contractDurationSelect.value,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('dyafa_bookings', JSON.stringify(bookings));
    
    // Reset Form
    maidForm.reset();
    
    // Redirect after short delay
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 1500);
});

// Custom Toast notification system
function showToast(message, icon = '✨') {
    const root = document.getElementById('toast-notification-root');
    if (!root) return;
    
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `
        <div class="toast-icon-wrapper">${icon}</div>
        <div class="toast-msg-text">${message}</div>
    `;
    
    root.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('fade-out');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 3500);
}
