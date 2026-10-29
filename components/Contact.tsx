"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("Ready to send");

  const contactMethods = [
    {
      icon: Mail,
      label: "Email Address",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: "from-blue-600 to-cyan-600",
      accent: "text-blue-400",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      color: "from-purple-600 to-indigo-600",
      accent: "text-purple-400",
    },
    {
      icon: MapPin,
      label: "Current Location",
      value: portfolioData.personal.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        portfolioData.personal.location
      )}`,
      color: "from-emerald-600 to-teal-600",
      accent: "text-emerald-400",
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

      // If running on Netlify
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

      // Automatic fallback: mailto client
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Ganesh,\n\n${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;

      setStatus("success");
      setStatusMessage("Opening email client with pre-filled message...");
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Ganesh,\n\n${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;

      setStatus("success");
      setStatusMessage("Opened email client to deliver your message.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Open to full-time AI/ML and Backend Engineering roles, high-impact projects, and collaborations.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.label.includes("Location") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition-all text-center group shadow-lg hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  {method.label}
                </h3>
                <p className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors break-all">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-2xl shadow-2xl max-w-3xl mx-auto">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Hidden honeypot input */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden style={{ display: "none" }}>
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="e.g. rahul@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Share your opportunity or project details..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 transition-all cursor-pointer"
              >
                <Send size={16} />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                {status === "success" && (
                  <CheckCircle2 size={16} className="text-emerald-400" />
                )}
                {status === "error" && (
                  <AlertCircle size={16} className="text-rose-400" />
                )}
                <span>{statusMessage}</span>
              </div>
            </div>
          </form>
        </div>

        {/* Social Links Bar */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {/* GitHub */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-2xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white hover:border-blue-400 hover:scale-110 transition-all shadow-md"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-2xl bg-slate-900/60 border border-white/10 text-blue-400 hover:text-blue-300 hover:border-blue-400 hover:scale-110 transition-all shadow-md"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label="Send Email"
            className="p-3 rounded-2xl bg-slate-900/60 border border-white/10 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 hover:scale-110 transition-all shadow-md"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Footer Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-white/[0.08]">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with Next.js, React 19 & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
