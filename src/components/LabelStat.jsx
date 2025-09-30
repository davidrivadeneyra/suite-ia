// src/components/LabelStat.jsx
export default function LabelStat({
  label = "PROBLEMA",
  title = "95% de los leads",
  description = "se pierden por falta de seguimiento oportuno.",
  variant = "cross", // "check" | "cross"
  className = "",
  iconSize = 20,
}) {
  const iconMap = {
    check: "/assets/icons/check.svg",
    cross: "/assets/icons/cross.svg",
  };
  const iconSrc = iconMap[variant] || iconMap.cross;

  return (
    <section className={`max-w-3xl ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <img
          src={iconSrc}
          alt=""
          width={iconSize}
          height={iconSize}
          className="block h-4"
        />
        <h4 className="subtitle-light subtitle-uppercase">
          {label}
        </h4>
      </div>

      <h2 className="title-regular pb-2">
        {title}
      </h2>

      <p className="description-base description-light">{description}</p>
    </section>
  );
}
