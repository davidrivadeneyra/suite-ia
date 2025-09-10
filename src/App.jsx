import AccordionItem from "./components/AccordionItem";
import { useLanguage } from "./i18n/LanguageProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GridSquares from "./components/GridSsquares";
import AccordionData from "./components/AccordionData";
import CornerFrame from "./components/CornersFrame";
import CardHowItWorks from "./components/CardHowItWorks";
import DashedConnector from "./components/DashConector";
import CardBenefits from "./components/CardBenefits";
import DeploymentOptionsTable from "./components/DeploymentOptionsTable";
import CardMetric from "./components/CardMetric";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { tr } from "motion/react-client";
import { usePageAnimations } from "./anim/usePageAnimations";
import { gsap } from "./anim/gsapSetup";
import { useRef, useLayoutEffect } from "react";
import ButtonLink from "./components/ButtonLink";

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
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
			return;

		// Helpers
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
					start: "top 85%",
					toggleActions: "play none none reverse",
					...st,
				},
			});
		};

		const ctx = gsap.context(() => {
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
			// botones dentro del header
			if (featuresButtonsRef.current?.children?.length) {
				appearChildren(
					featuresButtonsRef.current,
					Array.from(featuresButtonsRef.current.children),
					{ y: 12 },
					0.08
				);
			}
			// grid de cards/lineas
			if (featuresGridRef.current) {
				const gridKids = Array.from(
					featuresGridRef.current.querySelectorAll(":scope > * > *")
				);
				// Selector robusto: toma los hijos directos de cada fila
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
				// Anima cada AccordionItem con stagger
				const items = Array.from(faqRightRef.current.children);
				appearChildren(faqRightRef.current, items, { y: 16 }, 0.06);
			}

			// CTA FINAL
			appear(ctaRef.current, { y: 16 });

			// FORM
			appear(formRef.current, { y: 12, duration: 0.5 });
			appear(formHeaderRef.current, { y: 20 });
		}, mainRef);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<div className="px-8 pt-8 md:px-12 md:py-12 max-width-custom mx-auto relative">
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="px-4 pt-4 md:px-6 md:py-6 max-width-custom mx-auto absolute top-0 left-0 right-0">
						<div style={{ padding: 0 }}>
							<GridSquares className="" />
						</div>
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
						<CornerFrame
							strokeColor="currentColor"
							className="text-green-400"
						/>
						<img
							className="absolute top-0 w-[600px] right-0 z-0"
							src="/assets/background/BG-Decoration.png"
							alt="Atelopus decoración -z-50"
						/>
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
						<CornerFrame
							strokeColor="currentColor"
							className="text-neutral-400"
						/>
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

				{/* MÓDULOS CLAVE */}
				<section
					ref={modulesRef}
					className="relative flex flex-col gap-20 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-white mb-16 scroll-mt-20"
				>
					<CornerFrame
						hover={false}
						strokeColor="currentColor"
						className="text-neutral-400"
					/>
					<div
						ref={modulesLeftRef}
						className="flex flex-col lg:w-1/2 gap-10"
					>
						<h2 className="title-regular">{t("modules.title")}</h2>
						<img
							src="assets/vidh.png"
							className="w-full max-h-[463px] rounded-lg"
						/>
					</div>

					<div ref={modulesRightRef} className="lg:w-1/2">
						{/* Retail Theft */}
						<AccordionItem title={t("modules.retail.title")}>
							<div className="flex flex-col justify-start gap-6">
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.retail.what.title")}
									description={t("modules.retail.what.desc")}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.retail.alerts.title")}
									description={t(
										"modules.retail.alerts.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.retail.impact.title")}
									description={t(
										"modules.retail.impact.desc"
									)}
								/>
							</div>
						</AccordionItem>

						{/* Facial Recognition (AI) */}
						<AccordionItem title={t("modules.face.title")}>
							<div className="flex flex-col justify-start gap-6">
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.face.what.title")}
									description={t("modules.face.what.desc")}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.face.alerts.title")}
									description={t("modules.face.alerts.desc")}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.face.impact.title")}
									description={t("modules.face.impact.desc")}
								/>
							</div>
						</AccordionItem>

						{/* PH / Access & Perimeter */}
						<AccordionItem title={t("modules.perimeter.title")}>
							<div className="flex flex-col justify-start gap-6">
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.perimeter.what.title")}
									description={t(
										"modules.perimeter.what.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.perimeter.alerts.title")}
									description={t(
										"modules.perimeter.alerts.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.perimeter.impact.title")}
									description={t(
										"modules.perimeter.impact.desc"
									)}
								/>
							</div>
						</AccordionItem>

						{/* Loitering in Sensitive Areas */}
						<AccordionItem title={t("modules.loitering.title")}>
							<div className="flex flex-col justify-start gap-6">
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.loitering.what.title")}
									description={t(
										"modules.loitering.what.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.loitering.alerts.title")}
									description={t(
										"modules.loitering.alerts.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.loitering.impact.title")}
									description={t(
										"modules.loitering.impact.desc"
									)}
								/>
							</div>
						</AccordionItem>

						{/* LPR – Vehicle Plates & Control */}
						<AccordionItem title={t("modules.lpr.title")}>
							<div className="flex flex-col justify-start gap-6">
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.lpr.what.title")}
									description={t("modules.lpr.what.desc")}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.lpr.alerts.title")}
									description={t("modules.lpr.alerts.desc")}
								/>
								<AccordionData
									iconColor="text-green-600"
									title={t("modules.lpr.impact.title")}
									description={t("modules.lpr.impact.desc")}
								/>
							</div>
						</AccordionItem>
					</div>
				</section>

				{/* CÓMO FUNCIONA */}
				<section
					id="how-it-works"
					ref={featuresRef}
					className="flex flex-col p-6 md:p-16 mb-16 relative bg-neutral-100 rounded-lg scroll-mt-20"
				>
					<CornerFrame
						hover={false}
						strokeColor="currentColor"
						className="text-neutral-500"
					/>

					<div
						ref={featuresHeaderRef}
						className="flex flex-col box-border md:w-[443px] pb-8"
					>
						<div className="pb-6">
							<h2 className="title-big font-semibold pb-2">
								{t("features.title")}
							</h2>
							<p className="descriptions">{t("metrics.desc")}</p>
						</div>
						<div
							ref={featuresButtonsRef}
							className="flex flex-col md:flex-row gap-4"
						>
							<ButtonLink
								href="#form"
								copy={t("hero.demo")}
								variant="dark"
							/>
							<ButtonLink
								href="#how-it-works"
								copy={t("hero.how")}
								variant="white"
							/>
						</div>
					</div>

					{/* GRID CÓMO FUNCIONA */}
					<div ref={featuresGridRef} className="flex flex-col">
						<div className="flex flex-col md:flex-row">
							<CardHowItWorks
								title={t("features.step1")}
								iconSrc="assets/icon1.svg"
								number={1}
							/>
							<DashedConnector className="hidden md:block w-16" />
							<div className="w-full block md:hidden">
								<DashedConnector
									className="h-16"
									orientation="vertical"
								/>
							</div>
							<CardHowItWorks
								title={t("features.step2")}
								iconSrc="assets/icon2.svg"
								number={2}
							/>
							<DashedConnector className="hidden md:block w-16" />
							<div className="w-full block md:hidden">
								<DashedConnector
									className="h-16"
									orientation="vertical"
								/>
							</div>
							<CardHowItWorks
								title={t("features.step3")}
								iconSrc="assets/icon3.svg"
								number={3}
							/>
						</div>
						<div className="flex flex-row gap-16">
							<div className="hidden md:block md:w-full"></div>
							<div className="hidden md:block md:w-full"></div>
							<div className="w-full flex justify-center">
								<DashedConnector
									className="h-full w-16"
									orientation="vertical"
								/>
							</div>
						</div>

						<div className="flex flex-col md:flex-row">
							<CardHowItWorks
								title={t("features.step4")}
								iconSrc="assets/icon4.svg"
								number={4}
							/>
							<DashedConnector
								className="hidden md:block  w-16"
								reverse={true}
							/>
							<div className="w-full block md:hidden">
								<DashedConnector
									className="h-16"
									orientation="vertical"
								/>
							</div>
							<CardHowItWorks
								title={t("features.step5")}
								iconSrc="assets/icon5.svg"
								number={5}
							/>
							<DashedConnector
								className="hidden md:block  w-16"
								reverse={true}
							/>
							<div className="w-full block md:hidden">
								<DashedConnector
									className="h-16"
									orientation="vertical"
								/>
							</div>
							<CardHowItWorks
								title={t("features.step6")}
								iconSrc="assets/icon6.svg"
								number={6}
							/>
						</div>
					</div>
				</section>

				{/* BENEFICIOS */}
				<section
					id="benefits"
					ref={benefitsRef}
					className=" bg-neutral-950 rounded-lg mb-16 relative scroll-mt-20"
				>
					<CornerFrame
						hover={false}
						strokeColor="currentColor"
						className="text-green-400"
					/>
					<img
						className="absolute top-0 w-[600px] right-0 z-0"
						src="/assets/background/BG-Decoration.png"
						alt="Atelopus decoración"
					/>

					<div
						ref={benefitsHeaderRef}
						className="flex flex-col mx-6 md:ml-16 pt-6 md:pt-16 md:w-[443px] "
					>
						<h2 className="title-big font-semibold text-white mb-4">
							{t("benefits.title")}
						</h2>
						<p className="text-neutral-400 pb-8">
							{t("benefits.desc")}
						</p>

						<div
							ref={benefitsButtonsRef}
							className="flex flex-col md:flex-row gap-4 pb-8"
						>
							<ButtonLink
								href="#form"
								copy={t("hero.demo")}
								variant="green"
							/>
							<ButtonLink
								href="#how-it-works"
								copy={t("hero.how")}
								variant="gray"
							/>
						</div>
					</div>

					{/* GRID BENEFICIOS */}
					<div
						ref={benefitsGridRef}
						className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 px-6 md:px-16 pb-16 mx-auto gap-4"
					>
						<CardBenefits
							title={t("benefits.1")}
							number={1}
							imgSrc="/assets/benefits/benefit-1.png"
						/>
						<CardBenefits
							title={t("benefits.2")}
							number={2}
							imgSrc="/assets/benefits/benefit-2.png"
						/>
						<CardBenefits
							title={t("benefits.3")}
							number={3}
							imgSrc="/assets/benefits/benefit-3.png"
						/>
						<CardBenefits
							title={t("benefits.4")}
							number={4}
							imgSrc="/assets/benefits/benefit-4.png"
						/>
						<CardBenefits
							title={t("benefits.5")}
							number={5}
							imgSrc="/assets/benefits/benefit-5.png"
						/>
						<CardBenefits
							title={t("benefits.6")}
							number={6}
							imgSrc="/assets/benefits/benefit-6.png"
						/>
						<CardBenefits
							title={t("benefits.7")}
							number={7}
							imgSrc="/assets/benefits/benefit-7.png"
						/>
						<CardBenefits
							title={t("benefits.8")}
							number={8}
							imgSrc="/assets/benefits/benefit-8.png"
						/>
					</div>
				</section>

				{/* VERSIONES / FUNCIONAMIENTO */}
				<section
					ref={versionsRef}
					className="bg-white flex flex-col items-center mb-16 rounded-lg p-6 md:p-16 relative scroll-mt-20"
				>
					<CornerFrame
						strokeColor="currentColor"
						className="text-neutral-400"
					/>
					<div
						ref={versionsHeaderRef}
						className="flex flex-col max-w-[443px]"
					>
						<h2 className="title-big font-semibold mb-4 text-center">
							{t("versions.title")}
						</h2>
						<p className="descriptions mb-6 text-center">
							{t("versions.desc")}
						</p>
						<div
							ref={versionsButtonsRef}
							className="flex flex-col md:flex-row gap-4 pb-8"
						>
							<ButtonLink
								href="#form"
								copy={t("hero.demo")}
								variant="dark"
							/>
							<ButtonLink
								href="#how-it-works"
								copy={t("hero.how")}
								variant="gray"
							/>
						</div>
					</div>

					{/* TABLA */}
					<div ref={versionsTableRef}>
						<DeploymentOptionsTable t={t} />
					</div>
				</section>

				{/* INDUSTRIAS */}
				<section
					ref={industriesRef}
					className="flex flex-col-reverse gap-20 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-black mb-16 relative scroll-mt-20"
				>
					<CornerFrame
						strokeColor="currentColor"
						className="text-green-400"
					/>
					<img
						className="absolute top-0 w-[600px] right-0 z-0 pointer-events-none"
						src="/assets/background/BG-Decoration.png"
						alt="Atelopus decoración"
					/>
					<div ref={industriesLeftRef} className="lg:w-1/2">
						{/* Retail */}
						<AccordionItem
							title={t("industries.retail.title")}
							titleTextColor="text-white"
							borderColor="border-neutral-700"
						>
							<div className="flex flex-col justify-start gap-6">
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t("industries.retail.what.title")}
									description={t(
										"industries.retail.what.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t("industries.retail.loss.title")}
									description={t(
										"industries.retail.loss.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t("industries.retail.safety.title")}
									description={t(
										"industries.retail.safety.desc"
									)}
								/>
							</div>
						</AccordionItem>

						{/* Gaming / Casinos */}
						<AccordionItem
							title={t("industries.gaming.title")}
							titleTextColor="text-white"
							borderColor="border-neutral-700"
						>
							<div className="flex flex-col justify-start gap-6">
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t(
										"industries.gaming.watchlists.title"
									)}
									description={t(
										"industries.gaming.watchlists.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t(
										"industries.gaming.safeplay.title"
									)}
									description={t(
										"industries.gaming.safeplay.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t(
										"industries.gaming.compliance.title"
									)}
									description={t(
										"industries.gaming.compliance.desc"
									)}
								/>
							</div>
						</AccordionItem>

						{/* Residential */}
						<AccordionItem
							title={t("industries.residential.title")}
							titleTextColor="text-white"
							borderColor="border-neutral-700"
						>
							<div className="flex flex-col justify-start gap-6">
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t(
										"industries.residential.access.title"
									)}
									description={t(
										"industries.residential.access.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t(
										"industries.residential.perimeter.title"
									)}
									description={t(
										"industries.residential.perimeter.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t(
										"industries.residential.management.title"
									)}
									description={t(
										"industries.residential.management.desc"
									)}
								/>
							</div>
						</AccordionItem>

						{/* Education */}
						<AccordionItem
							title={t("industries.education.title")}
							titleTextColor="text-white"
							borderColor="border-neutral-700"
						>
							<div className="flex flex-col justify-start gap-6">
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t(
										"industries.education.safety.title"
									)}
									description={t(
										"industries.education.safety.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t(
										"industries.education.access.title"
									)}
									description={t(
										"industries.education.access.desc"
									)}
								/>
								<AccordionData
									iconColor="text-green-400 currentColor"
									titleTextColor="text-white"
									descriptionColor="text-neutral-400"
									title={t(
										"industries.education.response.title"
									)}
									description={t(
										"industries.education.response.desc"
									)}
								/>
							</div>
						</AccordionItem>
					</div>

					<div
						ref={industriesRightRef}
						className="flex flex-col lg:1/2"
					>
						<h2 className="title-big text-white mb-4">
							{t("industries.title")}
						</h2>
						<p className="descriptions text-neutral-400 mb-6">
							{t("industries.desc")}
						</p>
						<div className="flex flex-col md:flex-row gap-4 pb-8">
							<ButtonLink
								href="#form"
								copy={t("hero.demo")}
								variant="green"
							/>
							<ButtonLink
								href="#how-it-works"
								copy={t("hero.how")}
								variant="white"
							/>
						</div>
						<img
							src="assets/vidh.png"
							className="w-full max-h-[463px] rounded-lg"
						/>
					</div>
				</section>

				{/* MÉTRICAS */}
				<section
					ref={metricsRef}
					className="flex flex-col items-center p-6 md:p-16 mb-16 scroll-mt-20 relative"
				>
					<CornerFrame
						strokeColor="currentColor"
						className="text-neural-400"
					/>
					<div ref={metricsHeaderRef} className="flex flex-col mb-10">
						<h2 className="title-big font-semibold mb-4 text-center">
							{t("metrics.title")}
						</h2>
						<span className="descriptions mb-6 text-center">
							{t("metrics.desc")}
						</span>
						<div
							ref={metricsButtonsRef}
							className="flex flex-col md:flex-row gap-4"
						>
							<ButtonLink
								href="#form"
								copy={t("hero.demo")}
								variant="dark"
							/>
							<ButtonLink
								href="#how-it-works"
								copy={t("hero.how")}
								variant="white"
							/>
						</div>
					</div>

					<div
						ref={metricsGridRef}
						className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4 w-full"
					>
						<CardMetric
							title={t("metrics.1.title")}
							description={t("metrics.1.desc")}
						/>
						<CardMetric
							title={t("metrics.2.title")}
							description={t("metrics.2.desc")}
						/>
						<CardMetric
							title={t("metrics.3.title")}
							description={t("metrics.3.desc")}
						/>
						<CardMetric
							title={t("metrics.4.title")}
							description={t("metrics.4.desc")}
						/>
						<CardMetric
							title={t("metrics.5.title")}
							description={t("metrics.5.desc")}
						/>
						<CardMetric
							title={t("metrics.6.title")}
							description={t("metrics.6.desc")}
						/>
					</div>
				</section>

				{/* FAQ */}
				<section
					ref={faqRef}
					className="flex flex-col gap-14 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-white mb-16 relative scroll-mt-20"
				>
					<CornerFrame
						hover={false}
						strokeColor="currentColor"
						className="text-green-500"
					/>
					<div
						ref={faqLeftRef}
						className="flex flex-col lg:w-1/2 gap-10"
					>
						<h2 className="title-regular">{t("faq.title")}</h2>
						<img
							src="/assets/vidh.png"
							alt="Imagen"
							className="w-full max-h-[463px] rounded-lg"
						/>
					</div>

					<div ref={faqRightRef} className="lg:w-1/2">
						<AccordionItem
							className="title-smaller"
							title={`1. ${t("faq.q1")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">{t("faq.q1.answer")}</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`2. ${t("faq.q2")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">{t("faq.q2.answer")}</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`3. ${t("faq.q3")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">{t("faq.q3.answer")}</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`4. ${t("faq.q4")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">{t("faq.q4.answer")}</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`5. ${t("faq.q5")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">{t("faq.q5.answer")}</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`6. ${t("faq.q6")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">{t("faq.q6.answer")}</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`7. ${t("faq.q7")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">{t("faq.q7.answer")}</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`8. ${t("faq.q8")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">{t("faq.q8.answer")}</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`9. ${t("faq.q9")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">{t("faq.q9.answer")}</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`10. ${t("faq.q10")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">
								{t("faq.q10.answer")}
							</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`11. ${t("faq.q11")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">
								{t("faq.q11.answer")}
							</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`12. ${t("faq.q12")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">
								{t("faq.q12.answer")}
							</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`13. ${t("faq.q13")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">
								{t("faq.q13.answer")}
							</p>
						</AccordionItem>

						<AccordionItem
							className="title-smaller"
							title={`14. ${t("faq.q14")}`}
							iconSize="title-smaller"
						>
							<p className="descriptions">
								{t("faq.q14.answer")}
							</p>
						</AccordionItem>
					</div>
				</section>

				{/* CTA FINAL */}
				<section
					ref={ctaRef}
					className="bg-black rounded-lg mb-16 flex justify-center p-6 md:p-16  relative scroll-mt-20"
				>
					<CornerFrame
						hover={false}
						strokeColor="currentColor"
						className="text-green-400"
					/>
					<img
						className="absolute top-0 w-[600px] right-0 z-0 pointer-events-none"
						src="/assets/background/BG-Decoration.png"
						alt="Atelopus decoración"
					/>
					<div className="flex flex-col max-w-[443px]">
						<h2 className="title-big text-white font-semibold mb-14 text-center">
							{t("cta.title")}
						</h2>
						<div className="flex flex-col md:flex-row gap-4">
							<ButtonLink
								href="#form"
								copy={t("hero.demo")}
								variant="green"
							/>
							<ButtonLink
								href="#how-it-works"
								copy={t("hero.how")}
								variant="white"
							/>
						</div>
					</div>
				</section>

				{/* FORMULARIO DEMO */}
				<section
					ref={formRef}
					className="bg-transparent rounded-lg flex flex-col lg:flex-row justify-between p-6 md:p-16 mb-16 relative scroll-mt-20"
					id="contact"
				>
					<CornerFrame
						hover={false}
						strokeColor="currentColor"
						className="text-neutral-600"
					/>
					<div className=" max-w-2xl w-full" ref={formHeaderRef}>
						<div className="mb-8">
							<h1 className="title-big font-bold mb-2">
								{t("form.title")}
							</h1>
							<p className="descriptions">{t("form.desc")}</p>
						</div>
					</div>

					<ContactForm />
				</section>

				{/* FOOTER */}
				<Footer />
			</div>
		</>
	);
}

export default App;
