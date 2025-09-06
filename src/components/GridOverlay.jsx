// components/GridBackdropAssets.jsx
export default function GridBackdropAssets({ className = "" }) {
  return (
    <div
      className={`fixed inset-0 -z-10 left-6 top-6 right-6 pointer-events-none select-none ${className} `}
      aria-hidden="true"
    >
      {/* padding: 16px mobile / 24px md+ */}
      <picture className="absolute block h-full w-full ">
        {/* Desktop / iPad (md+) */}
        <source
          media="(min-width: 768px)"
          srcSet="./assets/squares/BG-sqaures-desktop.svg"
        />
        {/* Mobile */}
        <img
          src="./assets/squares/BG-sqaures-mobile.svg"
          alt=""
          className="h-full w-full object-cover"
          draggable="false"
        />
      </picture>
    </div>
  );
}
