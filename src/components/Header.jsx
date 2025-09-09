// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import TranslateSwitch from "./TranslateSwitch";
import { Menu, X } from "lucide-react";

function HeaderContentDesktop() {
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

function HeaderBarMobile({ onMenuToggle, open }) {
  return (
    <div
      className="md:hidden fixed top-0 left-0 right-0 z-50 bg-neutral-100/70 backdrop-blur-md border-b border-neutral-200"
      role="navigation"
      aria-label="Mobile navigation bar"
    >
      <div
        className="mx-auto w-full px-4 py-3 "
        style={{ maxWidth: "var(--max-width, 1350px)" }}
      >
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.svg" alt="Logo" className="max-h-9" />
            <span className="title-tiny">Atelopus</span>
          </div>

          <div className="flex items-center gap-3">
            <TranslateSwitch />
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={onMenuToggle}
              className="p-2 rounded-md hover:bg-neutral-200/60 transition"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenuPanel({ open, onNavigate }) {
  return (
    <div
      className={[
        "md:hidden fixed left-0 right-0 z-40",
        "bg-white bg-neutral-100/70 backdrop-blur-md ",
        // Sitúa el panel justo debajo del header (aprox 56–64px de alto)
        "top-[56px]",
        "overflow-hidden transition-[max-height,opacity] duration-200 ease-out",
        open ? "opacity-100 max-h-96" : "opacity-0 max-h-0",
      ].join(" ")}
    >
      <div
        className="mx-auto w-full px-4 py-16 flex flex-col justify-center items-center text-center "
        style={{ maxWidth: "var(--max-width, 1350px)" }}
      >
        <nav>
          <ul className="flex flex-col gap-2 ">
            <li>
              <a
                href="#about"
                className="nav-link text-neutral-700"
                onClick={onNavigate}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="nav-link text-neutral-700"
                onClick={onNavigate}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="nav-link text-neutral-700"
                onClick={onNavigate}
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link text-neutral-700"
                onClick={onNavigate}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default function Header({ className = "" }) {
  const [showSticky, setShowSticky] = useState(false); // desktop sticky
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu

  // Sticky para desktop
  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;
    const THRESHOLD = 120;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShowSticky(window.scrollY > THRESHOLD);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el panel móvil al navegar
  const handleMobileNavigate = () => setMobileOpen(false);

  return (
    <>
      {/* MOBILE: header fijo superior */}
      <HeaderBarMobile
        open={mobileOpen}
        onMenuToggle={() => setMobileOpen((v) => !v)}
      />
      <MobileMenuPanel open={mobileOpen} onNavigate={handleMobileNavigate} />

      {/* DESKTOP: header normal en flujo */}
      <header className={`hidden md:flex justify-between items-start mb-16 ${className}`}>
        <HeaderContentDesktop />
      </header>

      {/* DESKTOP: header fijo en scroll */}
      <div
        className={[
          "hidden md:block fixed top-0 left-0 right-0 z-50",
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
          <div className="bg-neutral-100/70 backdrop-blur-md">
            <header className="flex justify-between items-start py-3">
              <HeaderContentDesktop />
            </header>
          </div>
        </div>
      </div>
    </>
  );
}
