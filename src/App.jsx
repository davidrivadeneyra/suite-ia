import { useState } from 'react'
import ScrollSlider from './components/ScrollSlider'
import MagnetButtons from './MagnetButton'

function App() {
  return (
    <div>
      <header className="flex justify-between items-start p-6 bg-white shadow-md h-64">
        <h1 className="text-2xl font-bold">Atelopus</h1>

        <nav className="flex  gap-4">
          <ul className="flex flex-col items-end gap-8">
            <li><a href="#home" className="text-gray-800 hover:text-orange-500">Home</a></li>
            <li><a href="#services" className="text-gray-800 hover:text-orange-500">Servicios</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-orange-500">Contacto</a></li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default App
