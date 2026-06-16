"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

/**
 * 画像はUnsplash（著作権フリー）。
 * 各車の実写は著作権があるため、同じ高級車カテゴリの
 * フリー画像を使用しています。
 * 実際の車画像に差し替えたい場合は img の URL を変更してください。
 */
const cars = [
  {
    marque: "Bugatti",
    model: "La Voiture Noire",
    note: "1台のみ製造。報道では約14億円。史上最高額で売れた新車。",
    spec: "1,479 hp · W16",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80&auto=format&fit=crop",
  },
  {
    marque: "Pagani",
    model: "Huayra Codalunga",
    note: "5台のみ。モデナで職人の手によって生み出されたロングテール。",
    spec: "840 hp · V12",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80&auto=format&fit=crop",
  },
  {
    marque: "Koenigsegg",
    model: "Jesko Absolut",
    note: "理論上の最高速度500km/h超を目指して設計されたマシン。",
    spec: "1,600 hp · V8",
    img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80&auto=format&fit=crop",
  },
  {
    marque: "Rolls-Royce",
    model: "Boat Tail",
    note: "3台のみの特注コーチビルト。価格は非公開のまま。",
    spec: "ビスポーク · V12",
    img: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80&auto=format&fit=crop",
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
              <article className="card-surface group h-full overflow-hidden transition-transform duration-500 hover:-translate-y-1">

                {/* 車の画像 */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-nested)]">
                  <img
                    src={c.img}
                    alt={`${c.marque} ${c.model}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* グラデーションオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* マルケバッジ */}
                  <span className="absolute left-3 top-3 rounded-full border border-[var(--hairline)] bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--gold)] backdrop-blur-md">
                    {c.marque}
                  </span>
                </div>

                {/* テキスト */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {c.model}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {c.note}
                  </p>
                  <div className="gold-rule my-4 opacity-50" />
                  <p className="font-mono text-xs text-[var(--muted)]">{c.spec}</p>
                </div>

              </article>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
