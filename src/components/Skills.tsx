"use client";

import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaReact, FaServer, FaBrain, FaTools, FaUserFriends, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IconType } from "react-icons";
import "react-horizontal-scrolling-menu/dist/styles.css";

// Map string keys to the actual icon components
const iconMap: Record<string, IconType> = {
  FaReact,
  FaServer,
  FaBrain,
  FaTools,
  FaUserFriends,
};

// Define the type for a skill object
interface Skill {
  title: string;
  iconName: string;
  description: string;
  technologies: string[];
  bgColor: string;
}

// Example data structure
const skillsData: Skill[] = [
  {
    title: "Frontend",
    iconName: "FaReact",
    description: "I create responsive, dynamic, and user-friendly interfaces with a focus on performance and aesthetics.",
    technologies: ["Next.js & React", "TypeScript", "TailwindCSS", "Framer Motion"],
    bgColor: "from-blue-600 to-indigo-800",
  },
  {
    title: "Backend",
    iconName: "FaServer",
    description: "I develop resilient and scalable server-side logic and APIs to power applications.",
    technologies: ["FastAPI & ExpressJS", "Agno", "Database management and integration"],
    bgColor: "from-green-600 to-teal-800",
  },
  {
    title: "AI/ML",
    iconName: "FaBrain",
    description: "I integrate artificial intelligence to create smarter, more interactive applications.",
    technologies: ["LangChain", "Ollama", "Generative AI"],
    bgColor: "from-red-600 to-rose-800",
  },
  {
    title: "Tools",
    iconName: "FaTools",
    description: "I use modern tools and practices to streamline development and deployment workflows.",
    technologies: ["Docker", "Git & GitHub", "CI/CD pipelines"],
    bgColor: "from-orange-600 to-amber-800",
  },
  {
    title: "Soft Skills",
    iconName: "FaUserFriends",
    description: "Beyond technical skills, I bring a range of soft skills that enhance my effectiveness and collaboration.",
    technologies: ["Problem-Solving", "Teamwork", "Communication", "Adaptability"],
    bgColor: "from-purple-600 to-violet-800",
  },
];

// Reusable Arrow component
const Arrow = ({ children, disabled, onClick }: { children: React.ReactNode; disabled: boolean; onClick: () => void }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`p-2 m-2 rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

// Left and Right Arrow components for navigation
const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);
  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <FaChevronLeft />
    </Arrow>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <FaChevronRight />
    </Arrow>
  );
};

// The card component for each skill
const SkillCard = ({ skill }: { skill: Skill }) => {
  const IconComponent = iconMap[skill.iconName];
  return (
    <div
      className={`flex-shrink-0 w-screen flex items-center justify-center p-8 md:p-24`}
      style={{
        width: '100vw'
      }}
    >
      <div
        className={`bg-gradient-to-br ${skill.bgColor} text-white rounded-3xl p-10 max-w-lg w-full shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]`}
      >
        <div className="flex items-center mb-6">
          {IconComponent && (
            <span className="text-4xl md:text-5xl mr-4">
              <IconComponent size={36} />
            </span>
          )}
          <h3 className="text-3xl md:text-4xl font-bold">
            {skill.title}
          </h3>
        </div>
        <p className="text-base md:text-lg mb-6">
          {skill.description}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skill.technologies.map((tech, i) => (
            <li key={i} className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
              <span className="text-sm">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export function SkillsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        // Tailwind classes can be used for styling the container
        wrapperClassName="w-full h-screen flex items-center"
      >
        {skillsData.map((skill, index) => (
          <SkillCard skill={skill} key={index} />
        ))}
      </ScrollMenu>
    </section>
  );
}