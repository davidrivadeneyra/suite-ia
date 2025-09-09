// CardNumber.jsx
import React from "react";
import CornerFrame from "./CornersFrame";
export default function CardNumber({
  value,
  className = "relative w-10 h-10 flex items-center justify-center",
  numberClassName = "",
  // Controles opcionales del marco (no necesarios en la instancia básica)
  withFrame = true,
  strokeColor = "currentColor", // el frame toma el color de texto
  hoverFrame = true,           // por defecto sin hover (estático)
  frameClassName = "text-green-700", // combina con el borde de la tarjeta
}) {
  return (
    <div className={className}>
      {withFrame && (
        <CornerFrame
          strokeColor={strokeColor}
          hover={hoverFrame}
          className={frameClassName}
        />
      )}
      <span className={`text-xs md:text-sm relative z-10 ${numberClassName}`}>{value}</span>
    </div>
  );
}
