import AccordionItem from "./components/AccordionItem";
import { useLanguage } from "./i18n/LanguageProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import GridOverlay from "./components/GridOverlay";
import GridSquares from "./components/GridSsquares";
import AccordionData from "./components/AccordionData";
import CornerFrame from "./components/CornersFrame";

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
						<div className="bg-neutral-950 p-6 md:p-16 rounded-lg border-2 flex flex-col gap-6 lg:flex-[2.1]">
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
										title={t("modules.retail.what.title")}
										description={t(
											"modules.retail.what.desc"
										)}
									/>
									<AccordionData
										title={t("modules.retail.alerts.title")}
										description={t(
											"modules.retail.alerts.desc"
										)}
									/>
									<AccordionData
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
										title={t("modules.face.what.title")}
										description={t(
											"modules.face.what.desc"
										)}
									/>
									<AccordionData
										title={t("modules.face.alerts.title")}
										description={t(
											"modules.face.alerts.desc"
										)}
									/>
									<AccordionData
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
										title={t(
											"modules.perimeter.what.title"
										)}
										description={t(
											"modules.perimeter.what.desc"
										)}
									/>
									<AccordionData
										title={t(
											"modules.perimeter.alerts.title"
										)}
										description={t(
											"modules.perimeter.alerts.desc"
										)}
									/>
									<AccordionData
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
										title={t(
											"modules.loitering.what.title"
										)}
										description={t(
											"modules.loitering.what.desc"
										)}
									/>
									<AccordionData
										title={t(
											"modules.loitering.alerts.title"
										)}
										description={t(
											"modules.loitering.alerts.desc"
										)}
									/>
									<AccordionData
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
										title={t("modules.lpr.what.title")}
										description={t("modules.lpr.what.desc")}
									/>
									<AccordionData
										title={t("modules.lpr.alerts.title")}
										description={t(
											"modules.lpr.alerts.desc"
										)}
									/>
									<AccordionData
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
					<section id="features" className="flex flex-col p-6 md:p-16 mb-16 relative">
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
															<CornerFrame className="text-neutral-400" strokeColor="currentColor" />
														</button>
							</div>
						</div>

						{/* GRID CÓMO FUNCIONA */}
						<div
							className="grid grid-cols-1 grid-rows-1 gap-y-8 md:grid-cols-2 md:grid-rows-3 md:gap-y-12 md:gap-x-12 
                lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-12 lg:gap-x-12 [&>*]:m-0"
						>
							{/* Tarjeta 1 */}
							<div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
								<div className="flex justify-between">
									<div className="p-7">
										<img src="assets/icon1.svg" alt="" />
									</div>
									<div className="relative w-16 h-16 flex items-center justify-center m-7">
										<img
											src="assets/esquinas.svg"
											alt="marco"
											className="absolute inset-0 w-full h-full"
										/>
										<span>1</span>
									</div>
								</div>
								<h3 className="title-smaller px-7 pb-7 w-4/5">
									{t("features.step1")}
								</h3>
							</div>

							{/* Tarjeta 2 */}
							<div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
								<div className="flex justify-between">
									<div className="p-7">
										<img src="assets/icon2.svg" alt="" />
									</div>
									<div className="relative w-16 h-16 flex items-center justify-center m-7">
										<img
											src="assets/esquinas.svg"
											alt="marco"
											className="absolute inset-0 w-full h-full"
										/>
										<span>2</span>
									</div>
								</div>
								<h3 className="title-smaller px-7 pb-7 w-4/5">
									{t("features.step2")}
								</h3>
							</div>

							{/* Tarjeta 3 */}
							<div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
								<div className="flex justify-between">
									<div className="p-7">
										<img src="assets/icon3.svg" alt="" />
									</div>
									<div className="relative w-16 h-16 flex items-center justify-center m-7">
										<img
											src="assets/esquinas.svg"
											alt="marco"
											className="absolute inset-0 w-full h-full"
										/>
										<span>3</span>
									</div>
								</div>
								<h3 className="title-smaller px-7 pb-7 w-4/5">
									{t("features.step3")}
								</h3>
							</div>

							{/* Tarjeta 4 */}
							<div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
								<div className="flex justify-between">
									<div className="p-7">
										<img src="assets/icon4.svg" alt="" />
									</div>
									<div className="relative w-16 h-16 flex items-center justify-center m-7">
										<img
											src="assets/esquinas.svg"
											alt="marco"
											className="absolute inset-0 w-full h-full"
										/>
										<span>4</span>
									</div>
								</div>
								<h3 className="title-smaller px-7 pb-7 w-4/5">
									{t("features.step4")}
								</h3>
							</div>

							{/* Tarjeta 5 */}
							<div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
								<div className="flex justify-between">
									<div className="p-7">
										<img src="assets/icon5.svg" alt="" />
									</div>
									<div className="relative w-16 h-16 flex items-center justify-center m-7">
										<img
											src="assets/esquinas.svg"
											alt="marco"
											className="absolute inset-0 w-full h-full"
										/>
										<span>5</span>
									</div>
								</div>
								<h3 className="title-smaller px-7 pb-7 w-4/5">
									{t("features.step5")}
								</h3>
							</div>

							{/* Tarjeta 6 */}
							<div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
								<div className="flex justify-between">
									<div className="p-7">
										<img src="assets/icon6.svg" alt="" />
									</div>
									<div className="relative w-16 h-16 flex items-center justify-center m-7">
										<img
											src="assets/esquinas.svg"
											alt="marco"
											className="absolute inset-0 w-full h-full"
										/>
										<span>6</span>
									</div>
								</div>
								<h3 className="title-smaller px-7 pb-7 w-4/5">
									{t("features.step6")}
								</h3>
							</div>
						</div>
					</section>

					{/* BENEFICIOS */}
					<section
						id="benefits"
						className=" bg-neutral-950 rounded-lg mb-16"
					>
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
										className="text-white"
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
							<div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
								<span className="px-7">1</span>
								<h3 className="title-small p-7 w-4/5">
									{t("benefits.1")}
								</h3>
							</div>
							<div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
								<span className="px-7">2</span>
								<h3 className="title-small p-7 w-4/5">
									{t("benefits.2")}
								</h3>
							</div>
							<div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
								<span className="px-7">3</span>
								<h3 className="title-small p-7 w-4/5">
									{t("benefits.3")}
								</h3>
							</div>
							<div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
								<span className="px-7">4</span>
								<h3 className="title-small p-7 w-4/5">
									{t("benefits.4")}
								</h3>
							</div>
							<div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
								<span className="px-7">5</span>
								<h3 className="title-small p-7 w-4/5">
									{t("benefits.5")}
								</h3>
							</div>
							<div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
								<span className="px-7">6</span>
								<h3 className="title-small p-7 w-4/5">
									{t("benefits.6")}
								</h3>
							</div>
							<div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
								<span className="px-7">7</span>
								<h3 className="title-small p-7 w-4/5">
									{t("benefits.7")}
								</h3>
							</div>
							<div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
								<span className="px-7">8</span>
								<h3 className="title-small p-7 w-4/5">
									{t("benefits.8")}
								</h3>
							</div>
						</div>
					</section>

					{/* VERSIONES / FUNCIONAMIENTO */}
					<section className="bg-white flex flex-col items-center mb-16 rounded-lg p-6 md:p-16">
						<div className="flex flex-col max-w-[443px]">
							<h2 className="title-big font-semibold mb-4 text-center">
								{t("versions.title")}
							</h2>
							<span className="descriptions mb-6 text-center">
								{t("metrics.desc")}
							</span>
							<div className="flex flex-col gap-4 md:flex-row mb-10">
								<button className="bg-black text-white py-2 px-2 font-bold rounded-lg border-2 md:flex-[1.2]">
									{t("hero.demo")}
								</button>
								<button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
									{t("hero.how")}
								</button>
							</div>
						</div>

						{/* TABLA */}
						<div>
							<table className="border-separate border-spacing-0 rounded-lg bg-black table-fixed">
								<thead>
									<tr>
										{/* TODO: i18n — agrega claves para estos encabezados si lo deseas */}
										<th className="bg-green-100 border-2 border-black rounded-lg w-52 title-tiny text-green-600">
											Opción
										</th>
										<th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24 title-tiny text-green-600">
											Dónde corre
										</th>
										<th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24 title-tiny text-green-600">
											Video fuera del sitio
										</th>
										<th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24 title-tiny text-green-600">
											Gestión multi-sede
										</th>
										<th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24 title-tiny text-green-600">
											Ideal para
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 descriptions font-semibold">
											{t("versions.option1")}
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Todo en Edge/Datacenter del cliente
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											No (opcional solo metadatos)
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Vía panel en sitio / VPN
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Compliance estricto, casinos,
											gobierno
										</td>
									</tr>
									<tr>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 descriptions font-semibold">
											{t("versions.option2")}
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Detección en Edge + gestión en nube
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Mínimo (clips/eventos)
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Sí
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Retail y PH multi-sede
										</td>
									</tr>
									<tr>
										<td className=" bg-white border-2 border-black rounded-lg border-t-0 descriptions font-semibold">
											{t("versions.option3")}
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Procesamiento principalmente en nube
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Sí
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Sí
										</td>
										<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">
											Clientes con menor restricción y
											rápida escalabilidad
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>

					{/* INDUSTRIAS */}
					<section className="flex flex-col-reverse gap-20 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-black mb-16">
						<div className="lg:w-1/2">
							<AccordionItem
								title={t("modules.retail.title")}
								titleTextColor="text-white"
								buttonColor="text-white"
							>
								<div className="flex justify-start gap-1">
									<span className="text-white">ICON</span>
									<h3 className="title-small text-white font-bold">
										{t("modules.retail.title")}:
									</h3>
								</div>
								<p className="descriptions text-white mb-4">
									{t("modules.retail.what")}
								</p>

								<div className="flex justify-start gap-1">
									<span className="text-white">ICON</span>
									<h3 className="title-small text-white font-bold">
										Alertas Típicas:
									</h3>
								</div>
								<p className="descriptions text-white mb-4">
									{t("modules.retail.alerts")}
								</p>

								<div className="flex justify-start gap-1">
									<span className="text-white">ICON</span>
									<h3 className="title-small text-white font-bold">
										Impacto:
									</h3>
								</div>
								<p className="descriptions text-white mb-4">
									{t("modules.retail.impact")}
								</p>
							</AccordionItem>

							<AccordionItem
								title={t("modules.face.title")}
								titleTextColor="text-white"
								buttonColor="text-white"
							>
								<p className="descriptions text-white">
									{t("modules.face.what")}
								</p>
							</AccordionItem>

							<AccordionItem
								title={t("modules.perimeter.title")}
								titleTextColor="text-white"
								buttonColor="text-white"
							>
								<p className="descriptions text-white">
									{t("modules.perimeter.what")}
								</p>
							</AccordionItem>

							<AccordionItem
								title={t("modules.loitering.title")}
								titleTextColor="text-white"
								buttonColor="text-white"
							>
								<p className="descriptions text-white">
									{t("modules.loitering.what")}
								</p>
							</AccordionItem>

							<AccordionItem
								title={t("modules.lpr.title")}
								titleTextColor="text-white"
								buttonColor="text-white"
							>
								<p className="descriptions text-white">
									{t("modules.lpr.what")}
								</p>
							</AccordionItem>
						</div>

						<div className="flex flex-col lg:1/2">
							<h2 className="title-big text-white font-semibold mb-4">
								{t("industries.title")}
							</h2>
							<p className="descriptions text-white mb-6">
								{t("industries.desc")}
							</p>
							<div className="flex flex-col gap-4 md:flex-row mb-10">
								<button className="bg-green-600 text-white py-2 px-2 font-bold rounded-lg border-green-600 border-2 md:flex-[1.2]">
									{t("industries.demo")}
								</button>
								<button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
									{t("industries.how")}
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
							<div className="flex flex-col gap-4 md:flex-row ">
								<button className="bg-black text-white py-2 px-2 font-bold rounded-lg border-2 md:flex-[1.2]">
									{t("hero.demo")}
								</button>
								<button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
									{t("hero.how")}
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
