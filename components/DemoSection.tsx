// components/DemoSection.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Utensils, Scissors, Camera } from "lucide-react";
import Link from "next/link";

const DEMOS = [
  {
    title: "Makeup Artist",
    category: "Beauty & Glamour",
    icon: <Sparkles size={20} />,
    image: "bg-gradient-to-br from-pink-100 to-rose-200", // Replace with real images later
    link: "/demos/makeup",
  },
  {
    title: "Culinary Brand",
    category: "Private Chef & Catering",
    icon: <Utensils size={20} />,
    image: "bg-gradient-to-br from-orange-100 to-amber-200",
    link: "/demos/chef",
  },
  {
    title: "Fashion Designer",
    category: "Bespoke Couture",
    icon: <Scissors size={20} />,
    image: "bg-gradient-to-br from-indigo-100 to-slate-200",
    link: "/demos/fashion",
  },
  {
    title: "Photographer",
    category: "Visual Storytelling",
    icon: <Camera size={20} />,
    image: "bg-gradient-to-br from-cyan-100 to-blue-200",
    link: "/demos/photography",
  },
];

export default function DemoSection() {
  return (
    <section id="demos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            >
              See A Real <span className="text-[#6366f1]">Example</span>
            </motion.h2>
            <p className="text-slate-500 text-lg">
              Explore how we transform standard service businesses into elite digital brands.
              Click a demo to see the experience your clients deserve.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/demos"
              className="text-[#6366f1] font-bold flex items-center gap-2 group border-b-2 border-transparent hover:border-[#6366f1] transition-all pb-1"
            >
              View All Demos
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEMOS.map((demo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm"
            >
              {/* Background Mockup Layer */}
              <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-110 ${demo.image}`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Glass Content Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-[2rem] shadow-xl transition-all group-hover:bg-white/90">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-[#0f172a] text-white rounded-lg">
                          {demo.icon}
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                          {demo.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#0f172a] mb-1">{demo.title} Website</h3>
                      <p className="text-slate-600 text-sm">Custom features & high-end UI</p>
                    </div>

                    <Link
                      href={demo.link}
                      className="bg-[#0f172a] text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#6366f1] transition-colors shadow-lg"
                    >
                      <ArrowUpRight size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Showcase Micro-interaction */}
        <div className="mt-20 py-10 border-y border-slate-50 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee items-center gap-12 text-slate-300 font-bold uppercase tracking-[0.2em] text-sm">
            <span>Makeup Artists</span>
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            <span>Beauty Studios</span>
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            <span>Culinary Brands</span>
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            <span>Fashion Designers</span>
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            <span>Photographers</span>
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            <span>Personal Brands</span>
            <div className="w-2 h-2 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}