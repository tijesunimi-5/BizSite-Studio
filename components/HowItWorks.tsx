import { Edit3, CalendarCheck, Send, Rocket } from "lucide-react";
import { motion } from "framer-motion"
import AnimatedSection, { itemVariants } from "./AnimatedSection";

const STEPS = [
  { title: "Design", desc: "We craft your premium brand website.", icon: <Edit3 /> },
  { title: "Configure", desc: "Set your hours and services.", icon: <CalendarCheck /> },
  { title: "Launch", desc: "Share your link on Instagram/WhatsApp.", icon: <Send /> },
  { title: "Scale", desc: "Receive confirmed bookings daily.", icon: <Rocket /> },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0f172a]">The Path to Automation</h2>
      </div>
      <AnimatedSection className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {STEPS.map((step, i) => (
          <motion.div key={i} variants={itemVariants} className="relative group">
            <div className="mb-6 w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white transition-all">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">0{i + 1}. {step.title}</h3>
            <p className="text-slate-500">{step.desc}</p>
          </motion.div>
        ))}
      </AnimatedSection>
    </section>
  );
}