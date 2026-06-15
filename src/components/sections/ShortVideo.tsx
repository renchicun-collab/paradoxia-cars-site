"use client";

import { Play, TiktokLogo, ArrowUpRight } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";
import Button from "../ui/Button";
import { SITE } from "@/lib/site";

/**
 * Vertical 9:16 cards stand in for TikTok clips. To embed real videos,
 * replace a card's inner with TikTok's iframe:
 *   <iframe src={`https://www.tiktok.com/embed/v2/${videoId}`}
 *           className="h-full w-full" allow="encrypted-media" />
 * (find videoId in the share URL: tiktok.com/@you/video/<videoId>)
 */
const clips = [
  { tag: "Landmark", title: "The hypercar holy site", views: "2.1M" },
  { tag: "Drama", title: "The €11M car nobody can buy", views: "1.4M" },
  { tag: "Story", title: "Inside Pagani's atelier", views: "980K" },
  { tag: "Spec", title: "Why the Jesko defies physics", views: "1.7M" },
];

export default function ShortVideo() {
  return (
    <section id="video" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[42ch]">
            <AnimatedItem>
              <EyebrowBadge>On TikTok</EyebrowBadge>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-5 text-3xl font-semibold tracking-tighter md:text-5xl">
                Sixty seconds of the extraordinary.
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Short, sharp hooks into the world of the ultra-rare. The full
                stories live on the blog.
              </p>
            </AnimatedItem>
          </div>
          <AnimatedItem>
            <Button href={SITE.tiktok} showArrow>
              Follow on TikTok
            </Button>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0">
          {clips.map((c) => (
            <AnimatedItem
              key={c.title}
              className="w-[68%] shrink-0 snap-start sm:w-[44%] md:w-auto"
            >
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="card-surface relative aspect-[9/16] overflow-hidden p-0">
                  {/* faux thumbnail gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(70% 50% at 50% 30%, rgba(201,162,75,.14), transparent 70%), linear-gradient(180deg,#1a1a1f 0%,#0c0c0e 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--hairline)] bg-black/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                      <Play size={20} weight="fill" className="text-[var(--gold)]" />
                    </span>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full border border-[var(--hairline)] bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--gold)] backdrop-blur-md">
                    {c.tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-sm font-medium leading-snug">{c.title}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{c.views} views</p>
                  </div>
                </div>
              </a>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-[var(--muted)]">
          <TiktokLogo size={14} weight="fill" /> Tap a clip to open it on TikTok
          <ArrowUpRight size={12} weight="bold" />
        </p>
      </div>
    </section>
  );
}
