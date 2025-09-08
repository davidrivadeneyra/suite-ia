// CardNumber.jsx
import React from "react";

/**
 * value: número a mostrar
 * FrameComponent: componente de marco opcional (p.ej. CornerFrame)
 * frameProps: props para ese FrameComponent (p.ej. { strokeColor: 'currentColor', hover:false, className:'text-green-700' })
 */
export function CardNumber({
  value,
  className = "relative w-16 h-16 flex items-center justify-center m-7",
  numberClassName = "",
  FrameComponent,
  frameProps = {},
}) {
  return (
    <div className={className}>
      {/* Marco opcional */}
      {FrameComponent ? (
        <FrameComponent {...frameProps} />
      ) : null}
      <span className={`relative z-10 ${numberClassName}`}>{value}</span>
    </div>
  );
}
