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
import { tr } from "motion/react-client";

function App() {
	const { t } = useLanguage();

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

				<main>
					{/* ABOUT */}
					<section
						id="about"
						className=" flex gap-8 max-h-max flex-col lg:flex-row mb-16"
					>
						<div className="bg-neutral-950 p-6 md:p-16 rounded-lg border-2 flex flex-col gap-6 lg:flex-[2.1] relative overflow-hidden pointer-events-none -z-10">
							<img
								className="absolute top-0 w-[600px] right-0 z-0"
								src="/assets/background/BG-Decoration.png"
								alt="Atelopus decoración"
							/>
							<h2 className="title-big font-semibold text-white">
								{t("about.title")}
							</h2>
							<p className="descriptions text-neutral-400 max-w-2xl">
								{t("about.desc")}
							</p>
						</div>

						<div className="bg-white rounded-lg border-2 p-6 md:p-16 flex flex-col justify-end items-start lg:flex-[1] gap-3">
							<img
								src="/assets/logo.svg"
								alt="LOGO"
								className="max-h-20"
							/>
							<h2 className="title-small font-semibold">
								{t("about.help.title")}
							</h2>
							<p className="descriptions">
								{t("about.help.desc")}
							</p>
						</div>
					</section>

					{/* MÓDULOS CLAVE */}
					<section className="relative flex flex-col gap-20 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-white mb-16">
						<CornerFrame
							hover={false}
							strokeColor="currentColor"
							className="text-neutral-400"
						/>
						<div className="flex flex-col lg:w-1/2 gap-10">
							<h2 className="title-regular">
								{t("modules.title")}
							</h2>
							<img
								src="assets/vidh.png"
								className="w-full max-h-[463px] rounded-lg"
							/>
						</div>

						<div className="lg:w-1/2">
							{/* Retail Theft */}
							<AccordionItem title={t("modules.retail.title")}>
								<div className="flex flex-col justify-start gap-6">
									<AccordionData
										iconColor="text-green-600"
										title={t("modules.retail.what.title")}
										description={t(
											"modules.retail.what.desc"
										)}
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
										description={t(
											"modules.face.what.desc"
										)}
									/>
									<AccordionData
										iconColor="text-green-600"
										title={t("modules.face.alerts.title")}
										description={t(
											"modules.face.alerts.desc"
										)}
									/>
									<AccordionData
										iconColor="text-green-600"
										title={t("modules.face.impact.title")}
										description={t(
											"modules.face.impact.desc"
										)}
									/>
								</div>
							</AccordionItem>

							{/* PH / Access & Perimeter */}
							<AccordionItem title={t("modules.perimeter.title")}>
								<div className="flex flex-col justify-start gap-6">
									<AccordionData
										iconColor="text-green-600"
										title={t(
											"modules.perimeter.what.title"
										)}
										description={t(
											"modules.perimeter.what.desc"
										)}
									/>
									<AccordionData
										iconColor="text-green-600"
										title={t(
											"modules.perimeter.alerts.title"
										)}
										description={t(
											"modules.perimeter.alerts.desc"
										)}
									/>
									<AccordionData
										iconColor="text-green-600"
										title={t(
											"modules.perimeter.impact.title"
										)}
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
										title={t(
											"modules.loitering.what.title"
										)}
										description={t(
											"modules.loitering.what.desc"
										)}
									/>
									<AccordionData
										iconColor="text-green-600"
										title={t(
											"modules.loitering.alerts.title"
										)}
										description={t(
											"modules.loitering.alerts.desc"
										)}
									/>
									<AccordionData
										iconColor="text-green-600"
										title={t(
											"modules.loitering.impact.title"
										)}
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
										description={t(
											"modules.lpr.alerts.desc"
										)}
									/>
									<AccordionData
										iconColor="text-green-600"
										title={t("modules.lpr.impact.title")}
										description={t(
											"modules.lpr.impact.desc"
										)}
									/>
								</div>
							</AccordionItem>
						</div>
					</section>

					{/* CÓMO FUNCIONA */}
					<section
						id="features"
						className="flex flex-col p-6 md:p-16 mb-16 relative bg-neutral-100 rounded-lg"
					>
						<CornerFrame
							hover={false}
							strokeColor="currentColor"
							className="text-neutral-500"
						/>

						<div className="flex flex-col box-border md:w-[443px] pb-8">
							<div className="pb-6">
								<h2 className="title-big font-semibold pb-2">
									{t("features.title")}
								</h2>
								<p className="descriptions">
									{t("metrics.desc")}
								</p>
							</div>
							<div className="flex flex-col md:flex-row gap-4">
								<button className="btn-text-regular btn-dark relative">
									{t("hero.demo")}
									<CornerFrame className="absolute inset-0 fill-green-400" />
								</button>
								<button className="btn-text-regular btn-white relative">
									{t("hero.how")}
									<CornerFrame
										className="text-neutral-400"
										strokeColor="currentColor"
									/>
								</button>
							</div>
						</div>

						{/* GRID CÓMO FUNCIONA */}
						<div className="flex flex-col">
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
						className=" bg-neutral-950 rounded-lg mb-16 relative"
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

						<div className="flex flex-col mx-6 md:ml-16 pt-6 md:pt-16 md:w-[443px] ">
							<h2 className="title-big font-semibold text-white mb-4">
								{t("benefits.title")}
							</h2>
							<span className="descriptions text-neutral-400 mb-6">
								{t("metrics.desc")}
							</span>
							<div className="flex flex-col md:flex-row gap-4 pb-8">
								<button className="btn-text-regular btn-green relative">
									{t("hero.demo")}
									<CornerFrame
										strokeColor="currentColor"
										className="text-neutral-950"
									/>
								</button>
								<button className="btn-text-regular btn-gray relative">
									{t("hero.how")}
									<CornerFrame
										strokeColor="currentColor"
										className="text-neutral-400"
									/>
								</button>
							</div>
						</div>

						{/* GRID BENEFICIOS */}
						<div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 px-6 md:px-16 pb-16 mx-auto gap-4">
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
					<section className="bg-white flex flex-col items-center mb-16 rounded-lg p-6 md:p-16 relative">
						<CornerFrame
							strokeColor="currentColor"
							className="text-neutral-400"
						/>

						<div className="flex flex-col max-w-[443px]">
							<h2 className="title-big font-semibold mb-4 text-center">
								{t("versions.title")}
							</h2>
							<span className="descriptions mb-6 text-center">
								{t("metrics.desc")}
							</span>
							<div className="flex flex-col md:flex-row gap-4 pb-8">
								<button className="btn-text-regular btn-dark relative">
									{t("hero.demo")}
									<CornerFrame
										className="text-green-500"
										strokeColor="currentColor"
									/>
								</button>
								<button className="btn-text-regular btn-gray relative">
									{t("hero.how")}
									<CornerFrame
										className="text-neutral-400"
										strokeColor="currentColor"
									/>
								</button>
							</div>
						</div>

						{/* TABLA */}
						<div>
							<DeploymentOptionsTable t={t} />
						</div>
					</section>

					{/* INDUSTRIAS */}
					<section className="flex flex-col-reverse gap-20 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-black mb-16 relative">
						<CornerFrame
							strokeColor="currentColor"
							className="text-green-400"
						/>
						<img
							className="absolute top-0 w-[600px] right-0 z-0"
							src="/assets/background/BG-Decoration.png"
							alt="Atelopus decoración"
						/>
						<div className="lg:w-1/2">
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
										title={t(
											"industries.retail.what.title"
										)}
										description={t(
											"industries.retail.what.desc"
										)}
									/>
									<AccordionData
										iconColor="text-green-400 currentColor"
										titleTextColor="text-white"
										descriptionColor="text-neutral-400"
										title={t(
											"industries.retail.loss.title"
										)}
										description={t(
											"industries.retail.loss.desc"
										)}
									/>
									<AccordionData
										iconColor="text-green-400 currentColor"
										titleTextColor="text-white"
										descriptionColor="text-neutral-400"
										title={t(
											"industries.retail.safety.title"
										)}
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
								borderColor="border-neutral-700">
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

						<div className="flex flex-col lg:1/2">
							<h2 className="title-big text-white font-semibold mb-4">
								{t("industries.title")}
							</h2>
							<p className="descriptions text-white mb-6">
								{t("industries.desc")}
							</p>
							<div className="flex flex-col md:flex-row gap-4 pb-8">
								<button className="btn-text-regular btn-green relative">
									{t("hero.demo")}
									<CornerFrame
										strokeColor="currentColor"
										className="text-neutral-950"
									/>
								</button>
								<button className="btn-text-regular btn-gray relative">
									{t("hero.how")}
									<CornerFrame
										strokeColor="currentColor"
										className="text-neutral-400"
									/>
								</button>
							</div>
							<img
								src="assets/vidh.png"
								className="w-full max-h-[463px] rounded-lg"
							/>
						</div>
					</section>

					{/* MÉTRICAS */}
					<section className="flex flex-col items-center p-16 mb-16">
						<div className="flex flex-col min-w-[443px] mb-10">
							<h2 className="title-big font-semibold mb-4 text-center">
								{t("metrics.title")}
							</h2>
							<span className="descriptions mb-6 text-center">
								{t("metrics.desc")}
							</span>
							<div className="flex flex-col md:flex-row gap-4">
								<button className="btn-text-regular btn-dark relative">
									{t("hero.demo")}
									<CornerFrame
										className="text-green-500"
										strokeColor="currentColor"
									/>
								</button>
								<button className="btn-text-regular btn-white relative">
									{t("hero.how")}
									<CornerFrame
										className="text-neutral-400"
										strokeColor="currentColor"
									/>
								</button>
							</div>
						</div>

						<div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4">
							{Array.from({ length: 6 }).map((_, i) => (
								<div
									key={i}
									className="flex flex-col justify-end bg-black p-8 rounded-lg h-64"
								>
									<h3 className="title-big text-white">
										1.82%
									</h3>
									<p className="descriptions text-white">
										{t("metrics.data")}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* FAQ */}
					<section className="flex flex-col gap-14 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-white mb-16">
						<div className="flex flex-col lg:w-1/2 gap-10">
							<h2 className="title-regular">{t("faq.title")}</h2>
							<img
								src="/assets/vidh.png"
								alt="Imagen"
								className="w-full max-h-[463px] rounded-lg"
							/>
						</div>

						<div className="lg:w-1/2">
							<AccordionItem title={`1. ${t("faq.q1")}`}>
								<div className="flex justify-start gap-1">
									<span>ICON</span>
									<h3 className="title-small font-bold">
										Qué hace:
									</h3>
								</div>
								<p className="descriptions mb-4">
									{t("faq.q1.what")}
								</p>

								<div className="flex justify-start gap-1">
									<span>ICON</span>
									<h3 className="title-small font-bold">
										Alertas Típicas:
									</h3>
								</div>
								<p className="descriptions mb-4">
									{t("faq.q1.alerts")}
								</p>

								<div className="flex justify-start gap-1">
									<span>ICON</span>
									<h3 className="title-small font-bold">
										Impacto:
									</h3>
								</div>
								<p className="descriptions mb-4">
									{t("faq.q1.impact")}
								</p>
							</AccordionItem>

							<AccordionItem title={`2. ${t("faq.q2")}`}>
								<p className="descriptions">
									{t("faq.q2.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`3. ${t("faq.q3")}`}>
								<p className="descriptions">
									{t("faq.q3.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`4. ${t("faq.q4")}`}>
								<p className="descriptions">
									{t("faq.q4.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`5. ${t("faq.q5")}`}>
								<p className="descriptions">
									{t("faq.q5.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`6. ${t("faq.q6")}`}>
								<p className="descriptions">
									{t("faq.q6.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`7. ${t("faq.q7")}`}>
								<p className="descriptions">
									{t("faq.q7.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`8. ${t("faq.q8")}`}>
								<p className="descriptions">
									{t("faq.q8.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`9. ${t("faq.q9")}`}>
								<p className="descriptions">
									{t("faq.q9.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`10. ${t("faq.q10")}`}>
								<p className="descriptions">
									{t("faq.q10.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`11. ${t("faq.q11")}`}>
								<p className="descriptions">
									{t("faq.q11.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`12. ${t("faq.q12")}`}>
								<p className="descriptions">
									{t("faq.q12.answer")}
								</p>
							</AccordionItem>

							<AccordionItem title={`13. ${t("faq.q13")}`}>
								<p className="descriptions">
									{t("faq.q13.answer")}
								</p>
							</AccordionItem>
						</div>
					</section>

					{/* CTA FINAL */}
					<section className="bg-black rounded-lg mb-16 flex justify-center p-16 ">
						<div className="flex flex-col max-w-[443px]">
							<h2 className="title-big text-white font-semibold mb-14 text-center">
								{t("cta.title")}
							</h2>
							<div className="flex flex-col gap-4 md:flex-row ">
								<button className="bg-green-600 text-black py-2 px-2 font-bold rounded-lg border-2 border-black md:flex-[1.2]">
									{t("cta.demo")}
								</button>
								<button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
									{t("cta.how")}
								</button>
							</div>
						</div>
					</section>

					{/* FORMULARIO DEMO */}
					<section className="bg-transparent rounded-lg flex flex-col lg:flex-row justify-between p-16 mb-16">
						<div className=" max-w-2xl w-full">
							<div className="mb-8">
								<h1 className="title-big font-bold mb-2">
									{t("form.title")}
								</h1>
								<p className="descriptions">{t("form.desc")}</p>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							{/* Nombre */}
							<div className="md:col-span-2">
								<label className="descriptions-sm mb-2 block">
									{t("form.name")}
								</label>
								<input
									type="text"
									name="nombre"
									placeholder="Jon Doe"
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 
                    focus:border-transparent outline-none transition-all"
								/>
							</div>

							{/* Empresa / País */}
							<div>
								<label className="descriptions-sm mb-2 block">
									{t("form.company")}
								</label>
								<input
									type="text"
									name="empresa"
									placeholder="Transmira INC"
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 
                    focus:border-transparent outline-none transition-all"
								/>
							</div>

							<div>
								<label className="descriptions-sm mb-2 block">
									{t("form.country")}
								</label>
								<input
									type="text"
									name="pais"
									placeholder="Panamá"
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 
                    focus:border-transparent outline-none transition-all"
								/>
							</div>

							{/* Email / Teléfono */}
							<div>
								<label className="descriptions-sm mb-2 block">
									{t("form.email")}
								</label>
								<input
									type="email"
									name="email"
									placeholder="jon@mail.com"
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 
                    focus:border-transparent outline-none transition-all"
								/>
							</div>

							<div>
								<label className="descriptions-sm mb-2 block">
									{t("form.phone")}
								</label>
								<input
									type="tel"
									name="telefono"
									placeholder="88 999 000 888"
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
								/>
							</div>

							{/* Mensaje */}
							<div className="md:col-span-2">
								<label className="descriptions-sm mb-2 block">
									{t("form.message")}
								</label>
								<textarea
									name="mensaje"
									placeholder="Aquí va tu mensaje"
									required
									rows="4"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all resize-none"
								></textarea>
							</div>

							{/* Botón */}
							<button
								type="button"
								className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium text-lg"
							>
								{t("cta.demo")}
							</button>
						</div>
					</section>
				</main>

				{/* FOOTER */}
				<footer
					id="contact"
					className="bg-white flex flex-col lg:flex-row p-16 mb-16 gap-28 rounded-lg"
				>
					<div>
						<h1 className="title-tiny font-semibold">Atelopus</h1>
						<p className="descriptions">{t("footer.rights")}</p>
					</div>

					<div className="flex gap-14">
						<div>
							<h1 className="title-tiny font-semibold">
								{t("footer.product")}
							</h1>
							{/* TODO: i18n — podrías mapear estas entradas del footer con claves dedicadas */}
							<p className="descriptions">About</p>
							<p className="descriptions">Features</p>
							<p className="descriptions">Benefits</p>
							<p className="descriptions">
								{t("footer.contact")}
							</p>
						</div>

						<div>
							<h1 className="title-tiny font-semibold">
								{t("footer.contact")}
							</h1>
							<p className="descriptions">
								info@hypernovalabs.com
							</p>
							<p className="descriptions">(+507) 202-4098/99</p>
							<p className="descriptions">
								Edificio Frontenac, piso 1, Calle 50, Ciudad de
								Panamá
							</p>
						</div>

						<div>
							<h1 className="title-tiny font-semibold">
								{t("footer.legal")}
							</h1>
							<p className="descriptions">{t("footer.terms")}</p>
							<p className="descriptions">
								{t("footer.privacy")}
							</p>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}

export default App;
