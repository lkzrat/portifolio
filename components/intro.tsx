"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThreeDModel from "./ThreeDModel";
import MeImg from "../public/me.jpg";
import { useTheme } from "@/context/theme-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  const gradientText = theme === 'dark' 
    ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent";

  return (
    <motion.section
      ref={ref}
      id="home"
      className="flex flex-col items-center justify-center w-full h-auto overflow-hidden scroll-mt-0 pt-[8.5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center gap-2">
        <div className="text-center sm:text-left max-w-[50rem]">
          <div className="flex items-center justify-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative inline-block group"
              >
                <motion.div
                  className="relative rounded-full border-4 border-white/20 shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={MeImg}
                    alt="Lucas Pacheco's portrait"
                    width="400"
                    height="400"
                    quality="100"
                    priority
                    className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover"
                  />
                </motion.div>

                <motion.span
                  className="absolute bottom-0 right-0 text-4xl group-hover:animate-shake"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                  }}
                >
                  👋
                </motion.span>
              </motion.div>
            </div>
          </div>

          <motion.h1
            className="mb-10 mt-4 px-4 text-3xl font-medium !leading-[1.2] sm:text-4xl lg:text-5xl max-w-[25rem] lg:max-w-full md:max-w-full sm:max-w-full lg:text-left text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="block">Hi, I'm Lucas</span>
            <span className={gradientText}>AI Python Developer</span>
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 leading-[1.2] block mt-1">
              Building Intelligent Solutions
            </span>
            <br />
            <span className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-[1.2] block mt-1">
              Specializing in <span className={gradientText}>Machine Learning</span>,{" "}
              <span className={gradientText}>Automation</span>, and{" "}
              <span className={gradientText}>Full-Stack Development</span>.
              Transforming complex problems into elegant AI-driven solutions.
            </span>
          </motion.h1>
        </div>
        <div
          className="w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] md:w-[40rem] md:h-[40rem] lg:w-[31.25rem] lg:h-[37.5rem]"
          style={{ zIndex: 998 }}
        >
          <ThreeDModel />
        </div>
      </div>
    </motion.section>
  );
}
