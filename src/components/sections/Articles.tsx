"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";
import { SITE } from "@/lib/site";

const posts = [
  {
    kicker: "Pilgrimage",
    title: "The holy site where Bugatti, Pagani and Koenigsegg meet",
    read: "8 min",
  },
  {
    kicker: "Ownership",
    title: "What it actually takes to be allocated a hypercar",
    read: "6 min",
  },
  {
    kicker: "Engineering",
    title: "Why the W16 was a monument no one will build again",
    read: "10 min",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[42ch]">
            <AnimatedItem>
              <EyebrowBadge>Latest Articles</EyebrowBadge>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-5 text-3xl font-semibold tracking-tighter md:text-5xl">
                Deep dives, not hot takes.
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Long-form writing on the cars, the culture, and the people who
                live inside this world.
              </p>
            </AnimatedItem>
          </div>
          <AnimatedItem>
            <a
              href={SITE.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-[var(--gold)]"
            >
              Read the full blog
              <ArrowUpRight
                size={15}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <AnimatedItem key={p.title}>
              <a
                href={SITE.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group flex h-full flex-col p-7 transition-transform duration-500 hover:-translate-y-1"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--gold)]">
                  {p.kicker}
                </p>
                <h3 className="mt-4 flex-1 text-lg font-semibold leading-snug tracking-tight">
                  {p.title}
                </h3>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-[var(--muted)]">
                    {p.read} read
                  </span>
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="text-[var(--muted)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--gold)]"
                  />
                </div>
              </a>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
