import React, { useEffect, useMemo, useRef, useState } from "react";

const COLS = 24;     // Cantidad de cuadrados por fila (definido dentro del componente)
const GAP = 0; 

export default function GridSquares({ className = "" }) {
  const containerRef = useRef(null);
  const [itemCount, setItemCount] = useState(COLS * 4); // valor inicial seguro

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const compute = () => {
      const containerWidth = el.clientWidth || window.innerWidth;
      const viewportHeight = window.innerHeight;

      // ancho de cada celda considerando gap horizontal entre columnas
      const totalGapW = GAP * (COLS - 1);
      const cellWidth = (containerWidth - totalGapW) / COLS;

      // altura de fila = altura de celda (1:1)
      const rowHeight = cellWidth;

      // considerar gaps verticales entre filas al calcular cuántas filas necesito
      // +1 para asegurar que el grid supere el alto del viewport
      const rowsNeeded = Math.ceil(
        (viewportHeight + GAP) / (rowHeight + GAP)
      ) + 1;

      setItemCount(rowsNeeded * COLS);
    };

    // Primera medida
    compute();

    // Observa cambios de tamaño del contenedor
    const ro = new ResizeObserver(compute);
    ro.observe(el);

    // Cambios de ventana
    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  const items = useMemo(
    () => Array.from({ length: itemCount }, (_, i) => i + 1),
    [itemCount]
  );

  return (
    <div ref={containerRef} className={`grid-1x1 ${className}`}>
      {items.map((n) => (
        <div className="cell" key={n} />
      ))}
    </div>
  );
}
