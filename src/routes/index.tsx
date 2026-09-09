import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { Reveal } from "@/components/wedding/Section";
import { SectionTitle } from "@/components/wedding/Ornaments";
import { WishLantern } from "@/components/wedding/WishLantern";
import { WeddingFooter } from "@/components/wedding/WeddingFooter";
import { InvitationOpener } from "@/components/wedding/InvitationOpener";
import { MusicPlayer } from "@/components/wedding/MusicPlayer";
import { couple, events, venue, downloadICS } from "@/lib/wedding";
import { useParallax } from "@/hooks/use-reveal";

import brideImg from "@/assets/bride.png";
import groomImg from "@/assets/groom.png";

const floral = "https://media.invitestory.in/seashell-vows/src/assets/floral-spray.png";
import mapImg from "@/assets/venue-map.jpg";
const ringsVignette =
  "https://media.invitestory.in/seashell-vows/src/assets/rings-seashell-vignette.png";
const floralDivider =
  "https://media.invitestory.in/seashell-vows/src/assets/bougainvillea-divider.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Maharaja Pandian & Sathiya Priya | Wedding Invitation · 16 & 17 Sept 2026",
      },
      {
        name: "description",
        content:
          "With great joy, Mr. A.S. Raja Sekar & Mrs. R. Jeyakodi invite you to the wedding of R. Maharaja Pandian & S. Sathiya Priya at Durga Mahal & Sri Kailasanathar Temple, Pasuvanthanai. Main Function & Reception on 16th September 2026.",
      },
      { property: "og:site_name", content: "Maharaja Pandian & Sathiya Priya Wedding" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pandian-weds-priya.vercel.app/" },
      {
        property: "og:title",
        content: "Maharaja Pandian & Sathiya Priya | Wedding Invitation",
      },
      {
        property: "og:description",
        content:
          "Main Function & Reception: Wednesday, 16th September 2026 (6:30 PM - 9:00 PM). Auspicious Muhurtham: Thursday, 17th September 2026 (7:31 AM - 9:00 AM) at Pasuvanthanai, Tamil Nadu.",
      },
      {
        property: "og:image",
        content: "https://pandian-weds-priya.vercel.app/og-image.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Maharaja Pandian & Sathiya Priya Wedding Invitation Preview",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Maharaja Pandian & Sathiya Priya | Wedding Invitation",
      },
      {
        name: "twitter:description",
        content:
          "Main Function & Reception: 16th September 2026 (6:30 PM - 9:00 PM). Muhurtham: 17th September 2026 (7:31 AM - 9:00 AM).",
      },
      {
        name: "twitter:image",
        content: "https://pandian-weds-priya.vercel.app/og-image.png",
      },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const drift = useParallax(0.18);

  return (
    <main className="paper overflow-x-hidden">
      <InvitationOpener />
      <Hero />

      {/* Countdown to Main Celebration */}
      <section className="px-6 py-14">
        <Reveal>
          <div className="mx-auto max-w-lg text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/25 px-3 py-1 text-[0.62rem] uppercase tracking-airy text-primary font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
              Main Function · 16th September 2026
            </span>
            <p className="mt-3 text-center text-xs sm:text-sm uppercase tracking-airy text-muted-foreground font-semibold">
              Counting down to the celebrations
            </p>
          </div>
          <div className="mt-6 max-w-md mx-auto">
            <Countdown iso={couple.receptionISO} />
          </div>
        </Reveal>
      </section>

      {/* Story / Family Invitation & Bride & Groom Portraits */}
      <section className="relative px-5 sm:px-7 pb-16">
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -right-16 -top-6 w-40 opacity-40"
          style={{ transform: `translate3d(0, ${-drift * 0.4}px, 0)` }}
        />
        <Reveal>
          <SectionTitle overline="Our invitation" title="Celebrating Love & Happiness" />
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <p className="font-display text-[1.25rem] sm:text-[1.4rem] leading-[1.85] text-foreground/90 font-medium">
              Mr. A.S. Raja Sekar &amp; Mrs. R. Jeyakodi
            </p>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold -mt-2">
              South Theethampatti
            </p>
            <p className="text-sm leading-relaxed text-foreground/80 italic max-w-lg mx-auto">
              &ldquo;With great joy, they requested the honour of your presence together with your
              family, on the auspicious occasion of the Marriage of their beloved Son&rdquo;
            </p>

            {/* Bride & Groom Portrait Cards */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch text-center max-w-xl mx-auto">
              {/* Groom */}
              <div className="card-soft p-5 sm:p-6 flex flex-col items-center justify-between rounded-2xl border-2 border-primary/35 shadow-xl transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
                <div className="flex flex-col items-center w-full">
                  <div className="relative h-64 w-52 sm:h-72 sm:w-60 overflow-hidden rounded-2xl border-2 border-primary/60 p-1 bg-gradient-to-b from-primary/25 via-primary/10 to-transparent shadow-lg">
                    <img
                      src={groomImg}
                      alt={couple.groom}
                      className="h-full w-full rounded-xl object-cover object-[center_12%] hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary/95 backdrop-blur-sm px-3.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-widest text-primary-foreground shadow">
                      ✦ The Groom ✦
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-2xl sm:text-[1.75rem] font-bold text-foreground">
                    {couple.groom}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mt-0.5">
                    {couple.groomDegree}
                  </p>
                  <p className="text-xs text-foreground/85 font-medium mt-1">
                    ({couple.groomProfession})
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-primary/25 w-full text-xs text-muted-foreground">
                  <p className="font-medium text-foreground/80">Son of {couple.groomParents}</p>
                  <p className="text-[0.72rem] text-primary font-semibold mt-1">
                    Native: {couple.groomNative}
                  </p>
                </div>
              </div>

              {/* Bride */}
              <div className="card-soft p-5 sm:p-6 flex flex-col items-center justify-between rounded-2xl border-2 border-primary/35 shadow-xl transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
                <div className="flex flex-col items-center w-full">
                  <div className="relative h-64 w-52 sm:h-72 sm:w-60 overflow-hidden rounded-2xl border-2 border-primary/60 p-1 bg-gradient-to-b from-primary/25 via-primary/10 to-transparent shadow-lg">
                    <img
                      src={brideImg}
                      alt={couple.bride}
                      className="h-full w-full rounded-xl object-cover object-[center_18%] hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary/95 backdrop-blur-sm px-3.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-widest text-primary-foreground shadow">
                      ✦ The Bride ✦
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-2xl sm:text-[1.75rem] font-bold text-foreground">
                    {couple.bride}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mt-0.5">
                    {couple.brideDegree}
                  </p>
                  <p className="text-xs text-foreground/85 font-medium mt-1">(Bride)</p>
                </div>
                <div className="mt-5 pt-3 border-t border-primary/25 w-full text-xs text-muted-foreground">
                  <p className="font-medium text-foreground/80">
                    Daughter of {couple.brideParents}
                  </p>
                  <p className="text-[0.72rem] text-primary font-semibold mt-1">
                    Native: {couple.brideNative}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 script text-center text-lg text-primary">{couple.tagline}</p>
          <img
            src={ringsVignette}
            alt="Watercolor wedding rings"
            loading="lazy"
            width={1536}
            height={1024}
            className="mx-auto mt-7 w-60 object-contain"
          />
        </Reveal>
      </section>

      {/* Honoured Guests / Dignitaries */}
      <section className="relative px-5 sm:px-6 pb-16">
        <Reveal>
          <div className="mx-auto max-w-xl card-soft p-6 sm:p-7 rounded-2xl border-2 border-primary/35 shadow-xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-0.5 text-[0.62rem] uppercase tracking-airy text-primary font-bold">
              Distinguished Dignitaries
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-2">
              Honoured by the presence of
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Gracing the auspicious occasion with their warm blessings
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {couple.honouredBy.map((h, idx) => {
                const isLastOdd =
                  idx === couple.honouredBy.length - 1 && couple.honouredBy.length % 2 !== 0;
                return (
                  <div
                    key={h.name}
                    className={`rounded-xl border border-primary/25 bg-background/85 p-3.5 flex items-center gap-3 text-left shadow-sm transition-transform hover:scale-[1.02] ${
                      isLastOdd ? "sm:col-span-2 sm:max-w-sm sm:mx-auto sm:w-full" : ""
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-serif font-bold">
                      ✦
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-base sm:text-lg font-bold text-foreground leading-snug truncate">
                        {h.name}
                      </p>
                      <p className="text-[0.68rem] uppercase tracking-wider text-muted-foreground truncate">
                        {h.role || "Honoured Dignitary"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Events / Program List */}
      <section className="relative px-5 sm:px-6 pb-16">
        <img
          src={floralDivider}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={2172}
          height={724}
          className="pointer-events-none mx-auto mb-8 w-full max-w-md opacity-80"
        />
        <Reveal>
          <SectionTitle overline="Two days of joy" title="Wedding Program" />
        </Reveal>
        <ul className="space-y-5 max-w-lg mx-auto">
          {events.map((ev, i) => {
            const isMain = ev.isMain;
            return (
              <li key={ev.name}>
                <Reveal delay={i * 60}>
                  <article
                    className={`card-soft press p-5 sm:p-6 rounded-2xl transition-all duration-300 ${
                      isMain
                        ? "border-2 border-primary bg-gradient-to-b from-primary/10 via-card to-primary/5 shadow-[0_16px_36px_rgba(207,163,71,0.25)] ring-2 ring-primary/45"
                        : "border border-primary/25"
                    }`}
                  >
                    {isMain && (
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-0.5 text-[0.62rem] sm:text-[0.66rem] font-bold uppercase tracking-wider text-primary-foreground shadow-sm animate-pulse">
                          ✦ MAIN FUNCTION · 16TH SEPT ✦
                        </span>
                        <span className="text-[0.68rem] font-bold text-primary uppercase tracking-wider">
                          Durga Mahal
                        </span>
                      </div>
                    )}

                    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3.5">
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border text-lg font-bold ${
                          isMain
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-primary/30 text-primary bg-primary/10"
                        }`}
                      >
                        {ev.glyph}
                      </span>
                      <div className="min-w-0">
                        <h3
                          className={`font-display text-2xl sm:text-[1.65rem] font-bold leading-tight ${
                            isMain ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {ev.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-foreground/90 mt-0.5">
                          {ev.date}
                        </p>
                        <p
                          className={`text-xs font-bold mt-0.5 ${
                            isMain ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          ⏰ {ev.time}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-primary/20">
                      <p className="text-sm font-semibold text-foreground/90">📍 {ev.venue}</p>
                      <p className="mt-1 text-xs leading-relaxed italic text-muted-foreground">
                        {ev.note}
                      </p>
                    </div>

                    {isMain && (
                      <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-primary/15 text-[0.65rem] font-medium text-primary">
                        <span className="rounded-md bg-primary/10 px-2.5 py-1">
                          ✨ Felicitation of Newlyweds
                        </span>
                        <span className="rounded-md bg-primary/10 px-2.5 py-1">
                          🎵 Joyful Music
                        </span>
                        <span className="rounded-md bg-primary/10 px-2.5 py-1">
                          🍽 Royal Celebratory Dinner
                        </span>
                      </div>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      <Reveal>
        <WishLantern />
      </Reveal>

      {/* Venue */}
      <section className="px-6 pb-16">
        <Reveal>
          <SectionTitle overline="Find your way" title="The venue" />
          <div className="card-soft overflow-hidden max-w-lg mx-auto">
            <img
              src={mapImg}
              alt={`Illustrated map of ${venue.name}`}
              loading="lazy"
              width={1024}
              height={768}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-display text-2xl font-bold">{venue.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{venue.address}</p>
              <p className="mt-2 text-xs text-muted-foreground italic">
                Followed function at Durga Mahal, Pasuvanthanai
              </p>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="press mt-5 flex min-h-[48px] items-center justify-center rounded-sm bg-primary px-5 text-[0.68rem] uppercase tracking-airy text-primary-foreground font-semibold"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Calendar CTA */}
      <section className="px-6 pb-20">
        <Reveal>
          <div className="card-soft p-6 text-center max-w-lg mx-auto">
            <p className="script text-lg text-primary">Save our date</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add every ceremony to your calendar in one tap.
            </p>
            <button
              type="button"
              onClick={downloadICS}
              className="press mt-5 flex min-h-[52px] w-full items-center justify-center rounded-sm border border-primary/45 bg-secondary text-[0.68rem] uppercase tracking-airy text-foreground font-semibold"
            >
              Add to Calendar
            </button>
          </div>
        </Reveal>
      </section>

      <WeddingFooter />
      <MusicPlayer />
    </main>
  );
}
