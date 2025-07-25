"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectSection() {
  return (
    <div>
      {portfolioData.projects.map((project, index) => (
        <section
          key={project.title}
          className="min-h-screen w-full flex items-center justify-center relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8"
            >
              <h2 className="text-4xl font-bold text-primary mb-4">
                {project.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm bg-secondary text-secondary-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {project.type} &rarr;
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-64 w-full"
            >
              <Image
                src={`/project-previews/${project.title
                  .toLowerCase()
                  .replace(/\s/g, "-")}.png`}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
