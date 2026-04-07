"use client";

import { motion } from "framer-motion";

const projects = [
  { 
    id: 1, 
    link: "https://novaapptemplate.framer.website/",
    img: "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F53280%2Fnova-app-jIF5O1HIC4qwPNNINPBjuclm2bkqcL&w=3840&q=100",
  },
  { 
    id: 2, 
    link: "https://manoj-loganathan.framer.website/",
    img: "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F54869%2Falytics-wkve5ePNDHrDtwP2rHps13eUJvh782&w=3840&q=100",
  },
  { 
    id: 3, 
    link: "https://www.envitra.in/",
    img: "https://s0.wp.com/mshots/v1/https://www.envitra.in/?w=1200",
  },
  { 
    id: 4, 
    link: "https://mia.sunteknolozy.in/",
    img: "/sunteknolozy.png",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-black py-32 px-6 md:px-12 lg:px-24 text-white z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-blue-500 font-semibold mb-4">
            Selected Works
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, idx) => (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="block group cursor-pointer relative h-[350px] sm:h-[400px] lg:h-[450px] w-full rounded-[2rem] overflow-hidden border border-white/[0.05] hover:border-white/20 transition-colors duration-500"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              
              {/* Subtle Overlay to make it blend with the dark theme */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
