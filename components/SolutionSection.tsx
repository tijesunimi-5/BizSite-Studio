"use client"
import { Calendar, CheckCircle2,  MousePointer2,  ShieldCheck,  Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-8"
            >
              <Zap size={14} fill="currentColor" />
              The Upgrade
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-8 leading-[1.1]"
            >
              A Website That Makes Your Brand <br />
              <span className="text-[#6366f1]">Look As Good As Your Work.</span>
            </motion.h2>

            <div className="space-y-10">
              {[
                
                  {
                    icon: <MousePointer2 size={20} />,
                    t: "Professional Brand Presence",
                    d: "A premium website that showcases your services, work, and brand in a way that builds trust with serious clients."
                  },
                  {
                    icon: <ShieldCheck size={20} />,
                    t: "Service & Portfolio Pages",
                    d: "Display your services, pricing, galleries, and brand story in one organised place."
                  },
                  {
                    icon: <Calendar size={20} />,
                    t: "Optional Smart Booking",
                    d: "Allow clients to request bookings or appointments directly through your website."
                  }
                
              ].map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white shadow-lg shadow-indigo-100 rounded-2xl flex items-center justify-center text-[#6366f1] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0f172a] mb-1">{item.t}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Premium UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* The Main "Browser" Window */}
            <div className="bg-[#0f172a] rounded-[2.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] border border-slate-800">
              <div className="bg-slate-900/50 rounded-[2rem] p-8 overflow-hidden">
                {/* Header Mockup */}
                <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-slate-700" />
                    <div className="h-2 w-2 rounded-full bg-slate-700" />
                    <div className="h-2 w-2 rounded-full bg-slate-700" />
                  </div>
                  <div className="h-8 px-4 bg-slate-800 rounded-full flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Live System</span>
                  </div>
                </div>

                {/* Calendar Interface */}
                <div className="grid grid-cols-7 gap-3 mb-8">
                  {[...Array(21)].map((_, i) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.02 }}
                      key={i}
                      className={`aspect-square rounded-xl border ${i === 10 ? 'bg-indigo-600 border-indigo-400' : 'bg-slate-800/50 border-slate-700'}`}
                    />
                  ))}
                </div>

                {/* Glass Card Popover */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[10px] text-indigo-400 font-black uppercase mb-1">Upcoming Booking</p>
                      <p className="text-white font-bold text-sm">Luxury Bridal Session</p>
                    </div>
                    <CheckCircle2 className="text-[#22c55e]" size={20} />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 blur-[80px] -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-[80px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}