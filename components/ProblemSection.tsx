"use client";
import { motion } from "framer-motion";
import { MessageCircleX, AlertCircle, Clock1, UserMinus, ShieldAlert } from "lucide-react";

const PAIN_POINTS = [
  { text: "Your brand only lives on Instagram", icon: <MessageCircleX size={24} /> },
  { text: "Clients constantly asking the same questions", icon: <AlertCircle size={24} /> },
  { text: "Important information buried in DMs", icon: <Clock1 size={24} /> },
  { text: "Serious clients unsure how to book you", icon: <UserMinus size={24} /> },
  { text: "No professional website representing your brand", icon: <ShieldAlert size={24} /> },
];

export default function ProblemSection() {
  return (
    <section className="py-32 bg-[#fafafa] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#6366f1] font-bold tracking-widest uppercase text-sm"
          >
            The Cost of Manual Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-4"
          >
            Your brand deserves more than <span className="text-slate-400 italic">just Instagram DMs.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-10 bg-white border border-slate-200/60 rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all group hover:border-indigo-200 ${idx === 0 || idx === 3 ? "md:col-span-2" : "md:col-span-1"
                }`}
            >
              <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-red-50 group-hover:text-red-500 transition-colors duration-500">
                {point.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0f172a] leading-tight tracking-tight">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}