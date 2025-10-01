import AccordionItem from "./components/AccordionItem";
import { useLanguage } from "./i18n/LanguageProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardAgent from "./components/CardAgent";
import ButtonLink from "./components/ButtonLink";
import LabelStat from "./components/LabelStat";
import BenefitCard from "./components/BenefitCard";
import OrbitAnimation from "./components/OrbitAnimation";
import LabelStatDiff from "./components/LabeStatDiff";
import CardAgents from "./components/CardAgents";
import FeatureStep from "./components/FeatureStep";
import VoicePill from "./components/VoicePill";
import KpiStatCard from "./components/KpiStatCard";
import CardTestimonial from "./components/CardTestimonial";

import { Home, BarChart2, Layers, CalendarDays, User } from "lucide-react";
import Footer from "./components/Footer";
import { tr } from "motion/react-client";
import { usePageAnimations } from "./anim/usePageAnimations";
import { getGSAP } from "./anim/gsapSetup";
import { useRef, useLayoutEffect } from "react";

function App() {
	const { t } = useLanguage();

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
				<section
					id="what"
					ref={aboutRef}
					className="relative w-full bg-neutral-800 py-36"
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
						<div className="flex flex-col lg:flex-row gap-6">
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
					className="relative w-full bg-white py-36"
				>
					<div className="absolute top-0 w-full h-full overflow-hidden">
						<div className="section-max-width">
							<OrbitAnimation
								className="absolute inset-0 w-full -translate-y-1/2 translate-x-1/2 scale-[0.35] lg:scale-50"
								enableScrollSpeed={true}
								speed={1.2}
								baseSpeed={1.2}
								maxBoostDown={0.8}
								maxBoostUp={0.6}
								responsiveness={8000}
								decayDelay={0}
								decayDuration={1}
								variant="light"
							/>
						</div>
					</div>
					<div className="section-max-width">
						<div className="flex flex-col lg:flex-row gap-6 pb-14">
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
								<div className="flex w-full flex-col md:flex-row  gap-4">
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
					id="value"
					ref={aboutRef}
					className="w-full bg-neutral-800 py-36"
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
						<div className="flex flex-col lg:flex-row gap-6 pb-6">
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
						<div className="flex flex-col lg:flex-row gap-6 pb-6">
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

				<section
					id="call"
					ref={aboutRef}
					className="relative w-full bg-white py-36"
				>
					<div className="section-max-width flex flex-col lg:flex-row items-start gap-16">
						<div className="flex gap-6 pb-14 w-full	">
							<div className="flex flex-col justify-end">
								<h4 className="subtitle-light subtitle-uppercase pb-6">
									{t("section.5")}
								</h4>
								<h1 className="title-big title-light pb-6">
									{t("diff.title")}
								</h1>
								<p className="description-light descriptions-base mb-6">
									{t("diff.desc")}
								</p>
							</div>
						</div>

						<div className="flex flex-col w-full">
							<p className="description-light descriptions-base mb-6">
								{t("diff.extra")}
							</p>
							{/* VOZ ULTRA REALISTA */}
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-t border-orange-500">
								<LabelStatDiff
									label={t("diff.voice.problem")}
									title={t("diff.voice.bold")}
									description={t("diff.voice.desc")}
									variant="cross"
									className="w-full"
									imgSrc="/assets/icons3D/microphone.webp"
								/>
							</div>

							{/* ACCIÓN PROACTIVA */}
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-t border-orange-500">
								<LabelStatDiff
									label={t("diff.action.problem")}
									title={t("diff.action.bold")}
									description={t("diff.action.desc")}
									variant="cross"
									className="w-full"
									imgSrc="/assets/icons3D/phone.webp"
								/>
							</div>

							{/* ADAPTACIÓN EN TIEMPO REAL */}
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-t border-orange-500">
								<LabelStatDiff
									label={t("diff.adapt.problem")}
									title={t("diff.adapt.bold")}
									description={t("diff.adapt.desc")}
									variant="cross"
									className="w-full"
									imgSrc="/assets/icons3D/brain.webp"
								/>
							</div>

							{/* ESCALA SIN LÍMITES */}
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-y border-orange-500">
								<LabelStatDiff
									label={t("diff.scale.problem")}
									title={t("diff.scale.bold")}
									description={t("diff.scale.desc")}
									variant="cross"
									className="w-full"
									imgSrc="/assets/icons3D/thunder.webp"
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					id="agents"
					ref={aboutRef}
					className="relative w-full bg-neutral-800 py-36"
				>
					<div className="section-max-width">
						<div
							ref={aboutLeftRef}
							className="flex flex-col relative pb-16"
						>
							<h4 className="subtitle-dark subtitle-uppercase pb-6">
								{t("section.6")}
							</h4>
							<h2 className="title-big title-dark">
								{t("agents.title")}
							</h2>
						</div>
						<div className="flex flex-col lg:flex-row gap-6">
							{/* Mar-IA */}
							<CardAgents
								subtitle={t("agents.maria.blockTitle")} // "El Vendedor Digital"
								name={t("agents.maria.name")} // "Mar-IA"
								description={t("agents.maria.desc")} // "Encuentra prospectos..."
								cta={t("agents.maria.cta")} // "Descubre MAR-IA"
								href="/mar-ia"
								imageSrc="/assets/ias/mar-ia.webp"
							/>

							{/* Cel-IA */}
							<CardAgents
								subtitle={t("agents.celia.blockTitle")} // "El Cobrador Inteligente"
								name={t("agents.celia.name")} // "Cel-IA"
								description={t("agents.celia.desc")} // "Recupera deudas..."
								cta={t("agents.celia.cta")} // "Explora CEL-IA"
								href="/cel-ia"
								imageSrc="/assets/ias/cel-ia.webp"
							/>

							{/* Serv-IA */}
							<CardAgents
								subtitle={t("agents.servia.blockTitle")} // "El Asistente de Servicios"
								name={t("agents.servia.name")} // "Serv-IA"
								description={t("agents.servia.desc")} // "Gestiona citas..."
								cta={t("agents.servia.cta")} // "Conoce SERV-IA"
								href="/serv-ia"
								imageSrc="/assets/ias/serv-ia.webp"
							/>
						</div>
					</div>
				</section>

				<section
					id="how"
					ref={aboutRef}
					className="relative w-full bg-white py-36"
				>
					<div className="section-max-width flex flex-col gap-16 items-center">
						<div className="flex gap-6 max-w-3xl">
							<div className="flex flex-col  text-center">
								<h4 className="subtitle-light subtitle-uppercase pb-6">
									{t("section.7")}
								</h4>
								<h1 className="title-big title-light pb-6">
									{t("how.title")}
								</h1>
								<p className="description-light descriptions-base">
									{t("how.subtitle")}
								</p>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-16 w-full max-w-5xl items-center">
							<div className="relative">
								<VoicePill
									className="absolute bottom-4 md:bottom-6 left-4 right-4 md:-left-16 w-[90%] mx-auto"
									audioSrc="/audio/demo.mp3"
									title="Conversa con Mar-IA"
									avatarSrc="/assets/ias/mar-ia-head.webp"
								/>
								<img
									src="images/suite-ia-person.webp"
									alt="Perona hablanco con Celia"
									className="rounded-2xl shadow-lg"
								/>
							</div>
							<div className="flex flex-col w-full">
								{/* ACCIÓN PROACTIVA */}
								<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-t border-orange-500">
									<FeatureStep
										number="1"
										variant="light"
										title={t("how.step1.bold")}
										description={t("how.step1.desc")}
									/>
								</div>

								{/* ADAPTACIÓN EN TIEMPO REAL */}
								<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-t border-orange-500">
									<FeatureStep
										number="2"
										variant="light"
										title={t("how.step2.bold")}
										description={t("how.step2.desc")}
									/>
								</div>

								{/* ESCALA SIN LÍMITES */}
								<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-y border-orange-500">
									<FeatureStep
										number="3"
										variant="light"
										title={t("how.step3.bold")}
										description={t("how.step3.desc")}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="demo-video"
					ref={aboutRef}
					className="relative w-full bg-gray-50 py-36"
				>
					<div className="absolute top-0 w-full h-full overflow-hidden">
						<div className="section-max-width">
							<OrbitAnimation
								className="absolute inset-0 w-full -translate-y-1/2 translate-x-1/2 scale-[0.35] lg:scale-50"
								enableScrollSpeed={true}
								speed={1.2}
								baseSpeed={1.2}
								maxBoostDown={0.8}
								maxBoostUp={0.6}
								responsiveness={8000}
								decayDelay={0}
								decayDuration={1}
								variant="light"
							/>
						</div>
					</div>
					<div className="section-max-width">
						<div className="flex gap-6 pb-14">
							<div className="flex flex-col justify-end">
								<h4 className="subtitle-light subtitle-uppercase pb-6">
									{t("section.8")}
								</h4>
								<h1 className="title-big title-light pb-6">
									{t("interactions.title")}
								</h1>
							</div>
						</div>

						<div className="flex flex-col">
							<video
								src="/assets/video/atelopus.mp4"
								controls
								preload="metadata"
								class="w-full rounded-2xl"
							></video>
						</div>
					</div>
				</section>

				<section
					id="integrated"
					ref={aboutRef}
					className="relative w-full bg-gradient-dark-back py-36 overflow-hidden"
				>
					<div className="section-max-width flex flex-col lg:flex-row items-start gap-16">
						<div className="w-full relative h-full">
							<div className="relative w-full h-full">
								<OrbitAnimation
									className="absolute inset-0 w-full -translate-y-[75%] scale-[0.35] lg:scale-50"
									enableScrollSpeed={true}
									speed={1.2}
									baseSpeed={1.2}
									maxBoostDown={0.8}
									maxBoostUp={0.6}
									responsiveness={8000}
									decayDelay={0}
									decayDuration={1}
									variant="dark"
									orbitsVariant="no-ias"
								/>
								<img
									src="/assets/ias/ias.webp"
									alt=""
									className="absolute bottom-0 w-full"
								/>
							</div>
						</div>

						<div className="flex flex-col w-full z-10">
							<div className="flex flex-col justify-end pb-10">
								<h4 className="subtitle-dark subtitle-uppercase pb-6">
									{t("section.9")}
								</h4>
								<h1 className="title-big title-dark pb-6">
									{t("cases.title")}
								</h1>
							</div>
							{/* VOZ ULTRA REALISTA */}
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-t border-orange-500">
								<LabelStatDiff
									title={t("cases.bank.bold")}
									description={t("cases.bank.desc")}
									variant="dark"
									className="w-full"
									imgSrc="/assets/icons3D/bank.webp"
								/>
							</div>

							{/* ACCIÓN PROACTIVA */}
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-t border-orange-500">
								<LabelStatDiff
									title={t("cases.fintech.bold")}
									description={t("cases.fintech.desc")}
									variant="dark"
									className="w-full"
									imgSrc="/assets/icons3D/clients.webp"
								/>
							</div>

							{/* ESCALA SIN LÍMITES */}
							<div className="flex w-full flex-col md:flex-row gap-8 py-8 border-y border-orange-500">
								<LabelStatDiff
									title={t("cases.retail.bold")}
									description={t("cases.retail.desc")}
									variant="dark"
									className="w-full"
									imgSrc="/assets/icons3D/retail.webp"
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					id="global"
					ref={aboutRef}
					className="relative w-full bg-neutral-950 py-36"
				>
					<div className="section-max-width">
						<div
							ref={aboutLeftRef}
							className="flex flex-col relative pb-16"
						>
							<h4 className="subtitle-dark subtitle-uppercase pb-6">
								{t("section.10")}
							</h4>
							<h2 className="title-big title-dark">
								{t("benefits.title")}
							</h2>
						</div>
						<div className="flex flex-col md:flex-row gap-2 p-2 bg-neutral-800 rounded-[32px]">
							<div className="flex flex-row md:flex-col justify-between p-6 bg-neutral-700 rounded-3xl">
								<div className="flex flex-row-reverse md:flex-col  gap-6">
									<Home size={24} className="text-white" />

									<BarChart2
										size={24}
										className="text-white"
									/>

									<Layers size={24} className="text-white" />
									<CalendarDays
										size={24}
										className="text-white"
									/>
								</div>

								<User size={24} className="text-white" />
							</div>
							<div className="flex flex-col w-full gap-2">
								<div className="flex flex-col md:flex-row gap-2 w-full">
									<KpiStatCard
										mainImage="dashboard/recuperacion.svg"
										icon3D="icons3D/bank.webp"
										title="+45%"
										description="satisfacción NPS."
										className="w-full"
									/>
									<KpiStatCard
										mainImage="dashboard/ciclos.svg"
										icon3D="icons3D/target.webp"
										title={t("benefits.metric2.bold")}
										description={t("benefits.metric2.desc")}
										className="w-full"
									/>
								</div>

								<div className="flex flex-col md:flex-row gap-2 w-full">
									<KpiStatCard
										mainImage="dashboard/llamadas.svg"
										icon3D="icons3D/globe.webp"
										title={t("benefits.metric3.bold")}
										description={t("benefits.metric3.desc")}
										className="w-full"
									/>

									<KpiStatCard
										mainImage="dashboard/roi.svg"
										icon3D="icons3D/calendar.webp"
										title={t("benefits.metric4.bold")}
										description={t("benefits.metric4.desc")}
										className="w-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="testimonials"
					ref={aboutRef}
					className="relative w-full bg-gray-50 py-36"
				>
					<div className="section-max-width">
						<div className="flex gap-6 pb-14">
							<div className="flex flex-col justify-end">
								<h4 className="subtitle-light subtitle-uppercase pb-6">
									{t("section.11")}
								</h4>
								<h1 className="title-big title-light pb-6">
									{t("testimonials.title")}
								</h1>
							</div>
						</div>

						<div className="flex flex-col md:flex-row gap-4">
							<CardTestimonial
								client={t("testimonials.cmf.client")}
								author={t("testimonials.cmf.author")}
								quote={t("testimonials.cmf.quote")}
								imageSrc="/empresas/cmf.webp"
								className="w-full"
							/>

							{/* Antares */}
							<CardTestimonial
								client={t("testimonials.antares.client")}
								author={t("testimonials.antares.author")}
								quote={t("testimonials.antares.quote")}
								imageSrc="/empresas/antares.webp"
								className="w-full"
							/>
						</div>
					</div>
				</section>

				<section
					id="footer"
					ref={aboutRef}
					className="relative w-full bg-gradient-dark-back py-36 hero-height-mini overflow-hidden"
				>
					<div className="section-max-width flex flex-col gap-16 items-center ">
						<div className="flex gap-6 max-w-3xl">
							<div className="flex flex-col  text-center">
								<h4 className="subtitle-dark subtitle-uppercase pb-6">
									{t("section.12")}
								</h4>
								<h1 className="title-big title-dark pb-6">
									{t("closing.title")}
								</h1>
								<p className="description-dark descriptions-base pb-4">
									{t("closing.desc")}
								</p>
								<ButtonLink
									href="#form"
									copy={t("hero.cta.primary")}
									variant="brand"
									className=""
								/>
							</div>
						</div>
						<div className="relative w-full -z-10">
							<div className="relative section-max-width h-80">
								<OrbitAnimation
									className="absolute inset-x-0 bottom-0 -translate-y-1/2 w-full origin-bottom scale-[0.35] lg:scale-50"
									enableScrollSpeed={true}
									speed={1.2}
									baseSpeed={1.2}
									maxBoostDown={0.8}
									maxBoostUp={0.6}
									responsiveness={8000}
									decayDelay={0}
									decayDuration={1}
									variant="dark"
									orbitsVariant="no-ias"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
