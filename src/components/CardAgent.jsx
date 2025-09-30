import React from "react";

// src/components/AgentCard.jsx
import { Plus } from "lucide-react";

export default function AgentCard({ subtitle, name, imageSrc = "/assets/ias/cel-ia.webp", onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-3xl p-[1px] text-left transition-shadow border border-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 bg-white/5"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* 1) CAPA FONDO */}
      <div className="absolute inset-0 rounded-3xl backdrop-blur-xl ring-1 ring-white/10" />

      {/* 2) CAPA IMAGEN (solo esta crece en hover) */}
      <div className="relative z-10">
        <img
          src={imageSrc}
          alt={name}
          className="block w-full select-none transform-gpu transition-transform duration-500 ease-out will-change-transform
                     group-hover:scale-[1.1]"
          draggable={false}
        />
      </div>

      {/* 3) CAPA MEDIA: degradado */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 left-0 z-20 h-1/2"
        style={{
          background:
            "linear-gradient(180deg, rgba(32, 32, 32, 0.00) 0%, rgba(32, 32, 32, 0.90) 69.92%, #202020 100%)",
        }}
      />

      {/* 4) CAPA COPY + BOTÓN */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-4 p-6 md:p-8">
        <div className="space-y-1">
          <h4 className="title-uppercase  text-orange-400 pb-2">
            {subtitle}
          </h4>
          <h3 className="title-regular text-white">
            {name}
          </h3>
        </div>

        {/* Botón circular con Lucide */}
        <div className="pointer-events-auto">
          <span
            className="inline-grid h-14 w-14 place-items-center rounded-full 
               bg-white/10 ring-1 ring-white/20
               transition-all duration-300 
               group-hover:bg-orange-500-brand 
               group-hover:scale-105 
               group-active:scale-95"
          >
            <Plus size={28} strokeWidth={2} className="text-white" />
          </span>
        </div>
      </div>
    </button>
  );
}
