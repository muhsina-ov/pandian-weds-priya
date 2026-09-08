export const couple = {
  groom: "R. Maharaja Pandian",
  groomShort: "Maharaja Pandian",
  groomDegree: "DEEE., B.E.",
  groomProfession: "Engineer in JSW Energy",
  groomParents: "Mr. A.S. Raja Sekar & Mrs. R. Jeyakodi",
  groomNative: "South Theethampatti",

  bride: "S. Sathiya Priya",
  brideShort: "Sathiya Priya",
  brideDegree: "B.Sc.",
  brideParents: "Mr. P.K. Seenivasan & Mrs. S. Selvam",
  brideNative: "Pasuvanthanai",

  tagline: "Celebrating Love & Happiness",
  dateLabel: "16 & 17 September 2026",
  receptionDateLabel: "Wednesday, 16th September 2026",
  receptionTimeLabel: "Evening 6:30 PM to 9:00 PM",
  weddingDateLabel: "Thursday, 17th September 2026",
  weddingTimeLabel: "between 7.31 am to 9.00 am",

  receptionISO: "2026-09-16T18:30:00+05:30",
  weddingISO: "2026-09-17T07:31:00+05:30",

  locationLabel: "Pasuvanthanai, Thoothukudi Dist, Tamil Nadu",
  templeVenue: "Sri Kailasanathar - Sri Anandavalli Amman Temple, Pasuvanthanai",
  mahalVenue: "Durga Mahal, Pasuvanthanai",

  invitationLead: "We Cordially Invite you and your family",
  invitationHostNote:
    "with great joy, they requested the honour of your presence together with your family, on the auspicious occasion of the Marriage of their beloved Son",
  complements: "With best complements from Friends & Relatives",

  honouredBy: [
    { name: "Mr. A. Mani" },
    { name: "Mr. L. Murugan" },
    { name: "Mr. S. Sakthivel" },
    { name: "Mr. G. Raghuram" },
  ],
};

export type WeddingEvent = {
  name: string;
  glyph: string;
  date: string;
  time: string;
  venue: string;
  note: string;
  iso: string;
  isMain?: boolean;
  badge?: string;
};

export const events: WeddingEvent[] = [
  {
    name: "Grand Wedding Reception",
    badge: "Special Main Function",
    isMain: true,
    glyph: "✦",
    date: "Wednesday, 16th September 2026",
    time: "Evening 6:30 PM to 9:00 PM",
    venue: "Durga Mahal, Pasuvanthanai",
    note: "Special Main Celebration with warm felicitations, joyful music, family gatherings, and royal celebratory dinner feast.",
    iso: "2026-09-16T18:30:00+05:30",
  },
  {
    name: "Auspicious Muhurtham (Wedding)",
    badge: "Sacred Ceremony",
    glyph: "☀",
    date: "Thursday, 17th September 2026",
    time: "Between 7:31 AM to 9:00 AM",
    venue: "Sri Kailasanathar - Sri Anandavalli Amman Temple, Pasuvanthanai",
    note: "Sacred Thali tying muhurtham ceremony in the divine presence of Sri Kailasanathar & family.",
    iso: "2026-09-17T07:31:00+05:30",
  },
  {
    name: "Followed Function & Wedding Feast",
    badge: "Kalyana Virundhu",
    glyph: "❋",
    date: "Thursday, 17th September 2026",
    time: "Following the Muhurtham (9:30 AM onwards)",
    venue: "Durga Mahal, Pasuvanthanai",
    note: "Traditional South Indian wedding feast (Kalyana Virundhu) and cordial blessings.",
    iso: "2026-09-17T09:30:00+05:30",
  },
];

export const venues = [
  {
    category: "Sacred Muhurtham Venue",
    name: "Sri Kailasanathar - Sri Anandavalli Amman Temple",
    address: "Pasuvanthanai, Thoothukudi District, Tamil Nadu 628718",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sri+Kailasanathar+Temple+Pasuvanthanai",
    timing: "Thursday, 17th September 2026 · 7:31 AM to 9:00 AM",
    description:
      "The ancient celestial temple of Sri Kailasanathar and Sri Anandavalli Amman, where the sacred Thali tying rituals take place.",
  },
  {
    category: "Reception & Followed Function Venue",
    name: "Durga Mahal (AKR Durga Mahal)",
    address: "North Car Street, Pasuvanthanai, Thoothukudi District, Tamil Nadu 628718",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=AKR+Durga+Mahal+Pasuvanthanai",
    timing: "Reception: 16th Sept (6:30 PM onwards) · Wedding Feast: 17th Sept (Post Muhurtham)",
    description:
      "Grand wedding reception hall located conveniently on North Car Street for dining, family gatherings, and celebratory felicitation.",
  },
];

export const venue = venues[0];

function icsStamp(d: Date) {
  return `${d.toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`;
}

export function buildICS() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Maharaja Pandian & Sathiya Priya//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];

  const eventDurations: Record<string, number> = {
    "Grand Wedding Reception": 2.5 * 60 * 60 * 1000,
    "Auspicious Muhurtham (Wedding)": 2 * 60 * 60 * 1000,
    "Followed Function & Wedding Feast": 4 * 60 * 60 * 1000,
  };

  for (const ev of events) {
    const start = new Date(ev.iso);
    const duration = eventDurations[ev.name] ?? 3 * 60 * 60 * 1000;
    const end = new Date(start.getTime() + duration);
    lines.push(
      "BEGIN:VEVENT",
      `UID:${ev.name.replace(/\s+/g, "-").toLowerCase()}-pandian-priya-2026@wedding`,
      `DTSTAMP:${icsStamp(new Date())}`,
      `DTSTART:${icsStamp(start)}`,
      `DTEND:${icsStamp(end)}`,
      `SUMMARY:${ev.name} | ${couple.groom} & ${couple.bride}`,
      `LOCATION:${ev.venue}`,
      `DESCRIPTION:${ev.note} - Pasuvanthanai, Tamil Nadu`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
    );
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function downloadICS() {
  const blob = new Blob([buildICS()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "pandian-weds-priya-wedding.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
