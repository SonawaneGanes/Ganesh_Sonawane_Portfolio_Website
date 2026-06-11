"use client";

import { motion } from "framer-motion";
import { BookOpen, Trophy } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Education() {
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
    <section id="education" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Education & Certifications
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="text-blue-400" size={28} />
              Academic Background
            </h3>
            <motion.div className="space-y-6" variants={containerVariants}>
              {portfolioData.education.map((edu) => (
                <motion.div
                  key={edu.id}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-400 text-sm font-semibold mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Trophy className="text-purple-400" size={28} />
              Certifications & Achievements
            </h3>

            <motion.div className="space-y-6" variants={containerVariants}>
              {/* Certifications */}
              <motion.div
                className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all"
                variants={itemVariants}
              >
                <h4 className="text-lg font-bold text-purple-400 mb-4">
                  Certifications
                </h4>
                <ul className="space-y-3">
                  {portfolioData.certifications.map((cert, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-1 flex-shrink-0">
                        ✓
                      </span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Achievements */}
              <motion.div
                className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all"
                variants={itemVariants}
              >
                <h4 className="text-lg font-bold text-blue-400 mb-4">
                  Achievements
                </h4>
                <ul className="space-y-3">
                  {portfolioData.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-1 flex-shrink-0">
                        ★
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
