"use client";

import { useTransform, motion, MotionValue } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

// Total frames: 120 (index 0-119)
// Frame index = Math.floor(scrollYProgress * 119)
// So: frame N maps to scrollYProgress = N/119

export default function Overlay({ scrollYProgress }: OverlayProps) {

  // Block 1: Frame 0 to 10
  // Visible at 0, hold till frame 8, fade out by frame 11
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 8/119, 10/119, 11/119, 1],
    [1,   1,      0,      0,   0]
  );
  const y1 = useTransform(scrollYProgress, [0, 10/119, 1], [0, -60, -60]);

  // Block 2: Frame 11 to 40
  // Fade in at frame 11, hold till frame 38, fade out by frame 41
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 10/119, 11/119, 38/119, 40/119, 41/119, 1],
    [0,   0,      1,      1,      0,      0,     0]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 10/119, 11/119, 38/119, 40/119, 1],
    [60,  60,    0,      0,     -60,   -60]
  );

  // Block 3: Frame 41 to 70
  // Fade in at frame 41, hold till frame 68, fade out by frame 71
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 40/119, 41/119, 68/119, 70/119, 71/119, 1],
    [0,   0,      1,      1,      0,      0,     0]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 40/119, 41/119, 68/119, 70/119, 1],
    [60,  60,    0,      0,     -60,   -60]
  );

  // Background overlay — goes black for readability during text, clears out by frame 71
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 3/119, 68/119, 71/119, 1],
    [0, 0.45,  0.45,     0,    0]
  );

  return (
    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
      {/* Dark background overlay for text readability */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: bgOpacity }}
      />

      {/* Block 1 — Name */}
      <motion.div
        className="absolute left-0 w-full flex justify-center items-center pt-[55vh]"
        style={{ opacity: opacity1, y: y1 }}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Manoj Loganathan<span className="text-zinc-500">.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-300 font-light tracking-wide">
            Full Stack Developer
          </p>
        </div>
      </motion.div>

      {/* Block 2 — Scalable Applications */}
      <motion.div
        className="absolute left-8 md:left-24 max-w-2xl top-1/2 -translate-y-1/2"
        style={{ opacity: opacity2, y: y2 }}
      >
        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          Building <span className="font-semibold">scalable applications</span> processing millions of records.
        </h2>
      </motion.div>

      {/* Block 3 — Specialization */}
      <motion.div
        className="absolute right-8 md:right-24 max-w-2xl text-right top-1/2 -translate-y-1/2"
        style={{ opacity: opacity3, y: y3 }}
      >
        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          Specialized in <span className="font-semibold">Native Applications</span> and <span className="font-semibold">IoT Specialist</span>.
        </h2>
      </motion.div>
    </div>
  );
}
