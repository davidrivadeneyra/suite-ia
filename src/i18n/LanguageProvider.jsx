// src/i18n/LanguageProvider.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  // Idioma inicial: preferencia guardada > <html lang> > navegador
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') {
      setLanguage(saved);
      document.documentElement.lang = saved;
      return;
    }
    const htmlLang = (document.documentElement.lang || '').toLowerCase();
    const navLang = (navigator.language || '').toLowerCase();
    const initial = htmlLang.startsWith('es') || navLang.startsWith('es') ? 'es' : 'en';
    setLanguage(initial);
    document.documentElement.lang = initial;
  }, []);

  const changeLanguage = (lang) => {
    if (!['en', 'es'].includes(lang)) return;
    setLanguage(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  };

  const t = (key) => {
    const dict = translations[language] || {};
    return dict[key] ?? key; // devuelve la key si no existe traducción
  };

  const value = useMemo(() => ({ language, setLanguage: changeLanguage, t }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
