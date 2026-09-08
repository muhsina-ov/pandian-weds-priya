import sharp from "sharp";
import fs from "fs";

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // Read actual couple images as base64
  const groomB64 =
    "data:image/png;base64," + fs.readFileSync("src/assets/groom.png").toString("base64");
  const brideB64 =
    "data:image/png;base64," + fs.readFileSync("src/assets/bride.png").toString("base64");

  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fdfcf8" />
          <stop offset="50%" stop-color="#faf4e8" />
          <stop offset="100%" stop-color="#f3e9d7" />
        </linearGradient>

        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#c59837" />
          <stop offset="35%" stop-color="#f3d790" />
          <stop offset="70%" stop-color="#d4aa4c" />
          <stop offset="100%" stop-color="#a6771e" />
        </linearGradient>

        <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#4a1525" />
          <stop offset="100%" stop-color="#2a0814" />
        </linearGradient>

        <linearGradient id="pillGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fffaf0" />
          <stop offset="100%" stop-color="#faebd2" />
        </linearGradient>

        <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#3d1421" flood-opacity="0.16" />
        </filter>

        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#cfa347" flood-opacity="0.32" />
        </filter>

        <clipPath id="groomClip">
          <rect x="74" y="132" width="206" height="280" rx="26" />
        </clipPath>

        <clipPath id="brideClip">
          <rect x="290" y="132" width="206" height="280" rx="26" />
        </clipPath>
      </defs>

      <!-- Background Canvas -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

      <!-- Outer Gold Border -->
      <rect x="22" y="22" width="1156" height="586" rx="14" fill="none" stroke="url(#goldGrad)" stroke-width="3" />
      <!-- Inner Thin Royal Border -->
      <rect x="32" y="32" width="1136" height="566" rx="10" fill="none" stroke="#4a1525" stroke-opacity="0.22" stroke-width="1.2" stroke-dasharray="8 4" />

      <!-- Corner Ornaments -->
      <g fill="#cfa347">
        <circle cx="22" cy="22" r="7" />
        <circle cx="36" cy="36" r="3.5" />
        <path d="M 22 46 Q 32 32 46 22" fill="none" stroke="#cfa347" stroke-width="2"/>

        <circle cx="1178" cy="22" r="7" />
        <circle cx="1164" cy="36" r="3.5" />
        <path d="M 1178 46 Q 1168 32 1154 22" fill="none" stroke="#cfa347" stroke-width="2"/>

        <circle cx="22" cy="608" r="7" />
        <circle cx="36" cy="594" r="3.5" />
        <path d="M 22 584 Q 32 598 46 608" fill="none" stroke="#cfa347" stroke-width="2"/>

        <circle cx="1178" cy="608" r="7" />
        <circle cx="1164" cy="594" r="3.5" />
        <path d="M 1178 584 Q 1168 598 1154 608" fill="none" stroke="#cfa347" stroke-width="2"/>
      </g>

      <!-- ================= LEFT: COUPLE PORTRAITS CARD ================= -->
      <rect x="56" y="68" width="458" height="494" rx="24" fill="#ffffff" fill-opacity="0.88" stroke="#dfb76c" stroke-width="2" filter="url(#cardShadow)" />

      <!-- Header on Couple Card -->
      <text x="285" y="108" text-anchor="middle" font-family="serif" font-size="13" font-weight="700" letter-spacing="3" fill="#8d6f30">
        THE GROOM &amp; THE BRIDE
      </text>

      <!-- Actual Groom Photo -->
      <image href="${groomB64}" x="74" y="132" width="206" height="280" preserveAspectRatio="xMidYMin slice" clip-path="url(#groomClip)" />
      <!-- Groom Gold Frame -->
      <rect x="74" y="132" width="206" height="280" rx="26" fill="none" stroke="url(#goldGrad)" stroke-width="3" filter="url(#goldGlow)" />
      <!-- Groom Label Badge -->
      <g transform="translate(177, 412)">
        <rect x="-48" y="-12" width="96" height="24" rx="12" fill="#4a1525" stroke="#dfb76c" stroke-width="1.5" />
        <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="800" letter-spacing="1.5" fill="#fdf8ec">
          GROOM
        </text>
      </g>

      <!-- Actual Bride Photo -->
      <image href="${brideB64}" x="290" y="132" width="206" height="280" preserveAspectRatio="xMidYMin slice" clip-path="url(#brideClip)" />
      <!-- Bride Gold Frame -->
      <rect x="290" y="132" width="206" height="280" rx="26" fill="none" stroke="url(#goldGrad)" stroke-width="3" filter="url(#goldGlow)" />
      <!-- Bride Label Badge -->
      <g transform="translate(393, 412)">
        <rect x="-48" y="-12" width="96" height="24" rx="12" fill="#4a1525" stroke="#dfb76c" stroke-width="1.5" />
        <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="800" letter-spacing="1.5" fill="#fdf8ec">
          BRIDE
        </text>
      </g>

      <!-- Intertwined Heart / Ampersand Center Medallion -->
      <g transform="translate(285, 272)">
        <circle cx="0" cy="0" r="22" fill="#cfa347" stroke="#ffffff" stroke-width="3" filter="url(#goldGlow)" />
        <text x="0" y="7" text-anchor="middle" font-family="serif" font-size="19" font-weight="bold" fill="#ffffff">
          &amp;
        </text>
      </g>

      <!-- Couple Names below portraits -->
      <text x="285" y="466" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#2d0b16">
        R. Maharaja Pandian &amp; S. Sathiya Priya
      </text>
      <text x="285" y="492" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="600" letter-spacing="1.5" fill="#a6771e">
        DEEE., B.E. (Engineer, JSW Energy) &amp; B.Sc.
      </text>
      <text x="285" y="516" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="500" fill="#6d585f">
        South Theethampatti · Pasuvanthanai
      </text>

      <!-- ================= RIGHT: INVITATION DETAILS ================= -->
      <!-- Top Tag -->
      <g transform="translate(850, 105)">
        <rect x="-160" y="-18" width="320" height="34" rx="17" fill="#4a1525" fill-opacity="0.08" stroke="#cfa347" stroke-width="1.2" />
        <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" letter-spacing="2.5" fill="#8d6f30">
          ✦ WEDDING INVITATION ✦
        </text>
      </g>

      <!-- Host Line -->
      <text x="850" y="152" text-anchor="middle" font-family="serif" font-style="italic" font-size="15" fill="#58142f">
        Together with our families
      </text>
      <text x="850" y="174" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="600" letter-spacing="1" fill="#755a30">
        Mr. A.S. Raja Sekar &amp; Mrs. R. Jeyakodi
      </text>

      <!-- Big Typography Couple Names -->
      <text x="850" y="235" text-anchor="middle" font-family="serif" font-size="44" font-weight="bold" fill="#380e1c">
        Maharaja Pandian
      </text>
      <text x="850" y="272" text-anchor="middle" font-family="serif" font-style="italic" font-size="28" fill="#c59837">
        — &amp; —
      </text>
      <text x="850" y="322" text-anchor="middle" font-family="serif" font-size="44" font-weight="bold" fill="#380e1c">
        Sathiya Priya
      </text>

      <!-- Highlighted Card: Main Function & Reception -->
      <g transform="translate(850, 395)">
        <rect x="-295" y="-45" width="590" height="92" rx="18" fill="url(#pillGrad)" stroke="#cfa347" stroke-width="2" filter="url(#cardShadow)" />

        <g transform="translate(0, -45)">
          <rect x="-120" y="-13" width="240" height="26" rx="13" fill="#4a1525" stroke="#dfb76c" stroke-width="1.5" />
          <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="800" letter-spacing="1.5" fill="#fdf8ec">
            ★ MAIN FUNCTION &amp; RECEPTION ★
          </text>
        </g>

        <text x="0" y="0" text-anchor="middle" font-family="serif" font-size="22" font-weight="bold" fill="#2d0b16">
          Wednesday, 16th September 2026
        </text>
        <text x="0" y="24" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" letter-spacing="0.5" fill="#9e6f1a">
          Evening 6:30 PM to 9:00 PM · Durga Mahal, Pasuvanthanai
        </text>
      </g>

      <!-- Muhurtham Details -->
      <g transform="translate(850, 485)">
        <text x="0" y="0" text-anchor="middle" font-family="serif" font-size="17" font-weight="bold" fill="#4a1525">
          Sacred Muhurtham: Thursday, 17th Sept 2026 · 7:31 AM - 9:00 AM
        </text>
        <text x="0" y="22" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="500" fill="#665248">
          Sri Kailasanathar - Sri Anandavalli Amman Temple, Pasuvanthanai
        </text>
      </g>

      <!-- Bottom Canonical URL Badge -->
      <g transform="translate(850, 548)">
        <rect x="-170" y="-15" width="340" height="28" rx="14" fill="#4a1525" fill-opacity="0.06" stroke="#cfa347" stroke-width="1" />
        <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="600" letter-spacing="1.2" fill="#58142f">
          🌐 pandian-weds-priya.vercel.app
        </text>
      </g>
    </svg>
  `;

  await sharp(Buffer.from(svg)).png({ quality: 95 }).toFile("public/og-image.png");

  console.log("Successfully generated public/og-image.png with embedded couple photos!");
}

generateOgImage().catch((err) => {
  console.error("Error generating OG image:", err);
  process.exit(1);
});
