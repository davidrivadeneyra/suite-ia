import { useState } from 'react'
import ScrollSlider from './components/ScrollSlider'
import MagnetButtons from './MagnetButton'

function App() {
  return (
    <>
      <main className="main ">

		<div className='main-background mb-36'>
			<header>
				<div className='main-inner-section h-20 flex justify-between items-center'>
					<MagnetButtons>
						<a href="/">
							<img className='h-4 lg:h-6'  src="/assets/logo.svg" alt="" />
						</a>
					</MagnetButtons>
					<MagnetButtons>
						<a href="mailto:hello@craftme.agency" className="btn-small">Get it touch</a>
					</MagnetButtons>
				</div>
			</header>
			<div className="main-inner-section">
				<h1 className="lg:w-[636px] title-bigger pb-3 lg:pb-6 pt-24">A design partner for your startup</h1>
				<p className="lg:w-[364px] descriptions pb-8 color-descripcion">From impactful websites to full visual identity, we design for growth and results.</p>
				<MagnetButtons>
					<a href="mailto:hello@craftme.agency" className="button-regular mb-24">Get it touch</a>
				</MagnetButtons>
			</div>
			<ScrollSlider/>
		</div>
		
		<div className="mx-6 md:mx-auto main-inner bg-white rounded-[40px] lg:rounded-[72px] flex flex-col lg:flex-row gap-0 lg:gap-[72px] ">
			
			<div className='m-2 lg:m-6 bg-logos lg:w-full h-72 lg:h-auto rounded-[32px] lg:rounded-[48px]'>
				<div className=''>
				</div>
			</div>
			<div className='p-8 lg:p-[72px] w-full'>
				<h1 className="title-big pb-2 lg:pb-8">We help brands stand out online</h1>
				<p className="descriptions pb-6 lg:pb-8 text-[#586578]">From impactful websites to full visual identity, we design for growth and results.</p>
				<MagnetButtons>
					<a href="mailto:hello@craftme.agency" className="button-regular">Get it touch</a>
				</MagnetButtons>
			</div>
			
		</div>

	</main>
	
	
	<div className="h-96">
		<div className="main-inner-section">
				<h1 className="lg:w-[636px] title-bigger pb-3 lg:pb-6 pt-24">Aquí va otra sección</h1>
				<p className="lg:w-[364px] descriptions pb-8 color-descripcion">From impactful websites to full visual identity, we design for growth and results.</p>
				<MagnetButtons>
					<a href="mailto:hello@craftme.agency" className="button-regular mb-24">Get it touch</a>
				</MagnetButtons>
			</div>
	</div>
	

    </>
  )
}

export default App
