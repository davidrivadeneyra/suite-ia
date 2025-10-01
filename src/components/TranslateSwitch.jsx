import React from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { Languages } from 'lucide-react';

export default function LanguageSwitch({ className = '' }) {
  const { language, setLanguage } = useLanguage();
  const isEN = language === 'en';

  const handleClick = () => {
    setLanguage(isEN ? 'es' : 'en');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setLanguage(isEN ? 'es' : 'en');
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Languages className="w-5 h-5 text-neutral-200" />

      {/* BUTTON: clickeable en toda el área (misma forma/tamaño) */}
      <button
        aria-pressed={!isEN}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="relative flex items-center bg-neutral-200 rounded-full p-1 border-neutral-300 border cursor-pointer"
      >
        {/* KNOB animado (misma medida que los botones: h-6 w-6) */}
        <span
          className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow
                      transition-transform duration-200 ease-in-out
                      ${isEN ? 'translate-x-0' : 'translate-x-6'}`}
        />

        {/* Botones originales (mismas medidas), ahora solo texto; sin bg para ver el knob */}
        <span
          className={`relative z-10 h-6 w-6 text-xs font-bold rounded-full transition flex items-center justify-center
                      ${isEN ? 'text-black' : 'text-neutral-600'}`}
        >
          EN
        </span>
        <span
          className={`relative z-10 h-6 w-6 text-xs font-bold rounded-full transition flex items-center justify-center
                      ${!isEN ? 'text-black' : 'text-neutral-600'}`}
        >
          ES
        </span>
      </button>
    </div>
  );
}