import React from "react";
import { ScanLine } from "lucide-react";

export default function InfoItem({
  title,
  description,
  Icon = ScanLine,              // 👈 por defecto usa ScanLine
  className = "",
  titleTextColor = "text-neutral-900", 
  iconColor = "text-black",     // 👈 color por defecto
  descriptionColor = "text-gray-600",
  
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex justify-start gap-2 items-center pb-1">
        <Icon className={`h-6 w-6 ${iconColor}`} />  
        <h3 className={`title-smaller ${titleTextColor}`}>{title}</h3>
      </div>
      {description && (
        <p className={`descriptions ${descriptionColor}`}>{description}</p>
      )}
    </div>
  );
}
