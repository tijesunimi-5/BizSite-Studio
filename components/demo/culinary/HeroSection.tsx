// components/HeroSection.tsx
"use client";
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535254973040-607b474cb80d?auto=format&fit=crop&q=80"
          alt="Luxury Wedding Cake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 block"
        >
          Exquisite Taste. Seamless Booking.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-brand-cream leading-tight mb-8"
        >
          Premium Cakes & Catering <br /> <span className="italic">in Lagos</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-brand-gold hover:bg-brand-caramel text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
            Book Your Event
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
            View Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}