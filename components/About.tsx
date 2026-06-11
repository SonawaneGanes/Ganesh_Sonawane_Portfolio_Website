"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

export function About() {
  const stats = [
    { label: "Projects Completed", value: portfolioData.stats.projectsCompleted },
    { label: "Internships", value: portfolioData.stats.internships },
    { label: "Certifications", value: portfolioData.stats.certifications },
    { label: "Years Experience", value: portfolioData.stats.yearsExperience },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
              <p className="text-gray-300 leading-relaxed text-lg">
                {portfolioData.about}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            variants={itemVariants}
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all">
              <p className="text-3xl font-bold text-blue-400 mb-2">8.34</p>
              <p className="text-gray-300 text-sm">CGPA</p>
            </div>
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all">
              <p className="text-3xl font-bold text-purple-400 mb-2">2025</p>
              <p className="text-gray-300 text-sm">Graduation Batch</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 hover:bg-white/10 transition-all"
              variants={itemVariants}
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
