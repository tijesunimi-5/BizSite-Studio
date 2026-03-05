"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-white">
      {/* Background Gradient Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6366f1]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#22c55e]/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#6366f1] uppercase bg-indigo-50 rounded-full"
        >
          Elite Booking Systems
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-[#0f172a] leading-[1.1] mb-8 max-w-4xl mx-auto"
        >
          Turn Your Instagram Business Into a <span className="text-[#6366f1]">Professional Booking System</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop losing clients in DMs and WhatsApp. BizSite Studio builds premium booking websites that allow your clients to book services instantly.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ y: -3 }}
            className="px-8 py-4 bg-[#6366f1] text-white rounded-xl font-bold shadow-lg shadow-indigo-200"
          >
            View Live Demo
          </motion.button>
          <motion.button
            whileHover={{ y: -3 }}
            className="px-8 py-4 bg-white border border-slate-200 text-[#0f172a] rounded-xl font-bold hover:bg-slate-50"
          >
            See How It Works
          </motion.button>
        </div>
      </div>
    </section>
  );
}