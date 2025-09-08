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
        className='text-left flex w-full justify-between py-6'
      >
        <h2 className="title-small">{title}</h2>
        <span className={`title-small ${buttonColor}`}>{isOpen ? "−" : "+"}</span>
      </button>

      {/* Contenido */}
      {isOpen && (
        <div className="flex flex-col justify-start gap-6 py-6">
          {children}
        </div>
      )}
    </div>
  );
}