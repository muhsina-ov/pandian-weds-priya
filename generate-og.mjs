import sharp from "sharp";
import fs from "fs";

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // Process portraits with sharp for optimal framing and clarity
  const groomBuffer = await sharp("src/assets/groom.png")
    .extract({ left: 35, top: 235, width: 390, height: 500 })
    .resize(210, 270, { fit: "cover", position: "center" })
    .modulate({ brightness: 1.04, saturation: 1.08 })
    .toBuffer();

  const brideBuffer = await sharp("src/assets/bride.png")
    .extract({ left: 30, top: 10, width: 774, height: 995 })
    .resize(210, 270, { fit: "cover", position: "top" })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .toBuffer();

  const groomB64 = "data:image/png;base64," + groomBuffer.toString("base64");
  const brideB64 = "data:image/png;base64," + brideBuffer.toString("base64");

  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Rich Royal Burgundy Background -->
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2a0512" />
          <stop offset="35%" stop-color="#420b1e" />
          <stop offset="70%" stop-color="#310716" />
          <stop offset="100%" stop-color="#19020a" />
        </linearGradient>

        <!-- Shimmering 24K Gold Gradient -->
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0.8">
          <stop offset="0%" stop-color="#e2ba64" />
          <stop offset="25%" stop-color="#fff0bd" />
          <stop offset="50%" stop-color="#d4aa48" />
          <stop offset="75%" stop-color="#f8e092" />
          <stop offset="100%" stop-color="#aa7921" />
        </linearGradient>

        <!-- Soft Gold Text Gradient -->
        <linearGradient id="goldTextGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff4d0" />
          <stop offset="50%" stop-color="#f4d485" />
          <stop offset="100%" stop-color="#d6a745" />
        </linearGradient>

        <!-- Royal Card Gradient -->
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.04" />
        </linearGradient>

        <!-- Event Highlight Pill Gradient -->
        <linearGradient id="eventPillGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#64142e" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#460d1e" stop-opacity="0.9" />
        </linearGradient>

        <!-- Soft Drop Shadow -->
        <filter id="royalShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.65" />
        </filter>

        <!-- Radiant Gold Glow -->
        <filter id="goldGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#f5d78a" flood-opacity="0.55" />
        </filter>

        <!-- Clip Paths for Arched Portraits -->
        <clipPath id="groomClip">
          <rect x="76" y="112" width="204" height="268" rx="28" />
        </clipPath>

        <clipPath id="brideClip">
          <rect x="300" y="112" width="204" height="268" rx="28" />
        </clipPath>
      </defs>

      <!-- Royal Background Canvas -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

      <!-- Subtle Sacred Paisley & Mandala Watermarks -->
      <g opacity="0.07" stroke="#ffffff" fill="none" stroke-width="1.5">
        <circle cx="150" cy="150" r="140" stroke-dasharray="6,6" />
        <circle cx="150" cy="150" r="100" />
        <circle cx="1050" cy="480" r="160" stroke-dasharray="8,8" />
        <circle cx="1050" cy="480" r="110" />
        <circle cx="600" cy="315" r="280" stroke-dasharray="10,10" />
      </g>

      <!-- Luxury Double Gold Border -->
      <rect x="22" y="22" width="1156" height="586" rx="16" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" />
      <rect x="32" y="32" width="1136" height="566" rx="12" fill="none" stroke="url(#goldGrad)" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="10 5" />

      <!-- Ornate Corner Motifs -->
      <g fill="url(#goldGrad)">
        <!-- Top Left -->
        <circle cx="22" cy="22" r="7" />
        <circle cx="38" cy="38" r="3.5" />
        <path d="M 22 50 Q 34 34 50 22" fill="none" stroke="url(#goldGrad)" stroke-width="2" />
        
        <!-- Top Right -->
        <circle cx="1178" cy="22" r="7" />
        <circle cx="1162" cy="38" r="3.5" />
        <path d="M 1178 50 Q 1166 34 1150 22" fill="none" stroke="url(#goldGrad)" stroke-width="2" />

        <!-- Bottom Left -->
        <circle cx="22" cy="608" r="7" />
        <circle cx="38" cy="592" r="3.5" />
        <path d="M 22 580 Q 34 596 50 608" fill="none" stroke="url(#goldGrad)" stroke-width="2" />

        <!-- Bottom Right -->
        <circle cx="1178" cy="608" r="7" />
        <circle cx="1162" cy="592" r="3.5" />
        <path d="M 1178 580 Q 1166 596 1150 608" fill="none" stroke="url(#goldGrad)" stroke-width="2" />
      </g>

      <!-- ================= LEFT PANEL: THE COUPLE PORTRAITS ================= -->
      <rect x="54" y="56" width="472" height="518" rx="24" fill="url(#cardGrad)" stroke="url(#goldGrad)" stroke-width="1.8" stroke-opacity="0.8" filter="url(#royalShadow)" />

      <!-- Auspicious Header over Portraits -->
      <text x="290" y="93" text-anchor="middle" font-family="'Cinzel', 'Georgia', serif" font-size="12" font-weight="700" letter-spacing="3.5" fill="#f8e092">
        ✦ THE GROOM &amp; THE BRIDE ✦
      </text>

      <!-- Groom Portrait Frame -->
      <rect x="74" y="110" width="208" height="272" rx="29" fill="#20040c" />
      <image href="${groomB64}" x="76" y="112" width="204" height="268" preserveAspectRatio="xMidYMin slice" clip-path="url(#groomClip)" />
      <rect x="74" y="110" width="208" height="272" rx="29" fill="none" stroke="url(#goldGrad)" stroke-width="3" filter="url(#goldGlow)" />

      <!-- Groom Badge -->
      <g transform="translate(178, 386)">
        <rect x="-54" y="-13" width="108" height="26" rx="13" fill="#1b030b" stroke="url(#goldGrad)" stroke-width="1.6" />
        <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" letter-spacing="2" fill="#fff0bd">
          GROOM
        </text>
      </g>

      <!-- Bride Portrait Frame -->
      <rect x="298" y="110" width="208" height="272" rx="29" fill="#20040c" />
      <image href="${brideB64}" x="300" y="112" width="204" height="268" preserveAspectRatio="xMidYMin slice" clip-path="url(#brideClip)" />
      <rect x="298" y="110" width="208" height="272" rx="29" fill="none" stroke="url(#goldGrad)" stroke-width="3" filter="url(#goldGlow)" />

      <!-- Bride Badge -->
      <g transform="translate(402, 386)">
        <rect x="-54" y="-13" width="108" height="26" rx="13" fill="#1b030b" stroke="url(#goldGrad)" stroke-width="1.6" />
        <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" letter-spacing="2" fill="#fff0bd">
          BRIDE
        </text>
      </g>

      <!-- Center Sacred Medallion / Heart Union -->
      <g transform="translate(290, 246)">
        <circle cx="0" cy="0" r="24" fill="#2a0512" stroke="url(#goldGrad)" stroke-width="2.5" filter="url(#goldGlow)" />
        <text x="0" y="8" text-anchor="middle" font-family="'Georgia', serif" font-size="22" font-style="italic" font-weight="bold" fill="url(#goldTextGrad)">
          &amp;
        </text>
      </g>

      <!-- Couple Names below Portraits -->
      <text x="290" y="442" text-anchor="middle" font-family="'Cinzel', 'Georgia', serif" font-size="21" font-weight="bold" fill="url(#goldTextGrad)">
        R. Maharaja Pandian
      </text>
      <text x="290" y="468" text-anchor="middle" font-family="'Cinzel', 'Georgia', serif" font-size="21" font-weight="bold" fill="url(#goldTextGrad)">
        &amp; S. Sathiya Priya
      </text>

      <!-- Degrees & Heritage Line -->
      <text x="290" y="498" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="600" letter-spacing="1" fill="#f5d78a">
        DEEE., B.E. (JSW Energy) · B.Sc.
      </text>
      <text x="290" y="522" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="500" fill="#dfc098">
        South Theethampatti · Pasuvanthanai
      </text>

      <!-- ================= RIGHT PANEL: INVITATION & CELEBRATIONS ================= -->
      <!-- Top Auspicious Pill -->
      <g transform="translate(860, 94)">
        <rect x="-175" y="-17" width="350" height="34" rx="17" fill="#ffffff" fill-opacity="0.08" stroke="url(#goldGrad)" stroke-width="1.4" />
        <text x="0" y="5" text-anchor="middle" font-family="'Cinzel', 'Georgia', serif" font-size="12" font-weight="800" letter-spacing="3.5" fill="#f8e092">
          ✦ WEDDING INVITATION ✦
        </text>
      </g>

      <!-- Invitation By Line -->
      <text x="860" y="142" text-anchor="middle" font-family="'Georgia', serif" font-style="italic" font-size="15" fill="#fcecd2">
        Together with our families
      </text>
      <text x="860" y="164" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="600" letter-spacing="1.2" fill="#f3d07e">
        Mr. A.S. Raja Sekar &amp; Mrs. R. Jeyakodi
      </text>

      <!-- Majestic Couple Names Calligraphy -->
      <text x="860" y="222" text-anchor="middle" font-family="'Cinzel', 'Georgia', serif" font-size="42" font-weight="bold" fill="url(#goldTextGrad)" filter="url(#royalShadow)">
        Maharaja Pandian
      </text>
      <text x="860" y="258" text-anchor="middle" font-family="'Georgia', serif" font-style="italic" font-size="26" fill="#f4d485">
        — weds —
      </text>
      <text x="860" y="306" text-anchor="middle" font-family="'Cinzel', 'Georgia', serif" font-size="42" font-weight="bold" fill="url(#goldTextGrad)" filter="url(#royalShadow)">
        Sathiya Priya
      </text>

      <!-- Subtitle Tagline -->
      <text x="860" y="338" text-anchor="middle" font-family="'Georgia', serif" font-style="italic" font-size="13.5" letter-spacing="1.5" fill="#e9c894">
        Celebrating Love, Traditions &amp; Togetherness
      </text>

      <!-- Grand Reception Highlight Card (16th September) -->
      <g transform="translate(860, 404)">
        <rect x="-275" y="-38" width="550" height="78" rx="16" fill="url(#eventPillGrad)" stroke="url(#goldGrad)" stroke-width="1.8" filter="url(#royalShadow)" />
        
        <!-- Badge -->
        <g transform="translate(0, -38)">
          <rect x="-125" y="-12" width="250" height="24" rx="12" fill="#d4aa48" />
          <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="900" letter-spacing="1.5" fill="#20040c">
            ★ MAIN FUNCTION &amp; RECEPTION ★
          </text>
        </g>

        <text x="0" y="4" text-anchor="middle" font-family="'Georgia', serif" font-size="19" font-weight="bold" fill="#ffffff">
          Wednesday, 16th September 2026
        </text>
        <text x="0" y="26" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="700" letter-spacing="0.5" fill="#ffd77a">
          Evening 6:30 PM to 9:00 PM · Durga Mahal, Pasuvanthanai
        </text>
      </g>

      <!-- Auspicious Muhurtham Details (17th September) -->
      <g transform="translate(860, 488)">
        <rect x="-275" y="-24" width="550" height="50" rx="12" fill="#ffffff" fill-opacity="0.06" stroke="url(#goldGrad)" stroke-opacity="0.5" stroke-width="1.2" />
        <text x="0" y="-3" text-anchor="middle" font-family="'Georgia', serif" font-size="15" font-weight="bold" fill="#fdf0cf">
          Sacred Muhurtham: Thursday, 17th Sept 2026 · 7:31 AM - 9:00 AM
        </text>
        <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="500" fill="#e8c89b">
          Sri Kailasanathar - Sri Anandavalli Amman Temple, Pasuvanthanai
        </text>
      </g>

      <!-- Official Production Website Pill -->
      <g transform="translate(860, 545)">
        <rect x="-175" y="-14" width="350" height="28" rx="14" fill="#ffffff" fill-opacity="0.1" stroke="url(#goldGrad)" stroke-width="1.2" />
        <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" letter-spacing="1.2" fill="#fff0bd">
          🌐 pandian-weds-priya.vercel.app
        </text>
      </g>
    </svg>
  `;

  await sharp(Buffer.from(svg)).png({ quality: 95 }).toFile("public/og-image.png");

  console.log("Successfully generated luxury couple-centric public/og-image.png!");
}

generateOgImage().catch((err) => {
  console.error("Error generating OG image:", err);
  process.exit(1);
});

