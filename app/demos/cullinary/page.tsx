"use client";
import { useState, Suspense } from "react";
import Navbar from "@/components/demo/culinary/Navbar";
import HeroSection from "@/components/demo/culinary/HeroSection";
import FoodItemCard from "@/components/demo/culinary/FoodItemCard";
import GalleryGrid from "@/components/demo/culinary/GalleryGrid";
import PricingPackageCard from "@/components/demo/culinary/PricingPackageCard";
import BookingForm from "@/components/demo/culinary/BookingForm";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/Benefits";

// --- NEW IMPORTS FOR CUSTOMIZATION ---
import { useDemoPreview } from "@/hooks/useDemoPreview";
import DemoAlert from "@/components/demo/DemoAlert";
import DemoCustomizer from "@/components/demo/DemoCustomizer";

/**
 * CulinaryContent handles the personalized UI logic.
 * It is separated to be wrapped in a Suspense boundary.
 */
function CulinaryContent() {
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Initialize the preview logic with Culinary-specific defaults
  const demo = useDemoPreview({
    brand: "Maison de Chef",
    city: "Lagos",
    service: "Premium Cakes & Catering"
  });

  return (
    <main className="bg-brand-cream min-h-screen pt-20">
      {/* --- NEW CUSTOMIZATION UI COMPONENTS --- */}
      <DemoAlert
        isPersonalized={demo.isPersonalized}
        brand={demo.brand}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      <DemoCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentData={demo}
      />

      <Navbar brandName={demo.brand} />

      {/* HeroSection uses internal useDemoPreview logic to sync text */}
      <HeroSection />

      {/* Featured Menu Preview */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-brand-chocolate mb-4">Our Signature Creations</h2>
          {/* Dynamic City personalization */}
          <p className="text-brand-charcoal/60 italic">Handcrafted with premium ingredients in the heart of {demo.city}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FoodItemCard name="Velvet Gold Wedding" price="250,000" image="https://images.unsplash.com/photo-1535254973040-607b474cb80d" />
          <FoodItemCard name="Cocoa Truffle Tray" price="45,000" image="https://images.unsplash.com/photo-1548943487-a2e4e43b4853" />
          <FoodItemCard name="The Brunch Platter" price="85,000" image="https://images.unsplash.com/photo-1543353071-873f17a7a088" />
        </div>
      </section>

      {/* Portfolio / Gallery */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-brand-chocolate">The Portfolio</h2>
        </div>
        <GalleryGrid />
      </section>

      {/* Pricing Packages */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <PricingPackageCard
            name="Bronze" price="150,000" guests="20"
            /* Dynamic Delivery City */
            features={["Appetizers only", "Standard setup", "2 Servers", `${demo.city} Delivery`]}
          />
          <PricingPackageCard
            name="Silver" price="450,000" guests="50" isFeatured={true}
            features={["Full Buffet", "Premium Decor", "4 Servers", "Dessert Bar included"]}
          />
          <PricingPackageCard
            name="Gold" price="950,000" guests="100+"
            features={["Plated 3-course service", "Custom Wedding Cake", "Mixologist", "Nationwide availability"]}
          />
        </div>
      </section>

      {/* The Multi-Step Booking Section */}
      <section id="book" className="py-24 bg-brand-chocolate">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl font-serif text-brand-gold mb-4">Reserve Your Date</h2>
          {/* Dynamic Brand personalization */}
          <p className="text-white/60">Fill out our concierge form to secure your spot with {demo.brand}.</p>
        </div>
        <BookingForm />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}

/**
 * The default export wraps the content in Suspense to prevent build errors.
 */
export default function CulinaryDemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-cream animate-pulse" />}>
      <CulinaryContent />
    </Suspense>
  );
}