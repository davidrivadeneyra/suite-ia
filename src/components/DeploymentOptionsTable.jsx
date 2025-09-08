import React from "react";

const COLUMNS = ["option", "where", "offsite", "multi", "ideal"];

const ROWS = [
  { id: "onprem" },
  // { id: "hybrid" },
  { id: "saas" },
];

export default function DeploymentOptionsTable({ className = "", t }) {
  return (
    <div className={`w-full ${className}`}>
      {/* Desktop / md+ : tabla clásica 5 columnas */}
      <div className="hidden md:block bg-neutral-900 rounded-lg">
        <div className="rounded-lg overflow-hidden border border-1 border-neutral-900">
          <table className="w-full text-left border-separate border-spacing-0 ">
            <thead>
              <tr className="text-green-700 bg-green-50 ">
                {COLUMNS.map((col, i) => (
                  <th
                    key={col}
                    className="border border-1 border-neutral-900 rounded-lg p-4"
                  >
                    {t(`deploy.headers.${col}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {ROWS.map((row, rIdx) => (
                <tr key={row.id} className="text-gray-800">
                  {COLUMNS.map((col, cIdx) => (
                    <td
                      key={col}
                      className="p-4 align-top bg-white border border-1 border-neutral-900 rounded-lg"
                    >
                      {t(`deploy.rows.${row.id}.${col}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile / <md : bloques verticales (5 filas x 3 columnas) */}
      <div className="md:hidden space-y-5">
        {ROWS.map((row) => (
          <div
            key={row.id}
            className="rounded-lg overflow-hidden bg-black border border-1 border-neutral-900"
          >
            {/* Grid 3 columnas: valor (col-span-2) + header (verde a la derecha) */}
            <div className="grid grid-cols-3 gap-[1px]">
              {COLUMNS.map((col) => (
                <React.Fragment key={col}>
                     {/* Header a la derecha (verde) */}
                  <h5 className="title-tiny rounded-lg bg-green-50 text-green-700 p-4">
                    {t(`deploy.headers.${col}`)}
                  </h5>
                  {/* Valor (ocupa 2 columnas a la izquierda) */}
                  <p className="descriptions rounded-lg col-span-2 bg-white p-3 text-gray-500">
                    {t(`deploy.rows.${row.id}.${col}`)}
                  </p>
                 
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
