// components/PricingHero.tsx
"use client";
import { motion } from "framer-motion";
import { Currency } from "@/pricing";

interface Props {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

export default function PricingHero({ currency, setCurrency }: Props) {
  return (
    <section className="pt-32 pb-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
          Pricing built for brands <br />
          <span className="text-indigo-600 italic">ready to grow.</span>
        </h1>
        <p className="text-lg text-slate-500 mb-12">
          Simple, transparent pricing for professional websites. No hidden fees.
        </p>

        {/* Currency Toggle */}
        <div className="inline-flex items-center p-1 bg-slate-100 rounded-full relative">
          <motion.div
            className="absolute bg-white rounded-full shadow-sm h-9"
            initial={false}
            animate={{
              width: currency === "USD" ? "70px" : "70px",
              x: currency === "USD" ? 0 : 74,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <button
            onClick={() => setCurrency("USD")}
            className={`relative z-10 w-[70px] py-2 text-xs font-bold transition-colors ${currency === "USD" ? "text-slate-900" : "text-slate-400"
              }`}
          >
            $ USD
          </button>
          <button
            onClick={() => setCurrency("NGN")}
            className={`relative z-10 w-[74px] py-2 text-xs font-bold transition-colors ${currency === "NGN" ? "text-slate-900" : "text-slate-400"
              }`}
          >
            ₦ NGN
          </button>
        </div>
      </motion.div>
    </section>
  );
}