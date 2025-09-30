import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * OrbitAnimation.jsx (Vite/React, sin TypeScript)
 * - Imágenes en /public/animation-dark/: core.png, orbit-01..04.webp
 * - Capas centradas y escaladas juntas mediante CSS variable (--oa-scale)
 * - Responsive (aspect-ratio), ancho controlado desde className/style
 * - Prop scale: factor de tamaño (1=100%, 0.5=50%, 2=200%)
 * - Control de speed con GSAP opcional vía enableScrollSpeed
 */

export default function OrbitAnimation({
  className = "",
  innerClass = "",
  style = {},
  aspect = "1 / 1",
  speed = 1,                 // velocidad base (cuando no hay scroll)
  durations = [70, 55, 85, 60],
  pauseOnHover = false,
  scale = 1,

  // 🔽 Nuevo: control opcional por scroll con GSAP
  enableScrollSpeed = false,
  maxBoostDown = 1.3,        // aceleración extra máxima al bajar (base + 1.3)
  maxBoostUp = 0.6,          // reducción máxima al subir (base - 0.6)
  responsiveness = 1200,     // px/s necesarios para alcanzar el boost máximo
  decayDelay = 160,          // ms sin scroll para empezar a volver a base
  decayDuration = 0.9,       // s para volver a base
}) {
  // Estado interno de velocidad efectiva
  const [effectiveSpeed, setEffectiveSpeed] = useState(speed);
  const speedObj = useRef({ value: speed });
  const idleTimeout = useRef(null);
  const last = useRef({ y: 0, t: 0 });

  // Reacciona si cambian props base de velocidad
  useEffect(() => {
    setEffectiveSpeed(speed);
    speedObj.current.value = speed;
  }, [speed]);

  // GSAP scroll -> speed
  useEffect(() => {
    if (!enableScrollSpeed) return;

    last.current = { y: window.scrollY, t: performance.now() };

    const onScroll = () => {
      const now = performance.now();
      const y = window.scrollY;
      const dy = y - last.current.y;
      const dt = Math.max(1, now - last.current.t); // ms
      last.current = { y, t: now };

      // px/s (positivo: bajando, negativo: subiendo)
      const velocity = (dy / dt) * 1000;

      // Normaliza a [-1, 1] por responsiveness
      const u = Math.max(-1, Math.min(1, velocity / responsiveness));

      // Mapea a target: abajo acelera (base + maxBoostDown), arriba desacelera (base - maxBoostUp)
      const target = u >= 0 ? speed + u * maxBoostDown : speed + u * maxBoostUp;

      gsap.to(speedObj.current, {
        value: target,
        duration: 0.35,
        ease: "power2.out",
        onUpdate: () => setEffectiveSpeed(speedObj.current.value),
      });

      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => {
        gsap.to(speedObj.current, {
          value: speed,
          duration: decayDuration,
          ease: "power3.out",
          onUpdate: () => setEffectiveSpeed(speedObj.current.value),
        });
      }, decayDelay);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      gsap.killTweensOf(speedObj.current);
    };
  }, [enableScrollSpeed, speed, maxBoostDown, maxBoostUp, responsiveness, decayDelay, decayDuration]);

  // CSS vars (duraciones dependen de effectiveSpeed)
  const [d1, d2, d3, d4] = durations;
  const vars = {
    "--oa-d1": `${Math.max(0.1, d1) / Math.max(0.1, effectiveSpeed)}s`,
    "--oa-d2": `${Math.max(0.1, d2) / Math.max(0.1, effectiveSpeed)}s`,
    "--oa-d3": `${Math.max(0.1, d3) / Math.max(0.1, effectiveSpeed)}s`,
    "--oa-d4": `${Math.max(0.1, d4) / Math.max(0.1, effectiveSpeed)}s`,
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
          <img
            src="/animation-dark/core.svg"
            alt=""
            decoding="async"
            fetchpriority="low"
            loading="eager"
          />
        </div>

        {/* Órbitas */}
        <div className="oa-layer oa-orbit oa-o1 oa-spin oa-cw">
          <img src="/animation-dark/orbit-01.webp" alt="" decoding="async" loading="lazy" />
        </div>
        <div className="oa-layer oa-orbit oa-o2 oa-spin oa-ccw">
          <img src="/animation-dark/orbit-02.webp" alt="" decoding="async" loading="lazy" />
        </div>
        <div className="oa-layer oa-orbit oa-o3 oa-spin oa-cw">
          <img src="/animation-dark/orbit-03.webp" alt="" decoding="async" loading="lazy" />
        </div>
        <div className="oa-layer oa-orbit oa-o4 oa-spin oa-ccw">
          <img src="/animation-dark/orbit-04.webp" alt="" decoding="async" loading="lazy" />
        </div>
      </div>

      <style>{`
        .oa-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: var(--oa-aspect, 1 / 1);
          display: block;
          margin: 0;
        }

        .oa-stage {
          position: absolute;
          inset: 0;
          transform: scale(var(--oa-scale, 1));
          transform-origin: center center;
        }

        .oa-layer { position: absolute; inset: 0; }

        .oa-layer img {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: auto; height: auto;
          max-width: none; max-height: none;
          image-rendering: auto;
          will-change: transform;
          pointer-events: none;
        }

        .oa-core { z-index: 2; }
        .oa-orbit { z-index: 1; }

        @keyframes oa-rot { to { transform: rotate(360deg); } }
        .oa-spin {
          animation-name: oa-rot;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .oa-cw { animation-direction: normal; }
        .oa-ccw{ animation-direction: reverse; }

        .oa-o1.oa-spin{ animation-duration: var(--oa-d1, 70s); }
        .oa-o2.oa-spin{ animation-duration: var(--oa-d2, 55s); }
        .oa-o3.oa-spin{ animation-duration: var(--oa-d3, 85s); }
        .oa-o4.oa-spin{ animation-duration: var(--oa-d4, 60s); }

        .oa--hover-pause:hover .oa-spin{ animation-play-state: paused; }

        @media (prefers-reduced-motion: reduce){
          .oa-spin{ animation: none !important; }
        }
      `}</style>
    </figure>
  );
}
