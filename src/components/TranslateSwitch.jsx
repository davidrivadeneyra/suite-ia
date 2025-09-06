import React from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { Languages } from 'lucide-react'; // Ícono similar al que muestras

export default function LanguageSwitch({ className = '' }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-2 ${className} `}>
      {/* Icono de traducción */}
      <Languages className="w-5 h-5 text-neutral-700" />

      {/* Toggle */}
      <div className="flex items-center bg-neutral-200 rounded-full p-1 border-neutral-300 border">
        <button
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`h-6 w-6 text-xs font-bold rounded-full transition ${
            language === 'en'
              ? 'bg-white shadow text-black'
              : 'text-neutral-600 hover:text-black'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          aria-pressed={language === 'es'}
          className={`h-6 w-6 text-xs font-bold rounded-full transition ${
            language === 'es'
              ? 'bg-white shadow text-black'
              : 'text-neutral-600 hover:text-black'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
}
