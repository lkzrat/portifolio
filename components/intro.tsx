"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThreeDModel from "./ThreeDModel";
import MeImg from "../public/me.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col items-center justify-center w-full h-auto overflow-hidden scroll-mt-0 pt-[8.5rem]"
    >
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center gap-2">
      <div className="text-center sm:text-left max-w-[50rem]">
        <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          >
          <Image
            src={MeImg}
            alt="Lucas Pacheco's portrait"
            width="256"
            height="256"
            quality="95"
            priority={true}
            className="h-[10.5rem] w-[10.5rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            style={{ objectPosition: "center center" }}
          />
          </motion.div>

          <motion.span
          className="absolute bottom-0 right-0 text-4xl"
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
        </div>
        </div>

        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xlmb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl max-w-[25rem] lg:max-w-full md:max-w-full sm:max-w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
        <span className="font-bold">Hello, I'm Lucas.</span> I'm an{" "}
        <span className="font-bold">AI Python developer</span> specializing
        in <span className="font-bold">machine learning</span> and{" "}
        <span className="font-bold">automation solutions</span>. I have{" "}
        <span className="font-bold">3+ years of experience</span> building{" "}
        <span className="italic">AI-powered applications</span> and
        optimizing systems for <span className="underline">scalability</span>{" "}
        and <span className="underline">efficiency</span>.
        </motion.h1>
      </div>
      <div className="w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] md:w-[40rem] md:h-[40rem] lg:w-[31.25rem] lg:h-[37.5rem]">
        <ThreeDModel />
      </div>
      </div>
    </section>
  );
}
