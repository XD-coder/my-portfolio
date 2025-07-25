"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

export function SkillsTabs() {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-primary to-violet-900">
          <h3 className="text-2xl md:text-4xl font-bold">
            Frontend Development
          </h3>
          <p className="text-base md:text-lg mt-4">
            I create responsive, dynamic, and user-friendly interfaces with a
            focus on performance and aesthetics.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Next.js & React: Building server-side rendered and static web apps.</li>
            <li>TypeScript: For robust, type-safe code.</li>
            <li>TailwindCSS: For rapid and utility-first styling.</li>
            <li>Framer Motion: Crafting fluid and complex animations.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-primary to-violet-900">
          <h3 className="text-2xl md:text-4xl font-bold">
            Backend & Databases
          </h3>
          <p className="text-base md:text-lg mt-4">
            I develop resilient and scalable server-side logic and APIs to
            power applications.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>FastAPI & ExpressJS: Building efficient and powerful APIs.</li>
            <li>Agno: Leveraging modern backend frameworks for performance.</li>
            <li>Database management and integration for seamless data flow.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "AI/ML",
      value: "ai-ml",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-primary to-violet-900">
          <h3 className="text-2xl md:text-4xl font-bold">
            AI & Machine Learning
          </h3>
          <p className="text-base md:text-lg mt-4">
            I integrate artificial intelligence to create smarter, more
            interactive applications.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>LangChain: Developing applications powered by language models.</li>
            <li>Ollama: Running and managing large language models locally.</li>
            <li>Generative AI: Experience with text-to-speech and text-to-image models.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Tools",
      value: "tools",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-primary to-violet-900">
          <h3 className="text-2xl md:text-4xl font-bold">Tools</h3>
          <p className="text-base md:text-lg mt-4">
            I use modern tools and practices to streamline development and
            deployment workflows.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Docker: Containerizing applications for consistency and scalability.</li>
            <li>Git & GitHub: For version control and collaborative development.</li>
            <li>Ensuring smooth CI/CD pipelines for efficient project delivery.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Soft Skills",
      value: "soft-skills",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-primary to-violet-900">
          <h3 className="text-2xl md:text-4xl font-bold">Soft Skills</h3>
          <p className="text-base md:text-lg mt-4">
            Beyond technical skills, I bring a range of soft skills that enhance my effectiveness and collaboration.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Problem-Solving: Analyzing complex issues and devising effective solutions.</li>
            <li>Teamwork: Collaborating effectively with teams to achieve common goals.</li>
            <li>Communication: Clearly articulating ideas and concepts to both technical and non-technical audiences.</li>
            <li>Adaptability: Quickly learning and adapting to new technologies and environments.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <h2 className="text-4xl font-bold text-center mb-12 w-full">My Expertise</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}
