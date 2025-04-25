"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaRobot, FaGuitar, FaDatabase, FaFilm } from "react-icons/fa";
import { FiCode, FiCloud } from "react-icons/fi";
import { useTheme } from "@/context/theme-context";

export default function About() {
  const { ref } = useSectionInView("About");
  const { theme } = useTheme();

  const gradientText = theme === 'dark' 
    ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent";

  return (
    <motion.section
      ref={ref}
      className="relative py-10 mb-28 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      <SectionHeading>
        <span className={gradientText}>About Me</span>
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <motion.div
          className="group relative dark:bg-gray-800/50 bg-white/20 hover:dark:bg-gray-800/70 hover:bg-white/30 backdrop-blur-lg rounded-2xl p-8 transition-all hover:scale-[1.02] shadow-xl hover:shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <FaRobot className="absolute top-4 right-4 text-3xl opacity-30 group-hover:opacity-100 transition-opacity dark:text-purple-400 text-purple-600" />
          <p className="text-lg leading-relaxed dark:text-gray-300 text-gray-700">
            After starting my studies in <span className={`${gradientText} font-semibold`}>Computer Engineering</span> at UERJ, I quickly found a passion for <span className={`${gradientText} font-semibold`}>artificial intelligence</span> and <span className={`${gradientText} font-semibold`}>software automation</span>. To deepen my knowledge, I completed Harvard’s programming courses, along with an AI certification from IBM.
          </p>
        </motion.div>

        <motion.div
          className="group relative dark:bg-gray-800/50 bg-white/20 hover:dark:bg-gray-800/70 hover:bg-white/30 backdrop-blur-lg rounded-2xl p-8 transition-all hover:scale-[1.02] shadow-xl hover:shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <FiCode className="absolute top-4 right-4 text-3xl opacity-30 group-hover:opacity-100 transition-opacity dark:text-blue-400 text-blue-600" />
          <p className="text-lg leading-relaxed dark:text-gray-300 text-gray-700">
            My core stack includes <span className={`${gradientText} font-semibold`}>Python, FastAPI, LangChain, and React</span>. I'm experienced with vector databases, SQL, and integrating LLMs into scalable web applications. What excites me most is using AI to solve real-world problems in creative, efficient ways.
          </p>
        </motion.div>

        <motion.div
          className="group relative dark:bg-gray-800/50 bg-white/20 hover:dark:bg-gray-800/70 hover:bg-white/30 backdrop-blur-lg rounded-2xl p-8 transition-all hover:scale-[1.02] shadow-xl hover:shadow-2xl md:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
            <div className="flex space-x-4 opacity-75 group-hover:opacity-100 transition-opacity">
            <FaGuitar className="text-2xl text-blue-500" />
            <FaFilm className="text-2xl text-blue-500" />
            <FaDatabase className="text-2xl text-blue-500" />
            </div>
          <p className="text-lg leading-relaxed mt-4 dark:text-gray-300 text-gray-700">
            <span className={`${gradientText} font-semibold italic`}>When I'm not coding</span>, I enjoy watching thought-provoking films, exploring new ideas in tech, and learning about systems design. I'm also passionate about staying up-to-date with the latest in AI, cloud, and open-source tools. Additionally, I like music and play the guitar.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-xl font-medium dark:text-gray-300 text-gray-700">
          Currently seeking a <span className={`${gradientText} font-bold underline hover:underline-offset-4 transition-all`}>full-time AI Python Developer</span> role
        </p>
      </motion.div>
    </motion.section>
  );
}