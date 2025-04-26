"use client";

import React, { useEffect,useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { useTheme } from "@/context/theme-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [pending, setPending] = React.useState(false);
  const { theme } = useTheme();
  const [particles, setParticles] = useState<Array<{left: string, top: string}>>([]);

  useEffect(() => {
    // Generate particles only on client side
    setParticles(
      Array.from({ length: 12 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }))
    );
  }, []);

  const gradientText = theme === 'dark' 
    ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent";

  const gridEffect = theme === 'dark' 
    ? "bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem]"
    : "bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:3rem_3rem]";

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 sm:mb-28 w-full max-w-4xl px-10 pt-4 pb-8 text-center overflow-hidden rounded-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className={`absolute inset-0 ${gridEffect} -z-10`} />
      <div className="absolute inset-0 bg-gradient-to-br dark:from-gray-900/50 dark:to-gray-950/80 from-blue-50/50 to-purple-50/30 -z-20" />

      <SectionHeading>
      <span className={gradientText}>Get in Touch</span>
      </SectionHeading>

      <motion.div
      className="mt-8 group relative backdrop-blur-lg bg-white/20 dark:bg-gray-800/30 rounded-3xl p-8 shadow-2xl border border-white/10 hover:shadow-3xl transition-all overflow-hidden"
      whileHover={{ scale: 1.02 }}
      >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

      <p className="text-lg mb-8 dark:text-gray-300 text-gray-600">
        Let's connect! Reach me at{" "}
        <a 
        href="mailto:lucasppmc@gmail.com" 
        className={`${gradientText} font-medium relative hover:before:w-full before:transition-all before:duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${theme === 'dark' ? 'before:bg-purple-400' : 'before:bg-purple-600'}`}
        >
        Lucasppmc@gmail.com
        </a>{" "}
        or via the portal below
      </p>

      <form
        className="space-y-6"
        action={async (formData) => {
        setPending(true);
        try {
          const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            senderEmail: formData.get("senderEmail"),
            message: formData.get("message"),
          }),
          });

          setPending(false);

          if (!response.ok) {
          const { error } = await response.json();
          toast.error(error || "Message failed to launch!");
          return;
          }

          toast.success("Message transmitted successfully!");
        } catch (error) {
          setPending(false);
          toast.error("Connection anomaly detected!");
        }
        }}
      >
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        >
        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
          className="w-full pl-12 pr-6 py-3 sm:py-4 bg-white/50 dark:bg-gray-700/30 rounded-xl border border-white/20 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500/30 placeholder-gray-400 dark:placeholder-gray-500 transition-all text-sm sm:text-base"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email address"
          />
        </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        >
        <div className="relative">
          <FiMessageSquare className="absolute left-4 top-6 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <textarea
          className="w-full pl-12 pr-6 py-3 sm:py-4 bg-white/50 dark:bg-gray-700/30 rounded-xl border border-white/20 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500/30 placeholder-gray-400 dark:placeholder-gray-500 transition-all text-sm sm:text-base min-h-[100px] sm:min-h-[150px]"
          name="message"
          placeholder="Compose your message..."
          required
          maxLength={5000}
          />
        </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        >
        <SubmitBtn pending={pending} />
        </motion.div>
      </form>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-30">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Animated gradient blob */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob transition-all duration-1000 -z-40" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000 transition-all duration-1000 -z-40" />
    </motion.section>
  );
}