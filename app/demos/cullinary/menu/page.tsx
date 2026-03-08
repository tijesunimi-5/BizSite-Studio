"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "@/components/demo/culinary/Navbar";
import FoodItemCard from "@/components/demo/culinary/FoodItemCard";
import { Footer } from "@/components/Footer";
// --- NEW IMPORTS FOR CUSTOMIZATION ---
import { useDemoPreview } from "@/hooks/useDemoPreview";

const CATEGORIES = ["All", "Wedding Cakes", "Party Platters", "Corporate Buffets", "Pastries"];

const MENU_DATA = [
  { id: 1, name: "Gold Leaf Wedding Cake", category: "Wedding Cakes", price: "450,000", img: "https://images.unsplash.com/photo-1535254973040-607b474cb80d" },
  { id: 2, name: "Luxury Seafood Platter", category: "Party Platters", price: "120,000", img: "https://images.unsplash.com/photo-1555244162-803834f70033" },
  { id: 3, name: "Executive Lunch Box", category: "Corporate Buffets", price: "15,000", img: "https://images.unsplash.com/photo-1543353071-873f17a7a088" },
  { id: 4, name: "Salted Caramel Macarons", category: "Pastries", price: "25,000", img: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec" },
  // ... more items
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("All");

  // --- NEW STATE & HOOK LOGIC ---
  // Initialize the preview logic with Culinary-specific defaults
  const demo = useDemoPreview({
    brand: "Cocoa & Gold",
    city: "Lagos",
  });

  const filteredItems = activeTab === "All"
    ? MENU_DATA
    : MENU_DATA.filter(item => item.category === activeTab);

  return (
    <main className="bg-brand-cream min-h-screen">
      {/* Pass personalized brand name to Navbar */}
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${activeTab === cat
                ? 'bg-brand-chocolate text-white border-brand-chocolate'
                : 'bg-transparent text-brand-chocolate border-brand-chocolate/20 hover:border-brand-gold'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
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