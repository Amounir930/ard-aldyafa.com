/* 🚀 Ard Al-Dyafa - Client Redesign Interaction Script */

// Translation Dictionary
const translations = {
    ar: {
        title: "أرض الضيافة | عاملات وخادمات منزليات بعقود شهرية في قطر",
        topBarZone: "قطر",
        navSubtitle: "للخدمات والتجارة",
        menuHome: "الرئيسية",
        menuServices: "خدماتنا",
        menuWhy: "لماذا تختارنا",
        menuGallery: "معرض الإعلانات",
        navCtaText: "احجز الآن",
        heroBadge: "أرض الضيافة للخدمات والتجارة",
        heroTitle: "هل تبحث عن الراحة والاهتمام الكامل بمنزلك؟",
        heroSubtitle: "نوفر لكم عاملات منزليات محترفات بخبرة عالية في جميع أعمال المنزل، مع عقود شهرية مرنة تناسب احتياجات الأسرة وتضمن لكم خدمة موثوقة وجودة مستمرة في دولة قطر.",
        heroBtnBook: "احجز عبر واتساب",
        heroBtnCallText: "اتصل بنا",
        cardFeatureTitle: "ما الذي يجعلنا مختلفين؟",
        bullet1: "عاملات مدربات وذوات خبرة عالية",
        bullet2: "التزام كامل بالمواعيد وجودة مستمرة",
        bullet3: "أسعار مناسبة وعقود شهرية مرنة",
        bullet4: "دعم وخدمة عملاء على مدار الساعة",
        cardActionText: "طلب حجز عاملة منزلية",
        statLblClients: "عملاء سعداء",
        statLblExperience: "سنوات الخبرة",
        statLblTrained: "عمالة مدربة وموثوقة",
        statLblSupport: "حجز ودعم مستمر",
        servicesBadge: "ماذا نقدم لكم",
        servicesTitle: "خدماتنا تشمل",
        servicesSubtitle: "نلبي جميع احتياجات منزلك بدقة وعناية فائقة من خلال فريق متخصص.",
        srv1Title: "تنظيف وترتيب المنازل",
        srv1Desc: "تنظيف شامل ودقيق للغرف والصالونات والفلل والشقق لضمان بيئة صحية ومرتبة.",
        srv2Title: "غسيل وكي الملابس",
        srv2Desc: "الاعتناء بملابسك وغسلها وكيها بطرق احترافية تحافظ على جودتها وأناقتها.",
        srv3Title: "تنظيف المطابخ والحمامات",
        srv3Desc: "تعقيم وتنظيف عميق للمطابخ وإزالة الدهون، وتطهير الحمامات بأفضل المعقمات والمنظفات.",
        srv4Title: "العناية اليومية بالمنزل",
        srv4Desc: "ترتيب يومي ومتابعة مستمرة لتفاصيل المنزل ليبقى دائماً مهيأً لاستقبال عائلتك وضيوفتك.",
        srv5Title: "الأعمال المنزلية المختلفة",
        srv5Desc: "مساعدة مرنة في شتى المهام المنزلية التي تطلبها الأسرة لتوفير الوقت والجهد للجميع.",
        whyUsBadge: "لماذا تختارنا",
        whyUsTitle: "الريادة في تقديم الخدمات المنزلية",
        whyUsDesc: "في أرض الضيافة للخدمات والتجارة، نبني جسور الثقة والالتزام. نحن لسنا مجرد مزود خدمات، بل شركاء في توفير الراحة والأمان لعائلتك في دولة قطر من خلال كفاءات مدربة بأعلى المعايير.",
        btnWhyUsText: "تواصل معنا اليوم",
        feat1Title: "عاملات مدربات وخبرة",
        feat1Desc: "عاملات يمتلكن المهارة والكفاءة العالية في التنظيف والترتيب وإدارة المنزل بلباقة تامة.",
        feat2Title: "التزام كامل بالمواعيد",
        feat2Desc: "نحترم وقتكم الثمين، ونلتزم بالوصول والانتهاء من المهام المطلوبة في الموعد المحدد.",
        feat3Title: "خدمة احترافية وجودة",
        feat3Desc: "نهتم بأدق التفاصيل لتقديم تجربة تنظيف فاخرة تنال ثقتكم وتضمن راحتكم المستمرة.",
        feat4Title: "أسعار وعقود مرنة",
        feat4Desc: "باقات تعاقد شهرية متنوعة وخطط أسعار مرنة تتناسب تماماً مع متطلبات وميزانية أسرتك.",
        galleryBadge: "معرض الإعلانات",
        galleryTitle: "معرض الإعلانات والخدمات",
        gallerySubtitle: "تصفح إعلاناتنا وعروضنا الحالية لخدمات العمالة المنزلية في دولة قطر.",
        bookBadgeTxt: "اتصل بنا اليوم",
        bookInfoTitle: "ابدأ رحلة الراحة والأمان في منزلك",
        bookInfoDesc: "أرض الضيافة للخدمات والتجارة - خبرة، ثقة، وراحة تبدأ من منزلك. اتصل بنا مباشرة أو راسلنا عبر الواتساب لتأكيد الحجز فوراً وتنسيق العقد الشهري الذي يناسبك.",
        phoneLabel1: "للحجز والاستفسار (هاتف 1):",
        phoneLabel2: "للحجز والاستفسار (هاتف 2):",
        locationLabel: "نطاق تقديم الخدمة:",
        locationValue: "جميع مناطق دولة قطر",
        lblQuickCall: "اتصل بنا الآن",
        lblQuickWhatsapp: "راسلنا واتساب",
        footerAboutDesc: "خبرة، ثقة، وراحة تبدأ من منزلك. شريككم الأمثل للعناية بنظافة وترتيب منازلكم في قطر.",
        footerLinksTitle: "روابط سريعة",
        lnkHome: "الرئيسية",
        lnkServices: "خدماتنا",
        lnkWhy: "مميزاتنا",
        lnkGallery: "معرض الصور",
        footerContactTitle: "اتصل بنا",
        footerCopyText: "جميع الحقوق محفوظة &copy; 2026 أرض الضيافة للخدمات والتجارة.",
        toastSuccess: "جاري فتح الواتساب للتواصل معنا...",
        langBtnText: "English"
    },
    en: {
        title: "Ard Al-Dyafa | Domestic Maids & Workers Monthly Contracts in Qatar",
        topBarZone: "Qatar",
        navSubtitle: "for Services & Trade",
        menuHome: "Home",
        menuServices: "Services",
        menuWhy: "Why Choose Us",
        menuGallery: "Advertisements",
        navCtaText: "Book Now",
        heroBadge: "Ard Al-Dyafa for Services & Trade",
        heroTitle: "Are you looking for comfort and full attention to your home?",
        heroSubtitle: "We provide highly experienced professional domestic workers for all household chores, with flexible monthly contracts tailored to family needs, ensuring reliable service and continuous quality in the State of Qatar.",
        heroBtnBook: "Book via WhatsApp",
        heroBtnCallText: "Contact Us",
        cardFeatureTitle: "What Makes Us Different?",
        bullet1: "Trained & highly experienced workers",
        bullet2: "Full commitment to schedule & quality",
        bullet3: "Affordable rates & flexible contracts",
        bullet4: "24/7 client support & operations",
        cardActionText: "Request Maid Booking",
        statLblClients: "Happy Customers",
        statLblExperience: "Years of Experience",
        statLblTrained: "Trained & Trusted Maids",
        statLblSupport: "Continuous Booking",
        servicesBadge: "What We Offer",
        servicesTitle: "Our Services Include",
        servicesSubtitle: "We meet all your domestic care needs with extreme precision and care through our specialized team.",
        srv1Title: "Home Cleaning & Organizing",
        srv1Desc: "Thorough cleaning of rooms, salons, villas, and apartments ensuring a healthy, clean environment.",
        srv2Title: "Laundry & Ironing",
        srv2Desc: "Caring for your garments, washing and ironing with professional techniques that preserve fabrics.",
        srv3Title: "Kitchen & Bathroom Cleaning",
        srv3Desc: "Deep sanitization of kitchens, grease removal, and toilet disinfection with premium cleansers.",
        srv4Title: "Daily House Maintenance",
        srv4Desc: "Daily tidying up and constant attention to the details of your home to keep it clean and ready.",
        srv5Title: "Various Domestic Tasks",
        srv5Desc: "Flexible assistance in all other household duties requested by families to save time and effort.",
        whyUsBadge: "Why Choose Us",
        whyUsTitle: "Leaders in Providing Domestic Services",
        whyUsDesc: "At Ard Al-Dyafa for Services & Trade, we build bridges of trust and commitment. We are not just a service provider, but partners in providing comfort and security for your family in Qatar through highly trained professionals.",
        btnWhyUsText: "Contact Us Today",
        feat1Title: "Trained & Experienced",
        feat1Desc: "Workers possessing high skills in cleaning, organizing, and managing households with utmost politeness.",
        feat2Title: "Full Punctuality",
        feat2Desc: "We respect your valuable time, guaranteeing prompt arrival and completion of all tasks.",
        feat3Title: "Professionalism & Quality",
        feat3Desc: "We pay attention to the smallest details to ensure a luxurious cleaning experience that wins your trust.",
        feat4Title: "Flexible Rates & Contracts",
        feat4Desc: "Various monthly contract options and price plans designed to match your budget and family size.",
        galleryBadge: "Advertisements",
        galleryTitle: "Ads & Services Exhibition",
        gallerySubtitle: "Browse our current flyers and announcements for domestic maid services in the State of Qatar.",
        bookBadgeTxt: "Contact Us Today",
        bookInfoTitle: "Start Your Home Comfort Journey",
        bookInfoDesc: "Ard Al-Dyafa for Services & Trade - Experience, trust, and comfort starting from your home. Contact us directly or message us on WhatsApp to confirm your booking and monthly contract.",
        phoneLabel1: "Booking & Inquiries (Phone 1):",
        phoneLabel2: "Booking & Inquiries (Phone 2):",
        locationLabel: "Service Range:",
        locationValue: "All areas of the State of Qatar",
        lblQuickCall: "Call Us Now",
        lblQuickWhatsapp: "Text Us on WhatsApp",
        footerAboutDesc: "Experience, trust, and comfort starting from your home. Your ideal partner to take care of the neatness and cleanliness of your home in Qatar.",
        footerLinksTitle: "Quick Links",
        lnkHome: "Home",
        lnkServices: "Our Services",
        lnkWhy: "Why Choose Us",
        lnkGallery: "Gallery",
        footerContactTitle: "Contact Us",
        footerCopyText: "All Rights Reserved &copy; 2026 Ard Al-Dyafa for Services & Trade.",
        toastSuccess: "Opening WhatsApp to chat with us...",
        langBtnText: "العربية"
    }
};

// State Variables
let currentLang = localStorage.getItem('ard_dyafa_lang') || 'ar';
let activeGallerySlide = 0;
const phoneList = ["97430207961", "97455487821"];

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle-btn');

// Elements that require translation
const translatableElements = {
    'top-bar-zone': 'topBarZone',
    'nav-subtitle': 'navSubtitle',
    'menu-home': 'menuHome',
    'menu-services': 'menuServices',
    'menu-why': 'menuWhy',
    'menu-gallery': 'menuGallery',
    'nav-cta-text': 'navCtaText',
    'hero-badge-txt': 'heroBadge',
    'hero-main-title': 'heroTitle',
    'hero-desc-txt': 'heroSubtitle',
    'hero-btn-book': 'heroBtnBook',
    'hero-btn-call-text': 'heroBtnCallText',
    'card-feature-title': 'cardFeatureTitle',
    'bullet-1': 'bullet1',
    'bullet-2': 'bullet2',
    'bullet-3': 'bullet3',
    'bullet-4': 'bullet4',
    'card-action-text': 'cardActionText',
    'stat-lbl-clients': 'statLblClients',
    'stat-lbl-experience': 'statLblExperience',
    'stat-lbl-trained': 'statLblTrained',
    'stat-lbl-support': 'statLblSupport',
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
    'btn-why-us-text': 'btnWhyUsText',
    'feat-1-title': 'feat1Title',
    'feat-1-desc': 'feat1Desc',
    'feat-2-title': 'feat2Title',
    'feat-2-desc': 'feat2Desc',
    'feat-3-title': 'feat3Title',
    'feat-3-desc': 'feat3Desc',
    'feat-4-title': 'feat4Title',
    'feat-4-desc': 'feat4Desc',
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
    'lbl-quick-call': 'lblQuickCall',
    'lbl-quick-whatsapp': 'lblQuickWhatsapp',
    'footer-about-desc': 'footerAboutDesc',
    'footer-links-title': 'footerLinksTitle',
    'lnk-home': 'lnkHome',
    'lnk-services': 'lnkServices',
    'lnk-why': 'lnkWhy',
    'lnk-gallery': 'lnkGallery',
    'footer-contact-title': 'footerContactTitle',
    'footer-copy-text': 'footerCopyText'
};

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
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
            element.innerHTML = translations[lang][key];
        }
    }

    // Switch text inside language toggle button
    langToggleBtn.textContent = translations[lang].langBtnText;

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
            if (dir === 'rtl') {
                prevSlide();
            } else {
                nextSlide();
            }
        } else if (touchEndX - touchStartX > threshold) {
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

// Custom Toast
function showToast(message, icon = '✓') {
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
    }, 3000);
}
