"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const SPLINE_SCENE =
  "https://prod.spline.design/OlkR9onG89bHQrUa/scene.splinecode";

/**
 * Signature hero. Unlike the skill's frame-sequence canvas, this is a LIVE
 * Spline scene (real-time WebGL) so the car responds to drag / pointer.
 * The scene fills the viewport; text + CTAs float on top with
 * pointer-events disabled so the model stays grabbable underneath.
 */
export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      {/* Live 3D scene */}
      <div className="absolute inset-0">
        <Spline scene={SPLINE_SCENE} onLoad={() => setLoaded(true)} />
      </div>

      {/* Cinematic vignette so text stays legible over any frame of the scene */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 10%, transparent 40%, rgba(10,10,11,0.55) 100%), linear-gradient(to top, rgba(10,10,11,0.9) 0%, transparent 45%)",
        }}
      />

      {/* Text overlay — pointer-events-none lets drags pass to the scene;
          the CTA row re-enables pointer events on itself only. */}
      <div className="pointer-events-none absolute inset-0 flex flex-col">
        <div className="flex flex-1 items-end">
          <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-8 md:pb-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--gold)]"
            >
              The World of the Hypercar &mdash; 至高の世界
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-tighter md:text-6xl lg:text-7xl"
            >
              Where the rarest machines on earth come{" "}
              <span className="gold-gradient-text">into focus.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.32, duration: 0.8 }}
              className="mt-6 max-w-[48ch] text-base leading-relaxed text-[var(--muted)] md:text-lg"
            >
              Bugatti, Pagani, Koenigsegg, Ferrari. Paradosxia is a study of the
              cars almost no one will ever see &mdash; and the people who own
              them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.44, duration: 0.7 }}
              className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href="#hypercars" showArrow>
                Explore the Hypercars
              </Button>
              <Button href="#concept" variant="secondary">
                The Concept
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-8 text-xs text-[var(--muted)]/70"
            >
              Drag to orbit the car.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Loading overlay — fades out on Spline onLoad */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[var(--background)]"
          >
            <span className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--foreground)]">
              Parados<span className="text-gold">x</span>ia
            </span>
            <div className="h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)]"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
              Preparing the scene
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
