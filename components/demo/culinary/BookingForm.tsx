// components/BookingForm.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-brand-cream">
      {/* Progress Bar */}
      <div className="flex justify-between mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-1 flex-1 mx-1 rounded-full ${step >= i ? 'bg-brand-gold' : 'bg-slate-100'}`} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-brand-chocolate">Select Your Service</h2>
            <select className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-brand-gold outline-none">
              <option>Wedding Cake</option>
              <option>Corporate Catering</option>
              <option>Birthday / Celebration Cake</option>
              <option>Party Platters</option>
            </select>
            <button onClick={nextStep} className="w-full bg-brand-chocolate text-white py-4 rounded-xl font-bold">Continue</button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-brand-chocolate">Event Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="p-4 rounded-xl border-2 border-slate-100 outline-none" />
              <input type="number" placeholder="Guest Count" className="p-4 rounded-xl border-2 border-slate-100 outline-none" />
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 border border-slate-200 py-4 rounded-xl font-bold">Back</button>
              <button onClick={nextStep} className="flex-1 bg-brand-chocolate text-white py-4 rounded-xl font-bold">Next</button>
            </div>
          </motion.div>
        )}

        {/* Steps 3 & 4 follow similar pattern... */}
      </AnimatePresence>

      <div className="mt-8 p-4 bg-brand-cream rounded-xl border border-brand-gold/20 flex items-center justify-between">
        <span className="text-sm text-brand-chocolate/70">Secure your date with a deposit</span>
        <span className="font-bold text-brand-chocolate">₦10,000</span>
      </div>
    </div>
  );
}