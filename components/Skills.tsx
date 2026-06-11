"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

const skillCategories = [
  {
    name: "Languages",
    skills: portfolioData.skills.languages,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/50",
  },
  {
    name: "Backend",
    skills: portfolioData.skills.backend,
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/50",
  },
  {
    name: "Databases",
    skills: portfolioData.skills.databases,
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/50",
  },
  {
    name: "DevOps & Tools",
    skills: portfolioData.skills.devops,
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/50",
  },
  {
    name: "AI & ML",
    skills: portfolioData.skills.ai_ml,
    color: "from-indigo-500 to-purple-500",
    borderColor: "border-indigo-500/50",
  },
  {
    name: "Core CS",
    skills: portfolioData.skills.coreCS,
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/50",
  },
];

export function Skills() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className={`backdrop-blur-xl bg-gradient-to-br ${category.color}/10 border ${category.borderColor} rounded-2xl p-8 hover:border-opacity-100 transition-all group`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    className={`px-4 py-2 rounded-lg bg-white/10 border ${category.borderColor} text-gray-200 text-sm font-medium hover:bg-white/20 transition-all`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
