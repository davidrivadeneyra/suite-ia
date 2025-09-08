import React from "react";
import CornerFrame from "./CornersFrame";

export default function CardMetric({
  title,          // ej: t("metrics.1.title")
  description,    // ej: t("metrics.1.desc")
  className = "",
}) {
  return (
    <div className={`group relative flex flex-col justify-end bg-neutral-900 p-8 rounded-lg h-72 overflow-hidden cursor-pointer ${className}`}>
    <CornerFrame
        strokeColor="currentColor"
        className="text-green-500 absolute top-0 left-0 w-full h-full cursor-pointer"
      />
      <img className="absolute top-0 pointer-events-none transform transition-transform duration-500 ease-out group-hover:scale-110" src="/assets/background/BG-Decoration.png" alt="" />
      {/* Contenido */}
      <h3 className="title-regular text-white pb-4">{title}</h3>
      <p className="descriptions text-neutral-400">{description}</p>
    </div>
  );
}