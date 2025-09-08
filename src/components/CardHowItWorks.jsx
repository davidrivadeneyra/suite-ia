import React from "react";

export function Card({
  title,
  numberNode,
  iconSrc,
  iconAlt = "",
  className = "",
  titleClassName = "title-smaller px-7 pb-7 w-4/5",
  bodyClassName = "flex justify-between",
  iconWrapperClassName = "p-7",
  numberWrapperClassName = "", // por si quieres añadir utilidades extra
}) {
  return (
    <div className={`w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ${className}`}>
      <div className={`${bodyClassName}`}>
        <div className={iconWrapperClassName}>
          {iconSrc ? <img src={iconSrc} alt={iconAlt} /> : null}
        </div>

        {/* Slot para el número (ej. <CardNumber ... />) */}
        <div className={numberWrapperClassName}>
          {numberNode}
        </div>
      </div>

      <h3 className={titleClassName}>{title}</h3>
    </div>
  );
}
