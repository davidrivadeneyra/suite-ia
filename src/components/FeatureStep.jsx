import React from "react";

/**
 * FeatureStep.jsx
 * - Un bloque con número dentro de círculo + título + descripción
 * - Variante de color: dark | light
 *
 * Props:
 *  - number: string | number (ej. "1")
 *  - title: string
 *  - description: string
 *  - variant: "dark" | "light"
 *  - className: clases extra para el contenedor
 */
export default function FeatureStep({
  number = "1",
  title = "Crea tu Agente Digital",
  description = "Configura tu agente desde cero cargando la información de tu negocio: productos, servicios, datos de clientes y procesos. Prepáralo con todo lo necesario para que sea tu mejor empleado digital.",
  variant = "light",
  className = "",
}) {
  const isDark = variant === "dark";
  const titleColor = isDark ? "title-dark" : "title-light";
  const descColor = isDark ? "description-dark" : "description-light";

  return (
    <section
      className={`w-full flex items-start gap-4 ${className}`}
      aria-label={`Step ${number}`}
    >
      {/* Número en círculo */}
      <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white title-smaller  ">
        {number}
      </div>

      {/* Texto */}
      <div className="min-w-0">
        <h3 className={`${titleColor} title-small break-words`}>
          {title}
        </h3>
        <p className={`${descColor} descriptions-base mt-2 break-words`}>
          {description}
        </p>
      </div>
    </section>
  );
}
