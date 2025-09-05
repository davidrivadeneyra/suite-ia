// src/components/LanguageSwitch.jsx
import React from 'react';
import { useLanguage } from '../i18n/LanguageProvider';

export default function LanguageSwitch({ className = '' }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={className}>
      <button
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        style={{ opacity: language === 'en' ? 1 : 0.6, marginRight: 8 }}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
        style={{ opacity: language === 'es' ? 1 : 0.6 }}
      >
        ES
      </button>
    </div>
  );
}