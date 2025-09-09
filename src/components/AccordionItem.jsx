import { useState } from "react";

export default function AccordionItem({
  title,
  children,
  titleTextColor = "text-black",   // color de título (y del ícono)
  borderColor = "border-neutral-300",    // color de borde
  className = "",
  iconSize = ""          // tamaño del ícono (+-)
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      {/* Borde superior */}
      <hr className={`${borderColor}`} />

      {/* Botón que abre/cierra */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left flex w-full justify-between py-6"
      >
        <h2 className={`title-small ${titleTextColor} ${className}`}>{title}</h2>
        <span className={`title-small ${titleTextColor} ${iconSize} `}>
          {isOpen ? "−" : "+"}
        </span>
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
