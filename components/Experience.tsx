"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative"
              variants={itemVariants}
            >
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  {index < portfolioData.experience.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-blue-500/50 to-transparent mt-4"></div>
                  )}
                </div>

                <div className="pb-8 flex-1">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-gray-300 text-sm"
                        >
                          <span className="text-purple-400 mt-1 flex-shrink-0">
                            ▸
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
