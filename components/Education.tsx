"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Star } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-indigo-400 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            Qualifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Formal computer engineering foundations combined with continuous industry specialization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Academic Background Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white">Academic Degrees</h3>
            </div>

            {portfolioData.education.map((edu) => (
              <motion.div
                key={edu.id}
                whileHover={{ y: -3 }}
                className="p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-lg hover:border-blue-500/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 w-fit">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-slate-300 mb-4">
                  {edu.institution}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.08]">
                  {edu.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 border border-white/5"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Industry Recognition Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Award size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white">Verified Certifications</h3>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-lg space-y-3.5">
              {portfolioData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/60 border border-white/5 hover:border-purple-500/30 transition-all"
                >
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notable Achievements Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-blue-500/30 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-2.5 mb-4">
            <Star className="text-amber-400 fill-amber-400" size={20} />
            <h3 className="text-xl font-bold text-white">Key Achievements & Highlights</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {portfolioData.achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/30 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
