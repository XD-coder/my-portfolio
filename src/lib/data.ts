export const portfolioData = {
  about: {
    name: "Kartikey Mishra",
    title: "Founding Developer at Espressohost.xyz",
    description:
      "I am a founding developer at Espressohost.xyz, specializing in building cutting-edge and scalable web applications. My expertise lies in leveraging modern technologies like Next.js, React, TypeScript, and FastAPI to create innovative and robust solutions. I also have a strong interest in AI-powered web applications, including working with LLMs, text-to-speech, and text-to-image models.",
  },
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "FastAPI",
    "TailwindCSS",
    "Framer Motion",
    "ExpressJS",
    "LangChain",
    "Agno",
    "Ollama",
    "Docker",
    "Git",
    "GitHub",
  ],
  projects: [
    {
      title: "Espressohost Website",
      description:
        "As a core contributor, I developed and maintained the primary scalable website for Espressohost.xyz. My efforts led to a 20% optimization in website performance, significantly reducing load times, and a 25% boost in SEO, enhancing search visibility and organic traffic.",
      technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Docker"],
      link: "https://espressohost.xyz",
      type: "Live Demo",
    },
    {
      title: "Giglance",
      description:
        "I contributed to Giglance, an open-source, Upwork-inspired platform designed to provide real-world development experience for beginners. I built key frontend components using ReactJS, NextJS, TailwindCSS, TypeScript, Framer Motion, and ShadCN-UI.",
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "Framer Motion",
        "ShadCN-UI",
      ],
      link: "https://github.com/upes-open/OSoC-25-Giglance",
      type: "Source Code",
    },
  ],
  contact: {
    email: "kartikey.m1210@gmail.com",
    phone: "+91-7206881668",
    social: {
      github: "https://github.com/XD-coder",
      linkedin: "https://www.linkedin.com/in/kartikey-mishra-028205215/",
      portfolio: "https://portfolio.kartikey.in",
    },
  },
};

// This is an example of what your data file should contain.
// Ensure your actual file has a similar structure with multiple objects.

import { FaReact, FaServer, FaBrain, FaTools, FaUserFriends } from "react-icons/fa";
import { IconType } from "react-icons";

// Define the type for a skill object
export interface Skill {
  title: string;
  iconName: string;
  description: string;
  technologies: string[];
  bgColor: string;
}

export const skillsData: Skill[] = [
  {
    title: "Frontend",
    iconName: "FaReact",
    description: "I create responsive, dynamic, and user-friendly interfaces with a focus on performance and aesthetics.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    bgColor: "from-blue-600 to-indigo-800",
  },
  {
    title: "Backend",
    iconName: "FaServer",
    description: "I develop resilient and scalable server-side logic and APIs to power applications.",
    technologies: ["FastAPI", "ExpressJS", "Agno", "Database Management"],
    bgColor: "from-green-600 to-teal-800",
  },
  {
    title: "AI/ML",
    iconName: "FaBrain",
    description: "I integrate artificial intelligence to create smarter, more interactive applications.",
    technologies: ["LangChain", "Ollama", "Generative AI", "Python"],
    bgColor: "from-red-600 to-rose-800",
  },
  {
    title: "Tools",
    iconName: "FaTools",
    description: "I use modern tools and practices to streamline development and deployment workflows.",
    technologies: ["Docker", "Git", "GitHub", "CI/CD Pipelines"],
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