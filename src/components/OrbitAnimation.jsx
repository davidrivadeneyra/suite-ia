import React from "react";

/**
 * OrbitAnimation.jsx (Vite/React, sin TypeScript)
 * - Imágenes en /public/animation/: core.png, orbit-01..04.webp
 * - Capas centradas por su eje, tamaños nativos (misma proporción entre capas)
 * - Responsive: el bloque ocupa el ancho del padre (aspect-ratio)
 * - Puedes posicionarlo absolute desde la instancia (className/style)
 * - Controles de velocidad: speed (global) + durations por capa
 * - innerClass: clases aplicadas al contenedor interno (todas las capas)
 * - section-max-width
 */

export default function OrbitAnimation({
  className = "",        // clases del bloque (root)
  innerClass = "",       // clases para el contenedor interno (todas las capas)
  style = {},
  aspect = "1 / 1",      // proporción del canvas
  speed = 1,             // factor global de velocidad
  durations = [70, 55, 85, 60], // [o1, o2, o3, o4] en segundos
  pauseOnHover = false,
}) {
  const [d1, d2, d3, d4] = durations;

  // CSS vars para controlar duraciones y aspect-ratio (sin TS)
  const vars = {
    "--oa-d1": `${Math.max(0.1, d1) / Math.max(0.1, speed)}s`,
    "--oa-d2": `${Math.max(0.1, d2) / Math.max(0.1, speed)}s`,
    "--oa-d3": `${Math.max(0.1, d3) / Math.max(0.1, speed)}s`,
    "--oa-d4": `${Math.max(0.1, d4) / Math.max(0.1, speed)}s`,
    "--oa-aspect": aspect,
  };

  return (
    <figure
      className={`oa-wrap ${pauseOnHover ? "oa--hover-pause" : ""} ${className} section-max-width`}
      style={{ ...vars, ...style }}
      aria-label="Orbit animation"
    >
      {/* Contenedor interno: mueve/posiciona todo con innerClass si lo necesitas */}
      <div className={`oa-stage ${innerClass}`}>
        {/* Núcleo (tamaño nativo) */}
        <div className="oa-layer oa-core oa-orbit oa-o1 oa-spin oa-ccw">
          <img
            src="/animation/core-flat.png"
            alt=""
            decoding="async"
            fetchpriority="low"
            loading="eager"
          />
        </div>

        {/* Órbitas (alternando CW/CCW) */}
        <div className="oa-layer oa-orbit oa-o1 oa-spin oa-cw">
          <img src="/animation/orbit-01.webp" alt="" decoding="async" loading="lazy" />
        </div>
        <div className="oa-layer oa-orbit oa-o2 oa-spin oa-ccw">
          <img src="/animation/orbit-02.webp" alt="" decoding="async" loading="lazy" />
        </div>
        <div className="oa-layer oa-orbit oa-o3 oa-spin oa-cw">
          <img src="/animation/orbit-03.webp" alt="" decoding="async" loading="lazy" />
        </div>
        <div className="oa-layer oa-orbit oa-o4 oa-spin oa-ccw">
          <img src="/animation/orbit-04.webp" alt="" decoding="async" loading="lazy" />
        </div>
      </div>

      <style>{`
  


        /* Capas centradas por eje, sin escalar individualmente:
           - img usa tamaño nativo del asset (width/height auto), así se conserva la proporción
             entre todas las capas.
        */
        .oa-layer{ position:absolute; inset:0; }
        .oa-layer img{
          position:absolute; left:50%; top:50%;
          transform:translate(-50%, -50%);
          width:auto; height:auto;             /* Mantener tamaño nativo */
          max-width:none; max-height:none;     /* Evitar ajustes independientes */
          image-rendering:auto; will-change:transform; pointer-events:none;
        }

        /* Z-index (núcleo por encima si aplica) */
        .oa-core{ z-index:2; }
        .oa-orbit{ z-index:1; }

        /* Animación (GPU-friendly) */
        @keyframes oa-rot { to { transform: rotate(360deg); } }
        .oa-spin{
          animation-name: oa-rot;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .oa-cw { animation-direction: normal; }
        .oa-ccw{ animation-direction: reverse; }

        /* Duraciones por capa (controladas por CSS vars calculadas con speed) */
        .oa-o1.oa-spin{ animation-duration: var(--oa-d1, 70s); }
        .oa-o2.oa-spin{ animation-duration: var(--oa-d2, 55s); }
        .oa-o3.oa-spin{ animation-duration: var(--oa-d3, 85s); }
        .oa-o4.oa-spin{ animation-duration: var(--oa-d4, 60s); }

        /* Pausa opcional en hover (útil en demos) */
        .oa--hover-pause:hover .oa-spin{ animation-play-state: paused; }

        /* Respeto a reduce-motion */
        @media (prefers-reduced-motion: reduce){
          .oa-spin{ animation: none !important; }
        }
      `}</style>
    </figure>
  );
}
