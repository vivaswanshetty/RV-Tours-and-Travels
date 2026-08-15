# Product Requirements Document — RV Tours & Travels Website

## 1. Overview
A marketing/informational website for RV Tours & Travels, a family-run tour and taxi service based in Udupi, Karnataka. The site's job is to make a phone-and-WhatsApp-run local business look established online, and to convert visitors into a WhatsApp message or call as fast as possible.

## 2. Background
The business currently runs entirely through phone and word of mouth — no web presence. Physical stationery (receipts, trip sheets) and a business card already establish the visual identity (RV monogram, "Journeys Redefined" tagline, black/gold/cream palette). This project extends that identity to the web; it does not invent a new one.

## 3. Goals & Success Criteria
- **G1:** A visitor understands what RV Tours & Travels offers within 5 seconds of landing.
- **G2:** The primary conversion action (WhatsApp enquiry or call) is reachable within one screen, on every page.
- **G3:** The site loads fast and displays correctly on a mid-range Android phone on 4G — the majority of expected traffic.
- **G4:** The site is positioned to rank for local search terms over time ("Udupi taxi," "Udupi tour packages," "airport drop Udupi") via basic on-page SEO.
- **G5:** The site doesn't read as a templated AI output — see the companion Design Doc for how this is enforced structurally, not just stylistically.

**Non-goals for v1:** online payment, live booking/calendar, admin panel, multi-language, blog.

## 4. Target Users
| Persona | Need | Context |
|---|---|---|
| Local resident | Airport drop/pickup | Price- and reliability-conscious, mobile, wants one-tap contact |
| Visitor / tourist | Car + driver for day trip or multi-day tour | Wants to see coverage area and vehicle options before contacting |
| Repeat / referral customer | Look up number or WhatsApp link | Already knows the business, just needs the contact fast |

## 5. Scope

**In scope (v1):** see Functional Requirements below.

**Out of scope (v1), tracked for later:**
- Online payments / deposits
- Live vehicle availability or calendar-based booking
- Admin-editable CMS
- Kannada-language version
- Blog / SEO content hub

## 6. Functional Requirements
| ID | Requirement |
|---|---|
| FR-1 | Home page: hero, services overview strip, trust/why-us section, CTA banner |
| FR-2 | Services section listing the 4 confirmed services with description each |
| FR-3 | Fleet section: vehicle categories (photos pending — placeholder, clearly marked) |
| FR-4 | About section: proprietor and business context |
| FR-5 | Contact section: click-to-call, WhatsApp deep link, email, embedded map, contact form |
| FR-6 | Persistent header: logo, nav, WhatsApp button — present on every page |
| FR-7 | Floating WhatsApp chat bubble — present on every page |
| FR-8 | Footer: nav, contact info, copyright — present on every page |

## 7. Non-Functional Requirements
- **Performance:** Lighthouse mobile score 90+ on Performance and Accessibility; target LCP under 2.5s on 4G.
- **Responsive:** correct at 360px, 768px, 1024px, 1440px widths minimum.
- **Accessibility:** WCAG AA contrast, visible keyboard focus states, alt text on every image, respects `prefers-reduced-motion`.
- **SEO:** unique title and meta description per page, Open Graph tags, semantic heading order, `sitemap.xml`.
- **Browser support:** last 2 versions of Chrome, Safari, Edge, Samsung Internet.

## 8. Content Requirements & Constraints
- Business info (name, tagline, contact, services) used exactly as supplied — nothing invented.
- **No** fabricated testimonials, review scores, "years of experience" claims, customer counts, or accreditation/registration badges. The business is not currently GST-registered or Dept. of Tourism recognized — the site must not imply otherwise.
- Any placeholder content (fleet photos, package pricing, testimonials) is clearly marked in code comments and listed in the delivered README as content still needed.

## 9. Assumptions & Dependencies
- Static site, no backend or database.
- Logo file supplied separately, dropped into `/public`.
- Fleet photos and exact package pricing not yet available — placeholders used until supplied.
- Hosting on Vercel free tier.

## 10. Open Questions / Risks
- Real pricing/packages not yet defined — Services/Fleet will need a content pass once available.
- Fleet photos pending — using stock placeholders in the meantime.
- Not currently GST- or Tourism-Dept.-registered — revisit if that changes, since it would unlock a legitimate trust badge worth adding.

## 11. Future Roadmap (v2+)
- Simple enquiry tracking (spreadsheet or lightweight CRM).
- Package pages with real pricing.
- Google Business Profile integration + reviews widget, once real reviews exist.
- Kannada-language toggle.
- Light SEO content (coastal Karnataka route guides, itineraries).
