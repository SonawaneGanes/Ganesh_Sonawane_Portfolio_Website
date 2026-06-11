"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code2, Briefcase } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.personal.location,
      href: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      icon: Code2,
      label: "GitHub",
      href: portfolioData.personal.github,
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Briefcase,
      label: "LinkedIn",
      href: portfolioData.personal.linkedin,
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          Open to opportunities with innovative companies. Let&apos;s build something amazing together!
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>

                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {method.label}
                  </h3>
                  <p className="text-gray-300 break-all">{method.value}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`}></div>

                <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center border border-white/20 hover:border-white/50 transition-all`}>
                  <IconComponent size={24} className="text-white" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Ganesh Sonawane. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
