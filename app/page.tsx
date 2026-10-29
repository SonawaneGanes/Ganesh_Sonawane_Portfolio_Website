import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 overflow-x-hidden selection:bg-blue-600/30 selection:text-blue-200">
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)]"></div>
        {/* Glowing atmospheric orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/15 to-purple-600/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-[35%] -left-32 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute top-[65%] -right-32 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
