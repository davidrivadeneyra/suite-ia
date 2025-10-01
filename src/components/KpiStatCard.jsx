import React from "react";

export default function KpiStatCard({
  mainImage = "dashboard/ciclos.svg",       // /dashboard/icons3D/chart-collections.webp
  icon3D = "assets/icons3D/bank.webp",                        // /assets/cash.webp
  title = "+300%",
  description = "recuperación de cartera vencida.",
  className = "",
}) {
  return (
    <section
      className={[
        "rounded-3xl overflow-hidden",
        "bg-neutral-700 ring-1 ring-neutral-700/40 shadow-xl shadow-neutral-950/20 flex flex-col",
        "p-2",
        className,
      ].join(" ")}
      aria-label="KPI stat card"
    >
      {/* área superior: imagen principal */}
      <div className="rounded-2xl bg-neutral-800 p-16 flex ">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden ">
          <img
            src={`${mainImage}`}
            alt=""
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

   
      <div className="flex items-center py-2 px-6 gap-4">

       <img
            src={`/assets/${icon3D}`}
            alt=""
            className="h-28  object-contain"
            loading="lazy"
            decoding="async"
          />

        {/* Texto */}
        <div className="min-w-0">
          <h3 className={`title-small title-dark`}>
            {title}
          </h3>
          <p className={`descriptions-base description-dark mt-1.5`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
