import { useState } from "react";
import TranslateSwitch from "./TranslateSwitch";
import { useLanguage } from '../i18n/LanguageProvider';

export default function Header() {
  return (
    <header className="flex justify-between items-start mb-6">
      <div className="flex flex-row gap-10">
        <div className="flex items-center gap-2">
        <img src="/assets/logo.svg" alt="Logo" className="max-h-9" />
        <h1 className="text-2xl font-bold">Atelopus</h1>
      </div>
         <TranslateSwitch />
      </div>
      
     
      {/* NAVEGADOR */}
      <nav>
        <ul className="flex flex-col items-end gap-1">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#benefits" className="nav-link">Benefits</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
