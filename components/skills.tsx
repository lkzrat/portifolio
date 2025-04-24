"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaLink, FaJava } from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiMysql, SiSemanticweb, SiGithubactions, SiOpenai, SiPytorch, SiTensorflow, SiChakraui, SiNextdotjs, SiTailwindcss, SiTypescript, SiC } from "react-icons/si";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const skillIcons: Record<string, JSX.Element> = {
  Python: <FaPython />,
  FastAPI: <SiFastapi />,
  LangChain: <FaLink />,
  LlamaIndex: <SiPytorch />,
  "RAG Pipelines": <SiTensorflow />,
  "LLMs (OpenAI, Anthropic)": <SiOpenai />,
  "Vector Databases (Chroma, Pinecone)": <FaDatabase />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  Git: <FaGitAlt />,
  Docker: <FaDocker />,
  "CI/CD (GitHub Actions)": <SiGithubactions />,
  "Prompt Engineering": <SiChakraui />,
  "Semantic Search": <SiSemanticweb />,
  React: <FaReact />,
  JavaScript: <FaJsSquare />,
  "Node.js": <FaNodeJs />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  TypeScript: <SiTypescript />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Java: <FaJava />,
  C: <SiC />,
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center gap-2"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skillIcons[skill] || null}
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
