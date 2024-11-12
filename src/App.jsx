import { useState } from 'react'
import ScrollSlider from './components/ScrollSlider'

function App() {
  return (
    <>
      <main className="main main-background">
		<header>
			<div className='main-inner-section h-20 flex justify-between items-center'>
				<img className='h-6'  src="/assets/logo.svg" alt="" />
				<a href="mailto:hello@craftme.agency" className="btn-small">Get it touch</a>
			</div>
			
		</header>
		
		<div className="main-inner-section">
			<h1 className="lg:w-[636px] title-bigger pb-3 lg:pb-6 pt-24">A design partner for your startup</h1>
			<p className="lg:w-[364px] descriptions pb-8 color-descripcion">From impactful websites to full visual identity, we design for growth and results.</p>
			<button href="mailto:hello@craftme.agency" className="button-regular">Get it touch</button>
			
		</div>
    
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
