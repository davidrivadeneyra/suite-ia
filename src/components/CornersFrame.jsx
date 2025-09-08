import React from "react";

export default function CornerFrame({
  className = "",
  color = "#22C55E",
  strokeColor,
  pathClassName = "",
  strokeWidth = 2,
  radius = 2,
  cornerSize = 8,
}) {
  const s = strokeWidth / 2;
  const r = radius;
  const inner = r + s;
  const d = `M ${cornerSize - s} ${s} H ${inner} A ${r} ${r} 0 0 0 ${s} ${inner} V ${cornerSize - s}`;

  const commonSvg = {
    width: cornerSize,
    height: cornerSize,
    viewBox: `0 0 ${cornerSize} ${cornerSize}`,
    fill: "none",
    "aria-hidden": true,
  };

  // Resuelve el color final del trazo:
  // - Usa strokeColor si viene
  // - Si no, usa color (default)
  const resolvedStroke = strokeColor ?? color;

  const pathProps = {
    d,
    stroke: resolvedStroke, // <— ahora sobrescribible con 'strokeColor'
    strokeWidth,
    vectorEffect: "non-scaling-stroke",
    strokeLinecap: "butt",
    strokeLinejoin: "round",
    className: pathClassName, // <— clases directas al <path>
  };

  // Usamos valores exactos 6px → 8px y un ease bonito
  const posBase =
    "absolute transition-all duration-200 ease-in-out will-change:transform";

  const tl =
    "top-[6px] left-[6px] group-hover/frame:top-[8px] group-hover/frame:left-[8px]";
  const tr =
    "top-[6px] right-[6px] group-hover/frame:top-[8px] group-hover/frame:right-[8px]";
  const bl =
    "bottom-[6px] left-[6px] group-hover/frame:bottom-[8px] group-hover/frame:left-[8px]";
  const br =
    "bottom-[6px] right-[6px] group-hover/frame:bottom-[8px] group-hover/frame:right-[8px]";

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <span className={`${posBase} ${tl}`}>
        <svg {...commonSvg}><path {...pathProps} /></svg>
      </span>

      <span className={`${posBase} ${tr}`}>
        <svg {...commonSvg}>
          <g transform={`scale(-1,1) translate(-${cornerSize} 0)`}>
            <path {...pathProps} />
          </g>
        </svg>
      </span>

      <span className={`${posBase} ${bl}`}>
        <svg {...commonSvg}>
          <g transform={`scale(1,-1) translate(0 -${cornerSize})`}>
            <path {...pathProps} />
          </g>
        </svg>
      </span>

      <span className={`${posBase} ${br}`}>
        <svg {...commonSvg}>
          <g transform={`scale(-1,-1) translate(-${cornerSize} -${cornerSize})`}>
            <path {...pathProps} />
          </g>
        </svg>
      </span>
    </div>
  );
}
