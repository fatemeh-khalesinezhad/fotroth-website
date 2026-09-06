/**
 * FOTROTH — AMIR MOGHADAM
 * LUXURY PERSONAL BRAND INTERACTIVE PLATFORM
 * GSAP + Lenis + Bilingual Engine + Web Audio + Custom Cursor
 */

document.addEventListener('DOMContentLoaded', () => {

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // ==========================================
  // 1. BILINGUAL DICTIONARY ENGINE (EN / FA)
  // ==========================================
  const i18n = {
    en: {
      nav_works: "01. Selected Works",
      nav_commercial: "02. Commercial",
      nav_philosophy: "03. Philosophy",
      nav_academy: "04. Academy",
      nav_journal: "05. Journal",
      nav_contact: "06. Inquiry",
      
      hero_eyebrow: "THE VISUAL HEADQUARTERS OF",
      hero_subtitle: "Visual Artist • International Photographer • Photography Educator • Creative Director",
      hero_status: "PARIS / DUBAI / TEHRAN",
      hero_explore_btn: "EXPLORE EXHIBITIONS",
      hero_book_btn: "PRIVATE INQUIRY",
      hero_roles: "Visual Artist • International Photographer • Educator • Creative Director",
      
      stat_years: "Years Craft",
      stat_awards: "Global Honors",
      stat_campaigns: "Commercials",
      
      works_tag: "EXHIBITION COLLECTION",
      works_title: "Signature Projects",
      works_lead: "Curated editorial campaigns, fine art series, and automotive commercial works executed with uncompromising precision.",
      
      filter_all: "ALL EXHIBITIONS",
      filter_fashion: "HIGH FASHION",
      filter_automotive: "COMMERCIAL & AUTOMOTIVE",
      filter_fineart: "FINE ART MONOCHROME",
      filter_architecture: "ARCHITECTURAL",
      
      view_exhibition: "ENTER EXHIBITION",
      
      p1_desc: "An exploration of chiaroscuro lighting and sculptured silk drapery shot inside a 19th-century Parisian studio.",
      p2_desc: "Midnight rain production in Stuttgart capturing the pure silhouette and metallic reflection of performance engineering.",
      p3_desc: "Pure black and white emotional portraits investigating human posture, silence, and timeless light density.",
      p4_desc: "A study of concrete volume, negative space, and golden hour light cast across modern Tokyo architectural landmarks.",
      p5_desc: "Surreal desert landscape campaign capturing flowing silk silhouettes against raw dune topography at twilight.",
      
      comm_tag: "CREATIVE PARTNERSHIPS",
      comm_title: "Commercial Excellence",
      comm_lead: "Serving global luxury houses, automotive legends, and prestigious publications with unified visual direction.",
      
      pillar_1_title: "Cinematic Light Engineering",
      pillar_1_desc: "Custom lighting diagrams and shadow sculpting tailored specifically to enhance garment textures, vehicle lines, and spatial volumes.",
      pillar_2_title: "End-to-End Creative Direction",
      pillar_2_desc: "From concept development, casting, location scouting in Europe and Middle East, to final analog & digital color science.",
      pillar_3_title: "Uncompromising Quality Standard",
      pillar_3_desc: "Medium format 100MP captures delivering pristine detail for global billboard installations, high-art coffee table books, and digital platforms.",
      
      philo_tag: "THE ARTIST MANIFESTO",
      philo_quote: '"Every image is a dialogue between light, emotion, and time. We do not merely capture what exists; we reveal what usually escapes the naked eye."',
      philo_1_title: "The Geometry of Silence",
      philo_1_desc: "In a world saturated with noisy visual content, luxury resides in restraint. True impact is achieved when every line and shadow serves a deliberate visual purpose.",
      philo_2_title: "Light as a Sculptural Medium",
      philo_2_desc: "Light is not merely illumination — it is physical material. Controlling its falloff, reflection, and gradient gives character to form.",
      philo_3_title: "Emotional Truth",
      philo_3_desc: "Whether directing a global automotive campaign or a high-fashion portrait, technical perfection is meaningless without an underlying pulse of human emotion.",
      
      acad_tag: "EXCLUSIVE MASTERCLASS & MENTORSHIP",
      acad_title: "Fotroth Private Academy",
      acad_lead: "An elite photography & creative direction institute. Reserved for advanced photographers, directors, and artists seeking master-level visual command.",
      acad_prog1_title: "The Masterclass in Commercial Light & Shadow",
      acad_prog1_desc: "Master complex studio strobe configurations, cinema continuous lighting, atmospheric diffusion, and shape manipulation for high-fashion & commercial products.",
      acad_prog2_title: "1-on-1 Creative Direction & Brand Mastery",
      acad_prog2_desc: "A 6-month private mentorship program designed to transform your photography practice into a high-value international brand with elite commercial clients.",
      acad_apply_btn: "APPLY FOR ADMISSION",
      acad_quote: '"Amir doesn\'t just teach light settings; he changes how you observe the physical universe. My agency rate quadrupled within 6 months."',
      
      journ_tag: "EDITORIAL ESSAYS & NOTES",
      journ_title: "Fotroth Journal",
      journ_lead: "Reflections on visual aesthetics, medium format analog philosophy, and the evolving language of commercial luxury.",
      read_essay: "READ ESSAY",
      
      contact_tag: "PRIVATE INQUIRY",
      contact_title: "Initiate a Collaboration",
      contact_lead: "For commercial campaign commissions, fine art print acquisitions, gallery exhibitions, or private academy mentorship.",
      rep_title: "GLOBAL REPRESENTATION",
      
      form_name_lbl: "YOUR NAME / ORGANIZATION *",
      form_email_lbl: "EMAIL ADDRESS *",
      form_purpose_lbl: "NATURE OF INQUIRY *",
      form_budget_lbl: "APPROXIMATE BUDGET / SCALE",
      form_msg_lbl: "PROJECT BRIEF / VISION DETAILS *",
      form_submit_btn: "SUBMIT PRIVATE INQUIRY",
      
      purp_comm: "Commercial Campaign",
      purp_edit: "Editorial Shoot",
      purp_acad: "Academy Admission",
      purp_print: "Print Acquisition",
      
      footer_desc: "International Photography, Visual Art & Creative Direction Studio.",
      footer_tagline: "LUXURY COMMERCIAL • EDITORIAL • CINEMATIC"
    },
    
    fa: {
      nav_works: "۰۱. آثار منتخب",
      nav_commercial: "۰۲. پروژه‌های تجاری",
      nav_philosophy: "۰۳. فلسفه هنری",
      nav_academy: "۰۴. آکادمی فتروث",
      nav_journal: "۰۵. ژورنال",
      nav_contact: "۰۶. درخواست همکاری",
      
      hero_eyebrow: "مقر رسمی هنری",
      hero_subtitle: "هنرمند بصری • عکاس بین‌المللی • مدرس برجسته عکاسی • مدیر خلاقیت",
      hero_status: "پاریس / دبی / تهران",
      hero_explore_btn: "ورود به نمایشگاه‌ها",
      hero_book_btn: "درخواست همکاری اختصاصی",
      hero_roles: "هنرمند بصری • عکاس بین‌المللی • مدرس • مدیر خلاقیت",
      
      stat_years: "سال تجربه حرفه‌ای",
      stat_awards: "افتخار بین‌المللی",
      stat_campaigns: "کمپین تجاری",
      
      works_tag: "مجموعه نمایشگاهی",
      works_title: "پروژه‌های شاخص",
      works_lead: "کمپین‌های ادیتوریال، مجموعه‌های هنر والاو پروژه‌های تجاری خودرو با دقت و ظرافت بی‌بدیل.",
      
      filter_all: "همه آثار",
      filter_fashion: "مد و فشن فاخر",
      filter_automotive: "تجاری و خودرو",
      filter_fineart: "تک‌رنگ هنر والا",
      filter_architecture: "معماری مینی‌مال",
      
      view_exhibition: "مشاهده نمایشگاه",
      
      p1_desc: "کاوش در هنر سایه‌روشن و پارچه‌های ابریشمی مجسمه‌گون در آتلیه پاریسی قرن ۱۹.",
      p2_desc: "تولید شبانه در زیر باران اشتوتگارت برای ثبت فرم خالص و انعکاس مهندسی عملکرد بالا.",
      p3_desc: "پرتره‌های عاطفی سیاه و سفید در بررسی فرم انسانی، سکوت و چگالی نور جاودانه.",
      p4_desc: "مطالعه احجام بتنی، فضای منفی و نور طلایی بر فراز نمادهای معماری مدرن توکیو.",
      p5_desc: "کمپین سورئال در کویر برای ثبت پارچه‌های ابریشمی بر فراز تپه‌های شن در غروب آفتاب.",
      
      comm_tag: "همکاری‌های خلاقانه",
      comm_title: "تعالی در عرصه تجاری",
      comm_lead: "ارائه خدمات هدایت بصری یکپارچه به برندهای بین‌المللی، برندهای فاخر و مجلات معتبر جهان.",
      
      pillar_1_title: "مهندسی سینمایی نور",
      pillar_1_desc: "طراحی اختصاصی نقشه نورپردازی و فرم‌دهی سایه برای تجلی بافت پارچه، خطوط خودرو و احجام فضایی.",
      pillar_2_title: "مدیریت خلاقیت سرتاسری",
      pillar_2_desc: "از ایده‌پردازی اولیه، انتخاب مدل و مکان‌یابی در اروپا و خاورمیانه تا علوم رنگ دیجیتال و آنالوگ.",
      pillar_3_title: "استاندارد کیفی بی‌همتا",
      pillar_3_desc: "ثبت با کیفیت ۱۰۰ مگاپیکسل مدیوم فرمت برای بیلبوردهای جهانی، کتاب‌های نفیس هنری و پلتفرم‌های دیجیتال.",
      
      philo_tag: "بیانیه هنری",
      philo_quote: '«هر تصویر گفتگویی است میان نور، احساس و زمان. ما تنها آنچه وجود دارد را ثبت نمی‌کنیم؛ بلکه آنچه از چشم عادی پنهان می‌ماند را آشکار می‌سازیم.»',
      philo_1_title: "هندسه سکوت",
      philo_1_desc: "در دنیای پرهیاهوی تصویر، تجمل حقیقی در خویشتن‌داری است. تاثیر واقعی زمانی رخ می‌دهد که هر خط و سایه در خدمت هدفی والاتر باشد.",
      philo_2_title: "نور به مثابه ماده مجسمه‌سازی",
      philo_2_desc: "نور تنها روشنایی نیست — ماده‌ای فیزیکی است. کنترل گرادیان و بازتاب آن به فرم شخصیت می‌بخشد.",
      philo_3_title: "حقیقت عاطفی",
      philo_3_desc: "چه در کارگردانی کمپین بین‌المللی خودرو و چه در پرتره‌ای ادیتوریال، کمال فنی بدون نبض احساس انسانی بی‌معناست.",
      
      acad_tag: "مسترکلاس و مسترشیپ اختصاصی",
      acad_title: "آکادمی خصوصی فتروث",
      acad_lead: "موسسه تخصصی عکاسی و مدیریت خلاقیت. ویژه عکاسان پیشرفته، کارگردانان و هنرمندانی که خواهان تسلط بر بینش بصری هستند.",
      acad_prog1_title: "مسترکلاس نور و سایه تجاری",
      acad_prog1_desc: "تسلط بر چیدمان‌های پیچیده استودیو، نورپردازی مداوم سینمایی، انتشار اتمسفریک و خلق فرم برای فشن و محصولات تجاری.",
      acad_prog2_title: "مسترشیپ ۱ به ۱ مدیریت خلاقیت و برند",
      acad_prog2_desc: "برنامه ۶ ماهه اختصاصی برای تبدیل عکاسی شما به یک برند بین‌المللی پرارزش با مشتریان فاخر جهانی.",
      acad_apply_btn: "ارسال درخواست پذیرش",
      acad_quote: '«امیر تنها تنظیمات نور را آموزش نمی‌دهد؛ او نگاه شما به جهان فیزیکی را دگرگون می‌سازد. درآمدم ظرف ۶ ماه ۴ برابر شد.»',
      
      journ_tag: "جستارهای هنری و یادداشت‌ها",
      journ_title: "ژورنال فتروث",
      journ_lead: "تأملاتی درباره زیبایی‌شناسی بصری، فلسفه آنالوگ مدیوم فرمت و زبان در حال تحول برندهای فاخر.",
      read_essay: "مطالعه مقاله‌",
      
      contact_tag: "درخواست همکاری",
      contact_title: "آغاز یک همکاری ماندگار",
      contact_lead: "برای سفارش کمپین‌های تجاری، خرید نسخه‌های هنری محدود، برگزاری نمایشگاه یا ثبت‌نام در آکادمی.",
      rep_title: "نمایندگی‌های بین‌المللی",
      
      form_name_lbl: "نام شما / نام سازمان *",
      form_email_lbl: "پست الکترونیک *",
      form_purpose_lbl: "موضوع درخواست *",
      form_budget_lbl: "بودجه تخمینی / مقیاس پروژه",
      form_msg_lbl: "شرح پروژه و بینش مد نظر *",
      form_submit_btn: "ارسال درخواست اختصاصی",
      
      purp_comm: "کمپین تجاری",
      purp_edit: "عکاسی ادیتوریال",
      purp_acad: "پذیرش آکادمی",
      purp_print: "خرید نسخه هنری",
      
      footer_desc: "استودیو بین‌المللی عکاسی، هنر بصری و مدیریت خلاقیت.",
      footer_tagline: "تجاری فاخر • ادیتوریال • سینمایی"
    }
  };

  let currentLang = 'en';

  function setLanguage(lang) {
    currentLang = lang;
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

    const langBtnText = document.getElementById('current-lang');
    if (langBtnText) {
      langBtnText.textContent = lang === 'en' ? 'FA' : 'EN';
    }

    // Update all data-i18n elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = i18n[lang][key];
        } else {
          el.textContent = i18n[lang][key];
        }
      }
    });

    // Refresh GSAP ScrollTrigger layout after language height shifts
    if (window.ScrollTrigger) {
      setTimeout(() => ScrollTrigger.refresh(), 200);
    }
  }

  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'fa' : 'en';
      setLanguage(nextLang);
    });
  }

  // ==========================================
  // 2. SMOOTH SCROLLING (LENIS) + GSAP TICKER
  // ==========================================
  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0, 0);
    }
  }

  // Smooth anchor navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(targetEl, { offset: -80 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });

  // ==========================================
  // 3. THEME TOGGLE ENGINE (DARK / LIGHT)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('fotroth_theme', theme);
    if (themeIcon) {
      themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
      if (window.lucide) window.lucide.createIcons();
    }
  }

  const savedTheme = localStorage.getItem('fotroth_theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  // ==========================================
  // 4. CUSTOM LUXURY CURSOR
  // ==========================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorFollower = document.getElementById('cursor-follower');
  const cursorText = document.getElementById('cursor-text');

  if (cursorDot && cursorFollower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateCursor() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover triggers for custom cursor
    document.querySelectorAll('.project-card, .btn-primary, .btn-gold, .journal-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('active');
        if (item.classList.contains('project-card')) {
          if (cursorText) cursorText.textContent = 'EXHIBITION';
        } else if (item.classList.contains('journal-item')) {
          if (cursorText) cursorText.textContent = 'READ';
        } else {
          if (cursorText) cursorText.textContent = 'EXPLORE';
        }
      });
      item.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 5. VIEWFINDER OVERLAY & AMBIENT AUDIO SYSTEM
  // ==========================================
  const vfToggle = document.getElementById('vf-toggle');
  const vfOverlay = document.getElementById('viewfinder-overlay');

  if (vfToggle && vfOverlay) {
    vfToggle.addEventListener('click', () => {
      vfOverlay.classList.toggle('hidden');
      playCameraShutterSound();
    });
  }

  // Web Audio Camera Shutter Synth
  let audioCtx = null;

  function playCameraShutterSound() {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(240, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch(e) {}
  }

  // Subtle Ambient Soundscape Engine
  const ambientAudio = document.getElementById('ambient-audio');
  const soundToggleBtn = document.getElementById('sound-toggle');

  let targetVolume = 0.15; // Low, subtle background atmosphere
  let fadeInterval = null;
  let isMuted = sessionStorage.getItem('fotroth_sound_muted') === 'true';

  function updateAudioUI(playing) {
    if (!soundToggleBtn) return;
    const iconName = playing ? 'volume-2' : 'volume-x';
    soundToggleBtn.innerHTML = `<i data-lucide="${iconName}" id="sound-icon"></i>`;
    if (window.lucide) window.lucide.createIcons();

    if (playing) {
      soundToggleBtn.classList.add('sound-active');
      soundToggleBtn.setAttribute('aria-label', 'Mute Soundscape');
      soundToggleBtn.setAttribute('title', 'Mute Soundscape');
    } else {
      soundToggleBtn.classList.remove('sound-active');
      soundToggleBtn.setAttribute('aria-label', 'Enable Soundscape');
      soundToggleBtn.setAttribute('title', 'Enable Soundscape');
    }
  }

  function fadeInAudio() {
    if (!ambientAudio) return;
    ambientAudio.volume = 0;
    const playPromise = ambientAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        clearInterval(fadeInterval);
        fadeInterval = setInterval(() => {
          if (ambientAudio.volume < targetVolume) {
            ambientAudio.volume = Math.min(targetVolume, ambientAudio.volume + 0.015);
          } else {
            clearInterval(fadeInterval);
          }
        }, 80);
        updateAudioUI(true);
      }).catch(() => {
        // Autoplay blocked by browser policy — wait for user interaction
        updateAudioUI(false);
        attachInteractionListener();
      });
    }
  }

  function fadeOutAudio() {
    if (!ambientAudio) return;
    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
      if (ambientAudio.volume > 0.01) {
        ambientAudio.volume = Math.max(0, ambientAudio.volume - 0.02);
      } else {
        ambientAudio.pause();
        ambientAudio.volume = 0;
        clearInterval(fadeInterval);
        updateAudioUI(false);
      }
    }, 60);
  }

  function toggleAudio() {
    if (!ambientAudio) return;
    if (ambientAudio.paused || ambientAudio.volume === 0) {
      isMuted = false;
      sessionStorage.setItem('fotroth_sound_muted', 'false');
      fadeInAudio();
    } else {
      isMuted = true;
      sessionStorage.setItem('fotroth_sound_muted', 'true');
      fadeOutAudio();
    }
  }

  function attachInteractionListener() {
    const startAudioOnInteraction = () => {
      if (!isMuted && ambientAudio && ambientAudio.paused) {
        fadeInAudio();
      }
      window.removeEventListener('click', startAudioOnInteraction);
      window.removeEventListener('keydown', startAudioOnInteraction);
      window.removeEventListener('touchstart', startAudioOnInteraction);
      window.removeEventListener('scroll', startAudioOnInteraction);
    };

    window.addEventListener('click', startAudioOnInteraction, { once: true });
    window.addEventListener('keydown', startAudioOnInteraction, { once: true });
    window.addEventListener('touchstart', startAudioOnInteraction, { once: true });
    window.addEventListener('scroll', startAudioOnInteraction, { once: true });
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAudio();
    });
  }

  // Initial Audio Trigger
  if (!isMuted) {
    fadeInAudio();
  } else {
    updateAudioUI(false);
  }

  // ==========================================
  // 6. HERO IMAGE SLIDER & TIME DISPLAY
  // ==========================================
  const heroImgs = document.querySelectorAll('.hero-bg-img');
  const dots = document.querySelectorAll('.slide-dots .dot');
  const slideNum = document.getElementById('slide-num');
  let currentSlide = 0;

  function goToSlide(index) {
    heroImgs.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    if (slideNum) {
      slideNum.textContent = `0${index + 1} / 03`;
    }
    currentSlide = index;
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide'));
      goToSlide(idx);
    });
  });

  // Auto cycle hero slides every 6s
  setInterval(() => {
    let next = (currentSlide + 1) % heroImgs.length;
    goToSlide(next);
  }, 6000);

  // Time Display Update
  function updateTime() {
    const timeDisplay = document.getElementById('local-time-display');
    if (!timeDisplay) return;

    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    
    // Paris (UTC+1/2)
    const parisTime = new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Europe/Paris' }).format(now);
    // Dubai (UTC+4)
    const dubaiTime = new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Asia/Dubai' }).format(now);
    // Tehran (UTC+3.5)
    const tehranTime = new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Asia/Tehran' }).format(now);

    timeDisplay.textContent = `PARIS ${parisTime} • DUBAI ${dubaiTime} • TEHRAN ${tehranTime}`;
  }
  setInterval(updateTime, 10000);
  updateTime();

  // Header Scroll Effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Logic
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('active');
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }

  // ==========================================
  // 7. PROJECT FILTERING & LIGHTBOX MODAL
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Detailed Exhibition Data for Lightbox
  const projectsData = {
    p1: {
      title: "Silent Shadows: Couture in Motion",
      client: "VOGUE ITALIA • 2025",
      category: "HIGH FASHION EDITORIAL",
      specs: "Leica SL2 • 50mm Summilux-SL f/1.4 • Profoto B10X Continuous",
      location: "Parisian Studio, Rue du Faubourg Saint-Honoré",
      desc: "An exploration of chiaroscuro lighting and sculptured silk drapery shot inside a 19th-century Parisian studio. Inspired by classic Renaissance painting techniques, each frame relies on subtle falloff and deep contrast shadow to sculpt form.",
      gallery: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    p2: {
      title: "Porsche 911 GT: Velocity & Rain",
      client: "PORSCHE AG • STUTTGART 2024",
      category: "AUTOMOTIVE COMMERCIAL",
      specs: "Hasselblad H6D-100c • HC 2.2/100mm • Broncolor Scoro 3200",
      location: "Stuttgart Production Soundstage",
      desc: "Midnight rain production capturing the pure silhouette and metallic reflection of Porsche engineering. Over 10,000 liters of recycled water mist were utilized alongside a 12-meter overhead diffusion bank to articulate the aerodynamic curves.",
      gallery: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    p3: {
      title: "The Anima Series: Silver Halide",
      client: "LEICA GALLERY • FINE ART 2024",
      category: "FINE ART MONOCHROME",
      specs: "Leica M11 Monochrom • Noctilux-M 50mm f/0.95 ASPH",
      location: "Private Gallery Exhibition",
      desc: "Pure black and white emotional portraits investigating human posture, silence, and timeless light density. Printed on 310gsm archival baryta paper using silver gelatin process for museum-grade longevity.",
      gallery: [
        "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    p4: {
      title: "Tokyo Brutalism: Geometry at Dusk",
      client: "ARCHITECTURAL DIGEST • TOKYO 2025",
      category: "ARCHITECTURAL FINE ART",
      specs: "Alpa Max • Rodenstock 23mm Tilt-Shift",
      location: "Ginza & Nakagin, Tokyo",
      desc: "A study of concrete volume, negative space, and golden hour light cast across modern Tokyo architectural landmarks. Perspective corrections were rendered entirely optically in-camera.",
      gallery: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    p5: {
      title: "Desert Void: Middle East Couture",
      client: "HARPER'S BAZAAR • DUBAI 2023",
      category: "HIGH FASHION CAMPAIGN",
      specs: "Hasselblad H6D • Profoto B10X High-Speed Sync",
      location: "Al Qudra Dunes, Dubai",
      desc: "Surreal desert landscape campaign capturing flowing silk silhouettes against raw dune topography at twilight. Ambient sunset color was balanced with high-speed strobe duration.",
      gallery: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
      ]
    }
  };

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-project-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectModal(id) {
    const data = projectsData[id];
    if (!data || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="modal-gallery-head">
        <span class="project-badge">${data.client}</span>
        <h2 class="modal-title" style="font-family: var(--font-serif); font-size: 32px; margin: 16px 0 8px;">${data.title}</h2>
        <p style="color: var(--accent-red); font-size: 12px; font-weight: 700; letter-spacing: 1.5px; margin-bottom: 24px;">${data.category} • ${data.specs}</p>
      </div>

      <div class="modal-main-image" style="margin-bottom: 24px;">
        <img src="${data.gallery[0]}" alt="${data.title}" style="width:100%; border-radius: var(--radius-sm); max-height: 500px; object-fit: cover;" referrerPolicy="no-referrer" />
      </div>

      <div class="modal-description" style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 32px;">
        <p>${data.desc}</p>
        <p style="margin-top: 12px; font-size: 13px; color: var(--text-muted);"><i data-lucide="map-pin" style="width:14px; height:14px; display:inline-block; vertical-align:middle; margin-right:4px;"></i> Location: ${data.location}</p>
      </div>

      <div class="modal-subgallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        ${data.gallery.slice(1).map(url => `<img src="${url}" style="width:100%; height:180px; object-fit:cover; border-radius:var(--radius-sm);" referrerPolicy="no-referrer" />`).join('')}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    modal.classList.remove('hidden');
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      if (modal) modal.classList.add('hidden');
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
    const academyModal = document.getElementById('academy-modal');
    if (e.target === academyModal) {
      academyModal.classList.add('hidden');
    }
  });

  // ==========================================
  // 8. ACADEMY MODAL LOGIC
  // ==========================================
  const academyModal = document.getElementById('academy-modal');
  const academyModalClose = document.getElementById('academy-modal-close');
  const academyTitleEl = document.getElementById('academy-modal-program-title');

  document.querySelectorAll('.open-academy-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prog = btn.getAttribute('data-program');
      if (academyTitleEl) {
        academyTitleEl.textContent = `Admission for ${prog}`;
      }
      if (academyModal) {
        academyModal.classList.remove('hidden');
      }
    });
  });

  if (academyModalClose) {
    academyModalClose.addEventListener('click', () => {
      if (academyModal) academyModal.classList.add('hidden');
    });
  }

  const academyForm = document.getElementById('academy-app-form');
  if (academyForm) {
    academyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your admission dossier has been received by Fotroth Academy Management. We will review your portfolio within 48 hours.');
      if (academyModal) academyModal.classList.add('hidden');
      academyForm.reset();
    });
  }

  // ==========================================
  // 9. JOURNAL DRAWER READ LOGIC
  // ==========================================
  const journalDrawer = document.getElementById('journal-drawer');
  const journalDrawerClose = document.getElementById('journal-drawer-close');
  const journalArticleBody = document.getElementById('journal-article-body');

  const journalData = {
    art1: {
      title: "The Geometry of Light in High-Fashion Noir",
      date: "OCTOBER 2025",
      cat: "LIGHT & ATMOSPHERE",
      body: `
        <span class="section-tag">EDITORIAL ESSAY</span>
        <h2 style="font-family: var(--font-serif); font-size: 32px; margin: 16px 0;">The Geometry of Light in High-Fashion Noir</h2>
        <p style="color: var(--accent-red); font-size: 12px; margin-bottom: 24px;">BY AMIR MOGHADAM • 8 MIN READ</p>
        
        <p style="line-height: 1.8; color: var(--text-secondary); margin-bottom: 16px;">
          In contemporary commercial imagery, there is a pervasive temptation to eliminate shadows in favor of flat, even lighting. However, true luxury aesthetic demands mystery. Shadows are not merely the absence of light; they are positive visual elements that establish structure, rhythm, and emotional weight.
        </p>

        <blockquote style="border-left: 2px solid var(--accent-red); padding-left: 20px; font-style: italic; margin: 24px 0; font-family: var(--font-serif); font-size: 20px;">
          "When you illuminate everything, you reveal nothing. Precision lighting is the art of strategic omission."
        </blockquote>

        <p style="line-height: 1.8; color: var(--text-secondary);">
          Working with hard Fresnel spots and knife-edge cutters allows a photographer to paint with directional light, sculpting silk and velvet into architectural monuments.
        </p>
      `
    },
    art2: {
      title: "The Tactile Soul of Medium Format Film in a 100MP Digital World",
      date: "AUGUST 2025",
      cat: "ANALOG PHILOSOPHY",
      body: `
        <span class="section-tag">ANALOG PHILOSOPHY</span>
        <h2 style="font-family: var(--font-serif); font-size: 32px; margin: 16px 0;">The Tactile Soul of Medium Format Film</h2>
        <p style="color: var(--accent-red); font-size: 12px; margin-bottom: 24px;">BY AMIR MOGHADAM • 6 MIN READ</p>
        
        <p style="line-height: 1.8; color: var(--text-secondary); margin-bottom: 16px;">
          Despite the incredible resolution of modern 100-megapixel digital sensors, major European fashion houses are increasingly requesting silver halide film captures for top-tier print campaigns.
        </p>
        <p style="line-height: 1.8; color: var(--text-secondary);">
          Film grain acts as an organic texture that breaks the synthetic smoothness of digital rendering, imparting a sense of physical heritage and permanence that aligns seamlessly with luxury brand values.
        </p>
      `
    },
    art3: {
      title: "The Director’s Vision: Translating Brand Identity into Silent Imagery",
      date: "MAY 2025",
      cat: "CREATIVE DIRECTION",
      body: `
        <span class="section-tag">CREATIVE DIRECTION</span>
        <h2 style="font-family: var(--font-serif); font-size: 32px; margin: 16px 0;">The Director’s Vision</h2>
        <p style="color: var(--accent-red); font-size: 12px; margin-bottom: 24px;">BY AMIR MOGHADAM • 10 MIN READ</p>
        
        <p style="line-height: 1.8; color: var(--text-secondary);">
          Creative direction in photography extends far beyond clicking a shutter. It is the architectural orchestration of mood, talent posture, spatial geometry, and color harmony. When directing automotive or high jewelry, every element in the frame must serve the brand's core legacy.
        </p>
      `
    }
  };

  document.querySelectorAll('.open-journal-article').forEach(item => {
    item.addEventListener('click', () => {
      const artId = item.getAttribute('data-id');
      const data = journalData[artId];
      if (data && journalArticleBody && journalDrawer) {
        journalArticleBody.innerHTML = data.body;
        journalDrawer.classList.remove('hidden');
      }
    });
  });

  if (journalDrawerClose) {
    journalDrawerClose.addEventListener('click', () => {
      if (journalDrawer) journalDrawer.classList.add('hidden');
    });
  }

  // ==========================================
  // 10. INQUIRY FORM SUBMISSION
  // ==========================================
  const inquiryForm = document.getElementById('inquiry-form');
  const formStatus = document.getElementById('form-status');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      
      if (formStatus) {
        formStatus.textContent = `Thank you, ${name}. Your inquiry has been logged in Amir Moghadam's private dossier. Our studio director will respond within 24 hours.`;
        formStatus.className = 'form-status success';
        formStatus.classList.remove('hidden');
      }

      inquiryForm.reset();
    });
  }

  // Set Current Year in Footer
  const yearSpan = document.getElementById('year-span');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================
  // 11. GSAP SCROLLTRIGGER REVEAL ANIMATIONS
  // ==========================================
  if (window.gsap && window.ScrollTrigger) {
    // Reveal Section Titles
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    // Reveal Brand Items
    gsap.from('.brand-item', {
      scrollTrigger: {
        trigger: '.brand-grid',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });

    // Reveal Commercial Pillars
    gsap.from('.pillar-card', {
      scrollTrigger: {
        trigger: '.commercial-pillars',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Reveal Academy Cards
    gsap.from('.academy-card', {
      scrollTrigger: {
        trigger: '.academy-cards',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

});
