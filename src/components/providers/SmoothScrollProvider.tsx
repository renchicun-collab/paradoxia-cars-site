"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Physics-based smooth scroll for the whole app.
 * Safari/iOS gets a gentler lerp and no syncTouch to avoid stutter.
 */
export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false, // disabled — known iOS stutter source
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
