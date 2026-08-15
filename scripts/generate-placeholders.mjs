import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Logo SVG / PNG
const logoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150" width="600" height="150">
  <rect width="600" height="150" fill="transparent"/>
  <!-- Badge -->
  <rect x="20" y="20" width="110" height="110" rx="6" fill="#14120F" stroke="#B08D3F" stroke-width="2.5"/>
  <rect x="27" y="27" width="96" height="96" rx="3" fill="none" stroke="#B08D3F" stroke-width="0.8" stroke-dasharray="4,2"/>
  
  <!-- RV Monogram in Gold Serif -->
  <text x="75" y="93" font-family="Georgia, serif" font-size="58" font-weight="bold" fill="#C9A227" text-anchor="middle" letter-spacing="1">RV</text>
  
  <!-- Brand Text -->
  <text x="150" y="70" font-family="Georgia, serif" font-size="32" font-weight="bold" fill="#14120F" letter-spacing="2">RV TOURS &amp; TRAVELS</text>
  <text x="152" y="102" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="600" fill="#B08D3F" letter-spacing="4">JOURNEYS REDEFINED</text>
  
  <!-- Waypoint Line -->
  <line x1="152" y1="114" x2="480" y2="114" stroke="#B08D3F" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="486" cy="114" r="3" fill="#1F4C4C"/>
</svg>
`;

const logoDarkSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150" width="600" height="150">
  <rect width="600" height="150" fill="transparent"/>
  <!-- Badge -->
  <rect x="20" y="20" width="110" height="110" rx="6" fill="#1C1914" stroke="#B08D3F" stroke-width="2.5"/>
  <rect x="27" y="27" width="96" height="96" rx="3" fill="none" stroke="#B08D3F" stroke-width="0.8" stroke-dasharray="4,2"/>
  
  <!-- RV Monogram in Gold Serif -->
  <text x="75" y="93" font-family="Georgia, serif" font-size="58" font-weight="bold" fill="#C9A227" text-anchor="middle" letter-spacing="1">RV</text>
  
  <!-- Brand Text Light -->
  <text x="150" y="70" font-family="Georgia, serif" font-size="32" font-weight="bold" fill="#F6F3EC" letter-spacing="2">RV TOURS &amp; TRAVELS</text>
  <text x="152" y="102" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="600" fill="#C9A227" letter-spacing="4">JOURNEYS REDEFINED</text>
  
  <!-- Waypoint Line -->
  <line x1="152" y1="114" x2="480" y2="114" stroke="#B08D3F" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="486" cy="114" r="3" fill="#2E6B6B"/>
</svg>
`;

// 2. Hero Background Scenic Road Graphic
const heroSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0E1214"/>
      <stop offset="50%" stop-color="#141C1E"/>
      <stop offset="100%" stop-color="#1F2826"/>
    </linearGradient>
    <linearGradient id="hillGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1B3332"/>
      <stop offset="100%" stop-color="#121D1D"/>
    </linearGradient>
    <linearGradient id="hillGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#244543"/>
      <stop offset="100%" stop-color="#152625"/>
    </linearGradient>
    <linearGradient id="roadGrad" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#1A1815"/>
      <stop offset="100%" stop-color="#0F0D0B"/>
    </linearGradient>
    <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B08D3F" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#E0C068" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#8A6D2A" stop-opacity="0.8"/>
    </linearGradient>
    <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#B08D3F" stroke-width="0.3" stroke-opacity="0.15"/>
    </pattern>
  </defs>

  <!-- Sky / Atmospheric Background -->
  <rect width="1920" height="1080" fill="url(#skyGrad)"/>
  <rect width="1920" height="1080" fill="url(#gridPattern)"/>

  <!-- Western Ghats Hill Silhouettes -->
  <path d="M 0 580 Q 380 440 760 520 T 1520 480 T 1920 540 L 1920 1080 L 0 1080 Z" fill="url(#hillGrad1)" opacity="0.75"/>
  <path d="M 0 660 Q 420 560 920 630 T 1680 590 T 1920 670 L 1920 1080 L 0 1080 Z" fill="url(#hillGrad2)" opacity="0.85"/>

  <!-- Forest Tree Silhouettes on ridgeline -->
  <path d="M 0 720 Q 300 680 600 710 T 1200 690 T 1920 730 L 1920 1080 L 0 1080 Z" fill="#121817"/>

  <!-- Winding Coastal / Ghats Highway Perspective -->
  <polygon points="960,700 975,700 1380,1080 540,1080" fill="url(#roadGrad)"/>
  
  <!-- Highway Center Route Perforations in Brass Gold -->
  <path d="M 967 700 Q 970 820 960 1080" stroke="#B08D3F" stroke-width="5" stroke-dasharray="24,18" fill="none"/>
  
  <!-- Subtle Route Waypoint Nodes -->
  <circle cx="967" cy="700" r="6" fill="#B08D3F"/>
  <circle cx="967" cy="700" r="16" fill="none" stroke="#B08D3F" stroke-width="1.5" opacity="0.5"/>
  
  <circle cx="964" cy="880" r="8" fill="#1F4C4C" stroke="#B08D3F" stroke-width="2"/>
  <circle cx="960" cy="1040" r="12" fill="#14120F" stroke="#C9A227" stroke-width="3"/>

  <!-- Top Vignette & Corner Manifest Accents -->
  <rect x="30" y="30" width="1860" height="1020" fill="none" stroke="#B08D3F" stroke-width="1" stroke-opacity="0.3"/>
  
  <text x="60" y="80" font-family="'JetBrains Mono', monospace" font-size="14" fill="#B08D3F" letter-spacing="3" opacity="0.7">WAYPOINT 01 // UDUPI · COASTAL KARNATAKA · 13.3409° N, 74.7421° E</text>
  <text x="1860" y="80" font-family="'JetBrains Mono', monospace" font-size="14" fill="#B08D3F" letter-spacing="3" text-anchor="end" opacity="0.7">RV TOURS &amp; TRAVELS</text>
</svg>
`;

// 3. Fleet Placeholder Cards
function createFleetPlaceholderSvg(category, modelText, seats, luggage, iconType) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1815"/>
      <stop offset="100%" stop-color="#12100E"/>
    </linearGradient>
    <pattern id="cardPattern" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#B08D3F" stroke-width="0.4" stroke-opacity="0.12"/>
    </pattern>
  </defs>

  <rect width="800" height="500" rx="8" fill="url(#cardBg)" stroke="#B08D3F" stroke-width="1.5"/>
  <rect width="800" height="500" fill="url(#cardPattern)"/>
  
  <!-- Perforated Inner Ticket Border -->
  <rect x="18" y="18" width="764" height="464" rx="4" fill="none" stroke="#B08D3F" stroke-width="0.8" stroke-dasharray="6,4" opacity="0.5"/>

  <!-- Top Category Tag -->
  <rect x="35" y="35" width="220" height="32" rx="4" fill="#1F4C4C" stroke="#B08D3F" stroke-width="1"/>
  <text x="145" y="56" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="bold" fill="#F6F3EC" text-anchor="middle" letter-spacing="2">${category.toUpperCase()}</text>

  <!-- Notice Tag -->
  <rect x="420" y="35" width="345" height="32" rx="4" fill="#24201A" stroke="#B08D3F" stroke-width="0.8"/>
  <text x="592" y="56" font-family="'JetBrains Mono', monospace" font-size="10" fill="#E0C068" text-anchor="middle" letter-spacing="1">[PLACEHOLDER — Replace with fleet photo]</text>

  <!-- Vehicle Silhouette Outline Graphic -->
  <g transform="translate(160, 110)">
    <!-- Chassis / Car body outline -->
    <path d="M 40 170 C 60 170 80 160 110 140 L 170 85 C 200 60 250 50 320 50 L 370 50 C 400 50 430 75 450 110 L 465 140 C 475 160 480 170 480 170 L 40 170 Z" fill="#24201A" stroke="#B08D3F" stroke-width="2.5"/>
    <!-- Windows -->
    <path d="M 180 85 L 240 60 L 320 60 L 320 110 L 170 110 Z" fill="#14120F" stroke="#B08D3F" stroke-width="1.5"/>
    <path d="M 330 60 L 365 60 C 385 60 405 75 418 100 L 425 110 L 330 110 Z" fill="#14120F" stroke="#B08D3F" stroke-width="1.5"/>
    <!-- Wheels -->
    <circle cx="130" cy="175" r="38" fill="#14120F" stroke="#B08D3F" stroke-width="3"/>
    <circle cx="130" cy="175" r="18" fill="#24201A" stroke="#B08D3F" stroke-width="1.5"/>
    <circle cx="390" cy="175" r="38" fill="#14120F" stroke="#B08D3F" stroke-width="3"/>
    <circle cx="390" cy="175" r="18" fill="#24201A" stroke="#B08D3F" stroke-width="1.5"/>
  </g>

  <!-- Title & Specs Bar -->
  <text x="400" y="370" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#F6F3EC" text-anchor="middle">${modelText}</text>
  
  <!-- Specs Pills -->
  <g transform="translate(150, 400)">
    <rect x="0" y="0" width="150" height="36" rx="4" fill="#1C1914" stroke="#B08D3F" stroke-width="1"/>
    <text x="75" y="23" font-family="'JetBrains Mono', monospace" font-size="12" fill="#E0C068" text-anchor="middle">👤 ${seats}</text>

    <rect x="170" y="0" width="160" height="36" rx="4" fill="#1C1914" stroke="#B08D3F" stroke-width="1"/>
    <text x="250" y="23" font-family="'JetBrains Mono', monospace" font-size="12" fill="#E0C068" text-anchor="middle">🧳 ${luggage}</text>

    <rect x="350" y="0" width="150" height="36" rx="4" fill="#1F4C4C" stroke="#B08D3F" stroke-width="1"/>
    <text x="425" y="23" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F6F3EC" text-anchor="middle">❄️ Full AC Climate</text>
  </g>
</svg>
`;
}

// 4. OpenGraph Image
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14120F"/>
      <stop offset="60%" stop-color="#1B1712"/>
      <stop offset="100%" stop-color="#1A2826"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#ogBg)"/>
  
  <!-- Perforated outer border -->
  <rect x="30" y="30" width="1140" height="570" rx="8" fill="none" stroke="#B08D3F" stroke-width="1.5" stroke-dasharray="10,6" opacity="0.6"/>

  <!-- Monogram Badge -->
  <rect x="80" y="80" width="120" height="120" rx="8" fill="#1C1914" stroke="#B08D3F" stroke-width="2.5"/>
  <rect x="88" y="88" width="104" height="104" rx="4" fill="none" stroke="#B08D3F" stroke-width="0.8" stroke-dasharray="4,3"/>
  <text x="140" y="162" font-family="Georgia, serif" font-size="64" font-weight="bold" fill="#C9A227" text-anchor="middle">RV</text>

  <!-- Business Title -->
  <text x="230" y="135" font-family="Georgia, serif" font-size="44" font-weight="bold" fill="#F6F3EC" letter-spacing="2">RV TOURS &amp; TRAVELS</text>
  <text x="235" y="175" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="600" fill="#C9A227" letter-spacing="5">JOURNEYS REDEFINED</text>

  <!-- Route Line Divider -->
  <line x1="80" y1="240" x2="1120" y2="240" stroke="#B08D3F" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Key Services Badges -->
  <text x="80" y="300" font-family="Georgia, serif" font-size="32" fill="#F6F3EC" font-weight="bold">Premium Chauffeur &amp; Taxi Service · Udupi, Karnataka</text>
  <text x="80" y="345" font-family="'Helvetica Neue', Arial, sans-serif" font-size="20" fill="#E0C068">Airport Drops &amp; Pickups · All Karnataka Destinations · Custom Pilgrimage &amp; Tour Packages</text>

  <!-- Ticket Manifest Grid -->
  <rect x="80" y="400" width="1040" height="140" rx="6" fill="#24201A" stroke="#B08D3F" stroke-width="1"/>
  
  <text x="120" y="445" font-family="'JetBrains Mono', monospace" font-size="13" fill="#B08D3F">PROPRIETOR</text>
  <text x="120" y="480" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#F6F3EC">R Ramesh</text>
  <text x="120" y="510" font-family="'JetBrains Mono', monospace" font-size="14" fill="#E0C068">Udupi Base</text>

  <line x1="380" y1="420" x2="380" y2="520" stroke="#B08D3F" stroke-width="1" stroke-opacity="0.3"/>

  <text x="420" y="445" font-family="'JetBrains Mono', monospace" font-size="13" fill="#B08D3F">DIRECT CONTACT / WHATSAPP</text>
  <text x="420" y="480" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="bold" fill="#F6F3EC">+91 98455 11169</text>
  <text x="420" y="510" font-family="'JetBrains Mono', monospace" font-size="14" fill="#E0C068">rameshshetty0013@gmail.com</text>

  <line x1="800" y1="420" x2="800" y2="520" stroke="#B08D3F" stroke-width="1" stroke-opacity="0.3"/>

  <text x="840" y="445" font-family="'JetBrains Mono', monospace" font-size="13" fill="#B08D3F">FLEET SECTORS</text>
  <text x="840" y="480" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="bold" fill="#F6F3EC">Sedans · SUVs · Tempo</text>
  <text x="840" y="510" font-family="'JetBrains Mono', monospace" font-size="14" fill="#E0C068">24/7 Karnataka Service</text>
</svg>
`;

async function generateAssets() {
  console.log('Generating image assets...');

  // Logo PNG & SVG
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), logoSvg.trim());
  fs.writeFileSync(path.join(publicDir, 'logo-dark.svg'), logoDarkSvg.trim());
  await sharp(Buffer.from(logoSvg)).png().toFile(path.join(publicDir, 'logo.png'));
  await sharp(Buffer.from(logoDarkSvg)).png().toFile(path.join(publicDir, 'logo-white.png'));
  console.log('✓ Logo assets generated');

  // Hero Image
  await sharp(Buffer.from(heroSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'hero-road.jpg'));
  console.log('✓ Hero image generated');

  // Fleet Images
  const sedanSvg = createFleetPlaceholderSvg('Sedan Segment', 'Maruti Dzire / Toyota Etios Class', '1 - 4 Passengers', '2 Large + 2 Small Bags', 'sedan');
  await sharp(Buffer.from(sedanSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'fleet-sedan.jpg'));

  const suvSvg = createFleetPlaceholderSvg('SUV / MUV Segment', 'Toyota Innova Crysta / Ertiga Class', '6 - 7 Passengers', '4 Large + 3 Small Bags', 'suv');
  await sharp(Buffer.from(suvSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'fleet-suv.jpg'));

  const tempoSvg = createFleetPlaceholderSvg('Group Travel Segment', '12 / 17 / 20 Seater Force Executive', '12 - 20 Passengers', '10+ Large Bags', 'tempo');
  await sharp(Buffer.from(tempoSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'fleet-tempo.jpg'));
  console.log('✓ Fleet placeholder images generated');

  // OpenGraph Image
  await sharp(Buffer.from(ogSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'og-image.jpg'));
  console.log('✓ OpenGraph image generated');

  console.log('All static assets created successfully in /public!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
