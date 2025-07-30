"use client";

import { motion, easeOut } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  type: string;
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

export function ProjectCard({ title, description, technologies, link, type, index }: ProjectProps) {
  return (
    <motion.div
      className="border border-border/50 rounded-lg p-6 bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      custom={index}
    >
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <p className="text-muted-foreground mt-2 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-accent hover:underline"
      >
        {type} &rarr;
      </a>
    </motion.div>
  );
}
