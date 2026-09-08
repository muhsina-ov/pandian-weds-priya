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

import brideImg from "@/assets/bride.jpg";
import groomImg from "@/assets/groom.jpg";

const floral = "https://media.invitestory.in/seashell-vows/src/assets/floral-spray.png";
import mapImg from "@/assets/venue-map.jpg";
const ringsVignette = "https://media.invitestory.in/seashell-vows/src/assets/rings-seashell-vignette.png";
const floralDivider = "https://media.invitestory.in/seashell-vows/src/assets/bougainvillea-divider.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Maharaja Pandian & Sathiya Priya | Wedding Invitation, 17 Sept 2026",
      },
      {
        name: "description",
        content:
          "With great joy, Mr. A.S. Raja Sekar & Mrs. R. Jeyakodi invite you to the wedding of R. Maharaja Pandian & S. Sathiya Priya at Sri Kailasanathar Temple and Durga Mahal, Pasuvanthanai.",
      },
      {
        property: "og:title",
        content: "Maharaja Pandian & Sathiya Priya | Wedding Invitation",
      },
      {
        property: "og:description",
        content:
          "Wedding celebrations on 16 & 17 September 2026 at Pasuvanthanai, Tamil Nadu. Reception, Muhurtham and venue details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

      {/* Countdown */}
      <section className="px-6 py-14">
        <Reveal>
          <p className="text-center text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            Counting down to the vows
          </p>
          <div className="mt-6">
            <Countdown iso={couple.weddingISO} />
          </div>
        </Reveal>
      </section>

      {/* Story / Family Invitation */}
      <section className="relative px-7 pb-16">
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
          <div className="mx-auto max-w-xl text-center space-y-4">
            <p className="font-display text-[1.2rem] leading-[1.85] text-foreground/90 font-medium">
              Mr. A.S. Raja Sekar &amp; Mrs. R. Jeyakodi
            </p>
            <p className="text-xs uppercase tracking-widest text-primary font-medium -mt-2">
              South Theethampatti
            </p>
            <p className="text-sm leading-relaxed text-foreground/80 italic">
              &ldquo;With great joy, they requested the honour of your presence together with your family, on the auspicious occasion of the Marriage of their beloved Son&rdquo;
            </p>

            {/* Bride & Groom Portrait Cards */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch text-center">
              {/* Groom */}
              <div className="card-soft p-5 flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="relative h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full border-2 border-primary/45 p-1 bg-background/80 shadow-md">
                    <img
                      src={groomImg}
                      alt={couple.groom}
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                    {couple.groom}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                    {couple.groomDegree}
                  </p>
                  <p className="text-xs text-foreground/80 font-medium mt-1">
                    ({couple.groomProfession})
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-primary/20 w-full text-xs text-muted-foreground">
                  <p>Son of {couple.groomParents}</p>
                  <p className="text-[0.7rem] text-primary mt-0.5">{couple.groomNative}</p>
                </div>
              </div>

              {/* Bride */}
              <div className="card-soft p-5 flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="relative h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full border-2 border-primary/45 p-1 bg-background/80 shadow-md">
                    <img
                      src={brideImg}
                      alt={couple.bride}
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                    {couple.bride}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                    {couple.brideDegree}
                  </p>
                  <p className="text-xs text-foreground/80 font-medium mt-1">
                    (Bride)
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-primary/20 w-full text-xs text-muted-foreground">
                  <p>Daughter of {couple.brideParents}</p>
                  <p className="text-[0.7rem] text-primary mt-0.5">{couple.brideNative}</p>
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
      <section className="relative px-6 pb-16">
        <Reveal>
          <div className="mx-auto max-w-lg card-soft p-6 text-center">
            <p className="text-[0.62rem] uppercase tracking-airy text-primary font-semibold">
              JSW Energy
            </p>
            <h3 className="font-display text-xl font-bold text-foreground mt-1">
              Honoured by the presence of
            </h3>
            <div className="mt-5 space-y-2 text-sm text-foreground/90 font-medium">
              {couple.honouredBy.map((h) => (
                <div key={h.name} className="py-1">
                  <p className="font-semibold text-foreground">{h.name}</p>
                  <p className="text-xs text-muted-foreground">{h.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Events */}
      <section className="relative px-6 pb-16">
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
          <SectionTitle overline="Two days of joy" title="Celebrations" />
        </Reveal>
        <ul className="space-y-4 max-w-lg mx-auto">
          {events.map((ev, i) => (
            <li key={ev.name}>
              <Reveal delay={i * 60}>
                <article className="card-soft press p-5">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/30 text-primary font-bold">
                      {ev.glyph}
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-2xl font-semibold">{ev.name}</h3>
                      <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground font-medium">
                        {ev.date} · {ev.time}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-foreground/80 font-medium">{ev.venue}</p>
                  <p className="mt-1 text-xs italic text-muted-foreground">{ev.note}</p>
                </article>
              </Reveal>
            </li>
          ))}
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
