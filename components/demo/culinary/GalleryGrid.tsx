// components/GalleryGrid.tsx
"use client";
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587", title: "3-Tier Wedding Gold", category: "Weddings" },
  { src: "https://images.unsplash.com/photo-1555244162-803834f70033", title: "Luxury Event Platter", category: "Catering" },
  { src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636", title: "Signature Chocolate Box", category: "Gifts" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", title: "Private Chef Dinner", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591", title: "Artisanal Pizza Event", category: "Parties" },
  { src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3", title: "Birthday Extravaganza", category: "Cakes" },
];

export default function GalleryGrid() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 p-6 max-w-7xl mx-auto">
      {GALLERY_IMAGES.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-lg"
        >
          <img src={item.src} alt={item.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">{item.category}</span>
            <h4 className="text-white font-serif text-xl">{item.title}</h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
}