"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

const pillars = [
  { k: "01", t: "希少性", d: "1台、5台——ほとんどの人が実物を見ることすら叶わない車だけを追う。" },
  { k: "02", t: "物語", d: "エンジニアリング、オーナーシップ、執念。スペックシートには載らない背景。" },
  { k: "03", t: "アクセス", d: "扉を開きながら、その世界の特別さを損なわない伝え方で。" },
];

export default function BrandConcept() {
  return (
    <section id="concept" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <AnimatedItem>
              <EyebrowBadge spec="№02 · CONCEPT">コンセプト</EyebrowBadge>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl">
                地球上で最も<br />過激な機械を、<br />静かに見つめる。
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Paradosxiaは、細部に気づく人のために存在する——コーチビルトのパネル、生産番号、どのスペックシートにも載らない物語。ハイパーカーの世界を、その品格とともに伝える。
              </p>
            </AnimatedItem>
          </div>

          <div className="flex flex-col gap-px bg-[var(--hairline)]">
            {pillars.map((p) => (
              <AnimatedItem key={p.k}>
                <div className="flex items-start gap-5 bg-[var(--surface)] p-6">
                  <span className="font-mono text-xs text-[var(--danger)] shrink-0 pt-0.5">{p.k}</span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold tracking-tight">{p.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{p.d}</p>
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
