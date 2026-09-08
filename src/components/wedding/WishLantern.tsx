import { useRef, useState } from "react";

type ReleasedSpark = {
  id: number;
  x: number;
  drift: number;
  scale: number;
  duration: number;
  delay: number;
  opacity: number;
  hue: number;
};

export function WishLantern() {
  const [released, setReleased] = useState<ReleasedSpark[]>([]);
  const [message, setMessage] = useState("Tap to shower auspicious blessings and glowing lights.");
  const id = useRef(0);

  function releaseBlessings() {
    const batch: ReleasedSpark[] = Array.from({ length: 24 }, () => ({
      id: id.current++,
      x: 5 + Math.random() * 90,
      drift: -80 + Math.random() * 160,
      scale: 0.5 + Math.random() * 0.9,
      duration: 4.5 + Math.random() * 2.5,
      delay: Math.random() * 1.2,
      opacity: 0.6 + Math.random() * 0.4,
      hue: Math.random(),
    }));

    setReleased((current) => [...current.slice(-40), ...batch]);
    setMessage("Auspicious flowers & divine blessings shower upon Maharaja Pandian and Sathiya Priya!");

    window.setTimeout(() => {
      const batchIds = new Set(batch.map((entry) => entry.id));
      setReleased((current) => current.filter((entry) => !batchIds.has(entry.id)));
    }, 8000);
  }

  return (
    <section className="wish-sky relative isolate overflow-hidden px-6 py-20 text-center bg-gradient-to-b from-[#240414]/90 via-[#3a061d] to-[#200311]">
      {/* Background ambient particles */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]" />

      {released.map((entry) => (
        <div
          key={entry.id}
          className="wish-lantern-flight pointer-events-none absolute bottom-[-5rem] flex flex-col items-center"
          style={
            {
              left: `${entry.x}%`,
              opacity: entry.opacity,
              "--wish-tilt": "0deg",
              "--wish-drift": `${entry.drift}px`,
              "--wish-scale": entry.scale,
              "--wish-duration": `${entry.duration}s`,
              "--wish-delay": `${entry.delay}s`,
            } as React.CSSProperties
          }
        >
          {entry.hue > 0.5 ? (
            <span className="text-xl text-[#f3cf7a] drop-shadow-[0_0_8px_rgba(243,207,122,0.8)]">
              🪔
            </span>
          ) : entry.hue > 0.25 ? (
            <span className="text-lg text-[#ffd166] drop-shadow-[0_0_6px_rgba(255,209,102,0.7)]">
              ✦
            </span>
          ) : (
            <span className="text-xl text-[#ff758f] drop-shadow-[0_0_8px_rgba(255,117,143,0.8)]">
              🌸
            </span>
          )}
        </div>
      ))}

      <div className="mx-auto max-w-sm relative z-10">
        {/* Center Auspicious Diya Motif */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#420623]/80 text-4xl shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          🪔
        </div>

        <h2 className="mt-4 font-display text-[2.35rem] leading-tight text-[#faecc5] font-semibold">
          Shower Your Blessings
        </h2>
        <p className="mx-auto mt-2 max-w-xs text-xs sm:text-sm leading-relaxed text-[#e2cdb4]">
          Send your warmest prayers and hearty congratulations for Maharaja Pandian &amp; Sathiya Priya.
        </p>

        <button
          type="button"
          onClick={releaseBlessings}
          className="press mt-7 flex min-h-[50px] w-full items-center justify-center rounded border border-[#d4af37] bg-gradient-to-r from-[#c99738] to-[#e5c158] px-5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#280516] shadow-[0_12px_28px_-12px_rgba(212,175,55,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2"
        >
          Send Blessings &amp; Light 🪔
        </button>

        <p aria-live="polite" className="mt-4 min-h-5 text-xs text-[#f5db99]">
          {message}
        </p>
      </div>
    </section>
  );
}
