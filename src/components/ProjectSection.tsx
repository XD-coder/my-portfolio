"use client";

import { portfolioData } from "@/lib/data";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  type: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-primary mb-16">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const imageSrc = `/project-previews/${project.title
    .toLowerCase()
    .replace(/\s/g, "-")}.png`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative group rounded-3xl overflow-hidden bg-secondary transition-all duration-300 ease-in-out p-6 shadow-lg hover:shadow-2xl"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(144, 202, 249, 0.15), transparent 80%)
          `,
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 shadow-md transition-shadow group-hover:shadow-xl">
          <Image
            src={imageSrc}
            alt={project.title}
            width={600}
            height={400}
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm flex-grow mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-primary/10 text-primary-foreground rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent-foreground hover:text-accent transition-colors font-semibold mt-auto"
        >
          View {project.type}
          <FaExternalLinkAlt className="text-xs transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
