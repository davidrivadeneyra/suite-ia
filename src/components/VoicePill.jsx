import React, { useEffect, useRef, useState } from "react";

export default function VoicePill({
  className = "",
  audioSrc = "/audio/audio-prueba.mp3",
  title = "Conversa con Mar-IA",
  avatarSrc = "/assets/ias/mar-ia-head.webp",
  onPlay = () => {},
  onPause = () => {},
  // estilos
  bg = "bg-[#242424]",
  ring = "ring-1 ring-white/10",
  accent = "#F97316", // naranja
}) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.preload = "auto";
    const a = audioRef.current;
    const onEnded = () => setPlaying(false);
    a.addEventListener("ended", onEnded);
    return () => {
      a.pause();
      a.removeEventListener("ended", onEnded);
    };
  }, [audioSrc]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
      onPause();
    } else {
      try {
        await a.play();
        setPlaying(true);
        onPlay();
      } catch (e) {
        console.warn("Playback blocked:", e);
      }
    }
  };

  return (
    <div className={`w-full max-w-[720px] ${className}`}>
      {/* cápsula */}
      <div className={`relative ${bg} ${ring} rounded-[40px] p-2 bg-neutral-700/80`}>
        <div className="flex items-center gap-3 md:gap-4 bg-neutral-800 p-2 rounded-full">
          {/* avatar */}
          <div className="shrink-0 relative">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white ring-1 ring-white/15 overflow-hidden">
              <img
                src={avatarSrc}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* waveform */}
          <div className="flex-1 relative h-10 md:h-12 overflow-hidden">
            <div className="absolute inset-0 flex items-end gap-[6px] px-1 md:px-2 ">
              {/* barras (animadas) */}
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="block w-[6px] md:w-[7px] rounded-full"
                  style={{
                    height: `${8 + (i % 7) * 6}px`,
                    background: accent,
                    opacity: 0.9,
                    transformOrigin: "bottom center",
                    animation: `wave 1200ms ease-in-out ${i * 60}ms infinite`,
                    ...(playing ? {} : { animationPlayState: "paused", opacity: 0.5 }),
                  }}
                />
              ))}
            </div>
            {/* línea central fina */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-white/20" />
          </div>

          {/* botón */}
          <button
            onClick={toggle}
            className="shrink-0 inline-grid place-items-center h-12 w-12 md:h-[52px] md:w-[52px] rounded-full transition transform active:scale-95"
            style={{ background: accent }}
            aria-label={playing ? "Pausar" : "Reproducir"}
          >
            {/* ícono play/pause en SVG para independencia */}
            {playing ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="4" width="5" height="16" rx="1.5" fill="white" />
                <rect x="14" y="4" width="5" height="16" rx="1.5" fill="white" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 5v14l12-7L7 5z" fill="white" />
              </svg>
            )}
          </button>
        </div>

        {/* caption */}
        <div className="w-full pt-2">
          <p className="descriptions-small description-dark text-center">
            {title}
          </p>
        </div>

        {/* borde exterior suave */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.6); }
          50%      { transform: scaleY(1.6); }
        }
      `}</style>
    </div>
  );
}
