"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { SITE } from "@/lib/site";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene={SITE.splineScene} onLoad={() => setLoaded(true)} />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 10%, transparent 40%, rgba(8,8,9,0.55) 100%), linear-gradient(to top, rgba(8,8,9,0.92) 0%, transparent 46%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 flex flex-col">
        <div className="flex flex-1 items-end">
          <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-8 md:pb-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--gold)]"
            >
              ハイパーカーの世界 — The World of the Hypercar
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-[16ch] text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
            >
              地球上で最も<br />
              希少な車たちが、<br />
              <span className="gold-gradient-text">焦点を結ぶ。</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.32, duration: 0.8 }}
              className="mt-6 max-w-[46ch] text-base leading-relaxed text-[var(--muted)] md:text-lg"
            >
              ブガッティ、パガーニ、ケーニグセグ、フェラーリ。<br />
              ほとんどの人が一生目にすることのない車と、<br />
              それを所有する人々の物語。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.44, duration: 0.7 }}
              className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href="#hypercars" showArrow>
                ハイパーカーを見る
              </Button>
              <Button href="#concept" variant="secondary">
                コンセプトについて
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-8 text-xs text-[var(--muted)]/70"
            >
              ドラッグして車を回転できます
            </motion.p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[var(--background)]"
          >
            <span className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--foreground)]">
              Parados<span className="text-[var(--gold)]">x</span>ia
            </span>
            <div className="h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)]"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
              シーンを読み込んでいます
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
