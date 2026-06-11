"use client";

import { motion } from "framer-motion";
import { Code2, Zap } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-purple-400 text-sm font-semibold">
                      {project.subtitle}
                    </p>
                  </div>
                  <Code2 className="text-blue-400 flex-shrink-0" size={24} />
                </div>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-gray-300 text-sm"
                      >
                        <Zap size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                  <p className="text-sm text-gray-400">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
