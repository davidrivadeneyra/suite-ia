import { useState } from 'react'
import ScrollSlider from './components/ScrollSlider'

function App() {
  return (
    <>
      <main className="main ">

		<div className='main-background mb-36'>
			<header>
				<div className='main-inner-section h-20 flex justify-between items-center'>
					<img className='h-4 lg:h-6'  src="/assets/logo.svg" alt="" />
					<a href="mailto:hello@craftme.agency" className="btn-small">Get it touch</a>
				</div>
			</header>
			<div className="main-inner-section">
				<h1 className="lg:w-[636px] title-bigger pb-3 lg:pb-6 pt-24">A design partner for your startup</h1>
				<p className="lg:w-[364px] descriptions pb-8 color-descripcion">From impactful websites to full visual identity, we design for growth and results.</p>
				<a href="mailto:hello@craftme.agency" className="button-regular mb-24">Get it touch</a>
			</div>
			<ScrollSlider/>
		</div>
		
		

		<div className="main-inner bg-white rounded-[72px] flex flex-col lg:flex-row gap-0 lg:gap-[72px] ">
			
			<div className='m-6 bg-logos lg:w-full h-96 lg:h-auto'>
				<div className=''>
				</div>
			</div>
			<div className='p-[72px] w-full'>
				<h1 className="title-big pb-8">We help brands stand out online</h1>
				<p className="descriptions pb-8 text-[#586578]">From impactful websites to full visual identity, we design for growth and results.</p>
				<a href="mailto:hello@craftme.agency" className="button-regular">Get it touch</a>
			</div>
			
		</div>

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
