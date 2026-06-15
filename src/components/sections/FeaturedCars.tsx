"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

const cars = [
  {
    marque: "Bugatti",
    model: "La Voiture Noire",
    note: "One built. A reported €11M. The most expensive new car ever sold.",
    spec: "1,479 hp · W16",
  },
  {
    marque: "Pagani",
    model: "Huayra Codalunga",
    note: "Five examples. A long-tail tribute hand-shaped in Modena.",
    spec: "840 hp · V12",
  },
  {
    marque: "Koenigsegg",
    model: "Jesko Absolut",
    note: "Engineered for a theoretical top speed beyond 500 km/h.",
    spec: "1,600 hp · V8",
  },
  {
    marque: "Rolls-Royce",
    model: "Boat Tail",
    note: "Three commissions. Coachbuilt. Price never officially confirmed.",
    spec: "Bespoke · V12",
  },
];

export default function FeaturedCars() {
  return (
    <section id="hypercars" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 max-w-[44ch]">
          <AnimatedItem>
            <EyebrowBadge>Featured Hypercars</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="mt-5 text-3xl font-semibold tracking-tighter md:text-5xl">
              Machines measured in single digits.
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Not the fastest list, not the loudest. The rarest — cars whose
              production runs you can count on one hand.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((c) => (
            <AnimatedItem key={c.model}>
              <article className="card-surface group h-full p-7 transition-transform duration-500 hover:-translate-y-1">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                  {c.marque}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {c.model}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {c.note}
                </p>
                <div className="gold-rule my-5 opacity-60" />
                <p className="font-mono text-xs text-[var(--muted)]">{c.spec}</p>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
