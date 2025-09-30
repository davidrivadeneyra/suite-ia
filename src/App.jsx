import AccordionItem from "./components/AccordionItem";
import { useLanguage } from "./i18n/LanguageProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardAgent from "./components/CardAgent";
import ButtonLink from "./components/ButtonLink";
import LabelStat from "./components/LabelStat";
import BenefitCard from "./components/BenefitCard";
import OrbitAnimation from "./components/OrbitAnimation";

import Footer from "./components/Footer";
import { tr } from "motion/react-client";
import { usePageAnimations } from "./anim/usePageAnimations";
import { getGSAP } from "./anim/gsapSetup";
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
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
			return;

		// 🛡️ Espera a que el ref exista (y sea un nodo DOM)
		const scopeEl = mainRef.current;
		if (!scopeEl || !(scopeEl instanceof Element)) {
			// Como último recurso, usa <body> (evita Invalid scope)
			// pero idealmente corrige el JSX para que mainRef apunte a un DOM real
			console.warn(
				"[GSAP] mainRef no apunta a un nodo DOM. Usando <body> como fallback."
			);
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

		const appearChildren = (
			container,
			children,
			vars = {},
			stagger = 0.08,
			st = {}
		) => {
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
				appearChildren(
					featuresGridRef.current,
					gridKids,
					{ y: 16 },
					0.06
				);
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
			<div className="w-full relative">
				<Header />
				
				
				<Hero />
				{/* ABOUT */}
				<section
					id="about"
					ref={aboutRef}
					className="w-full bg-gradient-dark-section py-36"
				>
					<div className="section-max-width">
						<div
							ref={aboutLeftRef}
							className="flex flex-col relative pb-16"
						>
							<h4 className="subtitle-dark subtitle-uppercase pb-6">
								{t("section.2")}
							</h4>
							<h2 className="title-big title-dark">
								{t("what.title")}
							</h2>
						</div>
						<div className="flex gap-6">
							<CardAgent
								subtitle={t("what.maria")}
								name={t("what.maria.name")}
								imageSrc="/assets/ias/mar-ia.webp"
							/>
							<CardAgent
								subtitle={t("what.celia")}
								name={t("what.celia.name")}
								imageSrc="/assets/ias/cel-ia.webp"
							/>
							<CardAgent
								subtitle={t("what.servia")}
								name={t("what.servia.name")}
								imageSrc="/assets/ias/serv-ia.webp"
							/>
						</div>
					</div>
				</section>
				<section
					id="problem"
					ref={aboutRef}
					className="w-full bg-white py-36"
				>
					<div className="section-max-width">
						<div className="flex gap-6 pb-14">
							<div className="flex flex-col justify-end">
								<h4 className="subtitle-light subtitle-uppercase pb-6">
									{t("section.3")}
								</h4>
								<h1 className="title-big title-light pb-6">
									{t("problem.title")}
								</h1>
								<p className="description-light descriptions-base mb-6">
									{t("problem.desc")}
								</p>
							</div>

							{/* Buttons */}
							<div className="w-full flex flex-col justify-end">
								<div>
									<div className="w-full flex flex-col sm:flex-row gap-4">
										<ButtonLink
											href="#form"
											copy={t("hero.cta.primary")}
											variant="brand"
										/>
										<ButtonLink
											href="#how-it-works"
											copy={t("hero.cta.secondary")}
											variant="ghostLight"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col">
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-t border-orange-500">
								<LabelStat
									label={t("problem.sales.problem")}
									title={t("problem.sales.bold")}
									description={t("problem.sales.desc")}
									variant="cross"
									className="w-full"
								/>
								<LabelStat
									label={t("problem.sales.solution")}
									title={t("solution.sales.bold")}
									description={t("solution.sales.desc")}
									variant="check"
									className="w-full"
								/>
							</div>

							{/* COBRANZA */}
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-t border-orange-500">
								<LabelStat
									label={t("problem.collections.problem")}
									title={t("problem.collections.bold")}
									description={t("problem.collections.desc")}
									variant="cross"
									className="w-full"
								/>
								<LabelStat
									label={t("problem.collections.solution")}
									title={t("solution.collections.bold")}
									description={t("solution.collections.desc")}
									variant="check"
									className="w-full"
								/>
							</div>

							{/* SERVICIOS */}
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-y border-orange-500">
								<LabelStat
									label={t("problem.services.problem")}
									title={t("problem.services.bold")}
									description={t("problem.services.desc")}
									variant="cross"
									className="w-full"
								/>
								<LabelStat
									label={t("problem.services.solution")}
									title={t("solution.services.bold")}
									description={t("solution.services.desc")}
									variant="check"
									className="w-full"
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					id="about"
					ref={aboutRef}
					className="w-full bg-gradient-dark-section py-36"
				>
					<div className="section-max-width">
						<div
							ref={aboutLeftRef}
							className="flex flex-col relative pointer-events-none pb-16"
						>
							<h4 className="subtitle-dark subtitle-uppercase pb-6">
								{t("section.4")}
							</h4>
							<h2 className="title-big title-dark">
								{t("value.title")}
							</h2>
						</div>

						{/* Fila 1 */}
						<div className="flex flex-col md:flex-row gap-6 pb-6">
							<BenefitCard
								description={t("value.sales.bold")}
								title={t("value.sales.bold2")}
								icon3d="/assets/icons3D/cel-ia.webp"
								emoji="/assets/icons3D/rocket.webp"
								className="max-w-6xl mx-auto flex-1"
							/>
							<BenefitCard
								description={t("value.collections.bold")}
								title={t("value.collections.bold2")}
								icon3d="/assets/icons3D/mar-ia.webp"
								emoji="/assets/icons3D/dolar-bag.webp"
								className="max-w-6xl mx-auto flex-1"
							/>
						</div>

						{/* Fila 2 */}
						<div className="flex flex-col md:flex-row gap-6 pb-6">
							<BenefitCard
								description={t("value.services.bold")}
								title={t("value.services.bold2")}
								icon3d="/assets/icons3D/serv-ia.webp"
								emoji="/assets/icons3D/phone-light.webp"
								className="max-w-6xl mx-auto flex-1"
							/>
							<BenefitCard
								description={t("value.ecosystem.bold")}
								title={t("value.ecosystem.bold2")}
								icon3d="/assets/icons3D/suite-ia.webp"
								emoji="/assets/icons3D/link.webp"
								className="max-w-6xl mx-auto flex-1"
							/>
						</div>
					</div>
				</section>

				

				<Footer />
			</div>
		</>
	);
}

export default App;
