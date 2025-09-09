import { useState } from "react";

export default function AccordionItem({
  title,
  children,
  titleTextColor = "text-black",
  borderColor = "border-neutral-300",
  className = "",
  iconSize = ""
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      {/* Borde superior */}
      <hr className={`${borderColor}`} />

      {/* Botón */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left flex w-full justify-between py-6"
      >
        <h2 className={`title-small ${titleTextColor}`}>{title}</h2>
        <span className={`title-small ${titleTextColor} ${iconSize}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Contenido con animación */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col justify-start gap-6 py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
