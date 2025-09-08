import React from "react";

export default function InfoItem({
  title,                   // p.ej. t("modules.retail.title")
  description,             // p.ej. t("modules.retail.what")
  icon,                    // opcional: <svg .../> o cualquier ReactNode
  iconSrc = "/assets/select.svg",
  iconAlt = "icon",
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex justify-start gap-2 items-center pb-1">
        {icon
          ? icon
          : iconSrc && <img src={iconSrc} alt={iconAlt} className="h-6" />}
        <h3 className="title-smaller">{title}</h3>
      </div>
      {description && <p className="descriptions">{description}</p>}
    </div>
  );
}
