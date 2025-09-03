// Supports weights 200-800
// import '@fontsource-variable/plus-jakarta-sans';
// import '@fontsource/space-mono';

import AccordionItem from "./components/AccordionItem";


function App() {


  return (
    <div className=" px-4 pt-4 md:px-12 md:pt-12">

      <header className="flex justify-between items-start mb-6">
		{/**LOGO -AGREGAR*/}
		<div>
			
			<h1 className="text-2xl font-bold">Atelopus</h1></div>
			{/* NAVEGADOR*/}
        <nav>
          <ul className="flex flex-col items-end gap-1">
            <li><a href="#about" className="text-gray-800 font-bold hover:text-orange-500">About</a></li>
            <li><a href="#features" className="text-gray-800 font-bold hover:text-orange-500">Features</a></li>
            <li><a href="#benefits" className="text-gray-800 font-bold hover:text-orange-500">Benefits</a></li>
			<li><a href="#contact" className="text-gray-800 font-bold hover:text-orange-500">Contact</a></li>
          </ul>
        </nav>
      </header>
	  <body>
		{/*HERO SECTION*/}
		<hero className="max-h-full mb-16 ">
			<section className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] md:grid-rows-2 lg:grid-cols-[2fr_1.3fr_1fr] lg:grid-rows-1 items-stretch mb-9 gap-4">{/** EN CELULAR 1 COLUMNA-EN TABLET 2 ROWS 2 COLS(PERO SOLO UN OBJETO EN LA PRIMERA COL) EN DESK 3 COLS*/}
				<div className=" bg-transparent flex flex-col gap-6 h-full md:col-span-2 md:col-start-1 md:row-start-1 lg:col-span-1 mb-9 pr-0 md:pr-0 lg:pr-5">
					<h1 className="title-bigger text-6xl font-bold leading-none flex justify-start ">Detección de robos en tiempo real. Con IA</h1>
					<p className="text-black">Convierte tus camaras en alertas útiles: Detecta comportamientos sospechosos y recibe alertas con video a tu celular para actuar en segundos.</p>	
					<div className="flex flex-col md:flex-row gap-4">
						{/**BOTONES */}
						<button className="bg-black text-white md:flex-[4] lg:flex-[5] py-3 font-bold rounded-lg border-2 ">
							Solicitar demo
						</button>
						<button className="bg-white tex-black md:flex-[1.5] lg:flex-[3] py-3 font-bold rounded-lg border-2">
							Ver cómo funciona
						</button>
					</div>
				</div>{/**Imagen */}
				<div className="md:row-start-2 lg:row-start-auto mb-9">
					<img src="" alt="Hombre identificado robando" className="rounded-lg shadow-lg max-w-full"/>
				</div>{/**CLIENTES SATISFECHOS */}
				<div className="bg-white rounded-lg shadow-md pl-6 flex flex-col justify-end item-start border md:row-start-2 lg:row-start-auto mb-9">
					<p className="text-6xl font-bold mt-4">+12</p>
					<p className="">Clientes satifechos</p>
				</div>
			</section>
			{/**VIDEO */}
			<video className="w-full h-full object-cover mb-16">
  				
			</video>
		</hero>
		<main>
			{/**ABOUT VER POR SIACASO EL BOX-MODEL DEL RESPONSIVE*/}
			<section className=" flex gap-11 max-h-max flex-col lg:flex-row mb-16">
				<div className="bg-black p-6 md:p-16  rounded-lg border-2 flex flex-col gap-7 lg:flex-[2.1]">
					<h2 className="font-bold text-4xl text-white">¿Qué es Atelopus?</h2>
					<p className="text-white max-w-2xl">
						Un framework modular de analítica de video con IA en tiempo real.
						 Funciona sobre tus cámaras observándolas 24/7 y te envía alertas 
						 claras con video cuando detecta movimientos o comportamientos sospechosos
						  (por ejemplo: ocultar productos, merodeo, acceso no autorizado). 
						  Funciona con tus cámaras actuales y puedes usarla en tu local o en la nube.
					</p>
				</div>
				<div className="bg-white rounded-lg border-2 p-6 md:p-16 flex flex-col justify-end lg:flex-[1]">
					<h2 className="font-bold text-2xl">¿Cómo te ayuda?</h2>
					<p className="">
						Reduce pérdidas, mejora la seguridad y ahorra horas de revisión manual 
						al convertir video en acciones.
					</p>
				</div>
			
			
			</section>
			{/**MODULOS CLAVE */}
			<section className="flex flex-col gap-3 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-white mb-16">
				<div>
					<h2 className="font-bold text-4xl">Módulos clave</h2>
					<img/>
				</div>
				<div className="lg:w-1/2">
					
					{/* Botón del acordeón */}
					
						<AccordionItem title="Robos en Tiendas (Retail Theft)">
							<div className="flex justify-start gap-1">
								<span>ICON</span>
								<h3 className="font-bold ">Qué hace: </h3>
							</div>
							<p className="leading-none mb-4">Detecta comportamientos de hurto en piso y caja y notifica con video..</p>
							<div className="flex justify-start gap-1">
								<span>ICON</span>
								<h3 className="font-bold ">Alertas Típicas: </h3>
							</div>
							<p className="leading-none mb-4">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>
							<div className="flex justify-start gap-1">
								<span>ICON</span>
								<h3 className="font-bold ">Impacto: </h3>
							</div>
							<p className="leading-none mb-4">Menos merma y menos horas revisando grabaciones.</p>
						</AccordionItem>
						
						<AccordionItem title="Reconocimiento facial (IA)">
        					<p>Detecta rostros y los compara con bases de datos autorizadas.</p>
						</AccordionItem>

						<AccordionItem title="PH / Accesos y Perímetro">
							<p>Control de accesos y monitoreo de perímetro con alertas en tiempo real.</p>
						</AccordionItem>

						<AccordionItem title="Merodeo (Loitering) en áreas sensibles">
							<p>Detecta presencia prolongada en áreas críticas.</p>
						</AccordionItem>

						<AccordionItem title="LPR – Placas y Control de Vehículos">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
				</div>
			</section>
			{/**COMO FUNCIONA ARREGLAR EL FLOW*/}{/**Para no cambiar el comportamiento, se utilizo space */}
			<section className="space-y-11 mb-16">
				<div className="flex flex-col ml-6 md:ml-16 box-border md:w-[443px] ">
					<h2 className="font-bold text-4xl mb-5">Cómo funciona</h2>
					<span className="mb-5">Breve descripción de la herramienta va aqui</span>
					<div className="flex flex-col gap-4 md:flex-row ">
						<button className="bg-black text-white py-2 px-2 font-bold rounded-lg border-2 md:flex-[1.2]">
							Solicitar demo
						</button>
						<button className="bg-white text-black  py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
							Ver cómo funciona
						</button>
					</div>
				</div>
				{/**GRID COMO FUNCIONA*/}
				<div className="grid grid-cols-1 grid-rows-1 gap-y-8 md:grid-cols-2 md:grid-rows-3 md:gap-y-12 md:gap-x-12 
				lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-12 lg:gap-x-12 [&>*]:m-0 px-6 md:px-16 pb-16">
						{/**TARJETAS */}
					<div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
						<div className="flex justify-between p-7">
							<span>icon</span>
						<span>1</span>
						</div>
						<p className="p-7 font-bold text-2xl w-4/5 leading-none">Conecta tus cámaras</p>
					</div>
					<div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 bg-white rounded-lg border-green-700 border-2 ">
						<div className="flex justify-between p-7">
							<span>icon</span>
						<span>2</span>
						</div>
						<p className="p-7 font-bold text-2xl w-4/5  leading-none">Edge analiza en tiempo real</p>
					</div><div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 bg-white rounded-lg border-green-700 border-2 ">
						<div className="flex justify-between p-7">
							<span>icon</span>
						<span>3</span>
						</div>
						<p className="p-7 font-bold text-2xl w-4/5  leading-none">Reglas y listas</p>
					</div><div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 bg-white rounded-lg border-green-700 border-2 ">
						<div className="flex justify-between p-7">
							<span>icon</span>
						<span>4</span>
						</div>
						<p className="p-7 font-bold text-2xl w-4/5  leading-none">Alertas adicionales</p>
					</div><div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 bg-white rounded-lg border-green-700 border-2 ">
						<div className="flex justify-between p-7">
							<span>icon</span>
						<span>5</span>
						</div>
						<p className="p-7 font-bold text-2xl w-4/5  leading-none">Automación (puertas/rádio)</p>
					</div><div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 bg-white rounded-lg border-green-700 border-2 ">
						<div className="flex justify-between p-7">
							<span>icon</span>
						<span>6</span>
						</div>
						<p className="p-7 font-bold text-2xl w-4/5  leading-none ">Métricas & reportes</p>
					</div>
				</div>
  
			</section>

			{/**BENEFICIOS */}
			<section className=" bg-black rounded-lg mb-16">
				<div className="flex flex-col mx-6 md:ml-16 pt-6 md:pt-16 md:w-[443px] ">
					<h2 className="font-bold text-4xl text-white mb-5">Beneficios</h2>
					<span className="text-white mb-5">Breve descripción de la herramienta va aqui</span>
					<div className="flex flex-col gap-2 md:flex-row mb-10">
						<button className="bg-green-600 text-white py-2 px-2 font-bold rounded-lg border-green-600 border-2 md:flex-[1.2]">
							Solicitar demo
						</button>
						<button className="bg-white tex-black  py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
							Ver cómo funciona
						</button>
					</div>
				</div>
				{/**GRID */}
				<div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 px-6 md:px-16 pb-16 mx-auto gap-4">
					<div className="bg-green-500 min-h-[200px]  lg:min-h-[288px] flex flex-col justify-end rounded-lg">
						<span className="px-7 ">1</span>
						
						<h3 className="p-7 font-bold text-2xl w-4/5  leading-none">No cambias camaras</h3>
					</div>
					<div className="bg-green-500 min-h-[200px]  lg:min-h-[288px] flex flex-col justify-end rounded-lg">
						<span className="px-7 ">1</span>
						
						<h3 className="p-7 font-bold text-2xl w-4/5  leading-none">No cambias camaras</h3>
					</div>
					<div className="bg-green-500 min-h-[200px]  lg:min-h-[288px] flex flex-col justify-end rounded-lg">
						<span className="px-7 ">1</span>
						
						<h3 className="p-7 font-bold text-2xl w-4/5  leading-none">No cambias camaras</h3>
					</div>
					<div className="bg-green-500 min-h-[200px]  lg:min-h-[288px] flex flex-col justify-end rounded-lg">
						<span className="px-7 ">1</span>
						
						<h3 className="p-7 font-bold text-2xl w-4/5  leading-none">No cambias camaras</h3>
					</div>
					<div className="bg-green-500 min-h-[200px]  lg:min-h-[288px] flex flex-col justify-end rounded-lg">
						<span className="px-7 ">1</span>
						
						<h3 className="p-7 font-bold text-2xl w-4/5  leading-none">No cambias camaras</h3>
					</div>
					<div className="bg-green-500 min-h-[200px]  lg:min-h-[288px] flex flex-col justify-end rounded-lg">
						<span className="px-7 ">1</span>
						
						<h3 className="p-7 font-bold text-2xl w-4/5  leading-none">No cambias camaras</h3>
					</div>
					<div className="bg-green-500 min-h-[200px]  lg:min-h-[288px] flex flex-col justify-end rounded-lg">
						<span className="px-7 ">1</span>
						
						<h3 className="p-7 font-bold text-2xl w-4/5  leading-none">No cambias camaras</h3>
					</div>
					<div className="bg-green-500 min-h-[200px]  lg:min-h-[288px] flex flex-col justify-end rounded-lg">
						<span className="px-7 ">1</span>
						
						<h3 className="p-7 font-bold text-2xl w-4/5  leading-none">No cambias camaras</h3>
					</div>
				</div>
			</section>
			{/** VERSIONES O FUNCIONAMIENTO FALTA HACERLA RESPONSIVE*/}
			<section className="bg-white flex flex-col items-center mb-16 rounded-lg p-6 md:p-16">
				<div className="flex flex-col max-w-[443px]">
					<h2 className="font-bold text-4xl mb-5 text-center">Versiones y opciones de funcionamiento</h2>
					<span className="mb-5 text-center">Breve descripción de la herramienta va aqui</span>
					<div className="flex flex-col gap-2 md:flex-row mb-10">
						<button className="bg-black text-white py-2 px-2 font-bold rounded-lg border-2 md:flex-[1.2]">
							Solicitar demo
						</button>
						<button className="bg-white text-black  py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
							Ver cómo funciona
						</button>
					</div>
				</div>
				{/**TABLA */}
				<div>{/**border-spacing quita el espacio por defectode cada cuadrado table-fixed permite ajustar tamaño, no es nece
				 * sario agregar el tamaño a acada tabla, solo al titulo esta bien
				 */}
					<table className="border-separate border-spacing-0 rounded-lg bg-black table-fixed " >
						<thead>
							<tr >
								<th className="bg-green-100 border-2 border-black rounded-lg w-52">Opción</th>
								<th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24">Dónde corre</th>
								<th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24"> Video fuera del sitio</th>
								<th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24">Gestión multi-sede</th>
								<th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24">Ideal para</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="bg-white border-2 border-black rounded-lg border-t-0">Local(On-Prem)</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Todo en Edge/Datacenter del cliente</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">No (opcional solo metadatos)</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Vía panel en sitio / VPN</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Compliance estricto, casinos, gobierno</td>
							</tr>
							<tr>
								<td className="bg-white border-2 border-black rounded-lg border-t-0">Híbrido</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Detección en Edge + gestión en nube</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Mínimo (clips/eventos)</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Sí</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Retail y PH multi-sede</td>
							</tr>
							<tr>
								<td className=" bg-white border-2 border-black rounded-lg border-t-0">SaaS (Cloud)</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Procesamiento principalmente en nube</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Sí</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Sí</td>
								<td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0">Clientes con menor restricción y rápida escalabilidad</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			{/**INDUSTRIAS EDITAR +- Y AÑADIR DESCRIPCIONES ARREGLAR EL FLOW*/}
			<section className="flex flex-col gap-3 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-black mb-16">
				{/**ACORDEON NEGRO */}
				<div className="lg:w-1/2">
					
					{/* Botón del acordeón */}
					
						<AccordionItem title="Robos en Tiendas (Retail Theft)" titleTextColor="text-white" buttonColor="text-white">
							<div className="flex justify-start gap-1">
								<span className="text-white">ICON</span>
								<h3 className="font-bold text-white">Qué hace: </h3>
							</div>
							<p className="leading-none mb-4 text-white">Detecta comportamientos de hurto en piso y caja y notifica con video..</p>
							<div className="flex justify-start gap-1">
								<span className="text-white">ICON</span>
								<h3 className="font-bold text-white">Alertas Típicas: </h3>
							</div>
							<p className="leading-none mb-4 text-white ">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>
							<div className="flex justify-start gap-1">
								<span className="text-white">ICON</span>
								<h3 className="font-bold text-white">Impacto: </h3>
							</div>
							<p className="leading-none mb-4 text-white">Menos merma y menos horas revisando grabaciones.</p>
						</AccordionItem>
						
						<AccordionItem title="Reconocimiento facial (IA)" titleTextColor="text-white">
        					<p className="text-white">Detecta rostros y los compara con bases de datos autorizadas.</p>
						</AccordionItem>

						<AccordionItem title="PH / Accesos y Perímetro" titleTextColor="text-white">
							<p className="text-white">Control de accesos y monitoreo de perímetro con alertas en tiempo real.</p>
						</AccordionItem>

						<AccordionItem title="Merodeo (Loitering) en áreas sensibles" titleTextColor="text-white">
							<p className="text-white">Detecta presencia prolongada en áreas críticas.</p>
						</AccordionItem>

						<AccordionItem title="LPR – Placas y Control de Vehículos" titleTextColor="text-white">
							<p className="text-white">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
				</div>
				{/**BOTONES */}
				<div className="flex flex-col md:w-[443px]">
					<h2 className="font-bold text-4xl text-white mb-5">Industrias</h2>
					<p className="text-white mb-5">Breve descripcion</p>
					<div className="flex flex-col gap-2 md:flex-row mb-10">
						<button className="bg-green-600 text-white py-2 px-2 font-bold rounded-lg border-green-600 border-2 md:flex-[1.2]">
							Solicitar demo
						</button>
						<button className="bg-white tex-black  py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
							Ver cómo funciona
						</button>
					</div>
					<img/>
				</div>
			</section>
			{/**METRICAS */}
			<section className="flex flex-col items-center p-16 mb-16">
				<div className="flex flex-col  min-w-[443px] mb-10">
					<h2 className="font-bold text-4xl mb-5 text-center">Métricas de impacto</h2>
					<span className="mb-5 text-center">Breve descripción de la herramienta va aqui</span>
					<div className="flex flex-col gap-2 md:flex-row ">
						<button className="bg-black text-white py-2 px-2 font-bold rounded-lg border-2 md:flex-[1.2]">
							Solicitar demo
						</button>
						<button className="bg-white tex-black  py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
							Ver cómo funciona
						</button>
					</div>
				</div>
				{/***ALGUNAS METRICAS */}
				<div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4">
					<div className="flex flex-col justify-end bg-black p-8 rounded-lg h-64">
						<h3 className="text-white text-2xl font-bold">1.82%</h3>
						<p className="text-white">Tasa global de merma sobre ventas minoristas.(Global Shrink Index-Snsormatic)</p>
					</div>
					<div className="flex flex-col justify-end bg-black p-8 rounded-lg h-64">
						<h3 className="text-white text-2xl font-bold">1.82%</h3>
						<p className="text-white">Tasa global de merma sobre ventas minoristas.(Global Shrink Index-Snsormatic)</p>
					</div>
					<div className="flex flex-col justify-end bg-black p-8 rounded-lg h-64">
						<h3 className="text-white text-2xl font-bold">1.82%</h3>
						<p className="text-white">Tasa global de merma sobre ventas minoristas.(Global Shrink Index-Snsormatic)</p>
					</div>
					<div className="flex flex-col justify-end bg-black p-8 rounded-lg  h-64">
						<h3 className="text-white text-2xl font-bold">1.82%</h3>
						<p className="text-white">Tasa global de merma sobre ventas minoristas.(Global Shrink Index-Snsormatic)</p>
					</div>
					<div className="flex flex-col justify-end bg-black p-8 rounded-lg  h-64">
						<h3 className="text-white text-2xl font-bold">1.82%</h3>
						<p className="text-white">Tasa global de merma sobre ventas minoristas.(Global Shrink Index-Snsormatic)</p>
					</div>
					<div className="flex flex-col justify-end bg-black p-8 rounded-lg h-64">
						<h3 className="text-white text-2xl font-bold">1.82%</h3>
						<p className="text-white">Tasa global de merma sobre ventas minoristas.(Global Shrink Index-Snsormatic)</p>
					</div>
				</div>
			</section>
			{/**PREGUNTAS FRECUENTES ARREGLAR EL RESPONSIVE*/}
			<section className="flex flex-col gap-16 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-white mb-16">
				<div>
					<h2 className="font-bold text-4xl">Preguntas frecuentes</h2>
					<img/>
				</div>
				{/* Botón del acordeón */}
				<div className="lg:w-1/2">
					
					
					
						<AccordionItem title="1. ¿Qué es exactamente esta plataforma?">
							<div className="flex justify-start gap-1">
								<span>ICON</span>
								<h3 className="font-bold ">Qué hace: </h3>
							</div>
							<p className="leading-none mb-4">Detecta comportamientos de hurto en piso y caja y notifica con video..</p>
							<div className="flex justify-start gap-1">
								<span>ICON</span>
								<h3 className="font-bold ">Alertas Típicas: </h3>
							</div>
							<p className="leading-none mb-4">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>
							<div className="flex justify-start gap-1">
								<span>ICON</span>
								<h3 className="font-bold ">Impacto: </h3>
							</div>
							<p className="leading-none mb-4">Menos merma y menos horas revisando grabaciones.</p>
						</AccordionItem>
						
						<AccordionItem title="2. ¿Necesito cambiar mis cámaras?">
        					<p>Detecta rostros y los compara con bases de datos autorizadas.</p>
						</AccordionItem>

						<AccordionItem title="3. ¿Cómo recibo las alertas?">
							<p>Control de accesos y monitoreo de perímetro con alertas en tiempo real.</p>
						</AccordionItem>

						<AccordionItem title="4. ¿Qué pasa si se cae Internet?">
							<p>Detecta presencia prolongada en áreas críticas.</p>
						</AccordionItem>

						<AccordionItem title="5. ¿Qué tan precisa es? ¿Y los falsos positivos?">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
						<AccordionItem title="6. ¿Se integra con mis sistemas actuales?">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
						<AccordionItem title="7.¿Cómo cuidan la privacidad?">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
						<AccordionItem title="8.¿Puedo usarlo en cualquier país?">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
						<AccordionItem title="9.¿Cuánto tarda la instalación?">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
						<AccordionItem title="10. ¿Qué opciones de uso tienen (nube o local)?">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
						<AccordionItem title="11. ¿Cuánto cuesta?">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
						<AccordionItem title="12.¿Qué necesito para empezar?">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
						<AccordionItem title="13.¿Quién atiende y capacita a mi equipo?">
							<p>Reconoce placas vehiculares y gestiona entradas/salidas.</p>
						</AccordionItem>
						
				</div>
			</section>
			{/**TOMAR DEMO */}
			<section className="bg-black rounded-lg mb-16 flex justify-center p-16">
				<div className="flex flex-col  max-w-[443px] mb-10">
					<h2 className="font-bold text-4xl mb-5 text-center text-white">¿Listo para prevenir pérdidas y automatizar tu seguridad?</h2>
					<div className="flex flex-col gap-2 md:flex-row ">
						<button className="bg-green-600 text-black py-2 px-2 font-bold rounded-lg border-2 border-black md:flex-[1.2]">
							Solicitar demo
						</button>
						<button className="bg-white tex-black  py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
							Ver cómo funciona
						</button>
					</div>
				</div>
			</section>
		</main>
	  </body>
    </div>
  );
}

export default App
