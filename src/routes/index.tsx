import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { Reveal } from "@/components/wedding/Section";
import { SectionTitle } from "@/components/wedding/Ornaments";
import { WishLantern } from "@/components/wedding/WishLantern";
import { WeddingFooter } from "@/components/wedding/WeddingFooter";
import { InvitationOpener } from "@/components/wedding/InvitationOpener";
import { couple, events, venues, downloadICS } from "@/lib/wedding";
import { useParallax } from "@/hooks/use-reveal";

import brideImg from "@/assets/bride.jpg";
import groomImg from "@/assets/groom.jpg";
import invitationCover from "@/assets/invitation-cover.jpg";
import invitationDetails from "@/assets/invitation-details.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "R. Maharaja Pandian & S. Sathiya Priya | Wedding Invitation, 16 & 17 September 2026",
      },
      {
        name: "description",
        content:
          "With great joy, Mr. A.S. Raja Sekar & Mrs. R. Jeyakodi invite you and your family to the wedding celebrations of R. Maharaja Pandian (Engineer in JSW Energy) & S. Sathiya Priya at Sri Kailasanathar Temple and Durga Mahal, Pasuvanthanai.",
      },
      {
        property: "og:title",
        content: "R. Maharaja Pandian & S. Sathiya Priya | Wedding Invitation",
      },
      {
        property: "og:description",
        content:
          "Reception: Wed 16th Sept 2026, 6:30 PM onwards · Muhurtham: Thu 17th Sept 2026, 7:31 AM - 9:00 AM at Pasuvanthanai, Tamil Nadu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const drift = useParallax(0.16);
  const [activeCardTab, setActiveCardTab] = useState<"details" | "cover">("details");
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<string | null>(null);

  return (
    <main className="paper overflow-x-hidden text-foreground">
      <InvitationOpener />
      <Hero />

      {/* Countdown Section */}
      <section className="relative px-6 py-14">
        <Reveal>
          <div className="mx-auto max-w-md text-center">
            <p className="text-[0.62rem] uppercase tracking-airy text-primary">
              Auspicious Muhurtham
            </p>
            <h2 className="mt-1 font-display text-2xl font-medium text-foreground">
              Counting Down to the Sacred Vows
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Thursday, 17th September 2026 · 7:31 AM to 9:00 AM
            </p>
            <div className="mt-6">
              <Countdown iso={couple.weddingISO} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-left">
              <div className="rounded-sm border border-primary/25 bg-secondary/40 p-3">
                <span className="block text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                  Reception
                </span>
                <span className="font-display text-sm font-semibold text-foreground">
                  Wed, 16 Sept · 6:30 PM
                </span>
              </div>
              <div className="rounded-sm border border-primary/25 bg-secondary/40 p-3">
                <span className="block text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                  Muhurtham
                </span>
                <span className="font-display text-sm font-semibold text-foreground">
                  Thu, 17 Sept · 7:31 AM
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Formal Family Invitation Matter */}
      <section className="relative px-6 pb-16 pt-4">
        <div
          className="pointer-events-none absolute -right-4 -top-4 opacity-30"
          style={{ transform: `translate3d(0, ${-drift * 0.4}px, 0)` }}
        >
          <span className="font-serif text-3xl text-primary">❦</span>
        </div>
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <SectionTitle overline="Auspicious Occasion" title="Wedding Invitation" />

            <div className="rounded-lg border border-primary/30 bg-card/90 p-6 shadow-sm">
              <p className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                {couple.groomParents}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-primary">
                {couple.groomNative}
              </p>

              <div className="my-5 flex items-center justify-center gap-3 text-primary/60">
                <span className="h-px w-12 bg-primary/30" />
                <span className="text-xs">❦</span>
                <span className="h-px w-12 bg-primary/30" />
              </div>

              <p className="font-display text-base leading-relaxed text-foreground/90 sm:text-lg">
                &ldquo;{couple.invitationHostNote}&rdquo;
              </p>

              {/* Couple Spotlight in Card */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {/* Groom Card */}
                <div className="rounded-md border border-primary/25 bg-secondary/35 p-4 text-center">
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-primary/60 p-1 shadow-md">
                    <img
                      src={groomImg}
                      alt={couple.groom}
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                    {couple.groom}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {couple.groomDegree}
                  </p>
                  <p className="mt-1 text-xs text-foreground/80 font-medium">
                    ({couple.groomProfession})
                  </p>
                  <p className="mt-2 text-[0.7rem] text-muted-foreground">
                    Son of {couple.groomParents}
                  </p>
                  <p className="text-[0.68rem] text-muted-foreground">{couple.groomNative}</p>
                </div>

                {/* Bride Card */}
                <div className="rounded-md border border-primary/25 bg-secondary/35 p-4 text-center">
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-primary/60 p-1 shadow-md">
                    <img
                      src={brideImg}
                      alt={couple.bride}
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                    {couple.bride}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {couple.brideDegree}
                  </p>
                  <p className="mt-1 text-xs text-foreground/80 font-medium">
                    (Bride)
                  </p>
                  <p className="mt-2 text-[0.7rem] text-muted-foreground">
                    D/o {couple.brideParents}
                  </p>
                  <p className="text-[0.68rem] text-muted-foreground">{couple.brideNative}</p>
                </div>
              </div>

              <p className="mt-6 script text-xl text-primary">{couple.tagline}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Dignitaries & Mentors Section */}
      <section className="relative px-6 pb-16">
        <Reveal>
          <div className="mx-auto max-w-xl">
            <div className="rounded-lg border border-primary/35 bg-gradient-to-br from-primary/5 via-card to-primary/10 p-6 shadow-sm">
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  JSW Energy Dignitaries
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-foreground sm:text-2xl">
                  Honoured by the Presence of
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  With warm felicitations and blessings from distinguished leadership & colleagues
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {couple.honouredBy.map((person) => (
                  <div
                    key={person.name}
                    className="flex flex-col items-center justify-center rounded border border-primary/20 bg-background/80 p-3.5 text-center shadow-xs"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/15 text-xs text-primary font-bold">
                      ✦
                    </span>
                    <h4 className="mt-2 font-display text-base font-bold text-foreground">
                      {person.name}
                    </h4>
                    <p className="mt-0.5 text-[0.72rem] leading-tight text-primary font-medium">
                      {person.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Ceremonies Timeline */}
      <section className="relative px-6 pb-16">
        <div className="mx-auto mb-6 flex items-center justify-center gap-3 text-primary/60">
          <span className="h-px w-16 bg-primary/30" />
          <span className="text-sm font-bold text-primary">ॐ</span>
          <span className="h-px w-16 bg-primary/30" />
        </div>
        <Reveal>
          <SectionTitle overline="Auspicious Schedule" title="Ceremonies & Functions" />
        </Reveal>
        <ul className="mx-auto max-w-xl space-y-4">
          {events.map((ev, i) => (
            <li key={ev.name}>
              <Reveal delay={i * 60}>
                <article className="card-soft press p-5 border-l-4 border-l-primary">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 text-xl text-primary font-bold">
                      {ev.glyph}
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-2xl font-semibold text-foreground">
                        {ev.name}
                      </h3>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-primary">
                        {ev.date} · {ev.time}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-primary/15 pt-3">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground mr-1">
                        Venue:
                      </span>
                      {ev.venue}
                    </p>
                    <p className="mt-1 text-xs italic text-muted-foreground">{ev.note}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Original Printed Invitation Card Showcase */}
      <section className="relative px-6 pb-16">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <SectionTitle overline="Traditional Print" title="Original Invitation Card" />
            <p className="text-xs text-muted-foreground -mt-3 mb-6">
              View the authentic printed invitation card matter and auspicious announcements
            </p>

            {/* Toggle Tabs */}
            <div className="inline-flex rounded-md border border-primary/30 bg-card p-1">
              <button
                type="button"
                onClick={() => setActiveCardTab("details")}
                className={`rounded px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                  activeCardTab === "details"
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Inside Card Details
              </button>
              <button
                type="button"
                onClick={() => setActiveCardTab("cover")}
                className={`rounded px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                  activeCardTab === "cover"
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Front Cover &amp; QR
              </button>
            </div>

            {/* Displayed Card */}
            <div className="mt-6 overflow-hidden rounded-lg border border-primary/35 bg-[#3a061d] p-2 shadow-lg">
              <div className="relative group cursor-pointer">
                <img
                  src={activeCardTab === "details" ? invitationDetails : invitationCover}
                  alt={
                    activeCardTab === "details"
                      ? "Wedding Invitation inside matter for R. Maharaja Pandian & S. Sathiya Priya"
                      : "Wedding Invitation front cover for R. Maharaja Pandian weds S. Sathiya Priya"
                  }
                  className="mx-auto max-h-[580px] w-auto rounded object-contain shadow-md"
                  onClick={() =>
                    setSelectedPhotoModal(
                      activeCardTab === "details" ? invitationDetails : invitationCover
                    )
                  }
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 p-4">
                  <span className="rounded bg-black/70 px-3 py-1 text-xs text-white">
                    Click to view full size
                  </span>
                </div>
              </div>

              <p className="mt-3 text-center text-xs text-[#faecc5]">
                {activeCardTab === "details"
                  ? "Formal invitation matter issued by Mr. A.S. Raja Sekar & Mrs. R. Jeyakodi"
                  : "Cover card featuring wedding dates, couple calligraphy & Scan for Location"}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Full Size Modal */}
      {selectedPhotoModal && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedPhotoModal(null)}
        >
          <div className="relative max-h-[92vh] max-w-2xl overflow-auto rounded-lg">
            <button
              type="button"
              onClick={() => setSelectedPhotoModal(null)}
              className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-sm font-bold text-white shadow-lg"
            >
              ✕ Close
            </button>
            <img
              src={selectedPhotoModal}
              alt="Full view"
              className="h-auto w-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Venues & "Scan for Location" Section */}
      <section className="px-6 pb-16">
        <Reveal>
          <div className="mx-auto max-w-xl">
            <SectionTitle overline="Find Your Way" title="Venues &amp; Location" />

            <div className="space-y-6">
              {venues.map((v) => (
                <div key={v.name} className="card-soft overflow-hidden rounded-lg">
                  <div className="bg-primary/10 border-b border-primary/20 px-5 py-3">
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-primary">
                      {v.category}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {v.name}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-primary/90">{v.timing}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.address}</p>
                    <p className="mt-2 text-xs text-foreground/75 italic">{v.description}</p>
                    <a
                      href={v.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="press mt-5 flex min-h-[46px] items-center justify-center rounded bg-primary px-5 text-[0.68rem] font-semibold uppercase tracking-airy text-primary-foreground shadow-sm"
                    >
                      Open {v.name.split("-")[0].trim()} in Google Maps
                    </a>
                  </div>
                </div>
              ))}

              {/* "Scan for Location" QR Section from the physical card */}
              <div className="card-soft rounded-lg p-6 text-center border-2 border-primary/40 bg-gradient-to-b from-card to-primary/5">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  From The Invitation Card
                </span>
                <h4 className="mt-1 font-display text-2xl font-bold text-foreground">
                  Scan for Location
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Point your smartphone camera to navigate directly to the Pasuvanthanai venues
                </p>

                <div className="mx-auto my-5 flex w-44 flex-col items-center justify-center rounded-lg border-2 border-[#d4af37] bg-[#3a061d] p-3 shadow-md">
                  <img
                    src={invitationCover}
                    alt="Location QR Code from cover"
                    className="h-32 w-32 object-cover object-bottom rounded"
                  />
                  <span className="mt-2 text-[0.65rem] uppercase tracking-wider text-[#faecc5] font-medium">
                    Pasuvanthanai
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={venues[0].mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="press w-full sm:w-auto rounded border border-primary/50 bg-secondary/80 px-4 py-2.5 text-xs uppercase tracking-wider text-foreground font-semibold"
                  >
                    Temple Location Maps
                  </a>
                  <a
                    href={venues[1].mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="press w-full sm:w-auto rounded border border-primary/50 bg-secondary/80 px-4 py-2.5 text-xs uppercase tracking-wider text-foreground font-semibold"
                  >
                    Durga Mahal Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Shower of Wishes & Blessings */}
      <Reveal>
        <WishLantern />
      </Reveal>

      {/* Calendar CTA */}
      <section className="px-6 pb-20 pt-4">
        <Reveal>
          <div className="mx-auto max-w-xl card-soft p-7 text-center rounded-lg border border-primary/35">
            <p className="script text-2xl text-primary">Save Our Date</p>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Add the Reception (16th Sept) &amp; Auspicious Muhurtham (17th Sept) to your calendar in one tap.
            </p>
            <button
              type="button"
              onClick={downloadICS}
              className="press mt-5 flex min-h-[52px] w-full items-center justify-center rounded-sm border border-primary/60 bg-primary px-6 text-[0.72rem] font-bold uppercase tracking-airy text-primary-foreground shadow-md"
            >
              Add to Calendar (.ics)
            </button>
          </div>
        </Reveal>
      </section>

      <WeddingFooter />
    </main>
  );
}
