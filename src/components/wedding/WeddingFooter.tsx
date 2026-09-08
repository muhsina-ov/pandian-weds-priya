import { useState } from "react";
import { couple } from "@/lib/wedding";
import { useParallax } from "@/hooks/use-reveal";
import footerWash from "@/assets/footer-wash.jpg";

export function WeddingFooter() {
  const drift = useParallax(0.18);
  const [shareStatus, setShareStatus] = useState("Share this invitation");

  async function copyInvitation() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus("Invitation link copied");
    } catch {
      setShareStatus("Copy the link from your browser");
    }
  }

  return (
    <footer className="footer-scene relative isolate min-h-[36rem] overflow-hidden bg-gradient-to-b from-background via-[#36061c]/30 to-[#220412]">
      <img
        src={footerWash}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1280}
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
        style={{ transform: `translate3d(0, ${-drift * 0.32}px, 0) scale(1.12)` }}
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,var(--color-background)_0%,transparent_24%,color-mix(in_oklab,var(--color-background)_38%,transparent)_100%)]" />

      <div className="mx-auto flex min-h-[36rem] max-w-lg flex-col items-center justify-end px-7 pb-10 pt-24 text-center">
        <div className="flex items-center justify-center gap-3 text-primary">
          <span className="h-px w-10 bg-primary/40" />
          <span className="text-sm font-bold">ॐ</span>
          <span className="h-px w-10 bg-primary/40" />
        </div>

        <p className="mt-4 script text-lg text-primary">Celebrating Love &amp; Happiness</p>
        <h2 className="mt-3 font-display text-[2.4rem] leading-[1.1] text-foreground font-semibold">
          {couple.groom} <span className="script text-2xl text-primary">&amp;</span> {couple.bride}
        </h2>

        <div className="mt-7 grid w-full max-w-sm grid-cols-2 border-y border-primary/25 py-4 text-left bg-card/60 rounded">
          <div className="border-r border-primary/25 pr-5 pl-2">
            <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-semibold">
              The Muhurtham
            </p>
            <p className="mt-1 font-display text-lg font-bold text-foreground">17 Sept 2026</p>
            <p className="text-[0.7rem] text-primary font-medium">7:31 AM - 9:00 AM</p>
          </div>
          <div className="pl-5">
            <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-semibold">
              The Reception
            </p>
            <p className="mt-1 font-display text-lg font-bold text-foreground">16 Sept 2026</p>
            <p className="text-[0.7rem] text-primary font-medium">6:30 PM Onwards</p>
          </div>
        </div>

        <div className="mt-5 text-center">
          <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground font-semibold">
            Location
          </p>
          <p className="mt-1 font-display text-base font-semibold text-foreground">
            Sri Kailasanathar Temple &amp; Durga Mahal
          </p>
          <p className="text-xs text-muted-foreground">Pasuvanthanai, Tamil Nadu</p>
        </div>

        <button
          type="button"
          onClick={copyInvitation}
          className="press mt-7 min-h-[48px] rounded border border-primary/50 bg-primary px-6 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Copy invitation link
        </button>
        <p aria-live="polite" className="mt-3 min-h-5 text-xs text-muted-foreground">
          {shareStatus}
        </p>

        <p className="mt-6 font-display text-base italic text-primary font-semibold">
          {couple.complements}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-foreground/80 font-medium">
          {couple.groomParents} · {couple.groomNative}
        </p>
      </div>
    </footer>
  );
}
