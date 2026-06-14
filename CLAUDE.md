# Paradosxia Cars — Project Guide (for Claude Code)

Premium dark/gold landing page for a hypercar media brand. Built on the
`3d-scroll-website` skill, with one deliberate change: the hero is a **live
Spline scene** (real-time WebGL, drag-to-orbit), not the skill's pre-rendered
frame-sequence canvas. Use the skill's design system, smooth-scroll, and
Framer Motion patterns everywhere else.

## Stack (pinned — do not bump without reason)
- next 16.2.2 · react 19.2.4 · tailwindcss v4 (`@import "tailwindcss"` + `@theme inline`)
- framer-motion 12.38.0 · lenis 1.3.21 (`lenis/react`) · @phosphor-icons/react 2.1.10 · geist 1.7.0
- @splinetool/react-spline 4.1.0 · @splinetool/runtime 1.12.97

> Next.js 16 has breaking changes vs 13/14. If unsure about a route/metadata/image
> API, read `node_modules/next/dist/docs/` before writing — don't trust older memory.

## Design language (dark/gold neumorphic)
- Tokens live in `src/app/globals.css`. Pull from CSS vars, never hardcode:
  `--background #0a0a0b`, `--surface #131316`, `--foreground #f4f3f0`,
  `--muted`, `--gold #c9a24b` (+ `--gold-light`, `--gold-deep`), `--card-shadow`.
- Surfaces use `.card-surface`. Section labels use `<EyebrowBadge>`.
- Headings: `tracking-tighter leading-[1.05]`, max-width 18–22ch. Body: 48–55ch.
- Sections: `px-6 py-24 md:px-8 md:py-32`, container `max-w-[1400px]`, cards `p-7 rounded-[20px]`.
- Accent gradient: `from-[var(--gold-light)] to-[var(--gold)]`. No colors outside the zinc/gold range.

## Animation vocabulary
- Reveals: wrap groups in `<AnimatedSection>` + `<AnimatedItem>` (spring `stiffness:100, damping:20`, `whileInView`, `viewport={{ once:true, margin:"-100px" }}`, 0.1s stagger).
- `AnimatePresence` for FAQ/accordions/modals.
- Smooth scroll is global via `SmoothScrollProvider` (Lenis) in the layout — new sections inherit it.

## Spline hero rules (`src/components/sections/Hero.tsx`)
- Scene URL is in `src/lib/site.ts`. Component is `"use client"`.
- Keep the scene interactive: overlay text uses `pointer-events-none`; only the CTA row re-enables pointer events.
- Show the gold loading overlay until Spline's `onLoad` fires, then fade it out.
- If the scene feels heavy on mobile, gate it behind a poster image / reduced-motion check rather than removing interactivity outright.

## Non-negotiables
1. Any component using hooks or Framer Motion needs `"use client"`.
2. Phosphor icons: `@phosphor-icons/react/dist/ssr` in server components (e.g. Footer), plain path in client components.
3. Don't use React state for high-frequency values; refs + direct DOM for hot paths.
4. Test the production build (`npm run build && npm start`) — some issues only appear after build.

## Build order if extending
Hero → BrandConcept → FeaturedCars → Articles → ShortVideo → Contact → Footer.
Check each in a real browser before moving on. The Ferrari lineage content from
earlier drafts can be reintroduced as an optional section if desired.

## Brand facts (keep accurate)
- Marques: Bugatti, Pagani, Koenigsegg, Ferrari, Rolls-Royce, Lamborghini.
- Ferrari flagship lineage, in order: **288 GTO → F40 → F50 → Enzo → LaFerrari → F80**. Never reorder.
- Blog: https://renchicun4.com (Japanese long-form). TikTok = short hooks; blog = deep dives.
- Tone: ultra-exclusive but accessible. Dark, premium, restrained. Value over monetization.
