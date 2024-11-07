import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ScrollSlider from './components/ScrollSlider'

function App() {
  return (
    <>
      <main className="main main-background">
		<div className="main-inner-section">
			<h1 className="lg:w-[636px] title-bigger pb-3 lg:pb-6 pt-24">We craft designs that grow your business</h1>
			<p className="lg:w-[364px] descriptions pb-8 color-descripcion">From impactful websites to full visual identity, we design for growth and results.</p>
			<a href="mailto:hello@craftme.agency" className="btn mb-24">Let's craft a meeting</a>

			
      
		
		</div>
		{/* <div className="slider-container">
			<div className="slider">
				<img className="slider-img" src="/banner/dawn-desktop.png" alt="Imagen 1" />
				<img className="slider-img" src="/banner/agrosol-desktop.png" alt="Imagen 2" />
				<img className="slider-img" src="/banner/crafttool-mobile.png" alt="Imagen 3" />
				<img className="slider-img" src="/banner/dawn-mobile.png" alt="Imagen 4" />
				<img className="slider-img" src="/banner/edteam-desktop.png" alt="Imagen 5" />
				<img className="slider-img" src="/banner/martin-desktop.png" alt="Imagen 6" />
				<img className="slider-img" src="/banner/crafttool-mobile-2.png" alt="Imagen 7" />
			</div>
			<div className="slider">
				<img className="slider-img" src="/banner/dawn-desktop.png" alt="Imagen 1" />
				<img className="slider-img" src="/banner/agrosol-desktop.png" alt="Imagen 2" />
				<img className="slider-img" src="/banner/crafttool-mobile.png" alt="Imagen 3" />
				<img className="slider-img" src="/banner/dawn-mobile.png" alt="Imagen 4" />
				<img className="slider-img" src="/banner/edteam-desktop.png" alt="Imagen 5" />
				<img className="slider-img" src="/banner/martin-desktop.png" alt="Imagen 6" />
				<img className="slider-img" src="/banner/crafttool-mobile-2.png" alt="Imagen 7" />
			</div>
    	</div> */}

    
		<ScrollSlider/>
	</main>
	
	
	<div className="h-96"></div>
	<div className="h-96"></div>
	<div className="h-96"></div>
	<div className="h-96"></div>
	<div className="h-96"></div>
	<div className="h-96"></div>
	<div className="h-96"></div>

    </>
  )
}

export default App
