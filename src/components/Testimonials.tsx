"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "His ability to craft seamless, high-performance architectures is simply unmatched. A brilliant asset to any technical team.",
    name: "Aravind Kumar",
    role: "Chief Technology Officer",
    initials: "AK",
  },
  {
    quote: "He immediately grasped our complex requirements and delivered exceptional, bug-free code in record time.",
    name: "Priya Nair",
    role: "Product Lead",
    initials: "PN",
  },
  {
    quote: "A rare talent who effortlessly bridges beautiful UI design with robust backend engineering. He builds incredibly elegant solutions.",
    name: "Meena Krishnan",
    role: "Engineering Manager",
    initials: "MK",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-black text-white z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Title and Controls */}
        <div className="flex flex-col gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Client <br />
              <span className="text-zinc-500">feedback.</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light">
              Here’s what other collaborators had to <br className="hidden md:block" /> say about my work.
            </p>
          </motion.div>
          
          {/* Navigation Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4"
          >
             <button 
               onClick={prevTestimonial}
               className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
               aria-label="Previous Testimonial"
             >
               <ArrowLeft strokeWidth={1.5} size={24} />
             </button>
             <button 
               onClick={nextTestimonial}
               className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
               aria-label="Next Testimonial"
             >
               <ArrowRight strokeWidth={1.5} size={24} />
             </button>
          </motion.div>
        </div>

        {/* Right Side: Active Testimonial */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative min-h-[350px] flex flex-col justify-center mt-10 lg:mt-0 pl-6 md:pl-10"
        >
            {/* The Quote Mark */}
            <div className="text-blue-500 opacity-60 font-serif text-[80px] leading-none absolute -top-8 -left-4 select-none">
              &ldquo;
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                <p className="text-2xl md:text-3xl font-light leading-relaxed tracking-wide mb-10 text-zinc-200">
                  {testimonials[currentIndex].quote}
                </p>
                
                <div className="flex items-center gap-5">
                  {/* Generic Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-sm font-semibold text-white flex-shrink-0 overflow-hidden shadow-inner">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <p className="text-white font-medium text-base leading-tight">{testimonials[currentIndex].name}</p>
                    <p className="text-zinc-500 text-sm mt-1">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
