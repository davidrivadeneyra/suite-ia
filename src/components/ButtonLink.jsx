import React from "react";

const VARIANTS = {
  dark: {
    btnClass: "btn-dark",
    frameClass: "text-green-500", 
    strokeColor: "currentColor",
  },
  white: {
    btnClass: "btn-white",
    frameClass: "text-neutral-400",
    strokeColor: "currentColor",
  },
  green: {
    btnClass: "btn-green",
    frameClass: "text-neutral-950",
    strokeColor: "currentColor",
  },
  gray: {
    btnClass: "btn-gray",
    frameClass: "text-neutral-950",
    strokeColor: "currentColor",
  },
};

export default function ButtonLink({
  href,
  copy,
  variant = "dark",
  className = "",
  external = false,   // si true => target _blank + rel seguro
  ariaLabel,         
  ...rest
}) {
  const v = VARIANTS[variant] ?? VARIANTS.dark;
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel || copy}
      className={[v.btnClass, "relative", className].join(" ")}
      {...rest}
    >
      {copy}
    
    </a>
  );
}