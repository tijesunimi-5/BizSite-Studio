// components/ProcessSection.tsx
"use client";
import { motion } from "framer-motion";

const STEPS = [
  { number: "01", title: "Strategy & Design", desc: "We map out your brand's unique identity." },
  { number: "02", title: "Feature Setup", desc: "Integration of galleries, forms, and services." },
  { number: "03", title: "Launch Phase", desc: "Your custom URL goes live to the world." },
  { number: "04", title: "Client Discovery", desc: "Your brand attracts high-value customers." },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">The Path to Elevation</h2>
        <div className="grid md:grid-cols-4 gap-12">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <span className="text-6xl font-black text-white/5 absolute -top-10 -left-4">
                {step.number}
              </span>
              <h4 className="text-xl font-bold mb-4 relative z-10">{step.title}</h4>
              <p className="text-slate-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}