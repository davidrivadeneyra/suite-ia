import AccordionItem from "./components/AccordionItem";
import { useLanguage } from "./i18n/LanguageProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
import { tr } from "motion/react-client";
import { usePageAnimations } from "./anim/usePageAnimations";
import { getGSAP } from "./anim/gsapSetup"
import { useRef, useLayoutEffect } from "react";


function App() {
	const { t } = useLanguage();

	// Refs de secciones y nodos clave
	const mainRef = useRef(null);

	// ABOUT
	const aboutRef = useRef(null);
	const aboutLeftRef = useRef(null);
	const aboutRightRef = useRef(null);

	// MÓDULOS
	const modulesRef = useRef(null);
	const modulesLeftRef = useRef(null);
	const modulesRightRef = useRef(null);

	// CÓMO FUNCIONA
	const featuresRef = useRef(null);
	const featuresHeaderRef = useRef(null);
	const featuresButtonsRef = useRef(null);
	const featuresGridRef = useRef(null);

	// BENEFICIOS
	const benefitsRef = useRef(null);
	const benefitsHeaderRef = useRef(null);
	const benefitsButtonsRef = useRef(null);
	const benefitsGridRef = useRef(null);

	// VERSIONES / TABLA
	const versionsRef = useRef(null);
	const versionsHeaderRef = useRef(null);
	const versionsButtonsRef = useRef(null);
	const versionsTableRef = useRef(null);

	// INDUSTRIAS
	const industriesRef = useRef(null);
	const industriesLeftRef = useRef(null);
	const industriesRightRef = useRef(null);

	// MÉTRICAS
	const metricsRef = useRef(null);
	const metricsHeaderRef = useRef(null);
	const metricsButtonsRef = useRef(null);
	const metricsGridRef = useRef(null);

	// FAQ
	const faqRef = useRef(null);
	const faqLeftRef = useRef(null);
	const faqRightRef = useRef(null);

	// CTA FINAL
	const ctaRef = useRef(null);

	// FORMULARIO
	const formRef = useRef(null);
	const formHeaderRef = useRef(null);

useLayoutEffect(() => {
  const { gsap, ScrollTrigger } = getGSAP();
  if (!gsap || !ScrollTrigger) return;
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // 🛡️ Espera a que el ref exista (y sea un nodo DOM)
  const scopeEl = mainRef.current;
  if (!scopeEl || !(scopeEl instanceof Element)) {
    // Como último recurso, usa <body> (evita Invalid scope)
    // pero idealmente corrige el JSX para que mainRef apunte a un DOM real
    console.warn("[GSAP] mainRef no apunta a un nodo DOM. Usando <body> como fallback.");
  }
  const safeScope = scopeEl instanceof Element ? scopeEl : document.body;

  // ---- Helpers (tus mismos helpers) ----
  const appear = (el, vars = {}, st = {}) => {
    if (!el) return;
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power2.out",
      ...vars,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
        ...st,
      },
    });
  };

  const appearChildren = (container, children, vars = {}, stagger = 0.08, st = {}) => {
    if (!container || !children?.length) return;
    gsap.from(children, {
      opacity: 0,
      y: 16,
      duration: 0.6,
      ease: "power2.out",
      stagger,
      ...vars,
      scrollTrigger: {
        trigger: container,
        start: "top 55%",
        toggleActions: "play none none reverse",
        ...st,
      },
    });
  };

  // ---- Contexto seguro ----
  const ctx = gsap.context(() => {
    // 🔽 Tus animaciones tal cual…
    // ABOUT
    appear(aboutRef.current, { y: 12, duration: 0.5 });
    appear(aboutLeftRef.current, { y: 24 });
    appear(aboutRightRef.current, { y: 24, delay: 0.05 });

    // MÓDULOS
    appear(modulesRef.current, { y: 12, duration: 0.5 });
    appear(modulesLeftRef.current, { y: 24 });
    appear(modulesRightRef.current, { y: 24, delay: 0.05 });

    // CÓMO FUNCIONA
    appear(featuresRef.current, { y: 12, duration: 0.5 });
    appear(featuresHeaderRef.current, { y: 20 });
    if (featuresButtonsRef.current?.children?.length) {
      appearChildren(
        featuresButtonsRef.current,
        Array.from(featuresButtonsRef.current.children),
        { y: 12 },
        0.08
      );
    }
    if (featuresGridRef.current) {
      const gridKids = Array.from(
        featuresGridRef.current.querySelectorAll(":scope > * > *")
      );
      appearChildren(featuresGridRef.current, gridKids, { y: 16 }, 0.06);
    }

    // BENEFICIOS
    appear(benefitsRef.current, { y: 12, duration: 0.5 });
    appear(benefitsHeaderRef.current, { y: 20 });
    if (benefitsButtonsRef.current?.children?.length) {
      appearChildren(
        benefitsButtonsRef.current,
        Array.from(benefitsButtonsRef.current.children),
        { y: 12 },
        0.08
      );
    }
    if (benefitsGridRef.current?.children?.length) {
      appearChildren(
        benefitsGridRef.current,
        Array.from(benefitsGridRef.current.children),
        { y: 16 },
        0.06
      );
    }

    // VERSIONES / TABLA
    appear(versionsRef.current, { y: 12, duration: 0.5 });
    appear(versionsHeaderRef.current, { y: 20 });
    if (versionsButtonsRef.current?.children?.length) {
      appearChildren(
        versionsButtonsRef.current,
        Array.from(versionsButtonsRef.current.children),
        { y: 12 },
        0.08
      );
    }
    appear(versionsTableRef.current, { y: 16 });

    // INDUSTRIAS
    appear(industriesRef.current, { y: 12, duration: 0.5 });
    appear(industriesLeftRef.current, { y: 20 });
    appear(industriesRightRef.current, { y: 20, delay: 0.05 });

    // MÉTRICAS
    appear(metricsRef.current, { y: 12, duration: 0.5 });
    appear(metricsHeaderRef.current, { y: 20 });
    if (metricsButtonsRef.current?.children?.length) {
      appearChildren(
        metricsButtonsRef.current,
        Array.from(metricsButtonsRef.current.children),
        { y: 12 },
        0.08
      );
    }
    if (metricsGridRef.current?.children?.length) {
      appearChildren(
        metricsGridRef.current,
        Array.from(metricsGridRef.current.children),
        { y: 16 },
        0.06
      );
    }

    // FAQ
    appear(faqRef.current, { y: 12, duration: 0.5 });
    appear(faqLeftRef.current, { y: 20 });
    if (faqRightRef.current) {
      const items = Array.from(faqRightRef.current.children);
      appearChildren(faqRightRef.current, items, { y: 16 }, 0.06);
    }

    // CTA FINAL
    appear(ctaRef.current, { y: 16 });

    // FORM
    appear(formRef.current, { y: 12, duration: 0.5 });
    appear(formHeaderRef.current, { y: 20 });
  }, safeScope);

  const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
  document?.fonts?.ready?.then?.(() => ScrollTrigger.refresh());

  return () => {
    cancelAnimationFrame(raf);
    ctx.revert();
  };
}, []);



	return (
		<>
			<div className="px-8 pt-8 md:px-12 md:py-12 max-width-custom mx-auto relative">
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="px-4 pt-4 md:px-6 md:py-6 max-width-custom mx-auto absolute top-0 left-0 right-0">
					</div>
				</div>
				<Header />
				<Hero />
				{/* ABOUT */}
				<section
					id="about"
					ref={aboutRef}
					className=" flex gap-8 max-h-max flex-col lg:flex-row mb-16 relative scroll-mt-20"
				>
					<div
						ref={aboutLeftRef}
						className="bg-neutral-950 p-6 md:p-16 rounded-lg border-2 flex flex-col gap-6 lg:flex-[2.1] relative overflow-hidden pointer-events-none"
					>
						<h2 className="title-big font-semibold text-white">
							{t("about.title")}
						</h2>
						<p className="descriptions text-neutral-400 max-w-2xl">
							{t("about.desc")}
						</p>
					</div>

					<div
						ref={aboutRightRef}
						className="bg-white rounded-lg border-2 p-6 md:p-16 flex flex-col justify-end items-start lg:flex-[1] gap-3"
					>
						<img
							src="/assets/logo.svg"
							alt="LOGO"
							className="max-h-20"
						/>
						<h2 className="title-small font-semibold">
							{t("about.help.title")}
						</h2>
						<p className="descriptions">{t("about.help.desc")}</p>
					</div>
				</section>

				<Footer />
			</div>
		</>
	);
}

export default App;