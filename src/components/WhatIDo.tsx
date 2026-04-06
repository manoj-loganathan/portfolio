"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Cpu, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    description:
      "End-to-end engineering of scalable web platforms using Next.js and Node.js — from database architecture to pixel-perfect UI. I build systems that handle millions of records without breaking a sweat.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Native-grade iOS & Android experiences built with React Native and Expo. I craft performant, elegant mobile apps with seamless UX — from complex authentication flows to real-time data sync.",
  },
  {
    icon: Cpu,
    title: "IoT Systems & Real-Time Dashboards",
    description:
      "Sensor-to-dashboard pipelines for industrial IoT systems. I architect automated data extraction, anomaly detection, and real-time visualizations that turn raw hardware data into actionable insights.",
  },
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Building intelligent agents, RAG pipelines, and multi-agent systems using cutting-edge LLMs. I integrate AI capabilities into production-grade applications that are reliable, fast, and context-aware.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function WhatIDo() {
  return (
    <section className="relative w-full py-28 px-6 md:px-20 bg-black text-white z-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-blue-500 font-semibold mb-4">
            What I Do
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500 overflow-hidden cursor-default"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Icon size={22} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 font-light leading-relaxed text-[0.925rem]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
