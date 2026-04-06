"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Book a Call",
    desc: "Let’s start with a conversation! We’ll discuss your goals, ideas, and how I can help bring them to life. This is where we align expectations and ensure a great fit.",
  },
  {
    num: "02",
    title: "Project Brief",
    desc: "Once we’re on the same page, we’ll define the project scope, timeline, and deliverables. A structured brief ensures a smooth and efficient process.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "This is where the magic happens! I’ll craft thoughtful designs and refine them based on feedback, ensuring the final outcome meets your vision and goals.",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "The final product is polished and ready to go. Whether it’s a brand identity, UI/UX design, or a Framer website, you’ll receive all the necessary files and guidance for a seamless handoff.",
  },
  {
    num: "05",
    title: "Support",
    desc: "Enjoy one month of free support after project delivery. I’ll be available to answer questions, make minor adjustments, and ensure everything runs smoothly.",
  },
];

export default function Process() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-black text-white z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-blue-500 font-semibold mb-4">
            Workflow
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
            Process.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            A simple and efficient workflow to bring your vision to life. From the
            first call to final delivery, every step is designed for clarity and
            efficiency.
          </p>
        </motion.div>

        {/* Desktop Sticky Scroll / Mobile Stack */}
        <div className="relative flex flex-col md:flex-row gap-16 lg:gap-32 items-start">
          
          {/* Left Column: Sticky Number (Visible mostly on Desktop/Tablet) */}
          <div className="hidden md:block w-1/3 sticky top-40 h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ margin: "-100px" }}
              className="text-[150px] lg:text-[200px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none font-serif"
            >
              *
            </motion.div>
          </div>

          {/* Right Column: Steps */}
          <div className="w-full md:w-2/3 flex flex-col gap-24 lg:gap-40">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-150px" }}
                className="relative group flex flex-col items-start"
              >
                {/* Mobile/Block Number (Shown on mobile, and acts as the trigger for desktop) */}
                <div className="text-6xl md:text-8xl font-bold text-white/5 mb-6 md:mb-10 font-serif leading-none">
                  {step.num}
                </div>
                
                {/* Title and Description */}
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                  {step.desc}
                </p>

                {/* Subtle visual divider */}
                <div className="w-12 h-1 bg-blue-500/50 mt-12 group-hover:w-full transition-all duration-700 ease-out rounded-full" />
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
