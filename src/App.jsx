



function App() {
  return (
    <div className="px-10 pt-10">

      <header className="flex justify-between items-start mb-6">
		{/**LOGO */}
		<div>        <h1 className="text-2xl font-bold">Atelopus</h1>
</div>
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
		<hero className="max-h-full mb-16">{/*HERO SECTION*/}
			<section className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] md:grid-rows-2 lg:grid-cols-[2fr_1.3fr_1fr] lg:grid-rows-1 items-stretch mb-9 gap-4">{/** EN CELULAR 1 COLUMNA-EN TABLET 2 ROWS 2 COLS(PERO SOLO UN OBJETO EN LA PRIMERA COL) EN DESK 3 COLS*/}
				<div className="flex flex-col gap-6 h-full md:col-span-2 md:col-start-1 md:row-start-1 lg:col-span-1 mb-9 pr-0 md:pr-0 lg:pr-5">
					<h2 className=" text-6xl font-bold leading-none flex justify-start">Detección de robos en tiempo real. Con IA</h2>
					<p className="text-black">Convierte tus camaras en alertas útiles: Detecta comportamientos sospechosos y recibe alertas con video a tu celular para actuar en segundos.</p>	
					<div className="flex flex-col md:flex-row gap-4">
						{/**BOTONES VER BIEN LOS TAMAÑOS FLEX[*]*/}
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
			<video className="w-full h-full object-cover mb-">
  				
			</video>
		</hero>
		<main>
			{/**ABOUT */}
			<section className="flex gap-11 max-h-max">
				<div className="bg-black p-16  rounded-md border-2 flex-[2] flex flex-col gap-7">
					<h2 className="font-bold text-4xl text-white">¿Qué es Atelopus?</h2>
					<p className="text-white max-w-2xl">
						Un framework modular de analítica de video con IA en tiempo real.
						 Funciona sobre tus cámaras observándolas 24/7 y te envía alertas 
						 claras con video cuando detecta movimientos o comportamientos sospechosos
						  (por ejemplo: ocultar productos, merodeo, acceso no autorizado). 
						  Funciona con tus cámaras actuales y puedes usarla en tu local o en la nube.
					</p>
				</div>
				<div className="bg-white rounded-md border-2 flex-[1] p-16 flex flex-col justify-end ">
					<h2 className="font-bold text-2xl">¿Cómo te ayuda</h2>
					<p className="">
						Reduce pérdidas, mejora la seguridad y ahorra horas de revisión manual 
						al convertir video en acciones.
					</p>
				</div>
			</section>

			<section>{/**COMO FUNCIONA */}
				<div>
					<h2></h2>
					<span></span>
					<div>
						<button></button>
						<button></button>
					</div>
				</div>
				{/**Grid */}
				<div>
					<div>
						<span></span>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<span></span>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<span></span>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<span></span>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<span></span>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<span></span>
						<h3></h3>
						<p></p>
					</div>
				</div>
			</section>
			{/**BENEFICIOS */}
			<section>
				<div>
					<h2></h2>
					<p></p>
					<div>
						<button></button>
						<button></button>
					</div>
				</div>
				{/**GRID */}
				<div className="grid grid-cols-2 bg-black p-6 mx-auto">
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
