# Design Doc — RV Tours & Travels Website

## 1. The brief, grounded
Subject: a small-fleet chauffeur/tour operator running fixed routes and custom trips out of coastal Karnataka. Audience decides in a few scrolls, on a phone. The page's one job: make an unknown local operator feel like a known one, and get a WhatsApp message sent.

**Inherited, non-negotiable brand:** the gold serif "RV" monogram, "RV TOURS & TRAVELS" wordmark, tagline "Journeys Redefined," black/gold/cream palette — all pulled from the real business card and receipt stationery already in use. This isn't a from-scratch identity project. The job is to build a page that *earns* that identity through structure, not one that pastes it onto a generic template.

## 2. What I'm deliberately rejecting
- Centered hero + soft gradient blob + three icon cards + testimonial carousel — the default shape almost every AI-generated business site lands on.
- Cream background + high-contrast serif + a single decorative accent color, used as color alone with no structural logic. This palette sits close to that default, so the accent and structure have to be doing real work, not just repeating a formula.
- Numbered "01 / 02 / 03" section markers used purely as decoration. They only earn a place here because the site's actual structure mirrors a journey — see below.

## 3. Signature concept: The Route Line
The page is structured like a printed travel itinerary — part road map, part boarding pass, part ledger. A thin hand-drawn-style route line runs down the page (left margin on desktop, center on mobile), connecting each section like waypoints on a road. Each section is a numbered waypoint — justified here because the sections genuinely *are* the sequence of a customer's journey through the business: arrive → see what we offer → see the fleet → know who's driving → get in touch.

Supporting motifs pulled from the same real-world vocabulary:
- CTA buttons styled as ticket stubs — rectangular, thin dashed perforation line, small circular cutout at one edge.
- Hero's right-hand info panel styled like a departure board: short monospace facts (coverage area, fleet types, base) instead of a generic subheading paragraph.
- Footer styled like the stub of a boarding pass — perforated top edge, contact info laid out like ticket fields (ROUTE / CONTACT / OPERATOR).

This is the one place the design takes a real risk. Everything else stays quiet and disciplined around it.

## 4. Design tokens

**Color**
| Token | Hex | Use |
|---|---|---|
| `paper` | `#F6F3EC` | dominant background, content pages |
| `ink` | `#14120F` | header, footer, body text, primary surfaces |
| `brass` | `#B08D3F` | CTAs, route line, dividers, icons — accent only, never a fill |
| `route` | `#1F4C4C` | secondary accent, used only for the route-line markers and map elements (deep coastal teal — grounds the palette in the Western Ghats/Arabian Sea setting instead of adding an arbitrary third color) |

Gold/brass text only ever sits on `ink`, never on `paper` — keeps contrast honest instead of decorative.

**Type — three roles, each doing a distinct job**
| Role | Face | Used for |
|---|---|---|
| Display | Fraunces (variable) | Headlines, section titles — set large, restrained weight range, occasional italic for emphasis |
| Data / label | JetBrains Mono | Waypoint tags, coordinates, prices, small-caps eyebrows — anything that reads like a manifest or ticket field |
| Body | Work Sans | Paragraph copy, navigation, buttons |

Rejected Playfair Display + Inter — it's become the default "premium AI site" pairing and would undercut the point of this whole exercise.

**Layout**
- Asymmetric grid, not uniform 3-column cards. Services/Fleet sections use one larger featured tile plus smaller supporting tiles, like a spread in a travel booklet rather than an evenly-spaced feature grid.
- Generous vertical rhythm between sections, broken by the route line and a thin brass hairline rather than plain whitespace.

**Motion**
- On load: the route line draws itself once, top to bottom (SVG stroke animation) — one orchestrated moment, not scattered effects.
- On scroll: each waypoint marker settles into place as its section enters view; content fades and rises slightly with it.
- Hover: ticket-stub buttons get a subtle lift/rotate, not a generic scale-up.
- All motion respects `prefers-reduced-motion` — static fallback shows everything in place, no missing content.

## 5. Section-by-section

**Header** — sticky, transparent over the hero, solid `ink` on scroll. Logo left, three nav links max, WhatsApp button right, always visible.

**Hero** — asymmetric: large italic Fraunces headline + tagline on the left ~60%, a small monospace "departure board" panel on the right (coverage area, fleet types, base location). Primary CTA is a ticket-stub button to WhatsApp. No stock-photo hero with a gradient overlay and centered text — the road-line motif starts here.

**Services** — waypoint 02. Four services as an asymmetric tile set, brass icons, one sentence each. No generic rounded-shadow card grid.

**Fleet** — waypoint 03. Vehicle categories as ticket-style cards. Clearly marked placeholder photography until real fleet images are supplied.

**About** — waypoint 04. Short, factual section on R Ramesh and the business. No invented history or numbers.

**Contact** — waypoint 05, and the final stop on the route line. Click-to-call, WhatsApp, email, embedded map, and a form styled as the final ticket stub in the sequence.

**Footer** — boarding-pass stub styling: perforated top edge, contact fields laid out like ticket data, copyright line in monospace.

## 6. Accessibility and quality floor
- Responsive down to 360px.
- Visible keyboard focus ring on every interactive element (brass outline on `ink` backgrounds).
- Alt text on every image, including placeholders (describe what the real photo will eventually show).
- Color contrast checked against WCAG AA for every text/background pairing above, not just the obvious ones.

## 7. Honest implementation note
This is more ambitious than a stock template, on purpose — that's what actually avoids the "looks like every AI site" outcome you asked for. Expect a few rounds of iteration in Antigravity to get the route-line SVG animation and ticket-stub perforation details looking right; they're the kind of custom touches that rarely land perfectly on the first generation. Budget for that instead of expecting one-shot perfection. [Medium confidence this direction executes cleanly first try — treat the first Antigravity output as a draft to refine, not a final.]
