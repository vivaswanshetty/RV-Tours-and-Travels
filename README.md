# 🚕 RV Tours & Travels — "Journeys Redefined"

> **Premium chauffeur-driven taxi, outstation travels, airport transfers, and tour operator website based in Udupi, Karnataka.**  
> Built with Next.js 16 (App Router + Turbopack), React 19, TypeScript, and Tailwind CSS.

---

## 🌟 Overview

**RV Tours & Travels** is a boutique transportation and tour service operated directly by proprietor **R Ramesh** from Udupi, Karnataka. This web platform delivers a tactile, vintage-railway/aviation aesthetic ("Vintage Boarding Pass & Departure Manifest") blended with modern macOS liquid glass ergonomics and verified, transparent operator credentials.

---

## 📸 Key Features & Architecture

### 🧭 1. Tactile Editorial & Waypoint Experience
- **macOS Liquid Glass Capsule Navbar**: Floating glassmorphic header with specular highlights, AAA high-contrast typography, and responsive scaling.
- **Vintage Departure Board Hero**: Real-time live status indicators with analog split-flap typography and route waypoint badges.
- **Ticket-Stub Action Buttons**: Authentic boarding pass CTAs featuring dashed perforation lines, cutout notches, and subtle vertical hover lifts.

### 🚗 2. Real Fleet Showcase
- **Comfort Sedan Class**: Toyota Etios / Maruti Suzuki Dzire (1–4 Pax) for smooth city, airport, and local commutes.
- **Premium SUV / MUV Class**: Toyota Innova Crysta / Ertiga (6–7 Pax) for family pilgrimage tours and highway journeys.
- **Executive Group Travel**: 12 / 17 / 20-Seater Force Tempo Traveller for extended family and corporate excursions.

### ⚡ 3. Direct Operator Dispatch & Booking Engine
- **Direct WhatsApp Integration**: Official WhatsApp branding with pre-filled trip manifests and instant quote deep links.
- **Live Booking API Route (`/api/contact`)**: Server-side validation, unique manifest reference generation (`RV-YYYYMMDD-XXXX`), and direct dispatch to proprietor inbox.
- **Built-in Compliance & Transparency**: Full terms & conditions, cancellation policy, and privacy policy with zero unverified claims.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS |
| **Icons** | [Lucide React](https://lucide.dev/) & Custom SVG Graphics |
| **Fonts** | Google Fonts (`Fraunces`, `JetBrains Mono`, `Work Sans`) |
| **Optimization** | Next.js Image Optimization with WebP/AVIF formats |

---

## 📂 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts             # Server-side booking enquiry handler
│   ├── cancellation-policy/
│   │   └── page.tsx                 # Cancellation & refund policy page
│   ├── privacy-policy/
│   │   └── page.tsx                 # Privacy policy page
│   ├── terms-and-conditions/
│   │   └── page.tsx                 # Terms of service page
│   ├── globals.css                  # Design system tokens & liquid glass styles
│   ├── layout.tsx                   # Root layout, metadata & font definitions
│   ├── page.tsx                     # Landing page with all 5 waypoints
│   ├── robots.ts                    # Dynamic robots.txt configuration
│   └── sitemap.ts                   # Dynamic SEO XML sitemap generator
├── components/
│   ├── AboutSection.tsx             # Waypoint 04: Proprietor & base station
│   ├── ContactSection.tsx           # Waypoint 05: Direct dispatch form & maps
│   ├── CtaBanner.tsx                # Mid-page ticket stub conversion banner
│   ├── FleetSection.tsx             # Waypoint 03: Fleet specifications & photos
│   ├── FloatingWhatsApp.tsx         # Floating drawer with instant WhatsApp link
│   ├── Footer.tsx                   # Site footer with direct lines & legal links
│   ├── Header.tsx                   # macOS liquid glass floating capsule navbar
│   ├── Hero.tsx                     # Departure board hero with live indicator
│   ├── OverviewSection.tsx          # Waypoint 01: Core trust pillars
│   ├── ServicesSection.tsx          # Waypoint 02: Regional service circuits
│   ├── TicketButton.tsx             # Boarding pass button component with notches
│   └── WhatsAppIcon.tsx             # Official WhatsApp brand SVG icon
├── lib/
│   └── constants.ts                 # Business credentials, routes, fleet specs
├── public/                          # Optimized fleet photos, logos, and assets
└── scripts/                         # Image processing and build automation tools
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18.0 or higher
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vivaswanshetty/RV-Tours-and-Travels.git
   cd RV-Tours-and-Travels
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To verify and produce an optimized production bundle:
```bash
npm run build
npm run start
```

---

## 📞 Business Information & Dispatch

- **Business Name**: RV Tours & Travels
- **Tagline**: *"Journeys Redefined"*
- **Proprietor**: R Ramesh
- **Base Station**: Udupi, Karnataka (13.3409° N, 74.7421° E)
- **Direct Line / WhatsApp**: `+91 98455 11169`
- **Email**: `rameshshetty0013@gmail.com`

---

## 📄 License

Proprietary © 2026 RV Tours & Travels. All rights reserved.
