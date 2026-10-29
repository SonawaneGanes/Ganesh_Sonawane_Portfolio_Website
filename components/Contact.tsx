"use client";

import React, { useState } from "react";
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

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("Ready to send");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setStatus("loading");
    setStatusMessage("Sending message...");

    const customEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    try {
      if (customEndpoint) {
        const res = await fetch(customEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (res.ok) {
          setStatus("success");
          setStatusMessage("Message sent successfully — thank you!");
          form.reset();
          return;
        }
      }

      // If on Netlify (Netlify Forms AJAX support)
      const isNetlify = typeof window !== "undefined" && window.location.hostname.includes("netlify");
      if (isNetlify) {
        const encodedBody = new URLSearchParams({
          "form-name": "contact",
          name,
          email,
          message,
        }).toString();

        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodedBody,
        });

        if (res.ok) {
          setStatus("success");
          setStatusMessage("Message sent successfully via Netlify Forms!");
          form.reset();
          return;
        }
      }

      // Fallback: Open mailto client directly with prefilled details
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Ganesh,\n\n${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;

      setStatus("success");
      setStatusMessage("Opening your email client to send message...");
      form.reset();
    } catch (err) {
      console.error("Submission error:", err);
      // Graceful mailto fallback on network/fetch error
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Ganesh,\n\n${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;

      setStatus("success");
      setStatusMessage("Opened email client to deliver your message.");
    }
  };

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
                aria-label={link.label}
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
          className="max-w-2xl mx-auto mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            {/* Netlify hidden input */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
            </p>

            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Send a message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Your name"
                required
                className="p-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="p-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              className="w-full mt-4 p-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
            ></textarea>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              <div className="text-sm text-gray-300 text-center sm:text-right">
                {statusMessage}
              </div>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ganesh Sonawane. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
