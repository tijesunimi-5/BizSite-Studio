// components/ServicesSection.tsx
"use client";
import { motion } from "framer-motion";
import { Layout, Image as ImageIcon, Calendar, FileText, Instagram, Smartphone, PenTool } from "lucide-react";

const SERVICES = [
  { title: "Service & Pricing Pages", icon: <FileText className="text-indigo-500" /> },
  { title: "Portfolio / Gallery", icon: <ImageIcon className="text-emerald-500" /> },
  { title: "Online Booking System", icon: <Calendar className="text-indigo-500" /> },
  { title: "Inquiry Forms", icon: <Layout className="text-emerald-500" /> },
  { title: "Instagram Integration", icon: <Instagram className="text-pink-500" /> },
  { title: "Mobile Optimized", icon: <Smartphone className="text-indigo-500" /> },
  { title: "Custom Brand Design", icon: <PenTool className="text-emerald-500" /> },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">What Your Website Can Include</h2>
          <p className="text-slate-500">Every feature is designed to convert visitors into loyal clients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}