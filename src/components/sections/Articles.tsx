"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

const BLOG = "https://renchicun4.com";

type WPPost = {
  id: number;
  link: string;
  title: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      media_details?: {
        sizes?: {
          medium_large?: { source_url: string };
          medium?: { source_url: string };
        };
      };
    }>;
  };
};

type Article = {
  title: string;
  kicker: string;
  link: string;
  img: string | null;
};

function thumb(post: WPPost): string | null {
  const m = post._embedded?.["wp:featuredmedia"]?.[0];
  return (
    m?.media_details?.sizes?.medium_large?.source_url ??
    m?.media_details?.sizes?.medium?.source_url ??
    m?.source_url ??
    null
  );
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, " ").trim();
}

/* リンクを確実にhttpsにする */
function ensureHttps(url: string): string {
  return url.replace(/^http:\/\//, "https://");
}

const FALLBACK: Article[] = [
  { title: "ブガッティ、パガーニ、ケーニグセグが集う聖地", kicker: "聖地巡礼", link: BLOG, img: null },
  { title: "ハイパーカーを手に入れるために本当に必要なこと", kicker: "オーナーシップ", link: BLOG, img: null },
  { title: "W16エンジンが「二度と作られない記念碑」である理由", kicker: "エンジニアリング", link: BLOG, img: null },
];

export default function Articles() {
  const [posts, setPosts] = useState<Article[] | null>(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => { if (!r.ok) throw new Error("API error"); return r.json(); })
      .then((data: WPPost[]) => {
        if (!Array.isArray(data) || data.length === 0) throw new Error("empty");
        setPosts(
          data.map((p) => ({
            title: stripHtml(p.title.rendered),
            kicker: "記事",
            link: ensureHttps(p.link), // httpをhttpsに修正
            img: thumb(p),
          }))
        );
      })
      .catch(() => setPosts(FALLBACK));
  }, []);

  const items = posts ?? FALLBACK;

  return (
    <section id="articles" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[42ch]">
            <AnimatedItem><EyebrowBadge spec="№04 · ARTICLES">最新記事</EyebrowBadge></AnimatedItem>
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
            <a href={BLOG} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-[var(--gold)]">
              ブログをすべて読む
              <ArrowUpRight size={15} weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((p, i) => (
            <AnimatedItem key={i}>
              <a href={p.link} target="_blank" rel="noopener noreferrer"
                className="card-surface group flex h-full flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1">

                {/* サムネイル */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--surface-nested)]">
                  {p.img ? (
                    <img src={p.img} alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#131316 0%,#1e1e24 50%,#0f0f12 100%)" }}>
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]/40">
                        Paradosxia
                      </span>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-sm border border-[var(--hairline)] bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--gold)] backdrop-blur-md">
                    {p.kicker}
                  </span>
                </div>

                {/* テキスト */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex-1 text-base font-semibold leading-snug tracking-tight">
                    {p.title}
                  </h3>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-[var(--muted)]">記事を読む</span>
                    <ArrowUpRight size={16} weight="bold"
                      className="text-[var(--muted)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--gold)]" />
                  </div>
                </div>
              </a>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
