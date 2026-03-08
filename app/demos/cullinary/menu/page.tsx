"use client";
import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "@/components/demo/culinary/Navbar";
import FoodItemCard from "@/components/demo/culinary/FoodItemCard";
import { Footer } from "@/components/Footer";
import { useDemoPreview } from "@/hooks/useDemoPreview";

//
function MenuContent() {
  const [activeTab, setActiveTab] = useState("All");
  const demo = useDemoPreview({ brand: "Cocoa & Gold", city: "Lagos" });

  const CATEGORIES = ["All", "Wedding Cakes", "Party Platters", "Corporate Buffets", "Pastries"];
  const MENU_DATA = [
    { id: 1, name: "Gold Leaf Wedding Cake", category: "Wedding Cakes", price: "450,000", img: "https://images.unsplash.com/photo-1535254973040-607b474cb80d" },
    { id: 2, name: "Luxury Seafood Platter", category: "Party Platters", price: "120,000", img: "https://images.unsplash.com/photo-1555244162-803834f70033" },
    { id: 3, name: "Executive Lunch Box", category: "Corporate Buffets", price: "15,000", img: "https://images.unsplash.com/photo-1543353071-873f17a7a088" },
    { id: 4, name: "Salted Caramel Macarons", category: "Pastries", price: "25,000", img: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec" },
  ];

  const filteredItems = activeTab === "All" ? MENU_DATA : MENU_DATA.filter(item => item.category === activeTab);

  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar brandName={demo.brand} />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-serif text-brand-chocolate mb-4">
            {demo.brand} <span className="italic">Menu</span>
          </h1>
          <p className="text-brand-gold tracking-[0.2em] uppercase text-sm">
            Curation of {demo.city}&apos;s Finest Flavors
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${activeTab === cat ? 'bg-brand-chocolate text-white' : 'bg-transparent text-brand-chocolate border-brand-chocolate/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <FoodItemCard name={item.name} price={item.price} image={item.img} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-cream" />}>
      <MenuContent />
    </Suspense>
  );
}