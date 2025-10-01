import React from "react";

/**
 * TestimonialCard.jsx
 * - Layout: logo a la izquierda, texto a la derecha (stack en mobile)
 * - Paleta neutral para fondos/bordes (figma neutral)
 * - Tipos/colores: usa las utilidades provistas (title-light, description-light, etc.)
 */
export default function CardTestimonial({
  client = "CMF Panamá",
  author = "María Torres",
  quote = "",
  imageSrc = "/empresas/empresa-1.webp",
  className = "",
}) {
  return (
    <section
      className={[
        "rounded-[28px] p-5 md:p-8",
        "bg-neutral-50 ring-1 ring-neutral-200 shadow-lg shadow-neutral-900/5",
        className,
      ].join(" ")}
      aria-label={`Testimonio de ${client}`}
    >
      {/* Cabecera: logo + cliente/autor */}
      <div className="flex items-end gap-4 md:gap-6">
        {/* Logo */}
        <div className="shrink-0 rounded-2xl overflow-hidden bg-neutral-100 ring-1 ring-neutral-200">
          <img
            src={imageSrc}
            alt={client}
            loading="lazy"
            decoding="async"
            className="h-[72px] w-[72px] md:h-[84px] md:w-[84px] object-cover"
          />
        </div>

        {/* Cliente y autor */}
        <div className="min-w-0">
          <div className="subtitle-light subtitle-uppercase description-light">
            {client}
          </div>
          <h3 className="title-small title-light mt-1">
            {author}
          </h3>
        </div>
      </div>

      {/* Cita */}
      <blockquote className="mt-6 md:mt-7 descriptions-base description-light">
        “{quote}”
      </blockquote>
    </section>
  );
}
