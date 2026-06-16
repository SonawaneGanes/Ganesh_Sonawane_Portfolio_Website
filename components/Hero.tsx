"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Download, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = portfolioData.personal.title;

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isTyping, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 md:px-8 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        className="max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {portfolioData.personal.name}
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="h-20 md:h-24">
          <p className="text-xl md:text-3xl text-gray-300 font-light">
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Building enterprise-grade solutions with AI/ML integration, scalable
          backend systems, and cutting-edge DevOps practices.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href={portfolioData.personal.resumeUrl}
            download
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
          >
            <FileText size={20} />
            Download Resume
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all transform hover:scale-105"
          >
            <Briefcase size={20} />
            LinkedIn
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-700/50 transition-all transform hover:scale-105"
          >
            <Download size={20} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ArrowDown size={32} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
