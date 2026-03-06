// components/PricingPackageCard.tsx
import { Check } from 'lucide-react';

interface PackageProps {
  name: string;
  price: string;
  guests: string;
  features: string[];
  isFeatured?: boolean;
}

export default function PricingPackageCard({ name, price, guests, features, isFeatured }: PackageProps) {
  return (
    <div className={`p-8 rounded-[2rem] border-2 transition-all hover:shadow-2xl ${isFeatured ? 'border-brand-gold bg-brand-chocolate text-white scale-105' : 'border-slate-100 bg-white text-brand-charcoal'}`}>
      <h3 className={`font-serif text-3xl mb-2 ${isFeatured ? 'text-brand-gold' : 'text-brand-chocolate'}`}>{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">₦{price}</span>
        <span className="text-sm opacity-70 ml-2">/ {guests} Guests</span>
      </div>
      <ul className="space-y-4 mb-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <Check size={18} className={isFeatured ? "text-brand-gold" : "text-brand-caramel"} />
            {f}
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-xl font-bold transition-colors ${isFeatured ? 'bg-brand-gold text-brand-chocolate hover:bg-white' : 'bg-brand-chocolate text-white hover:bg-brand-gold'}`}>
        Customize Menu
      </button>
    </div>
  );
}