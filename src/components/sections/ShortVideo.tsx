"use client";

import { useEffect, useRef } from "react";
import { TiktokLogo } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";
import Button from "../ui/Button";
import { SITE, tiktokUrl } from "@/lib/site";

export default function ShortVideo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SCRIPT_ID = "tiktok-embed-script";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const render = () => (window as any).tiktokEmbed?.lib?.render?.(ref.current);
    if (document.getElementById(SCRIPT_ID)) { render(); return; }
    const s = document.createElement("script");
    s.id = SCRIPT_ID; s.async = true;
    s.src = "https://www.tiktok.com/embed.js";
    document.body.appendChild(s);
  }, []);

  const pinned = SITE.tiktokVideos.length > 0;

  return (
    <section id="video" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[42ch]">
            <AnimatedItem><EyebrowBadge>TikTok</EyebrowBadge></AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
                60秒で味わう、非日常の世界。
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                {pinned
                  ? "チャンネルから厳選した動画。詳細はブログで。"
                  : "チャンネルの最新動画を自動で表示。詳細はブログで深掘りしています。"}
              </p>
            </AnimatedItem>
          </div>
          <AnimatedItem>
            <Button href={tiktokUrl} showArrow>
              <TiktokLogo size={16} weight="fill" /> TikTokをフォロー
            </Button>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedItem>
          <div ref={ref} className="card-surface flex flex-wrap justify-center gap-6 overflow-hidden p-5 md:p-8">
            {pinned ? (
              SITE.tiktokVideos.map((id) => (
                <blockquote key={id} className="tiktok-embed"
                  cite={`${tiktokUrl}/video/${id}`} data-video-id={id}
                  style={{ maxWidth: 325, minWidth: 288, margin: 0 }}>
                  <section />
                </blockquote>
              ))
            ) : (
              <blockquote className="tiktok-embed" cite={tiktokUrl}
                data-unique-id={SITE.tiktokHandle} data-embed-type="creator"
                style={{ maxWidth: 780, minWidth: 288, margin: 0 }}>
                <section>
                  <a target="_blank" rel="noopener noreferrer" href={tiktokUrl}>
                    @{SITE.tiktokHandle}
                  </a>
                </section>
              </blockquote>
            )}
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}
