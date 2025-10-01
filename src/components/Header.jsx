// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import TranslateSwitch from "./TranslateSwitch";
import { useLanguage } from "../i18n/LanguageProvider";
import { Menu, X } from "lucide-react";

// ids:
// what
// problem
// value
// call
// agents
// how
// demo video
// integrated
// global
// testimonials
// footer

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Un solo arreglo de items para ambos menús
  const NAV = [
    { key: "nav.what", href: "#what" },
    { key: "nav.agents", href: "#agents" },
    { key: "nav.how", href: "#how" },
    { key: "nav.testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fondo: transparente al inicio, oscuro con blur al hacer scroll o si el menú móvil está abierto
  const headerBg =
    scrolled || open
      ? "bg-black/50 supports-[backdrop-filter]:bg-black/40 backdrop-blur-md ring-1 ring-white/10"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${headerBg}`}
    >
      <div className="section-max-width flex items-center justify-between py-3 px-4 md:px-12">
        {/* Logo + language */}
        <div className="flex items-center gap-4 md:gap-10">
          <a href="/" className="shrink-0">
            <img src="/assets/brand/logo.svg" alt="Logo" className="max-h-9" />
          </a>
          <div className="hidden md:block">
            <TranslateSwitch />
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-end gap-6">
            {NAV.map(({ key, href }) => (
              <li key={key}>
                <a href={href} className="nav-link">
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <TranslateSwitch />
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/15 bg-white/10 text-white active:scale-95 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile panel (reutiliza NAV) */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-4">
          <ul className="flex flex-col gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
            {NAV.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="nav-link block w-full rounded-xl px-3 py-2 hover:bg-white/10"
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}