/**
 * FOTROTH — AMIR MOGHADAM & THE FOTROTH COLLECTIVE
 * LUXURY COMMERCIAL & EDITORIAL PRODUCTION PLATFORM (V1.1 FOUNDATION)
 * Connected directly to FotrothStore and modular /data/ architecture
 */

document.addEventListener('DOMContentLoaded', () => {

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const store = window.FotrothStore || {
    state: { lang: 'en', theme: 'dark' },
    getTranslation: (k) => k,
    getAllTranslations: () => ({}),
    getProjectById: () => null,
    getMemberBySlug: () => null,
    getArticleById: () => null,
    submitAcademyApplication: () => Promise.resolve({ success: true, message: 'Received' }),
    submitInquiry: () => Promise.resolve({ success: true, message: 'Received' })
  };

  // ==========================================
  // 1. BILINGUAL LOCALIZATION ENGINE (EN / FA)
  // ==========================================
  const htmlEl = document.documentElement;
  let currentLang = localStorage.getItem('fotroth_lang') || 'en';

  function setLanguage(lang) {
    currentLang = lang;
    store.state.lang = lang;
    localStorage.setItem('fotroth_lang', lang);
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

    const langBtnText = document.getElementById('current-lang');
    if (langBtnText) {
      langBtnText.textContent = lang === 'en' ? 'FA' : 'EN';
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = store.getTranslation(key, lang);
      if (val && val !== key) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Refresh Lucide Icons in case buttons updated
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Refresh Works Section if active
    if (typeof window.refreshWorksLanguage === 'function') {
      window.refreshWorksLanguage();
    }

    // Refresh GSAP ScrollTrigger layout after font and height shifts
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

  // Initial language application
  setLanguage(currentLang);

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
    store.state.theme = theme;
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
    function bindCursorTriggers() {
      document.querySelectorAll('.museum-hall-tile, .masonry-card, .collective-card, .btn-primary, .btn-gold, .btn-red, .journal-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
          cursorFollower.classList.add('active');
          if (item.classList.contains('museum-hall-tile')) {
            if (cursorText) cursorText.textContent = currentLang === 'fa' ? 'ورود به تالار' : 'ENTER WING';
          } else if (item.classList.contains('masonry-card')) {
            if (cursorText) cursorText.textContent = currentLang === 'fa' ? 'نمایشگاه' : 'EXHIBITION';
          } else if (item.classList.contains('collective-card')) {
            if (cursorText) cursorText.textContent = currentLang === 'fa' ? 'رزومه' : 'DOSSIER';
          } else if (item.classList.contains('journal-item')) {
            if (cursorText) cursorText.textContent = currentLang === 'fa' ? 'مطالعه' : 'READ';
          } else {
            if (cursorText) cursorText.textContent = currentLang === 'fa' ? 'مشاهده' : 'EXPLORE';
          }
        });
        item.addEventListener('mouseleave', () => {
          cursorFollower.classList.remove('active');
        });
      });
    }
    window.bindCursorTriggers = bindCursorTriggers;
    bindCursorTriggers();
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

  // Ambient Soundscape Engine
  const ambientAudio = document.getElementById('ambient-audio');
  const soundToggleBtn = document.getElementById('sound-toggle');

  let targetVolume = 0.15;
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

  setInterval(() => {
    let next = (currentSlide + 1) % heroImgs.length;
    goToSlide(next);
  }, 6000);

  function updateTime() {
    const timeDisplay = document.getElementById('local-time-display');
    if (!timeDisplay) return;

    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    
    const parisTime = new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Europe/Paris' }).format(now);
    const dubaiTime = new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Asia/Dubai' }).format(now);
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
  // 7. MUSEUM EXHIBITION HALLS & MASONRY GALLERY
  // ==========================================
  const hallsView = document.getElementById('works-halls-view');
  const hallsContainer = document.getElementById('museum-halls-container');
  const categoryView = document.getElementById('works-category-view');
  const stickyNav = document.getElementById('works-sticky-nav');
  const returnHallsBtn = document.getElementById('btn-return-halls');
  const categoryPillsContainer = document.getElementById('category-pills-container');
  const categoryCuratorialHeader = document.getElementById('category-curatorial-header');
  const categoryMasonryGrid = document.getElementById('category-masonry-grid');

  // Lightbox Modal Elements
  const projectModal = document.getElementById('project-modal');
  const projectModalBody = document.getElementById('modal-project-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalHallTag = document.getElementById('modal-project-hall-tag');
  const modalCounter = document.getElementById('modal-project-counter');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');

  let activeCategory = null;
  let activeCategoryProjects = [];
  let currentModalProjectIndex = -1;
  let currentModalGalleryImageIndex = 0;

  // Render Grand Museum Halls (Large Full-Width Panoramic Tiles)
  function renderMuseumHalls() {
    if (!hallsContainer) return;
    const categories = store.getCategories();
    const isFa = currentLang === 'fa';
    const countSuffix = store.getTranslation('curated_works_count', currentLang) || (isFa ? 'اثر نمایشگاهی' : 'CURATED EXHIBITIONS');
    const enterPrompt = store.getTranslation('enter_wing', currentLang) || (isFa ? 'ورود به تالار نمایشگاه' : 'ENTER EXHIBITION WING');

    hallsContainer.innerHTML = categories.map((cat, idx) => {
      const title = isFa && cat.name_fa ? cat.name_fa : cat.name;
      const subtitle = isFa && cat.subtitle_fa ? cat.subtitle_fa : cat.subtitle_en;
      const projectsCount = store.getProjects(cat.id).length;
      const hallNum = cat.hall_num || `WING 0${idx + 1}`;

      return `
        <article class="museum-hall-tile" data-category="${cat.id}" tabindex="0" role="button" aria-label="${title} - ${hallNum}">
          <img src="${cat.cover}" alt="${title}" class="hall-tile-bg" loading="lazy" referrerPolicy="no-referrer" />
          <div class="hall-tile-gradient"></div>
          <div class="hall-content">
            <div class="hall-meta-top">
              <span class="hall-wing-badge">${hallNum}</span>
              <span class="hall-count-badge">${projectsCount} ${countSuffix}</span>
            </div>
            <h3 class="hall-title">${title}</h3>
            <p class="hall-subtitle">${subtitle}</p>
            <div class="hall-action-btn">
              <span>${enterPrompt}</span>
              <div class="hall-action-arrow">
                <i data-lucide="${isFa ? 'arrow-left' : 'arrow-right'}"></i>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();

    // Attach click handlers to each hall tile
    hallsContainer.querySelectorAll('.museum-hall-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const catId = tile.getAttribute('data-category');
        switchToCategoryView(catId);
      });
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const catId = tile.getAttribute('data-category');
          switchToCategoryView(catId);
        }
      });
    });

    if (window.bindCursorTriggers) window.bindCursorTriggers();
  }

  // Switch from Halls View to Category View with smooth GSAP transition
  function switchToCategoryView(categoryId) {
    if (!categoryId) return;
    activeCategory = categoryId;
    store.state.activeFilter = categoryId;

    if (!hallsView || !categoryView) return;

    if (window.gsap) {
      gsap.to(hallsView, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          hallsView.classList.add('hidden');
          categoryView.classList.remove('hidden');
          categoryView.style.opacity = 0;

          renderCategoryView(categoryId);

          // Smooth scroll to category sticky bar
          if (window.lenis) {
            window.lenis.scrollTo('#works-sticky-nav', { offset: -80, duration: 0.8 });
          } else {
            stickyNav?.scrollIntoView({ behavior: 'smooth' });
          }

          gsap.to(categoryView, {
            opacity: 1,
            duration: 0.45,
            ease: 'power2.out',
            onComplete: () => {
              animateMasonryCardsIn();
            }
          });
        }
      });
    } else {
      hallsView.classList.add('hidden');
      categoryView.classList.remove('hidden');
      renderCategoryView(categoryId);
      stickyNav?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Return to All Grand Exhibition Halls
  function switchToHallsView() {
    activeCategory = null;
    store.state.activeFilter = 'all';

    if (!hallsView || !categoryView) return;

    if (window.gsap) {
      gsap.to(categoryView, {
        opacity: 0,
        y: 20,
        duration: 0.35,
        ease: 'power2.inOut',
        onComplete: () => {
          categoryView.classList.add('hidden');
          hallsView.classList.remove('hidden');
          hallsView.style.opacity = 0;

          if (window.lenis) {
            window.lenis.scrollTo('#works', { offset: -60, duration: 0.8 });
          } else {
            document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
          }

          gsap.fromTo(hallsView, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
          );
        }
      });
    } else {
      categoryView.classList.add('hidden');
      hallsView.classList.remove('hidden');
      document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (returnHallsBtn) {
    returnHallsBtn.addEventListener('click', switchToHallsView);
  }

  // Render Active Category View (Curatorial Header, Sticky Pills, Masonry Grid)
  function renderCategoryView(categoryId) {
    const isFa = currentLang === 'fa';
    const categories = store.getCategories();
    const cat = store.getCategoryById(categoryId) || categories[0];
    if (!cat) return;

    // 1. Render Category Quick-Switch Pills
    if (categoryPillsContainer) {
      categoryPillsContainer.innerHTML = categories.map(c => {
        const title = isFa && c.name_fa ? c.name_fa : c.name;
        const isActive = c.id === categoryId;
        return `
          <button class="cat-pill ${isActive ? 'active' : ''}" data-category="${c.id}" role="tab" aria-selected="${isActive}">
            <span>${title}</span>
          </button>
        `;
      }).join('');

      categoryPillsContainer.querySelectorAll('.cat-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const targetId = pill.getAttribute('data-category');
          if (targetId !== activeCategory) {
            switchCategoryPill(targetId);
          }
        });
      });
    }

    // 2. Render Curatorial Header
    if (categoryCuratorialHeader) {
      const catTitle = isFa && cat.name_fa ? cat.name_fa : cat.name;
      const catSubtitle = isFa && cat.subtitle_fa ? cat.subtitle_fa : cat.subtitle_en;
      const catStatement = isFa && cat.curatorial_fa ? cat.curatorial_fa : cat.curatorial_en;
      const statementLabel = store.getTranslation('curatorial_statement', currentLang) || (isFa ? 'بیانیه نمایشگاهی' : 'CURATORIAL STATEMENT');

      categoryCuratorialHeader.innerHTML = `
        <span class="curatorial-hall-num">${cat.hall_num || 'EXHIBITION WING'}</span>
        <h3 class="curatorial-title">${catTitle}</h3>
        <p class="curatorial-subtitle">"${catSubtitle}"</p>
        <div class="curatorial-statement">
          <strong style="color: var(--accent-red); display: block; font-size: 11px; letter-spacing: 1.5px; margin-bottom: 6px; text-transform: uppercase;">
            ✦ ${statementLabel}
          </strong>
          ${catStatement}
        </div>
      `;
    }

    // 3. Render Masonry Gallery Grid
    if (categoryMasonryGrid) {
      activeCategoryProjects = store.getProjects(categoryId);

      if (activeCategoryProjects.length === 0) {
        categoryMasonryGrid.innerHTML = `
          <div style="padding: 60px 20px; text-align: center; color: var(--text-muted); grid-column: span 3;">
            <p>${isFa ? 'آثار این تالار به زودی بارگذاری می‌شوند.' : 'Exhibition archives for this wing are being curated.'}</p>
          </div>
        `;
        return;
      }

      categoryMasonryGrid.innerHTML = activeCategoryProjects.map((proj, idx) => {
        const title = isFa && proj.title_fa ? proj.title_fa : proj.title;
        const client = isFa && proj.client_fa ? proj.client_fa : proj.client;
        const specs = isFa && proj.specs_fa ? proj.specs_fa : proj.specs;
        const catName = isFa && proj.category_fa ? proj.category_fa : proj.category;
        const aspect = proj.aspect_ratio || 'tall';
        const coverImg = proj.cover || (proj.gallery && proj.gallery[0]) || '';
        const viewExhibitionText = store.getTranslation('view_exhibition', currentLang) || (isFa ? 'مشاهده نمایشگاه' : 'ENTER EXHIBITION');

        return `
          <article class="masonry-card aspect-${aspect}" data-id="${proj.id}" data-index="${idx}" tabindex="0" role="button" aria-label="${title}">
            <div class="masonry-card-image-wrap">
              <img src="${coverImg}" alt="${title}" class="masonry-card-img" loading="lazy" referrerPolicy="no-referrer" />
              <div class="masonry-card-badge">${client} • ${proj.year || '2025'}</div>
              <div class="masonry-card-overlay">
                <span class="card-overlay-cat">${catName}</span>
                <h4 class="card-overlay-title">${title}</h4>
                <div class="card-overlay-specs">${specs}</div>
                <div class="card-overlay-action">
                  <span>${viewExhibitionText}</span>
                  <i data-lucide="${isFa ? 'arrow-up-left' : 'arrow-up-right'}"></i>
                </div>
              </div>
            </div>
            <div class="masonry-card-info">
              <h4 class="card-info-title">${title}</h4>
              <div class="card-info-meta">
                <span>${client}</span>
                <span class="card-info-specs">${specs}</span>
              </div>
            </div>
          </article>
        `;
      }).join('');

      if (window.lucide) window.lucide.createIcons();

      // Attach click events to masonry cards
      categoryMasonryGrid.querySelectorAll('.masonry-card').forEach(card => {
        card.addEventListener('click', () => {
          const projId = card.getAttribute('data-id');
          openProjectModal(projId);
        });
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const projId = card.getAttribute('data-id');
            openProjectModal(projId);
          }
        });
      });

      if (window.bindCursorTriggers) window.bindCursorTriggers();
    }
  }

  // Smooth switch between categories within the Category View
  function switchCategoryPill(categoryId) {
    if (activeCategory === categoryId) return;
    activeCategory = categoryId;
    store.state.activeFilter = categoryId;

    if (window.gsap && categoryMasonryGrid) {
      const existingCards = categoryMasonryGrid.querySelectorAll('.masonry-card');
      gsap.to(existingCards, {
        opacity: 0,
        y: 18,
        duration: 0.25,
        stagger: 0.03,
        ease: 'power2.in',
        onComplete: () => {
          renderCategoryView(categoryId);
          animateMasonryCardsIn();
        }
      });
    } else {
      renderCategoryView(categoryId);
    }
  }

  // Animate Masonry Cards with GSAP Stagger
  function animateMasonryCardsIn() {
    if (!window.gsap || !categoryMasonryGrid) return;
    const cards = categoryMasonryGrid.querySelectorAll('.masonry-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 35, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.07, ease: 'power3.out' }
    );
  }

  // Full-Screen Lightbox Modal
  function openProjectModal(id) {
    const data = store.getProjectById(id);
    if (!data || !projectModal || !projectModalBody) return;

    store.state.activeProject = data;

    // Determine current index in category projects
    if (!activeCategoryProjects || activeCategoryProjects.length === 0) {
      activeCategoryProjects = store.getProjects(data.category_id);
    }
    currentModalProjectIndex = activeCategoryProjects.findIndex(p => p.id === data.id);
    currentModalGalleryImageIndex = 0;

    renderLightboxContent();
    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function renderLightboxContent() {
    const data = store.state.activeProject;
    if (!data || !projectModalBody) return;

    const isFa = currentLang === 'fa';
    const cat = store.getCategoryById(data.category_id);
    const hallNum = cat ? (cat.hall_num || cat.name) : 'EXHIBITION';

    // Update Top Meta and Counter
    if (modalHallTag) {
      modalHallTag.textContent = hallNum;
    }
    if (modalCounter && activeCategoryProjects.length > 0) {
      const idx = currentModalProjectIndex >= 0 ? currentModalProjectIndex + 1 : 1;
      modalCounter.textContent = `${isFa ? 'اثر ' : 'EXHIBITION '}0${idx} / 0${activeCategoryProjects.length}`;
    }

    const title = isFa && data.title_fa ? data.title_fa : data.title;
    const desc = isFa && data.desc_fa ? data.desc_fa : data.desc;
    const client = isFa && data.client_fa ? data.client_fa : data.client;
    const specs = isFa && data.specs_fa ? data.specs_fa : data.specs;
    const category = isFa && data.category_fa ? data.category_fa : data.category;
    const location = isFa && data.location_fa ? data.location_fa : data.location;
    const equipment = isFa && data.equipment_fa ? data.equipment_fa : data.equipment;
    const lighting = isFa && data.lighting_fa ? data.lighting_fa : (data.lighting || 'Direct chiaroscuro key light with feathered silver parabolic reflectors.');

    const gallery = data.gallery && data.gallery.length > 0 ? data.gallery : [data.cover || ''];
    const currentImgUrl = gallery[currentModalGalleryImageIndex] || gallery[0];

    const opticsLabel = store.getTranslation('optics_specs', currentLang) || (isFa ? 'اپتیک و دوربین' : 'OPTICS & HARDWARE');
    const lightingLabel = store.getTranslation('lighting_setup', currentLang) || (isFa ? 'معماری نورپردازی' : 'LIGHTING ARCHITECTURE');
    const locationLabel = isFa ? 'موقعیت تولید' : 'LOCATION';
    const clientLabel = isFa ? 'سفارش‌دهنده / برند' : 'CLIENT / SERIES';

    projectModalBody.innerHTML = `
      <div class="lightbox-grid">
        <!-- Visual Presentation Column -->
        <div class="lightbox-visual-col">
          <div class="lightbox-image-stage">
            <img src="${currentImgUrl}" alt="${title}" class="lightbox-main-img" id="lightbox-active-img" referrerPolicy="no-referrer" />
          </div>

          <!-- Thumbnails Subgallery if multiple images -->
          ${gallery.length > 1 ? `
            <div class="lightbox-gallery-thumbs" id="lightbox-thumbs-strip">
              ${gallery.map((url, i) => `
                <img src="${url}" alt="Frame ${i + 1}" class="lightbox-thumb ${i === currentModalGalleryImageIndex ? 'active' : ''}" data-thumb-index="${i}" referrerPolicy="no-referrer" />
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Curatorial & Technical Metadata Column -->
        <div class="lightbox-info-col">
          <span class="lightbox-project-badge">${client} • ${data.year || '2025'}</span>
          <h2 class="lightbox-project-title">${title}</h2>
          <div class="lightbox-curatorial-text">
            <p>${desc}</p>
          </div>

          <div class="lightbox-specs-card">
            <div class="lightbox-spec-row">
              <span class="lightbox-spec-label">✦ ${opticsLabel}</span>
              <span class="lightbox-spec-val">${equipment || specs}</span>
            </div>
            <div class="lightbox-spec-row">
              <span class="lightbox-spec-label">✦ ${locationLabel}</span>
              <span class="lightbox-spec-val">${location}</span>
            </div>
            <div class="lightbox-spec-row">
              <span class="lightbox-spec-label">✦ ${clientLabel}</span>
              <span class="lightbox-spec-val">${client} (${data.category || category})</span>
            </div>
          </div>

          <div class="lightbox-lighting-box">
            <div class="lightbox-lighting-title">✦ ${lightingLabel}</div>
            <div class="lightbox-lighting-desc">${lighting}</div>
          </div>

          <div style="margin-top: 8px;">
            <a href="#contact" class="btn-red btn-block" id="lightbox-inquire-btn" style="text-decoration: none;">
              <span>${isFa ? 'استعلام سفارش کمپین مشابه' : 'COMMISSION SIMILAR CAMPAIGN'}</span>
              <i data-lucide="${isFa ? 'arrow-left' : 'arrow-right'}"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Thumbnails click listener
    const thumbs = projectModalBody.querySelectorAll('.lightbox-thumb');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.getAttribute('data-thumb-index'));
        currentModalGalleryImageIndex = idx;
        const activeImg = document.getElementById('lightbox-active-img');
        if (activeImg) {
          activeImg.style.opacity = '0';
          setTimeout(() => {
            activeImg.src = gallery[idx];
            activeImg.style.opacity = '1';
          }, 150);
        }
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });

    // Inquire button closes modal and scrolls to contact
    const inquireBtn = document.getElementById('lightbox-inquire-btn');
    if (inquireBtn) {
      inquireBtn.addEventListener('click', () => {
        closeProjectModal();
        const contactSec = document.getElementById('contact');
        if (contactSec) {
          if (window.lenis) {
            window.lenis.scrollTo(contactSec, { offset: -80 });
          } else {
            contactSec.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  function navigateModalProject(direction) {
    if (!activeCategoryProjects || activeCategoryProjects.length <= 1) return;
    let nextIndex = currentModalProjectIndex + direction;
    if (nextIndex < 0) nextIndex = activeCategoryProjects.length - 1;
    if (nextIndex >= activeCategoryProjects.length) nextIndex = 0;

    const nextProject = activeCategoryProjects[nextIndex];
    if (nextProject) {
      store.state.activeProject = nextProject;
      currentModalProjectIndex = nextIndex;
      currentModalGalleryImageIndex = 0;
      renderLightboxContent();
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', () => navigateModalProject(-1));
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', () => navigateModalProject(1));
  }

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    if (projectModal && !projectModal.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        closeProjectModal();
      } else if (e.key === 'ArrowLeft') {
        navigateModalProject(currentLang === 'fa' ? 1 : -1);
      } else if (e.key === 'ArrowRight') {
        navigateModalProject(currentLang === 'fa' ? -1 : 1);
      }
    }
  });

  // Close lightbox on clicking outside modal content
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Language refresh hook for works section
  window.refreshWorksLanguage = function() {
    if (hallsView && !hallsView.classList.contains('hidden')) {
      renderMuseumHalls();
    } else if (categoryView && !categoryView.classList.contains('hidden') && activeCategory) {
      renderCategoryView(activeCategory);
    }
    if (projectModal && !projectModal.classList.contains('hidden') && store.state.activeProject) {
      renderLightboxContent();
    }
  };

  // Initial render of Museum Halls
  renderMuseumHalls();

  // ==========================================
  // 8. COLLECTIVE DOSSIER MODAL
  // ==========================================
  const collectiveModal = document.getElementById('collective-modal');
  const collectiveModalBody = document.getElementById('modal-collective-body');
  const collectiveModalClose = document.getElementById('collective-modal-close');

  function openCollectiveModal(slug) {
    const member = store.getMemberBySlug(slug);
    if (!member || !collectiveModal || !collectiveModalBody) return;

    store.state.activeMember = member;
    const isFa = currentLang === 'fa';
    const name = isFa && member.name_fa ? member.name_fa : member.name;
    const role = isFa && member.role_fa ? member.role_fa : member.role;
    const bio = isFa && member.bio_fa ? member.bio_fa : member.bio;
    const born = isFa && member.born_fa ? member.born_fa : member.born;
    const education = isFa && member.education_fa ? member.education_fa : member.education;
    const expertise = isFa && member.expertise_fa ? member.expertise_fa : member.expertise;
    const exhibitions = isFa && member.exhibitions_fa ? member.exhibitions_fa : member.exhibitions;
    const publications = isFa && member.publications_fa ? member.publications_fa : member.publications;
    const credits = isFa && member.commercial_credits_fa ? member.commercial_credits_fa : member.commercial_credits;

    collectiveModalBody.innerHTML = `
      <div style="display: flex; gap: 32px; flex-wrap: wrap; margin-bottom: 28px; align-items: flex-start;">
        <div style="width: 140px; height: 180px; border-radius: var(--radius-sm); overflow: hidden; flex-shrink: 0; border: 1px solid var(--border-color);">
          <img src="${member.portrait}" alt="${name}" style="width:100%; height:100%; object-fit:cover;" referrerPolicy="no-referrer" />
        </div>
        <div style="flex: 1; min-width: 260px;">
          <span class="project-badge">${role}</span>
          <h2 style="font-family: var(--font-serif); font-size: 34px; margin: 12px 0 6px; letter-spacing: -0.5px;">${name}</h2>
          <p style="color: var(--accent-red); font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">${born}</p>
          <p style="font-size: 12px; color: var(--text-muted); margin-top: 6px;"><i data-lucide="graduation-cap" style="width:14px; height:14px; display:inline-block; vertical-align:middle; margin-right:4px;"></i> ${education}</p>
        </div>
      </div>

      <div style="color: var(--text-secondary); line-height: 1.8; font-size: 14px; margin-bottom: 28px; border-bottom: 1px solid var(--border-color); padding-bottom: 24px;">
        <p>${bio}</p>
      </div>

      <!-- Core Disciplines -->
      <div style="margin-bottom: 28px;">
        <h4 style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: var(--accent-gold); margin-bottom: 12px; text-transform: uppercase;">${isFa ? 'تخصص‌های کلیدی' : 'Core Disciplines & Technique'}</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${expertise.map(exp => `<span class="expertise-tag" style="background: rgba(255,255,255,0.03);">${exp}</span>`).join('')}
        </div>
      </div>

      <!-- Selected Exhibitions / Accolades -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 28px;">
        <div style="background: var(--bg-card); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          <h4 style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: var(--text-primary); margin-bottom: 12px; text-transform: uppercase;"><i data-lucide="award" style="width:14px; height:14px; display:inline-block; vertical-align:middle; color:var(--accent-red);"></i> ${isFa ? 'نمایشگاه‌های برگزیده' : 'Selected Exhibitions & Honors'}</h4>
          <ul style="list-style: none; font-size: 13px; color: var(--text-secondary); line-height: 1.8;">
            ${exhibitions.map(ex => `<li style="margin-bottom: 6px;">• ${ex}</li>`).join('')}
          </ul>
        </div>

        <div style="background: var(--bg-card); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          <h4 style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: var(--text-primary); margin-bottom: 12px; text-transform: uppercase;"><i data-lucide="book-open" style="width:14px; height:14px; display:inline-block; vertical-align:middle; color:var(--accent-red);"></i> ${isFa ? 'انتشارات و نشریات' : 'Publications & Monographs'}</h4>
          <ul style="list-style: none; font-size: 13px; color: var(--text-secondary); line-height: 1.8;">
            ${publications.map(pub => `<li style="margin-bottom: 6px;">• ${pub}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Select Clients -->
      <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <span style="font-size: 10px; font-weight: 700; letter-spacing: 1.5px; color: var(--text-muted); display: block; margin-bottom: 4px;">${isFa ? 'همکاران تجاری منتخب' : 'COMMERCIAL CLIENT COLLABORATORS'}</span>
          <p style="font-size: 13px; font-weight: 600; color: var(--text-primary);">${credits.join(' • ')}</p>
        </div>
        <a href="#contact" class="btn-primary" style="padding: 10px 20px; font-size: 11px;" onclick="document.getElementById('collective-modal').classList.add('hidden')">
          <span>${isFa ? 'درخواست همکاری با هنرمند' : 'COMMISSION ARTIST'}</span>
        </a>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    collectiveModal.classList.remove('hidden');
  }

  document.querySelectorAll('.open-collective-dossier, .collective-card').forEach(item => {
    item.addEventListener('click', (e) => {
      const slug = item.getAttribute('data-slug') || item.closest('.collective-card')?.getAttribute('data-slug');
      if (slug) {
        openCollectiveModal(slug);
      }
    });
  });

  if (collectiveModalClose) {
    collectiveModalClose.addEventListener('click', () => {
      if (collectiveModal) collectiveModal.classList.add('hidden');
    });
  }

  // Modal Backdrop Dismissal
  window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.add('hidden');
    }
    if (e.target === collectiveModal) {
      collectiveModal.classList.add('hidden');
    }
    const academyModal = document.getElementById('academy-modal');
    if (e.target === academyModal) {
      academyModal.classList.add('hidden');
    }
  });

  // ==========================================
  // 9. ACADEMY MODAL & APPLICATION ENGINE
  // ==========================================
  const academyModal = document.getElementById('academy-modal');
  const academyModalClose = document.getElementById('academy-modal-close');
  const academyTitleEl = document.getElementById('academy-modal-program-title');
  const academyForm = document.getElementById('academy-app-form');
  const academyFormStatus = document.getElementById('academy-form-status');

  document.querySelectorAll('.open-academy-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prog = btn.getAttribute('data-program');
      if (academyTitleEl) {
        academyTitleEl.textContent = currentLang === 'fa' ? `پذیرش در ${prog}` : `Admission for ${prog}`;
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

  if (academyForm) {
    academyForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('acad-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>${currentLang === 'fa' ? 'در حال ثبت...' : 'RECORDING DOSSIER...'}</span>`;
      }

      const formData = {
        name: document.getElementById('acad-name')?.value || '',
        phone: document.getElementById('acad-phone')?.value || '',
        email: document.getElementById('acad-email')?.value || '',
        city: document.getElementById('acad-city')?.value || '',
        level: document.getElementById('acad-level')?.value || '',
        interest_type: document.getElementById('acad-interest')?.value || '',
        portfolio: document.getElementById('acad-portfolio')?.value || '',
        goal: document.getElementById('acad-goal')?.value || '',
        submitted_at: new Date().toISOString()
      };

      try {
        const res = await store.submitAcademyApplication(formData);
        if (academyFormStatus) {
          academyFormStatus.textContent = res.message;
          academyFormStatus.className = 'form-status success';
          academyFormStatus.classList.remove('hidden');
        }
        academyForm.reset();
        setTimeout(() => {
          if (academyModal) academyModal.classList.add('hidden');
          if (academyFormStatus) academyFormStatus.classList.add('hidden');
        }, 3500);
      } catch (err) {
        if (academyFormStatus) {
          academyFormStatus.textContent = currentLang === 'fa' ? 'خطا در برقراری ارتباط. لطفاً مجدداً تلاش فرمایید.' : 'Network error. Please retry.';
          academyFormStatus.className = 'form-status error';
          academyFormStatus.classList.remove('hidden');
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>${currentLang === 'fa' ? 'ارسال درخواست پذیرش' : 'SUBMIT ADMISSION DOSSIER'}</span><i data-lucide="send"></i>`;
          if (window.lucide) window.lucide.createIcons();
        }
      }
    });
  }

  // ==========================================
  // 10. JOURNAL DRAWER READ LOGIC
  // ==========================================
  const journalDrawer = document.getElementById('journal-drawer');
  const journalDrawerClose = document.getElementById('journal-drawer-close');
  const journalArticleBody = document.getElementById('journal-article-body');

  document.querySelectorAll('.open-journal-article').forEach(item => {
    item.addEventListener('click', () => {
      const artId = item.getAttribute('data-id');
      const data = store.getArticleById(artId);
      if (data && journalArticleBody && journalDrawer) {
        const isFa = currentLang === 'fa';
        const title = isFa && data.title_fa ? data.title_fa : data.title;
        const author = isFa && data.author_fa ? data.author_fa : data.author;
        const category = isFa && data.category_fa ? data.category_fa : data.category;
        const excerpt = isFa && data.excerpt_fa ? data.excerpt_fa : data.excerpt;
        const readTime = isFa && data.read_time_fa ? data.read_time_fa : data.read_time;
        const bodyContent = isFa && data.body_fa ? data.body_fa : data.body;

        journalArticleBody.innerHTML = `
          <span class="section-tag">${category}</span>
          <h2 style="font-family: var(--font-serif); font-size: 32px; margin: 16px 0; letter-spacing: -0.5px;">${title}</h2>
          <p style="color: var(--accent-red); font-size: 12px; margin-bottom: 24px; font-weight: 700; letter-spacing: 1.5px;">BY ${author} • ${readTime}</p>
          
          <p style="line-height: 1.8; color: var(--text-primary); font-size: 16px; margin-bottom: 20px; font-weight: 500;">
            ${excerpt}
          </p>

          <div style="line-height: 1.9; color: var(--text-secondary); font-size: 14px;">
            ${bodyContent}
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
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
  // 11. INQUIRY FORM SUBMISSION
  // ==========================================
  const inquiryForm = document.getElementById('inquiry-form');
  const formStatus = document.getElementById('form-status');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const purpose = document.getElementById('form-purpose')?.value || '';
      const budget = document.getElementById('form-budget')?.value || '';
      const message = document.getElementById('form-msg')?.value || '';

      const payload = {
        name,
        email,
        purpose,
        budget,
        message,
        timestamp: new Date().toISOString()
      };

      const res = await store.submitInquiry(payload);

      if (formStatus) {
        formStatus.textContent = res.message;
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
  // 12. GSAP SCROLLTRIGGER REVEAL ANIMATIONS
  // ==========================================
  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray('.section-header').forEach(hdr => {
      gsap.from(hdr, {
        scrollTrigger: {
          trigger: hdr,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

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

    gsap.from('.collective-card', {
      scrollTrigger: {
        trigger: '.collective-grid',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out'
    });

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
