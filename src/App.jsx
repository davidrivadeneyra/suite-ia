import { useState } from 'react'



function App() {
  return (
    <div className="px-10 pt-10">

      <header className="flex justify-between items-start pb-4">
        <h1 className="text-2xl font-bold">Atelopus</h1>

        <nav>
          <ul className="flex flex-col items-end gap-1">
            <li><a href="#about" className="text-gray-800 font-bold hover:text-orange-500">Abaut</a></li>
            <li><a href="#features" className="text-gray-800 font-bold hover:text-orange-500">Features</a></li>
            <li><a href="#benefits" className="text-gray-800 font-bold hover:text-orange-500">Benefits</a></li>
			<li><a href="#contact" className="text-gray-800 font-bold hover:text-orange-500">Contact</a></li>
          </ul>
        </nav>
      </header>
	  <body>
		<hero>
			<section className="grid grid-cols-1 md:grid-cols-[550px,1.5fr,1fr] gap-8 items-stretch">
				<div className="flex-col gap-6">
					<h1 className=" text-5xl font-bold leading-nne">Detección de robos en tiempo real. Con IA</h1>
					<p className="text-black">Convierte tus camaras en alertas útiles: Detecta comportamientos sospechosos y recibe alertas con video a tu celular para actuar en segundos.</p>	
					<div className="flex gap-4">
						<button className="bg-black text-white px-10 py-3 font-bold rounded-md border-2 ">
							Solicitar demo
						</button>
						<button className="bg-white tex-black px-4 py-3 font-bold rounded-md border-2">
							Ver cómo funciona
						</button>
					</div>
				</div>
				<div className="flex justify-center">
					<img src="" alt="Hombre identificado robando" className="rounded-lg shadow-lg max-w-full"/>
				</div>
				<div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border">
					<p className="text-2xl font-bold mt-4">+12</p>
					<p className="">Clientes satifechos</p>
				</div>
			</section>
		</hero>
	  </body>
    </div>
  );
}

export default App
