"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track raw window scrollY (no target — avoids full-page length bug)
  const { scrollY } = useScroll();

  // Hero section is exactly 500vh tall.
  // scrollYProgress = 0 when scrollY=0, = 1 when scrollY = 500vh - 1vh (4 * vh)
  // At 1280x632 viewport: hero = 500*632 = 316000px, scrollable range = 316000 - 632 = 315368px
  // We use dvh-aware approach: map scrollY [0, 500vh - 100vh] → [0, 1]
  // Since we can't calc vh in JS easily at this point, we use a ref-based approach below.
  // Instead, we use useTransform with [0, window.innerHeight * 4] as the range.
  // But since this runs on server too, we build a normalized MotionValue.

  // scrollYProgress: map scrollY from [0, heroHeight - vh] to [0, 1]
  // heroHeight = 500vh, viewport = 1vh, scrollable = 499vh
  // We use 0 → document calculation via transform
  const scrollYProgress = useTransform(scrollY, (y) => {
    const el = containerRef.current;
    if (!el) return 0;
    const heroHeight = el.offsetHeight;         // 500vh in px
    const viewportHeight = window.innerHeight;  // 1vh in px
    const scrollable = heroHeight - viewportHeight; // how many px we can scroll through
    const progress = Math.min(1, Math.max(0, y / scrollable));
    return progress;
  });

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", height: "500vh" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <ScrollyCanvas scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
