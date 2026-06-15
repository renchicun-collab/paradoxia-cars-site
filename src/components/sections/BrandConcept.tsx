"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

const pillars = [
  {
    k: "希少性",
    t: "一桁台の生産台数",
    d: "1台、5台——ほとんどの人が実物を見ることすら叶わない車だけを追います。",
  },
  {
    k: "物語",
    t: "車の背景にある世界",
    d: "エンジニアリング、オーナーシップ、執念。スペックシートには載らない物語。",
  },
  {
    k: "アクセス",
    t: "排他的だが、閉鎖的ではない",
    d: "この世界の扉を開きながら、その特別さを損なわないように伝えます。",
  },
];

export default function BrandConcept() {
  return (
    <section id="concept" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <AnimatedItem>
              <EyebrowBadge>コンセプト</EyebrowBadge>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
                地球上で最も<br />騒々しい機械の、<br />静かな考察。
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Paradosxiaは、細部に気づく人のために存在します——コーチビルトのパネル、生産番号、どのスペックシートにも載らない物語。ハイパーカーの世界を、それが持つ品格とともに伝えます。
              </p>
            </AnimatedItem>
          </div>

          <div className="flex flex-col gap-4">
            {pillars.map((p) => (
              <AnimatedItem key={p.k}>
                <div className="card-surface flex items-start gap-5 p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--gold)] shrink-0 pt-0.5">
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
