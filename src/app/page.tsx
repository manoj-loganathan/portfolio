import HeroSection from "@/components/HeroSection";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. What I Do */}
      <WhatIDo />
      {/* 3. Experience */}
      <Experience />
      {/* 4. Skills */}
      <Skills />
      {/* 5. About Me */}
      <About />
      {/* 5. Selected Works */}
      <Projects />
      {/* 6. Testimonials */}
      <Testimonials />
      {/* 7. Process */}
      <Process />
      {/* 8. Let's Build Something */}
      <Contact />
    </main>
  );
}
