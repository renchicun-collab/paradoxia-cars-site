"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";
import { SITE } from "@/lib/site";

const posts = [
  {
    kicker: "聖地巡礼",
    title: "ブガッティ、パガーニ、ケーニグセグが集う場所",
    read: "8分",
  },
  {
    kicker: "オーナーシップ",
    title: "ハイパーカーを手に入れるために本当に必要なこと",
    read: "6分",
  },
  {
    kicker: "エンジニアリング",
    title: "W16エンジンが「二度と作られない記念碑」である理由",
    read: "10分",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[42ch]">
            <AnimatedItem>
              <EyebrowBadge>最新記事</EyebrowBadge>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
                深掘り。ホットテイクではなく。
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                車、文化、そしてこの世界に生きる人々についての長文コンテンツ。
              </p>
            </AnimatedItem>
          </div>
          <AnimatedItem>
            <a
              href={`https://${SITE.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-[var(--gold)]"
            >
              ブログをすべて読む
              <ArrowUpRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <AnimatedItem key={p.title}>
              <a
                href={`https://${SITE.blog}`}
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
                  <span className="text-xs text-[var(--muted)]">{p.read}で読める</span>
                  <ArrowUpRight size={16} weight="bold" className="text-[var(--muted)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--gold)]" />
                </div>
              </a>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
