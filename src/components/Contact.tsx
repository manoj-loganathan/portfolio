"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section className="relative w-full z-20">
      <div
        className="h-[400vh] bg-black w-full relative pt-20 lg:pt-40 border-t border-white/5"
        ref={ref}
      >
        <GoogleGeminiEffect
          title="Let's Build Something."
          description="Whether you need scalable cloud architectures, real-time IoT solutions, or premium mobile experiences—I'd love to chat."
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>

      {/* Footer Area (Below Gemini) */}
      <div className="bg-black py-24 flex flex-col items-center justify-center relative z-50">
        
        {/* 3. Center Email Button without BG */}
        <a 
          href="mailto:manojloganathan.dev@gmail.com"
          className="text-xl md:text-3xl lg:text-4xl font-light text-zinc-300 hover:text-white transition-colors duration-300 tracking-wide mb-16 md:mb-20 border-b border-transparent hover:border-white/20 pb-2"
        >
          manojloganathan.dev@gmail.com
        </a>

        {/* 4. Social Links without BG */}
        <div className="flex items-center justify-center space-x-10 md:space-x-16 text-zinc-500">
          <a href="#" className="hover:text-white transition-colors duration-300 tracking-widest text-xs md:text-sm uppercase">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors duration-300 tracking-widest text-xs md:text-sm uppercase">GitHub</a>
          <a href="tel:+919384040438" className="hover:text-white transition-colors duration-300 tracking-widest text-xs md:text-sm uppercase">Call Me</a>
        </div>
      </div>
    </section>
  );
}
