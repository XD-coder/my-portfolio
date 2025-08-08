"use client";

import { ContactForm } from "@/components/ContactForm";
import { ProjectSection } from "@/components/ProjectSection";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { SkillsSection } from "@/components/Skills";


export default function HomePage() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative">
      <motion.section
        id="hero"
        className="container mx-auto px-4 py-16 text-center min-h-screen flex flex-col justify-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Hero />
      </motion.section>

      {/* <motion.section
        id="skills"
        className="relative min-h-screen"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      > */}
        <SkillsSection />
      {/* </motion.section> */}

      <div id="projects">
        <ProjectSection />
      </div>

      

      <motion.section
        id="contact"
        className="container mx-auto px-4 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </motion.section>
    </div>
  );
}
