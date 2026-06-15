"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

const pillars = [
  {
    k: "Rarity",
    t: "Single-digit machines",
    d: "We follow the cars built in ones and fives — the ones almost no one will ever see in person.",
  },
  {
    k: "Story",
    t: "The world behind them",
    d: "Engineering, ownership, obsession. The narratives that make these objects matter.",
  },
  {
    k: "Access",
    t: "Exclusive, not closed",
    d: "We open the doors to this world without dimming what makes it extraordinary.",
  },
];

export default function BrandConcept() {
  return (
    <section id="concept" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <AnimatedItem>
              <EyebrowBadge>The Concept</EyebrowBadge>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-tighter md:text-5xl">
                A quiet study of the loudest machines on earth.
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Paradosxia exists for the people who notice the details — the
                coachbuilt panel, the production number, the story no spec sheet
                tells. We bring the world of the hypercar into focus with the
                restraint it deserves.
              </p>
            </AnimatedItem>
          </div>

          <div className="flex flex-col gap-4">
            {pillars.map((p) => (
              <AnimatedItem key={p.k}>
                <div className="card-surface flex items-start gap-5 p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--gold)]">
                    {p.k}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold tracking-tight">
                      {p.t}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                      {p.d}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
