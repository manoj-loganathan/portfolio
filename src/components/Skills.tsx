"use client";

import { motion } from "framer-motion";

type Skill = {
  name: string;
  logo?: string;
  emoji?: string;
};

const row1: Skill[] = [
  { name: "React.js",     logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js",      logo: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "TypeScript",   logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript",   logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Expo",         logo: "https://cdn.simpleicons.org/expo/ffffff" },
  { name: "Three.js",     logo: "https://cdn.simpleicons.org/threedotjs/ffffff" },
  { name: "Redux",        logo: "https://cdn.simpleicons.org/redux/764ABC" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "HTML5",        logo: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "Bootstrap",    logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
];

const row2: Skill[] = [
  { name: "Node.js",      logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express.js",   logo: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "PostgreSQL",   logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB",      logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Supabase",     logo: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "MySQL",        logo: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Docker",       logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Nginx",        logo: "https://cdn.simpleicons.org/nginx/009639" },
  { name: "Git",          logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub",       logo: "https://cdn.simpleicons.org/github/ffffff" },
  { name: "GitLab CI/CD", logo: "https://cdn.simpleicons.org/gitlab/FC6D26" },
];

const row3: Skill[] = [
  { name: "Google Gemini", logo: "https://cdn.simpleicons.org/googlegemini/4285F4" },
  { name: "Claude",        logo: "https://cdn.simpleicons.org/anthropic/ffffff" },
  { name: "N8N",           logo: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "Framer Motion", logo: "https://cdn.simpleicons.org/framer/ffffff" },
  { name: "Linux",         logo: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "PM2",           emoji: "⚙️" },
  { name: "Antigravity",   emoji: "⚡" },
  { name: "IoT Systems",   emoji: "📡" },
  { name: "3D Graphics",   logo: "https://cdn.simpleicons.org/threedotjs/ffffff" },
  { name: "Cron Jobs",     emoji: "🔄" },
];

function Pill({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] flex-shrink-0 mx-2 whitespace-nowrap">
      {skill.logo ? (
        <img src={skill.logo} alt={skill.name} width={18} height={18} className="object-contain flex-shrink-0" />
      ) : (
        <span className="text-base leading-none">{skill.emoji}</span>
      )}
      <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
    </span>
  );
}

function MarqueeRow({
  skills,
  direction,
  duration,
}: {
  skills: Skill[];
  direction: "left" | "right";
  duration: number;
}) {
  const doubled = [...skills, ...skills];

  // Framer Motion JS animation: translateX from 0 → -50% (left) or -50% → 0 (right)
  const initial = direction === "left" ? "0%" : "-50%";
  const animate = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative overflow-hidden w-full">
      {/* Left edge fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #000 0%, transparent 100%)" }}
      />
      {/* Right edge fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #000 0%, transparent 100%)" }}
      />

      <motion.div
        className="flex w-max"
        initial={{ x: initial }}
        animate={{ x: animate }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {doubled.map((skill, i) => (
          <Pill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="relative w-full py-16 bg-black overflow-hidden z-20">
      <div className="flex flex-col gap-4">
        <MarqueeRow skills={row1} direction="left"  duration={40} />
        <MarqueeRow skills={row2} direction="right" duration={35} />
        <MarqueeRow skills={row3} direction="left"  duration={45} />
      </div>
    </section>
  );
}
