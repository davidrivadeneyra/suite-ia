import React from "react";
import CardNumber from "./CardNumber";

export default function CardHowItWorks({
  title,
  number,
  numberNode,
  iconSrc,
  iconAlt = "",
  className = "",
  titleClassName = "title-smaller",
  iconWrapperClassName = "",
  numberWrapperClassName = "", // por si quieres añadir utilidades extra
}) {
  return (
    <div className={`flex flex-col justify-between w-full p-6 md:h-56 bg-white rounded-lg border-green-700 border ${className}`}>
      <div className="flex justify-between pb-8">
        <div className={iconWrapperClassName}>
          {iconSrc ? <img src={iconSrc} alt={iconAlt} /> : null}
        </div>

        {/* Slot para el número (ej. <CardNumber ... />) */}
        <CardNumber value={number} />
      </div>

      <h3 className={titleClassName}>{title}</h3>
    </div>
  );
}
