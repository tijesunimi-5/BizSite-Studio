"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { X, Sparkles } from "lucide-react";

interface DemoCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  currentData: {
    brand: string;
    city: string;
    service: string;
    instagram?: string;
  };
}

export default function DemoCustomizer({ isOpen, onClose, currentData }: DemoCustomizerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [form, setForm] = useState(currentData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("brand", form.brand);
    params.set("city", form.city);
    params.set("service", form.service);
    if (form.instagram) params.set("instagram", form.instagram);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 w-full max-w-lg shadow-2xl border border-slate-100"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="text-indigo-600" size={20} /> Personalize Preview
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Business Name</label>
                <input
                  value={form.brand}
                  onChange={e => setForm({ ...form, brand: e.target.value })}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20"
                  placeholder="e.g. Glow by Sarah"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">City</label>
                  <input
                    value={form.city}
                    onChange={e => setForm({ ...form, city: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20"
                    placeholder="Lagos"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Service</label>
                  <input
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20"
                    placeholder="Bridal Makeup"
                  />
                </div>
              </div>
              <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-500/10">
                Generate Custom Preview
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}