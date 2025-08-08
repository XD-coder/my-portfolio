'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
// --- TextRotator Component ---
interface TextRotatorProps {
  texts: string[];
  interval?: number; // Time between text changes in ms
  fadeDuration?: number; // Fade in/out duration in ms
  className?: string;
}

const TextRotator: React.FC<TextRotatorProps> = ({
  texts,
  interval = 3000,
  fadeDuration = 500,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycleText = () => {
      setIsVisible(false); // Start fade out

      const fadeOutTimer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true); // Start fade in
      }, fadeDuration); // Wait for fade out to complete

      return () => clearTimeout(fadeOutTimer);
    };

    const intervalId = setInterval(cycleText, interval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [texts, interval, fadeDuration]);

  return (
    <span className={`inline ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: fadeDuration / 1000, ease: 'easeInOut' }}
          className="inline"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// --- Hero Component ---
const Hero: React.FC = () => {
  const globeVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        repeat: Infinity,
        duration: 20, // Slightly slower rotation
        ease: 'linear',
      },
    },
  };

  const textLoopWords = [
    'Innovator.',
    'Problem Solver.',
    'AI Enthusiast.',
    'Full-stack Developer.',
    'Tech Geek.',
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-[var(--color-background)] px-4 py-20 text-center md:py-28 lg:py-36"
      style={{ background: 'var(--color-background)', color: 'var(--color-foreground)' }}
    >
      {/* Animated Globe SVG - Larger and more prominent background element */}
      <motion.div
        className="absolute -right-20 -top-20 z-0 hidden opacity-10 md:block lg:right-0 lg:top-0"
        // variants={globeVariants}
        animate="animate"
        style={{ width: 300, height: 300 }} // Increased size
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="var(--color-primary)" strokeWidth="3" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="30" stroke="var(--color-primary)" strokeWidth="1" fill="none" />
          <path d="M100 10 Q120 100 100 190 Q80 100 100 10" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
          <path d="M10 100 Q100 120 190 100 Q100 80 10 100" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>

      {/* Another subtle background element (e.g., a diagonal line) */}
      <motion.div
        className="absolute -left-20 bottom-0 z-0 hidden h-64 w-64 rotate-45 rounded-full bg-primary/5 opacity-10 md:block"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut', delay: 5 }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="mb-4 text-5xl font-extrabold leading-tight text-foreground md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          Kartikey Mishra
        </motion.h1>

        <motion.div
          className="mb-6 text-xl font-medium text-muted-foreground md:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-center leading-tight">
              I am a{' '}
              <span className='font-semibold text-primary'><Typewriter
                words={textLoopWords}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
                
              /></span>
              
            
            </h1>
            <p className="text-center leading-tight text-lg md:text-xl lg:text-2xl">
              Building scalable, modern web apps with Next.js, React, TypeScript, and a passion for {' '}
              
              <TextRotator
                texts={['Innovation', 'Generative AI', 'cutting-edge technology']}
                interval={2500}
                fadeDuration={300}
                className="font-semibold text-primary"
              />
            </p>
          </div>
        </motion.div>

        <motion.p
          className="mb-10 max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
        >
          I love crafting robust, high-performance platforms and exploring the intersection of web and AI. Let’s build something amazing together!
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease: 'easeOut' }}
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary/90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
