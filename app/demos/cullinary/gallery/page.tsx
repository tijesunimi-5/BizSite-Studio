"use client"
import { Suspense } from "react";
import Navbar from "@/components/demo/culinary/Navbar";
import GalleryGrid from "@/components/demo/culinary/GalleryGrid";
import { Footer } from "@/components/Footer";
import { useDemoPreview } from "@/hooks/useDemoPreview";

function GalleryContent() {
  const demo = useDemoPreview({
    brand: "Cocoa & Gold",
    city: "Lagos",
  });

  return (
    <main className="bg-brand-charcoal min-h-screen">
      {/* Pass the dynamic brand name to the Navbar for syncing */}
      <Navbar brandName={demo.brand} />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-6xl font-serif text-brand-gold mb-6">The Visual Experience</h1>
          <p className="text-white/60 max-w-2xl mx-auto italic">
            A glimpse into the celebrations, weddings, and corporate events we&apos;ve had the honor of catering across {demo.city}.
          </p>
        </div>

        <GalleryGrid />

        <div className="mt-20 text-center">
          <button className="bg-brand-gold text-brand-chocolate px-12 py-5 rounded-full font-bold hover:bg-white transition-all">
            Book {demo.brand}
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Wrapping in Suspense is mandatory to fix the 'useSearchParams' bailout error
export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-charcoal animate-pulse" />}>
      <GalleryContent />
    </Suspense>
  );
}