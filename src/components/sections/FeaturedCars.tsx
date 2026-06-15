"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

const cars = [
  {
    marque: "Bugatti",
    model: "La Voiture Noire",
    note: "1台のみ製造。報道では約14億円。史上最高額で売れた新車。",
    spec: "1,479 hp · W16",
  },
  {
    marque: "Pagani",
    model: "Huayra Codalunga",
    note: "5台のみ。モデナで職人の手によって生み出されたロングテール。",
    spec: "840 hp · V12",
  },
  {
    marque: "Koenigsegg",
    model: "Jesko Absolut",
    note: "理論上の最高速度500km/h超を目指して設計されたマシン。",
    spec: "1,600 hp · V8",
  },
  {
    marque: "Rolls-Royce",
    model: "Boat Tail",
    note: "3台のみの特注コーチビルト。価格は非公開のまま。",
    spec: "ビスポーク · V12",
  },
];

export default function FeaturedCars() {
  return (
    <section id="hypercars" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 max-w-[44ch]">
          <AnimatedItem>
            <EyebrowBadge>注目のハイパーカー</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
              台数で語られる、究極の機械たち。
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              最速でも最大でもなく、最も希少な車だけを。生産台数が片手で収まる、本物の限定車。
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
