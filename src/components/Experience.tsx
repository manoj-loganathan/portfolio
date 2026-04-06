"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Sun Teknolozy",
    role: "Full Stack Developer (Next.js & MERN)",
    period: "January 2024 – November 2025",
    bullets: [
      "Engineered full-stack applications for enterprise clients, successfully processing 50,000+ data records daily with an exceptional 99.5% uptime.",
      "Architected real-time dashboards utilizing Next.js, slashing operational latency from 5 minutes to just 30 seconds.",
      "Designed and deployed 20+ strictly scaled REST APIs to digest and map complex analytics across 5GB+ monthly data volumes.",
      "Fine-tuned performance rendering via index optimization and caching layers, consistently reducing database query times by 35%."
    ]
  },
  {
    company: "Cynosure Software Solutions Pvt. Ltd.",
    role: "Junior Software Developer",
    period: "November 2022 – January 2024",
    bullets: [
      "Built 3 corporate platforms serving 500+ monthly users, adhering strictly to rendering standards resulting in 95+ Lighthouse performance scores.",
      "Constructed and documented highly reusable UI component architectures mitigating development timeframes by 30%.",
      "Directed and mentored junior engineering pairs, cementing scalable coding best practices."
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative w-full py-32 px-8 md:px-24 bg-black text-white z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-blue-500 font-semibold mb-4">
            Professional Experience
          </p>
        </motion.div>

        <div className="space-y-16 mt-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:col-span-1 text-zinc-400 font-light mt-1">
                  {exp.period}
                </div>
                <div className="md:col-span-3 border-l border-white/10 pl-8 pb-8 relative">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6px] top-2" />
                  <h3 className="text-3xl font-semibold mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-zinc-300 font-medium mb-8">{exp.company}</h4>
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-zinc-400 font-light leading-relaxed flex items-start gap-4">
                        <span className="text-white/20 mt-1 text-sm">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
