"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Award, Briefcase, CheckCircle2, FolderGit2 } from "lucide-react";

export function About() {
  const stats = [
    {
      label: "Projects Completed",
      value: `${portfolioData.stats.projectsCompleted}+`,
      icon: FolderGit2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Internships Completed",
      value: portfolioData.stats.internships,
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Certifications",
      value: `${portfolioData.stats.certifications}+`,
      icon: Award,
      color: "from-amber-500 to-orange-500",
    },
    {
      label: "Experience",
      value: portfolioData.stats.experienceDuration,
      icon: CheckCircle2,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Passionate About High-Performance Systems & AI
          </h2>
        </div>

        {/* Two-Column About Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Main Story Card */}
          <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              Engineering Background
            </h3>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
              {portfolioData.about}
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {["Java / OOP", "Python", "Flask & FastAPI", "Docker", "REST APIs", "Microservices", "CI/CD", "Machine Learning"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Key Academic Metrics Card */}
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-900/20 via-slate-900/70 to-slate-900/70 border border-blue-500/30 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Academic Performance
                </span>
                <p className="text-4xl font-extrabold text-white mt-2">6.81</p>
                <p className="text-xs text-slate-400 mt-1">CGPA / 10 (B.Tech Computer Engineering)</p>
              </div>
              <p className="text-xs text-blue-300/80 mt-4 font-medium">
                Dr. Babasaheb Ambedkar Technological University
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-900/20 via-slate-900/70 to-slate-900/70 border border-purple-500/30 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                  Graduation Batch
                </span>
                <p className="text-4xl font-extrabold text-white mt-2">2025</p>
                <p className="text-xs text-slate-400 mt-1">No Active Backlogs • Full SDLC Mastery</p>
              </div>
              <p className="text-xs text-purple-300/80 mt-4 font-medium">
                Ready for Full-Time Deployment
              </p>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-md hover:border-blue-500/40 transition-all text-center group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 shadow-md`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <p className="text-3xl font-extrabold text-white tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-slate-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
