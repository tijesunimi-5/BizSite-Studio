"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Construction, Sparkles, Send } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-6 pt-20">
        <div className="max-w-2xl w-full text-center">
          {/* Animated Icon Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-24 h-24 bg-indigo-50 rounded-[2rem] flex items-center justify-center text-[#6366f1] relative z-10">
              <Construction size={40} strokeWidth={1.5} />
            </div>
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-indigo-200 blur-3xl opacity-30 -z-10 animate-pulse" />
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-4 block">
              Status: In Development
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight">
              This service isn&apos;t <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
                available yet.
              </span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
              We’re currently refining this experience to meet our premium standards.
              Check back soon or explore our active demos.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/demos">
              <button className="px-8 py-4 bg-[#0f172a] text-white rounded-full font-bold flex items-center gap-2 hover:bg-indigo-600 transition-all active:scale-95">
                Explore Live Demos
                <Sparkles size={18} />
              </button>
            </Link>

            <Link href="/">
              <button className="px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95">
                <ArrowLeft size={18} />
                Return Home
              </button>
            </Link>
          </motion.div>

          {/* Notify Me - Micro Interaction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-10 border-t border-slate-100"
          >
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Want to know when it drops?
            </p>
            <form className="max-w-xs mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-1 ring-indigo-500"
              />
              <button className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      <footer className="py-10 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
        © BizSite Studio • Building Excellence
      </footer>
    </div>
  );
}