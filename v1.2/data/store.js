/**
 * FOTROTH V1.1 — Centralized Client Data Store
 * Abstracts all data interactions so Phase 4 can hook directly to MySQL/PHP endpoints
 * without touching presentation markup or animations.
 */
(function(window) {
  'use strict';

  const store = {
    // Current application state
    state: {
      lang: localStorage.getItem('fotroth_lang') || 'en',
      theme: localStorage.getItem('fotroth_theme') || 'dark',
      activeFilter: 'all',
      activeProject: null,
      activeMember: null,
      activeArticle: null
    },

    // Categories
    getCategories: function() {
      return (window.FotrothData && window.FotrothData.categories) || [];
    },

    getCategoryById: function(id) {
      const all = (window.FotrothData && window.FotrothData.categories) || [];
      return all.find(c => c.id === id || c.slug === id) || null;
    },

    // Projects
    getProjects: function(categoryFilter) {
      const all = (window.FotrothData && window.FotrothData.projects) || [];
      if (!categoryFilter || categoryFilter === 'all') {
        return all;
      }
      return all.filter(p => p.category_id === categoryFilter);
    },

    getProjectById: function(id) {
      const all = (window.FotrothData && window.FotrothData.projects) || [];
      return all.find(p => p.id === id || p.slug === id) || null;
    },

    // Collective
    getCollective: function() {
      return (window.FotrothData && window.FotrothData.collective) || [];
    },

    getMemberBySlug: function(slug) {
      const all = (window.FotrothData && window.FotrothData.collective) || [];
      return all.find(m => m.slug === slug || m.id === slug) || null;
    },

    // Academy
    getAcademyData: function() {
      return (window.FotrothData && window.FotrothData.academy) || { programs: [] };
    },

    // Journal
    getJournalArticles: function(typeFilter) {
      const all = (window.FotrothData && window.FotrothData.journal) || [];
      if (!typeFilter || typeFilter === 'all') {
        return all;
      }
      return all.filter(a => a.type === typeFilter);
    },

    getArticleById: function(id) {
      const all = (window.FotrothData && window.FotrothData.journal) || [];
      return all.find(a => a.id === id || a.slug === id) || null;
    },

    // Localization
    getTranslation: function(key, lang) {
      const currentLang = lang || this.state.lang;
      const dict = window.FotrothData && window.FotrothData.translations && window.FotrothData.translations[currentLang];
      if (dict && dict[key] !== undefined) {
        return dict[key];
      }
      // Fallback to English
      const fallback = window.FotrothData && window.FotrothData.translations && window.FotrothData.translations['en'];
      return (fallback && fallback[key]) || key;
    },

    getAllTranslations: function(lang) {
      const currentLang = lang || this.state.lang;
      return (window.FotrothData && window.FotrothData.translations && window.FotrothData.translations[currentLang]) || {};
    },

    // Application submission simulation (prepared for MySQL Phase 4 backend)
    submitAcademyApplication: function(formData) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Log locally and resolve
          console.info('[FotrothStore] Academy application recorded:', formData);
          resolve({
            success: true,
            message: this.state.lang === 'fa' 
              ? 'درخواست پذیرش شما با موفقیت در دبیرخانه آکادمی فتروث ثبت شد. هیئت گزینش ظرف ۴۸ ساعت با شما تماس خواهند گرفت.'
              : 'Your admission dossier has been received by Fotroth Academy Management. We will review your portfolio within 48 hours.'
          });
        }, 300);
      });
    },

    submitInquiry: function(formData) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.info('[FotrothStore] Inquiry logged:', formData);
          resolve({
            success: true,
            message: this.state.lang === 'fa'
              ? 'درخواست همکاری شما با موفقیت ثبت شد. دفتر مدیریت استودیو ظرف ۲۴ ساعت پاسخگوی شما خواهد بود.'
              : 'Your inquiry has been logged in Amir Moghadam\'s private dossier. Our studio director will respond within 24 hours.'
          });
        }, 300);
      });
    }
  };

  window.FotrothStore = store;
})(window);
