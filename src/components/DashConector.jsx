import React from "react";

export default function DashedConnector({
  className = "",
  orientation = "horizontal", // 'horizontal' | 'vertical'
  color = "#0A8E2D",
  lineWidth = 2,
  dash = 6,
  gap = 6,
  animate = true,
  duration = 0.5,      // duración de la animación en segundos
  reverse = false,     // <— NUEVO: invierte el sentido del “avance”
  showPlugs = true,
  /** plugSize = alto del plug (perpendicular a la línea), en px */
  plugSize = 16,
  ariaHidden = true,
}) {
  const isH = orientation === "horizontal";
  const vb = 100;

  // Línea discontinua (ocupa todo el contenedor)
  const dashCycle = dash + gap;
  const animName = reverse ? "dc-dash-reverse" : "dc-dash-forward";
  const strokeStyle = {
    stroke: color,
    strokeWidth: lineWidth,
    strokeDasharray: `${dash} ${gap}`,
    vectorEffect: "non-scaling-stroke",
    animation: animate ? `${animName} ${duration}s linear infinite` : "none",
  };
  const pathD = isH
    ? `M 0 ${vb / 2} L ${vb} ${vb / 2}`
    : `M ${vb / 2} 0 L ${vb / 2} ${vb}`;

  // PATHS exactos (nuevas dimensiones)
  // TOP  : viewBox 9x8
  const P_TOP =
    "M8.91235 6.99382e-07L8.91233 2.00003C8.91232 3.10459 8.01689 4 6.91233 4L2.91235 4C1.80778 4 0.912353 3.10457 0.912354 2L0.912354 0L8.91235 6.99382e-07Z";
  // RIGHT: viewBox 9x8
  const P_RIGHT =
    "M8.91238 1.74848e-07L8.91235 8H6.91235C5.80778 8 4.91235 7.10457 4.91235 6L4.91235 2C4.91235 0.89543 5.80778 -9.65645e-08 6.91235 0L8.91238 1.74848e-07Z";
  // BOTTOM: viewBox 8x8
  const P_BOTTOM =
    "M5.99999 4C7.10458 4 8.00001 4.89545 8 6.00002L7.99998 8L0 8L1.74845e-07 6C2.7141e-07 4.89543 0.895434 4 2.00001 4L5.99999 4Z";
  // LEFT : viewBox 8x8
  const P_LEFT =
    "M2.00002 1.74847e-07C3.10459 2.71412e-07 4.00003 0.895434 4.00002 2.00001L4.00001 6.00001C4.00001 7.10457 3.10458 8 2.00001 8H0L6.99382e-07 0L2.00002 1.74847e-07Z";

  // Proporciones exactas en px según viewBox
  const plugL_H = plugSize,      plugL_W = plugL_H * (8 / 8); // LEFT  8x8
  const plugR_H = plugSize,      plugR_W = plugR_H * (9 / 8); // RIGHT 9x8
  const plugT_H = plugSize,      plugT_W = plugT_H * (9 / 8); // TOP   9x8
  const plugB_H = plugSize,      plugB_W = plugB_H * (8 / 8); // BOTTOM8x8

  return (
    <div
      className={`relative flex-none ${className}`} // respeta w-*/h-* del caller
      aria-hidden={ariaHidden}
    >
      <style>{`
        @keyframes dc-dash-forward { to { stroke-dashoffset: -${dashCycle}; } }
        @keyframes dc-dash-reverse { to { stroke-dashoffset: ${dashCycle}; } }
      `}</style>

      {/* Línea animada */}
      <svg width="100%" height="100%" viewBox={`0 0 ${vb} ${vb}`} preserveAspectRatio="none">
        <path d={pathD} style={strokeStyle} />
      </svg>

      {/* Plugs con su propio viewBox y aspecto fijo */}
      {showPlugs && isH && (
        <>
          {/* LEFT: pegado a la izquierda, centrado vertical */}
          <svg
            width={plugL_W}
            height={plugL_H}
            viewBox="0 0 8 8"
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2"
          >
            <path d={P_LEFT} fill={color} />
          </svg>
          {/* RIGHT: pegado a la derecha, centrado vertical */}
          <svg
            width={plugR_W}
            height={plugR_H}
            viewBox="0 0 9 8"
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
          >
            <path d={P_RIGHT} fill={color} />
          </svg>
        </>
      )}

      {showPlugs && !isH && (
        <>
          {/* TOP: pegado arriba, centrado horizontal */}
          <svg
            width={plugT_W}
            height={plugT_H}
            viewBox="0 0 9 8"
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
          >
            <path d={P_TOP} fill={color} />
          </svg>
          {/* BOTTOM: pegado abajo, centrado horizontal */}
          <svg
            width={plugB_W}
            height={plugB_H}
            viewBox="0 0 8 8"
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
          >
            <path d={P_BOTTOM} fill={color} />
          </svg>
        </>
      )}
    </div>
  );
}
