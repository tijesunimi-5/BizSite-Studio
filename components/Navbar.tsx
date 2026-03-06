"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#0f172a]">
          BizSite <span className="text-[#6366f1]">Studio</span>
        </Link>

        <div className="hidden md:flex gap-10 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-[#6366f1] transition-colors">Home</Link>
          <Link href="/#how-it-works" className="hover:text-[#6366f1] transition-colors">How It Works</Link>
          <Link href="/demos" className="hover:text-[#6366f1] transition-colors">Live Demos</Link>
          <Link href="/#benefits" className="hover:text-[#6366f1] transition-colors">Benefits</Link>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6366f1] transition-all"
        >
          <Link href="/demos">View Live Demo</Link>
        </motion.button>
      </div>
    </nav>
  );
}