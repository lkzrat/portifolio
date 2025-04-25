// projects.tsx
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { theme } = useTheme();

  const gradientText = theme === 'dark' 
    ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent";

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="relative py-20 scroll-mt-28 mb-28 px-4 sm:px-8 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      
      <SectionHeading>
        <span className={gradientText}>My Projects</span>
      </SectionHeading>

      <div className="grid gap-8 mt-12">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
}