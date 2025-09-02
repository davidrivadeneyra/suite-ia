import { useState } from "react";

export default function AccordionItem({ title, children, titleTextColor,buttonColor}) {
  const [isOpen, setIsOpen] = useState(false);
console.log('buttonColor:', buttonColor);
  return (
    
    <div>
      {/* Botón que abre/cierra */}
      <hr className="border-black"></hr>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full justify-between items-center py-3 text-lg font-bold ${titleTextColor}'
      >
        {/**style={{color: 'white'}} */} {/**ESTO ARREGLA EL COLOR +-  */}
        <h2 className={titleTextColor}>{title}</h2>
        <span className='text-2xl ${buttonColor}'>{isOpen ? "−" : "+"}</span>
      </button>

      {/* Contenido */}
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
}