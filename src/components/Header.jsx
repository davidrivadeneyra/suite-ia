// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import TranslateSwitch from "./TranslateSwitch";

function HeaderContent() {
  return (
    <>
      <div className="flex flex-row gap-10">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="Logo" className="max-h-9" />
          <span className="title-tiny">Atelopus</span>
        </div>
        <TranslateSwitch />
      </div>

      {/* NAVEGADOR */}
      <nav>
        <ul className="flex flex-row items-end gap-6">
          <li>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="#features" className="nav-link">Features</a>
          </li>
          <li>
            <a href="#benefits" className="nav-link">Benefits</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default function Header({ className = "" }) {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const THRESHOLD = 120; // px de scroll para mostrar el header fijo

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShowSticky(window.scrollY > THRESHOLD);
        ticking = false;
      });
    };

    onScroll(); // estado correcto al cargar
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header normal (en el flujo del layout) */}
      <header className={`flex justify-between items-start mb-6 ${className}`}>
        <HeaderContent />
      </header>

      {/* Header fijo que aparece al hacer scroll */}
      <div
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 ease-out",
          showSticky
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div
          className="mx-auto w-full px-4 md:px-6"
          style={{ maxWidth: "var(--max-width, 1350px)" }}
        >
          <div
            className={[
              // Fondo gris translúcido + blur
              "bg-neutral-100/70 backdrop-blur-md",
              "px-4 pt-4 md:px-6 md:py-6",
            ].join(" ")}
          >
            <header className="flex justify-between items-start py-3">
              <HeaderContent />
            </header>
          </div>
        </div>
      </div>
    </>
  );
}
