"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Code2, Server, Database, Cpu, Sparkles, Layers } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: Code2,
      skills: portfolioData.skills.languages,
      gradient: "from-blue-500 to-cyan-500",
      accent: "text-blue-400",
      borderHover: "hover:border-blue-500/50",
    },
    {
      name: "Backend Architecture",
      icon: Server,
      skills: portfolioData.skills.backend,
      gradient: "from-purple-500 to-indigo-500",
      accent: "text-purple-400",
      borderHover: "hover:border-purple-500/50",
    },
    {
      name: "AI & Machine Learning",
      icon: Sparkles,
      skills: portfolioData.skills.ai_ml,
      gradient: "from-pink-500 to-rose-500",
      accent: "text-pink-400",
      borderHover: "hover:border-pink-500/50",
    },
    {
      name: "Databases & Storage",
      icon: Database,
      skills: portfolioData.skills.databases,
      gradient: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400",
      borderHover: "hover:border-emerald-500/50",
    },
    {
      name: "DevOps & Tooling",
      icon: Cpu,
      skills: portfolioData.skills.devops,
      gradient: "from-amber-500 to-orange-500",
      accent: "text-amber-400",
      borderHover: "hover:border-amber-500/50",
    },
    {
      name: "Core Computer Science",
      icon: Layers,
      skills: portfolioData.skills.coreCS,
      gradient: "from-cyan-500 to-blue-500",
      accent: "text-cyan-400",
      borderHover: "hover:border-cyan-500/50",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-400 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Core competencies developed through enterprise internships, hands-on production engineering, and academic rigor.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl ${category.borderHover} transition-all duration-300 flex flex-col justify-between group shadow-lg`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-md`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-white/5 text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 hover:bg-slate-700/80 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
