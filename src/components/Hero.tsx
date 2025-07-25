"use client";
import React from "react";
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[70vh] w-full px-4 pt-24 pb-12 text-center bg-[var(--color-background)]"
      style={{ background: "var(--color-background)", color: "var(--color-foreground)" }}
    >
      {/* Animated Globe SVG */}
      <motion.div
        className="absolute right-8 top-8 hidden md:block z-0"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        style={{ width: 180, height: 180, opacity: 0.18 }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="var(--color-primary)" strokeWidth="4" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="var(--color-accent)" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="30" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" />
          <path d="M100 10 Q120 100 100 190 Q80 100 100 10" stroke="var(--color-accent)" strokeWidth="2" fill="none" />
          <path d="M10 100 Q100 120 190 100 Q100 80 10 100" stroke="var(--color-accent)" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-foreground)] bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          Kartikey Mishra
        </motion.h1>
        <motion.h2
          className="text-lg md:text-2xl font-medium mb-6 max-w-2xl text-[var(--color-muted-foreground)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
        >
          Founding Developer @ Espressohost.xyz &mdash; Building scalable, modern web apps with Next.js, React, TypeScript, and a passion for AI-powered solutions. <span className="inline-block animate-pulse text-[var(--color-primary)]">🚀</span>
        </motion.h2>
        <motion.p
          className="mb-8 max-w-xl text-base md:text-lg text-[var(--color-muted-foreground)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          I love crafting robust, high-performance platforms and exploring the intersection of web and AI. Let’s build something amazing together!
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full font-semibold bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)] transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full font-semibold border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-colors duration-200"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;