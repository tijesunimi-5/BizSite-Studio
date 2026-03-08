// components/demo/culinary/Navbar.tsx
"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Navbar({ brandName }: { brandName?: string }) {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const suffix = queryString ? `?${queryString}` : "";

  // Fallback to default if no brandName prop is provided
  const displayBrand = brandName || "COCOA & GOLD";

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={`/demos/cullinary${suffix}`} className="font-serif text-2xl font-bold text-brand-chocolate tracking-tighter">
          {displayBrand.toUpperCase().includes("&") ? (
            displayBrand.split("&")[0]
          ) : (
            displayBrand
          )}
          {displayBrand.includes("&") && <span className="text-brand-gold"> & </span>}
          {displayBrand.includes("&") && displayBrand.split("&")[1]}
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-brand-charcoal">
          <Link href={`/demos/cullinary/menu${suffix}`} className="hover:text-brand-gold transition-colors">Menu</Link>
          <Link href={`/demos/cullinary/gallery${suffix}`} className="hover:text-brand-gold transition-colors">Gallery</Link>
          <Link href={`/demos/cullinary/about${suffix}`} className="hover:text-brand-gold transition-colors">Our Story</Link>
        </div>

        <button className="bg-brand-chocolate text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all">
          Book Now
        </button>
      </div>
    </nav>
  );
}