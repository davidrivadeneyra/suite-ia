import React from "react";

const VARIANTS = {
  brand: {
    btnClass: "btn-brand",
  },
  ghostDark: {
    btnClass: "btn-ghost-dark",
  },
  ghostLight: {
    btnClass: "btn-ghost-light",
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