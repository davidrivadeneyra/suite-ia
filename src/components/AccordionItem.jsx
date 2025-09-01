import { useState } from "react";

export default function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botón que abre/cierra */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center py-3 text-lg font-bold"
      >
        <h2>{title}</h2>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
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