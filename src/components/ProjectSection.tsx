"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode, FaGlobe } from "react-icons/fa";
import ThreeDImageGallery from "./lightswind/3d-image-gallery";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  type: string;
}

export function ProjectSection() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Create project images array - using placeholder images for now
  const projectImages = portfolioData.projects.map((project, index) => 
    `https://images.unsplash.com/photo-${1618005182185 + index * 1000}-4d12a5d2b060?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb`
  );

  const selectedProject = portfolioData.projects[selectedProjectIndex];

  const handleImageClick = (index: number) => {
    setSelectedProjectIndex(index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">
            My Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of projects. Click on the images to learn more about each project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 3D Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <ThreeDImageGallery
              images={projectImages}
              width={600}
              height={400}
              spacing={1.2}
              rotationAngle={0.15}
              borderRadius={0.05}
              autoRotate={false}
              onImageClick={handleImageClick}
              className="project-gallery"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={selectedProjectIndex} // Re-animate when project changes
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <FaCode className="text-primary" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                {selectedProject.type === "Source Code" ? (
                  <>
                    <FaGithub />
                    View Source
                  </>
                ) : (
                  <>
                    <FaGlobe />
                    Live Demo
                  </>
                )}
                <FaExternalLinkAlt className="text-sm" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProjectIndex((prev) => (prev + 1) % portfolioData.projects.length)}
                className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Next Project
              </motion.button>
            </div>

            {/* Project Navigation Dots */}
            <div className="flex gap-2 pt-4">
              {portfolioData.projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === selectedProjectIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
