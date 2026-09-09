const heroArch = "https://media.invitestory.in/seashell-vows/src/assets/hero-arch.jpg";
const floral = "https://media.invitestory.in/seashell-vows/src/assets/floral-spray.png";
import groomImg from "@/assets/groom.png";
import brideImg from "@/assets/bride.png";
import { PetalTap } from "./PetalTap";
import { useParallax } from "@/hooks/use-reveal";
import { couple } from "@/lib/wedding";

export function Hero() {
  const bg = useParallax(0.35);
  const fg = useParallax(0.12);

  return (
    <PetalTap>
      <header className="relative min-h-[100svh] overflow-hidden paper">
        <div
          className="absolute inset-x-0 top-0 h-[78svh]"
          style={{ transform: `translate3d(0, ${bg}px, 0)`, willChange: "transform" }}
        >
          <img
            src={heroArch}
            alt="Watercolor wedding arch"
            width={1024}
            height={1536}
            className="h-full w-full object-cover object-top animate-bloom"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
        </div>

        <img
          src={floral}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -left-10 top-6 w-36 opacity-70 animate-float-soft"
          style={{ transform: `translate3d(0, ${bg * 0.5}px, 0)` }}
        />
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -right-12 top-24 w-32 -scale-x-100 opacity-60 animate-float-soft"
          style={{ animationDelay: "1.4s", transform: `translate3d(0, ${bg * 0.35}px, 0)` }}
        />

        <div
          className="relative flex min-h-[100svh] flex-col items-center justify-end px-4 pb-7 sm:pb-12 text-center z-10"
          style={{ transform: `translate3d(0, ${-fg}px, 0)` }}
        >
          {/* Couple Cameo Portraits on First Screen */}
          <div className="flex items-center justify-center -space-x-3 mb-2 animate-bloom">
            <div className="group relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-primary p-0.5 shadow-xl bg-background/90 ring-4 ring-primary/20 transition-transform duration-300 hover:scale-105">
              <img
                src={groomImg}
                alt={couple.groom}
                className="h-full w-full rounded-full object-cover object-[center_15%]"
              />
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-primary-foreground shadow-sm whitespace-nowrap">
                Groom
              </span>
            </div>
            <div className="z-10 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-serif font-bold shadow-lg border-2 border-background">
              &amp;
            </div>
            <div className="group relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-primary p-0.5 shadow-xl bg-background/90 ring-4 ring-primary/20 transition-transform duration-300 hover:scale-105">
              <img
                src={brideImg}
                alt={couple.bride}
                className="h-full w-full rounded-full object-cover object-[center_18%]"
              />
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-primary-foreground shadow-sm whitespace-nowrap">
                Bride
              </span>
            </div>
          </div>

          <p
            className="script text-lg sm:text-2xl text-foreground/90 font-medium tracking-wide animate-ink"
            style={{ animationDelay: "0.3s" }}
          >
            Together with our families
          </p>

          <h1
            className="mt-1 font-display text-[2.3rem] sm:text-[3.2rem] leading-[1.08] text-foreground animate-ink font-semibold"
            style={{ animationDelay: "0.5s" }}
          >
            {couple.groomShort}
            <span className="script mx-2 inline-block text-xl sm:text-2xl text-primary font-normal">
              &amp;
            </span>
            {couple.brideShort}
          </h1>

          {/* Prominent Reception & Main Function Card (First Page Before Scroll) */}
          <div
            className="mt-3 mx-auto max-w-sm sm:max-w-md w-full rounded-2xl border-2 border-primary/45 bg-card/95 p-3 sm:p-4 backdrop-blur-md shadow-xl shadow-primary/10 animate-ink"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/30 px-3 py-0.5 text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
              Main Function &amp; Reception
            </div>
            <p className="mt-1.5 font-display text-lg sm:text-xl font-bold text-foreground">
              Wednesday, 16th September 2026
            </p>
            <p className="text-xs sm:text-sm font-semibold text-primary">
              Evening 6:30 PM to 9:00 PM
            </p>
            <p className="text-[0.72rem] sm:text-xs text-muted-foreground font-medium mt-0.5">
              Durga Mahal, Pasuvanthanai
            </p>

            <div className="mt-2 pt-2 border-t border-primary/20 flex flex-wrap items-center justify-center gap-1.5 text-[0.62rem] sm:text-[0.68rem] text-muted-foreground/90 font-medium">
              <span>Muhurtham: Thu, 17th Sept (7:31 AM – 9:00 AM)</span>
              <span>·</span>
              <span>Sri Kailasanathar Temple</span>
            </div>
          </div>

          <p
            className="mt-2.5 text-[0.62rem] uppercase tracking-airy text-muted-foreground animate-ink font-medium"
            style={{ animationDelay: "0.9s" }}
          >
            Pasuvanthanai · Thoothukudi District · Tamil Nadu
          </p>
        </div>
      </header>
    </PetalTap>
  );
}
