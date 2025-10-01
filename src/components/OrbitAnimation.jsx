import React from "react";

/**
 * OrbitAnimation.jsx
 * - variant: "dark" | "light"
 * - orbitsVariant: "default" | "no-ias"
 *   → default: usa órbitas en /animation-dark (o /animation-light si variant="light")
 *   → no-ias: órbitas en /animation-dark-no-ias/*.svg (core sigue en /animation-dark)
 */

export default function OrbitAnimation({
  className = "",
  innerClass = "",
  style = {},
  aspect = "1 / 1",
  speed = 1,
  durations = [70, 55, 85, 60],
  pauseOnHover = false,
  scale = 1,
  variant = "dark",          // dark | light
  orbitsVariant = "default", // default | no-ias
}) {
  const [d1, d2, d3, d4] = durations;

  // Rutas para el núcleo
  const coreBasePath = variant === "light" ? "/animation-light" : "/animation-dark";

  // Rutas para órbitas
  let orbitsBasePath;
  let orbitExt;

  if (variant === "light") {
    orbitsBasePath = "/animation-light";
    orbitExt = "svg";
  } else if (variant === "dark" && orbitsVariant === "no-ias") {
    orbitsBasePath = "/animation-dark-no-ias";
    orbitExt = "svg"; // 👈 acá cambia a .svg
  } else {
    orbitsBasePath = "/animation-dark";
    orbitExt = "webp";
  }

  const vars = {
    "--oa-d1": `${Math.max(0.1, d1) / Math.max(0.1, speed)}s`,
    "--oa-d2": `${Math.max(0.1, d2) / Math.max(0.1, speed)}s`,
    "--oa-d3": `${Math.max(0.1, d3) / Math.max(0.1, speed)}s`,
    "--oa-d4": `${Math.max(0.1, d4) / Math.max(0.1, speed)}s`,
    "--oa-aspect": aspect,
    "--oa-scale": scale,
  };

  return (
    <figure
      className={`oa-wrap ${pauseOnHover ? "oa--hover-pause" : ""} ${className}`}
      style={{ ...vars, ...style }}
      aria-label="Orbit animation"
    >
      <div className={`oa-stage ${innerClass}`}>
        {/* Núcleo */}
        <div className="oa-layer oa-core oa-o1 oa-spin oa-ccw">
          {/* {variant === "dark" && (
            <img
              src={`${coreBasePath}/core-blur.svg`}
              alt=""
              decoding="async"
              fetchpriority="low"
              loading="eager"
            />
          )}
          <img
            src={`${coreBasePath}/core.svg`}
            alt=""
            decoding="async"
            fetchpriority="low"
            loading="eager"
          /> */}
          <img
            src={`${coreBasePath}/core.webp`}
            alt=""
            decoding="async"
            fetchpriority="low"
            loading="eager"
          /> 
        </div>

        {/* Órbitas */}
        <div className="oa-layer oa-orbit oa-o1 oa-spin oa-cw">
          <img src={`${orbitsBasePath}/orbit-01.${orbitExt}`} alt="" decoding="async" loading="lazy" />
        </div>
        <div className="oa-layer oa-orbit oa-o2 oa-spin oa-ccw">
          <img src={`${orbitsBasePath}/orbit-02.${orbitExt}`} alt="" decoding="async" loading="lazy" />
        </div>
        <div className="oa-layer oa-orbit oa-o3 oa-spin oa-cw">
          <img src={`${orbitsBasePath}/orbit-03.${orbitExt}`} alt="" decoding="async" loading="lazy" />
        </div>
        <div className="oa-layer oa-orbit oa-o4 oa-spin oa-ccw">
          <img src={`${orbitsBasePath}/orbit-04.${orbitExt}`} alt="" decoding="async" loading="lazy" />
        </div>
      </div>

      <style>{`
        .oa-wrap { position: relative; width: 100%; aspect-ratio: var(--oa-aspect, 1 / 1); display: block; margin: 0; }
        .oa-stage { position: absolute; inset: 0; transform: scale(var(--oa-scale, 1)); transform-origin: center center; }
        .oa-layer { position: absolute; inset: 0; }
        .oa-layer img {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: auto; height: auto; max-width: none; max-height: none;
          image-rendering: auto; will-change: transform; pointer-events: none;
        }
        .oa-core { z-index: 2; }
        .oa-orbit { z-index: 1; }

        @keyframes oa-rot { to { transform: rotate(360deg); } }
        .oa-spin { animation-name: oa-rot; animation-timing-function: linear; animation-iteration-count: infinite; }
        .oa-cw { animation-direction: normal; }
        .oa-ccw{ animation-direction: reverse; }

        .oa-o1.oa-spin{ animation-duration: var(--oa-d1, 70s); }
        .oa-o2.oa-spin{ animation-duration: var(--oa-d2, 55s); }
        .oa-o3.oa-spin{ animation-duration: var(--oa-d3, 85s); }
        .oa-o4.oa-spin{ animation-duration: var(--oa-d4, 60s); }

        .oa--hover-pause:hover .oa-spin{ animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce){ .oa-spin{ animation: none !important; } }
      `}</style>
    </figure>
  );
}
