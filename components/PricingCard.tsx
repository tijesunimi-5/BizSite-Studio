// components/PricingCard.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { Currency, formatPrice } from "@/pricing";

interface PricingCardProps {
  title: string;
  price: number;
  currency: Currency;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, currency, description, features, isPopular }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-[2rem] border transition-all duration-300 flex flex-col h-full bg-white 
        ${isPopular ? 'border-indigo-500 shadow-2xl shadow-indigo-100' : 'border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300'}`}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          Most Popular
        </span>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={`${price}-${currency}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-4xl font-black text-slate-900 tracking-tight"
          >
            {formatPrice(price, currency)}
          </motion.span>
        </AnimatePresence>
        <span className="text-slate-400 text-sm font-medium">/project</span>
      </div>

      <div className="space-y-4 mb-10 flex-grow">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isPopular ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="text-sm text-slate-600 font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <Link href="/contact" className="block">
        <button className={`w-full py-4 rounded-xl font-bold transition-all transform active:scale-95 
          ${isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
          Get Started
        </button>
      </Link>
    </motion.div>
  );
}