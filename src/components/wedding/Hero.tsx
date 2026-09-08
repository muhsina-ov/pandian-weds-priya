import { PetalTap } from "./PetalTap";
import { useParallax } from "@/hooks/use-reveal";
import { couple } from "@/lib/wedding";
import brideImg from "@/assets/bride.jpg";
import groomImg from "@/assets/groom.jpg";

export function Hero() {
  const bg = useParallax(0.25);
  const fg = useParallax(0.1);

  return (
    <PetalTap>
      <header className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#2d0517] via-[#52092c] to-[#1e0310] text-[#fdf8f0]">
        {/* Subtle decorative background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            transform: `translate3d(0, ${bg}px, 0)`,
          }}
        />

        {/* Ambient golden lighting effects */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#d4af37]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-[#e8709e]/15 blur-3xl" />

        {/* Auspicious Golden Corner Flourishes */}
        <div
          className="pointer-events-none absolute -left-4 top-4 opacity-40 animate-float-soft"
          style={{ transform: `translate3d(0, ${bg * 0.4}px, 0)` }}
        >
          <span className="font-serif text-4xl text-[#d4af37]">❦</span>
        </div>
        <div
          className="pointer-events-none absolute -right-4 top-16 opacity-40 animate-float-soft"
          style={{ animationDelay: "1.5s", transform: `translate3d(0, ${bg * 0.3}px, 0)` }}
        >
          <span className="font-serif text-4xl text-[#d4af37]">❦</span>
        </div>

        <div
          className="relative flex min-h-[100svh] flex-col items-center justify-between px-5 pb-10 pt-12 text-center"
          style={{ transform: `translate3d(0, ${-fg}px, 0)` }}
        >
          {/* Top header: Wedding Invitation invocation */}
          <div className="w-full max-w-xl animate-ink">
            <div className="inline-flex items-center justify-center gap-3 border-b border-[#d4af37]/40 pb-2">
              <span className="text-xs text-[#e5c158]">ॐ</span>
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#faecc5]">
                Wedding Invitation
              </span>
              <span className="text-xs text-[#e5c158]">ॐ</span>
            </div>

            <p className="mt-3 script text-lg text-[#f6d98c] sm:text-xl">
              {couple.invitationLead}
            </p>

            <p className="mt-1 text-[0.72rem] tracking-wide text-[#e9d2af]/90">
              on the auspicious occasion of the marriage of
            </p>
          </div>

          {/* Couple Portraits Spotlight */}
          <div className="my-6 w-full max-w-lg">
            <div className="relative flex items-center justify-center gap-4 sm:gap-8">
              {/* Groom Photo Card */}
              <div className="group flex flex-col items-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#d4af37] p-1 shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105 sm:h-40 sm:w-40">
                  <img
                    src={groomImg}
                    alt={couple.groom}
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                </div>
                <div className="mt-3 text-center">
                  <span className="block font-display text-lg font-semibold tracking-wide text-[#faecc5] sm:text-xl">
                    R. Maharaja Pandian
                  </span>
                  <span className="block text-[0.68rem] font-medium tracking-wider text-[#d4af37]">
                    DEEE., B.E.
                  </span>
                  <span className="block text-[0.65rem] text-[#f1d8be]/80">
                    Engineer in JSW Energy
                  </span>
                </div>
              </div>

              {/* Central Auspicious Heart / Knot Symbol */}
              <div className="flex flex-col items-center justify-center self-start pt-10 sm:pt-14">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#420623]/80 shadow-md">
                  <span className="script text-xl text-[#f4d8a1]">weds</span>
                </div>
                <span className="mt-1 text-[0.6rem] uppercase tracking-widest text-[#d4af37]">
                  ♥
                </span>
              </div>

              {/* Bride Photo Card */}
              <div className="group flex flex-col items-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#d4af37] p-1 shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105 sm:h-40 sm:w-40">
                  <img
                    src={brideImg}
                    alt={couple.bride}
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                </div>
                <div className="mt-3 text-center">
                  <span className="block font-display text-lg font-semibold tracking-wide text-[#faecc5] sm:text-xl">
                    S. Sathiya Priya
                  </span>
                  <span className="block text-[0.68rem] font-medium tracking-wider text-[#d4af37]">
                    B.Sc.
                  </span>
                  <span className="block text-[0.65rem] text-[#f1d8be]/80">
                    Pasuvanthanai
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-5 script text-lg tracking-wide text-[#f7dfa3] sm:text-xl">
              Celebrating Love &amp; Happiness
            </p>
          </div>

          {/* Date & Muhurtham Summary Card */}
          <div className="w-full max-w-md rounded-lg border border-[#d4af37]/35 bg-[#3a061d]/85 p-4 shadow-xl backdrop-blur-sm animate-ink">
            <div className="grid grid-cols-2 divide-x divide-[#d4af37]/30 text-center">
              <div className="px-2">
                <p className="text-[0.65rem] uppercase tracking-wider text-[#d4af37]">
                  Reception
                </p>
                <p className="mt-1 font-display text-base font-medium text-white sm:text-lg">
                  Wed, 16th Sept 2026
                </p>
                <p className="text-[0.68rem] text-[#faecc5]/80">6:30 PM onwards</p>
              </div>
              <div className="px-2">
                <p className="text-[0.65rem] uppercase tracking-wider text-[#d4af37]">
                  Muhurtham
                </p>
                <p className="mt-1 font-display text-base font-medium text-white sm:text-lg">
                  Thu, 17th Sept 2026
                </p>
                <p className="text-[0.68rem] text-[#faecc5]/80">7:31 AM - 9:00 AM</p>
              </div>
            </div>

            <div className="mt-3 border-t border-[#d4af37]/25 pt-2">
              <p className="text-[0.72rem] text-[#fce8c8]">
                <span className="font-semibold text-[#f5d580]">Venue:</span>{" "}
                Sri Kailasanathar - Sri Anandavalli Amman Temple
              </p>
              <p className="text-[0.68rem] text-[#e0cfba]">
                Followed function at Durga Mahal, Pasuvanthanai
              </p>
            </div>
          </div>

          {/* Micro-hint to tap */}
          <p className="mt-4 text-[0.62rem] uppercase tracking-[0.22em] text-[#d4af37]/75">
            Tap anywhere to scatter auspicious blessings
          </p>
        </div>
      </header>
    </PetalTap>
  );
}
