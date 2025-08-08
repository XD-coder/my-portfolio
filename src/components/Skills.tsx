"use client";

import { FaReact, FaServer, FaBrain, FaTools, FaUserFriends } from "react-icons/fa";
import { skillsData } from "@/lib/data";
import ScrollStack from "./lightswind/scroll-stack";
import { ReactNode } from "react";

// Map iconName to the actual icon component
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FaReact,
  FaServer,
  FaBrain,
  FaTools,
  FaUserFriends,
};

export function SkillsSection() {
  // Transform skillsData into cards for ScrollStack
  const skillCards = skillsData.map((skill, index) => {
    const IconComponent = iconMap[skill.iconName];
    
    return {
      title: skill.title,
      subtitle: skill.description,
      content: (
        <div className="max-w-lg text-white">
          <div className="flex items-center mb-6">
            {IconComponent && (
              <span className="text-4xl md:text-5xl mr-4 text-white">
                <IconComponent size={48} />
              </span>
            )}
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              {skill.title}
            </h3>
          </div>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
            {skill.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skill.technologies.map((tech, i) => (
              <div key={i} className="flex items-center group">
                <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <span className="text-sm md:text-base font-medium text-white/95 group-hover:text-white transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) as ReactNode,
      backgroundImage: getSkillBackground(skill.title),
      badge: `${skill.technologies.length} Technologies`,
    };
  });

  return (
    <section id="skills" className="w-full">
      <div className="w-full px-4 py-4">
        <div className="text-center mb-8 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my technical expertise across different domains. Scroll through each skill category to discover the technologies I work with.
          </p>
        </div>
        
        <ScrollStack
          cards={skillCards}
          backgroundColor="bg-background"
          cardHeight="70vh"
          animationDuration="0.6s"
          sectionHeightMultiplier={5}
          intersectionThreshold={0.1}
          className="skills-scroll-stack w-full"
        />
      </div>
    </section>
  );
}

// Helper function to get background images for different skill categories
function getSkillBackground(skillTitle: string): string {
  const backgrounds: Record<string, string> = {
    "Frontend": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&crop=center",
    "Backend": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&crop=center",
    "AI & ML": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&crop=center",
    "Tools": "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=800&fit=crop&crop=center",
    "Soft Skills": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&crop=center",
  };
  
  return backgrounds[skillTitle] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&crop=center";
}