"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight-new";

export default function About() {
  return (
    <section className="relative bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Portrait Header */}
        <div className="relative h-[60vh] md:h-[80vh] w-full rounded-3xl overflow-hidden mb-20 group">
          <div className="absolute inset-0 z-0 bg-[#050505]">
            <img
              src="/about/me.png"
              alt="Manoj Loganathan"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-80"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
          </div>

          {/* Dynamic Spotlight Framing the Image */}
          <div className="absolute inset-0 z-10">
            <Spotlight
              gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .1) 0, hsla(210, 100%, 55%, .03) 50%, hsla(210, 100%, 45%, 0) 80%)"
            />
          </div>
        </div>

        {/* Bottom Section: Bio Content */}
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start"
          >
            {/* Headline and Bio */}
            <div className="lg:col-span-8">
              <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-10 leading-tight">
                Architecting digital <br />
                <span className="text-gray-500">excellence through code.</span>
              </h3>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-normal">
                "Results-driven Full Stack Developer with 3 years of hands-on expertise building,
                deploying, and maintaining scalable web and mobile applications processing 50,000+ data records daily.
                Specialized in MERN stack and Next.js frameworks for building real-time dashboards and IoT analytics platforms."
              </p>
            </div>

            {/* Stats Column */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">3+</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Years Experience</div>
                </div>
                <div className="h-[1px] w-full bg-gray-800/50" />
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">50K+</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Daily Records</div>
                </div>
                <div className="h-[1px] w-full bg-gray-800/50" />
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">99.5%</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Uptime Delivery</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
