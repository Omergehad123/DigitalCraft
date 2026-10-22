import { create } from 'zustand';
import { translations } from '../translations';

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('dc_language');
    if (saved && (saved === 'en' || saved === 'ar')) {
      return saved;
    }
    // Check browser preferred language
    if (navigator.language && navigator.language.startsWith('ar')) {
      return 'ar';
    }
  }
  return 'en';
};

const applyLanguageToDOM = (lang) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }
};

const initialLang = getInitialLanguage();
applyLanguageToDOM(initialLang);

export const useLanguageStore = create((set, get) => ({
  language: initialLang,
  isRTL: initialLang === 'ar',

  setLanguage: (lang) => {
    if (lang !== 'en' && lang !== 'ar') return;
    if (typeof window !== 'undefined') {
      localStorage.setItem('dc_language', lang);
    }
    applyLanguageToDOM(lang);
    set({ language: lang, isRTL: lang === 'ar' });
  },

  toggleLanguage: () => {
    const next = get().language === 'en' ? 'ar' : 'en';
    get().setLanguage(next);
  },

  /**
   * Translate a dotted key path like 'header.home' or 'common.getStarted'
   */
  t: (keyPath, fallback = '') => {
    const { language } = get();
    const keys = keyPath.split('.');
    
    // Check current language
    let val = translations[language];
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        val = undefined;
        break;
      }
    }

    if (val !== undefined && typeof val === 'string') {
      return val;
    }

    // Fallback to English
    let fallbackVal = translations.en;
    for (const k of keys) {
      if (fallbackVal && typeof fallbackVal === 'object' && k in fallbackVal) {
        fallbackVal = fallbackVal[k];
      } else {
        fallbackVal = undefined;
        break;
      }
    }

    if (fallbackVal !== undefined && typeof fallbackVal === 'string') {
      return fallbackVal;
    }

    return fallback || keyPath;
  },
}));

export default useLanguageStore;
