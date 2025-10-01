import React from "react";
// ajusta la ruta según tu proyecto (si tu ButtonLink es default export):
import ButtonLink from "./ButtonLink";

export default function AgentCards({
  subtitle,
  name,
  description,
  cta = "Saber más",
  href = "#",
  imageSrc = "/assets/ias/cel-ia.webp",
  className = "",
}) {
  return (
    <div
      className={
        "group relative w-full overflow-hidden rounded-3xl p-[1px] transition-shadow border border-white/10 hover:shadow-lg bg-white/5 cursor-pointer" +
        className
      }
      style={{ WebkitTapHighlightColor: "transparent" }}
      aria-label={name}
    >
      {/* 1) CAPA FONDO */}
      <div className="absolute inset-0 rounded-3xl backdrop-blur-xl ring-1 ring-white/10" />

      {/* 2) CAPA IMAGEN (solo esta crece en hover) */}
      <div className="relative z-10">
        <img
          src={imageSrc}
          alt={name}
          className="block w-full select-none transform-gpu transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.1]"
          draggable={false}
        />
      </div>

      {/* 3) CAPA MEDIA: degradado */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 left-0 z-20 h-1/2"
        style={{
          background:
            "linear-gradient(180deg, rgba(32,32,32,0) 0%, rgba(32,32,32,0.90) 69.92%, #202020 100%)",
        }}
      />

      {/* 4) CAPA COPY + CTA */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-end gap-4 p-6 md:p-8">
        <div className="w-full">
          <h4 className="subtitle-dark subtitle-uppercase pb-2">{subtitle}</h4>
          <h3 className="title-regular title-dark">{name}</h3>
            <p className="description-dark descriptions-base pb-4">
              {description}
            </p>
            <div className="flex">
                 <ButtonLink
              href={href}
              copy={cta}
              variant="ghostDark"
              className="w-full"
            />

            </div>
           
            
        </div>
      </div>
    </div>
  );
}
