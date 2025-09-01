// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource/space-mono';

import AccordionItem from "./components/AccordionItem";


function App() {


  return (
    <div className="px-10 pt-10">

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
		<hero className="max-h-full mb-16">
			<section className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] md:grid-rows-2 lg:grid-cols-[2fr_1.3fr_1fr] lg:grid-rows-1 items-stretch mb-9 gap-4">{/** EN CELULAR 1 COLUMNA-EN TABLET 2 ROWS 2 COLS(PERO SOLO UN OBJETO EN LA PRIMERA COL) EN DESK 3 COLS*/}
				<div className="flex flex-col gap-6 h-full md:col-span-2 md:col-start-1 md:row-start-1 lg:col-span-1 mb-9 pr-0 md:pr-0 lg:pr-5">
					<h1 className=" text-6xl font-bold leading-none flex justify-start ">Detección de robos en tiempo real. Con IA</h1>
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
			{/**ABOUT VER PORSIACASO EL BOX-MODEL DEL RESPONSIVE*/}
			<section className="flex gap-11 max-h-max flex-col lg:flex-row mb-16">
				<div className="bg-black p-16  rounded-lg border-2 flex flex-col gap-7 lg:flex-[2.1]">
					<h2 className="font-bold text-4xl text-white">¿Qué es Atelopus?</h2>
					<p className="text-white max-w-2xl">
						Un framework modular de analítica de video con IA en tiempo real.
						 Funciona sobre tus cámaras observándolas 24/7 y te envía alertas 
						 claras con video cuando detecta movimientos o comportamientos sospechosos
						  (por ejemplo: ocultar productos, merodeo, acceso no autorizado). 
						  Funciona con tus cámaras actuales y puedes usarla en tu local o en la nube.
					</p>
				</div>
				<div className="bg-white rounded-lg border-2 p-16 flex flex-col justify-end lg:flex-[1]">
					<h2 className="font-bold text-2xl">¿Cómo te ayuda?</h2>
					<p className="">
						Reduce pérdidas, mejora la seguridad y ahorra horas de revisión manual 
						al convertir video en acciones.
					</p>
				</div>
			
			
			</section>
			{/**MODULOS CLAVE */}
			<section className="flex flex-col gap-3 lg:flex-row lg:justify-between p-16 rounded-lg bg-white mb-16">
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
			{/**COMO FUNCIONA */}{/**Para no cambiar el comportamiento, se utilizo space */}
			<section className="space-y-11 mb-16">
				<div className="flex flex-col md:pl-16 md:w-[443px] ">
					<h2 className="font-bold text-4xl mb-2">Cómo funciona</h2>
					<span className="mb-4">Breve descripción de la herramienta va aqui</span>
					<div className="flex flex-col gap-2 md:flex-row ">
						<button className="bg-black text-white py-2 px-2 font-bold rounded-lg border-2 md:flex-[1.2]">
							Solicitar demo
						</button>
						<button className="bg-white tex-black  py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
							Ver cómo funciona
						</button>
					</div>
				</div>
				{/**GRID COMO FUNCIONA*/}
				<div className="grid grid-cols-1 grid-rows-1 gap-y-8 md:grid-cols-2 md:grid-rows-3 md:gap-y-12 md:gap-x-12 lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-12 lg:gap-x-12 [&>*]:m-0">
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
						<p className="p-7 font-bold text-2xl w-4/5  leading-none">Métricas & reportes</p>
					</div>
				</div>
  
			</section>

			{/**BENEFICIOS */}
			<section className="bg-black rounded-lg">
				<div className="flex flex-col md:pl-16 md:w-[443px] ">
					<h2 className="font-bold text-4xl text-white mb-2">Beneficios</h2>
					<span className="text-white mb-4">Breve descripción de la herramienta va aqui</span>
					<div className="flex flex-col gap-2 md:flex-row ">
						<button className="bg-green-600 text-white py-2 px-2 font-bold rounded-lg border-green-600 border-2 md:flex-[1.2]">
							Solicitar demo
						</button>
						<button className="bg-white tex-black  py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
							Ver cómo funciona
						</button>
					</div>
				</div>
				{/**GRID */}
				<div className="grid grid-cols-1  md:grid-cols-2 md:grid-rows-4 bg-black p-6 mx-auto gap-2">
					<div className="bg-green-500 justify-items-start items-start  rounded-lg">
						<span>1</span>
						<h3>No cambias camaras</h3>
					</div>
					<div className="bg-green-500">
						<span></span>
						<h3></h3>
					</div>
					<div className="bg-green-500">
						<span></span>
						<h3></h3>
					</div>
					<div className="bg-green-500">
						<span></span>
						<h3></h3>
					</div>
					<div className="bg-green-500">
						<span></span>
						<h3></h3>
					</div>
					<div className="bg-green-500">
						<span></span>
						<h3></h3>
					</div>
					<div className="bg-green-500">
						<span></span>
						<h3></h3>
					</div>
					<div className="bg-green-500">
						<span></span>
						<h3></h3>
					</div>
				</div>
			</section>
			{/** VERSIONES O FUNCIONAMIENTO*/}
			<section>
				<div>
					<h2>

					</h2>
					<p></p>
					<div>
						<button></button>
						<button></button>
					</div>
				</div>
				{/**TABLA */}
				<div>
					<table>

					</table>
				</div>
			</section>
			{/**INDUSTRIAS */}
			<section>
				<div></div>
				<div>
					<h3></h3>
					<p></p>
					<div>
						<button></button>
						<button></button>
					</div>
				</div>
			</section>
			{/**METRICAS */}
			<section>
				<div>
					<h3></h3>
					<p></p>
					<div>
						<button></button>
						<button></button>
					</div>
				</div>
				{/***ALGUNAS METRICAS */}
				<div>
					<div>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<h3></h3>
						<p></p>
					</div>
				</div>
			</section>
			{/**PREGUNTAS FRECUENTES */}
			<section></section>
		</main>
	  </body>
    </div>
  );
}

export default App
