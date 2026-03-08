"use client";
import { motion } from "framer-motion";
import {
  Star, MapPin, Plane, ArrowLeft,
  Instagram, ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// --- NEW IMPORTS FOR CUSTOMIZATION ---
import { useDemoPreview } from "@/hooks/useDemoPreview";
import DemoAlert from "@/components/demo/DemoAlert";
import DemoCustomizer from "@/components/demo/DemoCustomizer";

export default function MUADemoPage() {
  const [bookingStep, setBookingStep] = useState(1);

  // --- NEW STATE & HOOK LOGIC ---
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Initialize the preview logic with MUA-specific defaults
  const demo = useDemoPreview({
    brand: "Solange Diya Beauty",
    city: "Los Angeles",
    service: "Luxury Makeup Artistry"
  });

  return (
    <div className="min-h-screen bg-[#FDF8F5] text-[#2D2424] font-sans selection:bg-[#EAC7C7]">

      {/* --- NEW CUSTOMIZATION UI COMPONENTS --- */}
      <DemoAlert
        isPersonalized={demo.isPersonalized}
        brand={demo.brand}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      <DemoCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentData={demo}
      />

      {/* --- Fixed Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#EAC7C7]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-[#2D2424] text-white rounded-full">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Back to Studio</span>
          </Link>

          {/* DYNAMIC BRAND NAME */}
          <h1 className="text-2xl font-serif tracking-tighter lowercase italic font-bold">
            {demo.brand}
          </h1>

          <div className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
            <a href="#booking" className="hover:text-[#D4AF37] transition-colors">Booking</a>
          </div>

          <button className="px-6 py-2 bg-[#2D2424] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#D4AF37] transition-all">
            Book Now
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <div className="flex gap-4 mb-8">
              <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm border border-[#EAC7C7]/20">
                <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" /> 5.0 Reviews
              </span>
              {/* DYNAMIC CITY */}
              <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm border border-[#EAC7C7]/20">
                <MapPin size={12} /> {demo.city}
              </span>
              <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm border border-[#EAC7C7]/20">
                <Plane size={12} /> Travel Ready
              </span>
            </div>

            {/* DYNAMIC SERVICE HEADLINE */}
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
              {demo.service.split(' ').slice(0, -1).join(' ')} <br />
              <span className="italic text-[#D4AF37]">{demo.service.split(' ').pop()}</span>
            </h2>

            <p className="text-lg text-slate-600 max-w-md mb-10 font-light leading-relaxed">
              Enhancing your natural radiance for weddings, red carpets, and life’s most celebrated moments.
            </p>
            <div className="flex gap-4">
              <a href='#booking' className="px-8 py-4 bg-[#2D2424] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform">
                Book Appointment
              </a>
              <a href="/demos/makeup/portfolio" className="px-8 py-4 bg-transparent border border-[#2D2424] rounded-full font-bold text-sm hover:bg-white transition-all">
                View Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#EAC7C7] rounded-[4rem] overflow-hidden shadow-2xl rotate-2">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8WLB5nYIjQ14SzqE6SKUuh-C1lN3feu6Ad49FFJC8m9Fh0hlW4biA8V_F70hWVeN5t8kjhmDeDXAuhzpUYiTNQFvKZIbTkTgJ7yyAMQ41a6GNDW4Q4tdQUJlmWNDfUizYMUVYZDX3QKpk0hIVQK0oK8-PqcZV3Ujf-f3A9PQU-XpBO-2n5Jseo2xmoqCxf2an60qPQYLnxl-XUVRgdzlptUNLOz9NWoF3LAJSkoKM7KzrpCCtJFT1qABKKUcPIAMy6HpLTysYccE" alt="img" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/40 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-serif italic text-3xl">Bridal Glow</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Season 2026</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#EAC7C7]/30 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-4">The Menu</p>
            <h3 className="text-4xl font-serif italic text-[#2D2424]">Curated Beauty Services</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Bridal Luxury", price: "$350", desc: "Full trial, skincare prep, and wedding day glam." },
              { name: "Red Carpet Glam", price: "$150", desc: "Long-wear, high-definition camera ready look." },
              { name: "Soft Glow", price: "$120", desc: "A fresh, dewy enhancement for daily elegance." },
            ].map((service, i) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={i}
                className="p-10 bg-[#FDF8F5] border border-[#EAC7C7]/20 rounded-[3rem] text-center"
              >
                <h4 className="text-2xl font-serif mb-2">{service.name}</h4>
                <p className="text-sm text-slate-500 mb-6 font-light">{service.desc}</p>
                <p className="text-xl font-bold text-[#D4AF37] mb-8 tracking-tighter">{service.price}</p>
                <button className="w-full py-3 border border-[#2D2424] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#2D2424] hover:text-white transition-all">
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Booking Flow --- */}
      <section id="booking" className="py-24 bg-[#FDF8F5]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-xl border border-[#EAC7C7]/30 p-8 md:p-12">
            <div className="flex justify-between mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${bookingStep >= s ? 'bg-[#2D2424] text-white border-[#2D2424]' : 'border-slate-200 text-slate-400'}`}>
                    {s}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">
                    {s === 1 ? 'Service' : s === 2 ? 'Date & Time' : 'Details'}
                  </span>
                </div>
              ))}
            </div>

            {bookingStep === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h4 className="text-2xl font-serif italic mb-6">Choose your experience</h4>
                {['Bridal Makeup', 'Full Glam', 'Consultation'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setBookingStep(2)}
                    className="w-full p-6 text-left border border-slate-100 rounded-2xl hover:border-[#EAC7C7] hover:bg-[#FDF8F5] flex justify-between items-center transition-all group"
                  >
                    <span className="font-bold text-slate-700">{item}</span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-[#D4AF37]" />
                  </button>
                ))}
              </motion.div>
            )}

            {bookingStep === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h4 className="text-2xl font-serif italic mb-6">Select a date</h4>
                <div className="grid grid-cols-7 gap-2 mb-8 text-center">
                  {[...Array(7)].map((_, i) => (
                    <button key={i} className={`py-4 rounded-xl border text-sm font-bold ${i === 3 ? 'bg-[#D4AF37] border-[#D4AF37] text-white' : 'border-slate-50 text-slate-400'}`}>
                      {14 + i}<br /><span className="text-[9px] uppercase">Mar</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setBookingStep(3)}
                  className="w-full py-4 bg-[#2D2424] text-white rounded-full font-bold"
                >
                  Continue to Details
                </button>
              </motion.div>
            )}

            {bookingStep === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-1 ring-[#EAC7C7]" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-1 ring-[#EAC7C7]" />
                <button
                  onClick={() => alert("Booking Confirmed!")}
                  className="w-full py-4 bg-[#D4AF37] text-white rounded-full font-bold shadow-lg shadow-[#D4AF37]/20 mt-4"
                >
                  Confirm Appointment
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-16 bg-[#2D2424] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          {/* DYNAMIC FOOTER BRAND */}
          <h2 className="text-3xl font-serif italic mb-8">{demo.brand}</h2>
          <div className="flex justify-center gap-6 mb-12">
            <Instagram className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <span className="text-xs tracking-[0.3em] font-bold uppercase">{demo.city} • London • NYC</span>
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest border-t border-white/10 pt-8">
            © 2026 {demo.brand}. Designed by BizSite Studio.
          </p>
        </div>
      </footer>
    </div>
  );
}