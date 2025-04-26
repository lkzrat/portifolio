"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative"
      style={{ scrollMarginTop: '96px' }}
    >
      {/* Floating timeline arrow indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden sm:block absolute left-[-3.5rem] top-1/3 text-purple-500 dark:text-purple-400"
      >
        <FiArrowDown className="w-8 h-8 animate-bounce" />
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-[96px] sm:hidden from-gray-50 to-transparent dark:from-gray-900 z-20" />
      
      <SectionHeading>
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          My Experience
        </span>
      </SectionHeading>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pl-8 sm:pl-32 py-12 group">
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-purple-400/30 to-transparent dark:from-purple-600/30" />
          
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0 group/item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Animated timeline dot */}
              <div className="absolute left-[-35px] top-1.5 sm:left-[-18px] flex items-center justify-center w-4 h-4">
                <div className="animate-ping absolute w-6 h-6 rounded-full bg-purple-400/20 dark:bg-purple-600/20" />
                <div className="absolute w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-gray-900 z-10" />
              </div>
              
              {/* Enhanced card with hover effect */}
              <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                theme === "light" 
                  ? "bg-white border border-gray-100 hover:border-purple-100" 
                  : "bg-gray-800/50 border border-gray-700 hover:border-purple-500/30"
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg transition-colors ${
                    theme === "light" 
                      ? "bg-purple-100 text-purple-600 group-hover/item:bg-purple-200" 
                      : "bg-gray-700/50 text-purple-400 group-hover/item:bg-gray-700"
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {item.date}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">
                  {item.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}