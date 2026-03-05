import { Smartphone, Zap, MessageSquareOff, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export function Benefits() {
  const benefits = [
    { title: "Professional Edge", icon: <Star />, desc: "Look like a top-tier brand from day one." },
    { title: "24/7 Booking", icon: <Zap />, desc: "Your business never sleeps, even when you do." },
    { title: "Mobile Optimized", icon: <Smartphone />, desc: "Perfect experience on iPhones and Androids." },
    { title: "Zero DM Fatigue", icon: <MessageSquareOff />, desc: "Reduce manual messaging by up to 90%." }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <AnimatedSection key={i} className="p-8 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
            <div className="text-[#6366f1] mb-4">{b.icon}</div>
            <h4 className="text-lg font-bold mb-2">{b.title}</h4>
            <p className="text-slate-500 text-sm">{b.desc}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-[#0f172a] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366f1]/20 blur-[100px]" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your brand?</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Join 100+ service brands who have automated their booking process.
        </p>
        <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105">
          Get Started Now
        </button>
      </div>
    </section>
  );
}