// app/demos/cullinary/about/page.tsx
"use client"
import { Suspense } from "react"; //
import Navbar from "@/components/demo/culinary/Navbar";
import { Footer } from "@/components/Footer";
import { Award, Heart, ShieldCheck, Truck } from "lucide-react";
import { useDemoPreview } from "@/hooks/useDemoPreview";

function AboutContent() {
  const demo = useDemoPreview({
    brand: "Cocoa & Gold",
    city: "Lagos",
  });

  return (
    <main className="bg-brand-cream">
      <Navbar brandName={demo.brand} />
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
          <h1 className="text-6xl font-serif text-brand-chocolate mb-8">
            Meet the Chef at <span className="italic">{demo.brand}</span>
          </h1>
          <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-6">
            With over 12 years of culinary expertise, our team at {demo.brand} founded this studio to bridge the gap between luxury aesthetics and soulful flavors.
          </p>
          <p className="text-brand-charcoal/80 text-lg leading-relaxed">
            What started as a boutique bakery has grown into one of {demo.city}&apos;s most sought-after catering studios.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548" alt="Chef" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {[
            { icon: <Award />, t: "Award Winning", d: `Voted ${demo.city} Best Bakery 2024` },
            { icon: <Heart />, t: "Fresh Ingredients", d: "Sourced from organic local farms" },
            { icon: <ShieldCheck />, t: "Quality Control", d: "5-Star Health & Safety Rating" },
            { icon: <Truck />, t: "Prompt Delivery", d: "Real-time tracking for all orders" }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold group-hover:bg-brand-chocolate group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="font-bold text-brand-chocolate mb-2">{item.t}</h4>
              <p className="text-sm text-brand-charcoal/60">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-cream" />}>
      <AboutContent />
    </Suspense>
  );
}