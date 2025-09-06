import React from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { Languages } from 'lucide-react'; // Ícono similar al que muestras

export default function LanguageSwitch({ className = '' }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icono de traducción */}
      <Languages className="w-5 h-5 text-slate-700" />

      {/* Toggle */}
      <div className="flex items-center bg-gray-200 rounded-full p-1">
        <button
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`px-3 py-1 text-sm font-bold rounded-full transition ${
            language === 'en'
              ? 'bg-white shadow text-black'
              : 'text-slate-600 hover:text-black'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          aria-pressed={language === 'es'}
          className={`px-3 py-1 text-sm font-bold rounded-full transition ${
            language === 'es'
              ? 'bg-white shadow text-black'
              : 'text-slate-600 hover:text-black'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
}
