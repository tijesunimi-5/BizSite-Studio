// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#6366f115,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next-Gen Brand Experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-[#0f172a] tracking-tight mb-8 leading-[1.05]"
        >
          Websites That Make Your Brand <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
            Look As Good As Your Work
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Most service brands rely only on Instagram to run their business.
          We build premium custom websites that showcase your craft, attract better clients, and simplify your life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="/demos" className="group px-8 py-4 bg-[#0f172a] text-white rounded-full font-bold flex items-center gap-2 hover:bg-indigo-600 transition-all duration-300">
            View Live Demo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Play size={18} fill="currentColor" />
            See How It Works
          </button>
        </motion.div>
      </div>
    </section>
  );
}