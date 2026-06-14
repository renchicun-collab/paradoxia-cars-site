# Paradosxia Cars — Premium Spline Landing Page

Dark/gold, scroll-animated landing page for the Paradosxia hypercar brand.
Live Spline 3D hero + the `3d-scroll-website` skill's design system.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Production check:

```bash
npm run build && npm start
```

## Your Spline scene

The scene URL lives in `src/lib/site.ts` and is wired into
`src/components/sections/Hero.tsx`:

```
https://prod.spline.design/OlkR9onG89bHQrUa/scene.splinecode
```

Swap that one constant to point at a different Spline export.

## Structure

```
src/
├── app/            layout.tsx · page.tsx · globals.css (design tokens)
├── components/
│   ├── sections/   Hero (Spline) · BrandConcept · FeaturedCars · Articles · ShortVideo · Contact · Footer
│   ├── ui/         AnimatedSection · Button · EyebrowBadge · Navbar
│   └── providers/  SmoothScrollProvider (Lenis)
└── lib/            site.ts
```

See `CLAUDE.md` for the full design system, animation vocabulary, and Spline
hero rules — point Claude Code at it when you extend the site.
