"use client";

import { motion } from "framer-motion";
import { Code2, Zap, ExternalLink, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Selected enterprise applications, generative AI pipelines, and computer vision systems built with modern architectures.
          </p>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Title & Subtitle */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-blue-400 transition-all"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="pt-4 border-t border-white/[0.08] mb-6 space-y-2">
                  <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
                    Core Architecture Features
                  </p>
                  {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <Zap size={14} className="text-amber-400 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2.5 text-xs text-emerald-400 font-medium">
                <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0" />
                <span>{project.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
