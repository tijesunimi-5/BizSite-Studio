"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Sparkles, Utensils, Scissors, Camera, Laptop, Brush } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import {Footer} from "@/components/Footer";

const CATEGORIES = ["All", "Beauty", "Culinary", "Fashion", "Creative"];

const DEMO_PROJECTS = [
  {
    id: 1,
    title: "Solange Diya Beauty",
    category: "Beauty",
    niche: "Makeup Artist",
    image: "http://googleusercontent.com/image_collection/image_retrieval/7585948952554917005_0",
    link: "/demos/makeup",
    color: "bg-rose-50",
    features: ["Online Booking", "Service Menu", "Client Gallery"]
  },
  {
    id: 2,
    title: "Maison de Chef",
    category: "Culinary",
    niche: "Private Dining",
    image: "http://googleusercontent.com/image_collection/image_retrieval/1279824143866736345_0",
    link: "/demos/cullinary",
    color: "bg-amber-50",
    features: ["Menu Showcase", "Event Inquiry", "Recipe Blog"]
  },
  {
    id: 3,
    title: "Aura Atelier",
    category: "Fashion",
    niche: "Bespoke Couture",
    image: "http://googleusercontent.com/image_collection/image_retrieval/3539292989329160999_0",
    link: "/demos/fashion",
    color: "bg-indigo-50",
    features: ["Measurement Forms", "Portfolio", "Instagram Feed"]
  },
  {
    id: 4,
    title: "Lens & Light",
    category: "Creative",
    niche: "Photography",
    image: "http://googleusercontent.com/image_collection/image_retrieval/2199422031121699847_0",
    link: "/demos/photography",
    color: "bg-cyan-50",
    features: ["Image Licensing", "Session Booking", "Client Portal"]
  }
];

export default function DemosPage() {
  const [filter, setFilter] = useState("All");

  const filteredDemos = filter === "All"
    ? DEMO_PROJECTS
    : DEMO_PROJECTS.filter(d => d.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#6366f1] transition-colors mb-8 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-[#0f172a] mb-6 tracking-tight">
              Live <span className="text-[#6366f1]">Demos</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Experience the digital infrastructure we build for elite service brands.
              Each demo is a fully functional preview of how your brand could look and operate.
            </p>
          </motion.div>
        </section>

        {/* Filter Bar */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap gap-4 border-b border-slate-100 pb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                    ? "bg-[#0f172a] text-white shadow-lg"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Demos Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredDemos.map((demo, idx) => (
              <motion.div
                layout
                key={demo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <Link href={demo.link}>
                  <div className={`relative aspect-[16/10] rounded-[2.5rem] overflow-hidden ${demo.color} border border-slate-100 mb-8`}>
                    <img
                      src={demo.image}
                      alt={demo.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Floating Badge */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <div className="bg-white/90 backdrop-blur-md p-4 rounded-full text-[#0f172a] shadow-xl">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start px-2">
                    <div>
                      <span className="text-xs font-bold text-[#6366f1] uppercase tracking-[0.2em] mb-2 block">
                        {demo.niche}
                      </span>
                      <h3 className="text-3xl font-bold text-[#0f172a] mb-4 group-hover:text-[#6366f1] transition-colors">
                        {demo.title}
                      </h3>
                      <div className="flex gap-2">
                        {demo.features.map(f => (
                          <span key={f} className="text-[10px] font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-md uppercase">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* "Don't See Your Niche?" Section */}
        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-slate-200/50">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Don’t see your industry?</h2>
              <p className="text-slate-500">
                We build custom solutions for all service-based brands. From personal trainers to architectural firms, we adapt to your specific workflow.
              </p>
            </div>
            <a href="https://wa.me/09152282614?text=Hi%20BizSite%20Studio,%20I%20need%20a%20custom%20website%20for%20my%20brand" className="px-10 py-5 bg-[#0f172a] text-white rounded-full font-bold hover:bg-indigo-600 transition-all flex items-center gap-3">
              Request a Custom Concept
              <Laptop size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}