"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After starting my studies in <span className="font-medium">Computer Engineering</span> at UERJ, I quickly found a passion for <span className="font-medium">artificial intelligence</span> and <span className="font-medium">software automation</span>. To deepen my knowledge, I completed Harvard’s programming courses, along with an AI certification from IBM. I <span className="italic">love creating smart solutions</span>, and coding is the tool to make it real.
      </p>

      <p className="mb-3">
        My core stack includes <span className="font-medium">Python, FastAPI, LangChain, and React</span>, and I’m experienced with vector databases, SQL, and integrating LLMs into scalable web applications. What excites me most is using AI to solve real-world problems in creative, efficient ways. I’m currently looking for a <span className="font-medium">full-time role as an AI Python Developer</span>, where I can continue building intelligent systems and growing with a forward-thinking team.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I enjoy watching thought-provoking films, exploring new ideas in tech, and learning about systems design. I’m also passionate about staying up-to-date with the latest in AI, cloud, and open-source tools. Additionally, I like music and play the guitar.
      </p>
    </motion.section>
  );
}
