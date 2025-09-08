import React from "react";
import CornerFrame from "./CornersFrame";

/** CardBenefits (API mínima)
 * Props:
 * - title: string | ReactNode
 * - number: string | number
 * - className?: string               // para w/h/colores/etc.
 * - imgSrc?: string                  // URL de la imagen (solo la URL en instancia)
 * - imgAlt?: string                  // opcional, "" por defecto
 */
export default function CardBenefits({
  title,
  number,
  className = "",
  imgSrc,
  imgAlt = "",
}) {
  return (
    <div
      data-benefits-card
      className={[
        "relative flex flex-col justify-end",
        "bg-neutral-900 rounded-lg",
        "min-h-[200px] lg:min-h-[288px] p-8 rounded-lg overflow-hidden cursor-pointer",
        className,
      ].join(" ")}
    >
      {/* Imagen absoluta con máscara (fade desde abajo) */}
      {imgSrc && (
        <div className=" pointer-events-none absolute top-0 right-0 bottom-0 left-0 w-full z-0">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover"
            style={{
              // Fade desde abajo hacia arriba: transparente -> opaco
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%)",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
        </div>
      )}

      {/* Número con CornerFrame (hover del card controla el frame) */}
      <div className="text-xs md:text-sm relative h-12 w-12">
        <CornerFrame
          strokeColor="currentColor"
          hover={true}
          hoverTargetSelector='[data-benefits-card]'
          className="text-green-500"
        />
        <span className="relative z-10 flex items-center justify-center w-full h-full text-white font-medium">
          {number}
        </span>
      </div>

      {/* Título */}
      <h3 className="pt-6 title-small z-10 text-white">{title}</h3>
    </div>
  );
}
