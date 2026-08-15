# Tech Stack Doc — RV Tours & Travels Website
Locked for this build. Don't relitigate stack choices mid-project — if something needs to change, come back and update this doc first, then the code.

## Core
- **Framework:** Next.js 15, App Router, React 19, TypeScript
- **Rendering:** fully static — no backend, no database, no server-side runtime needed
- **Styling:** Tailwind CSS v4, with the Design Doc's color/type/spacing tokens wired in as theme extensions — no shadcn, no Bootstrap, no component library whose defaults would fight the custom look

## Type & Icons
- **Display:** Fraunces (Google Fonts, variable) — headlines, section titles
- **Data/label:** JetBrains Mono — waypoint tags, coordinates, prices, small-caps eyebrows
- **Body/UI:** Work Sans — paragraphs, nav, buttons
- Loaded via `next/font/google` — self-hosted at build time, zero runtime font requests
- **Icons:** `lucide-react` — thin-line style matches the aesthetic, tree-shakeable

## Motion
- **Motion** (`motion/react`, formerly Framer Motion) — handles the route-line draw-on-load and scroll-triggered waypoint reveals
- Reduced-motion respected via its `useReducedMotion` hook — static fallback, not just disabled animation

## Forms
- **Web3Forms** — free tier currently allows roughly 250 submissions/month, no signup wall to start, single POST endpoint, no backend required. [Medium confidence on the exact number — free-tier limits on services like this shift, re-check at implementation time.] Formspree was the other option but its free tier caps around 50/month, tight for a live business form.
- Regardless of form uptime, `tel:` and `wa.me` links stay visible everywhere as the primary contact path — the form is a backup, not the only way to reach the business.

## Maps
- Plain Google Maps `<iframe>` embed (`maps.google.com/maps?q=...`) centered on Udupi — no API key needed for a basic embed, no billing account required.

## Images
- `next/image` for automatic optimization and lazy-loading
- Placeholder imagery from Unsplash until real fleet/hero photography is supplied — every placeholder flagged in code comments per the PRD's content rules

## Hosting & Ops
- **Deploy:** Vercel free tier
- **Version control:** GitHub, single repo, main branch auto-deploys on push
- **Analytics:** Vercel Analytics — zero-config on Vercel hosting, privacy-friendly, free tier is enough for this traffic volume

## Explicitly not using, and why
- **No CMS** (Sanity, Contentful, etc.) — v1 has no need for non-technical content editing beyond re-running a build; revisit if R Ramesh eventually needs to self-edit content.
- **No database/backend** — nothing in scope needs persistent server-side state.
- **No component library** (shadcn/MUI/etc.) — fighting a library's default look to get the custom Route Line direction costs more than it saves on a project this size.
- **No payment integration** — out of scope per the PRD.

## Directory structure (high level)
```
/app            — pages and layouts (App Router)
/components     — shared UI (header, footer, ticket-button, route-line, etc.)
/public         — logo.png, fleet photos, hero imagery
/lib            — constants (business info, nav links, service copy)
```

## Notes for later
Once you've got Antigravity generating from this and the two companion docs, ping me — I'll walk you through running it locally, checking it on your phone, and deploying to Vercel, step by step.
