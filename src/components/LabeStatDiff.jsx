// FeatureRow.jsx
import React from "react";

/**
 * Props:
 * - variant: "dark" | "light"  (colores de título/descr.)
 * - title, description: strings
 * - imgSrc, imgAlt: imagen de la izquierda
 * - className: clases extra para el contenedor
 * - imgClass: clases extra para la imagen
 */
export default function FeatureRow({
  variant = "light",
  title = "Voz ultra realista:",
  description = "tecnología de IA conversacional con matices humanos.",
  imgSrc = "/assets/icons3D/bank.webp",
  imgAlt = "",
  className = "",
  imgClass = "",
}) {
  const isDark = variant === "dark";
  const titleColor = isDark ? "title-dark" : "title-light";
  const descColor = isDark ? "description-dark" : "description-light";

  return (
    <section
      className={`w-full flex items-center gap-2 md:gap-2 ${className}`}
      aria-label="Feature row"
    >
      {/* Imagen */}
      <div className="shrink-0">
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          decoding="async"
          className={`block h-20 ${imgClass}`}
        />
      </div>

      {/* Texto */}
      <div className="min-w-0">
        <h3 className={`${titleColor} title-smaller break-words`}>
          {title}
        </h3>
        <p className={`${descColor} descriptions-base mt-2 break-words`}>
          {description}
        </p>
      </div>
    </section>
  );
}

