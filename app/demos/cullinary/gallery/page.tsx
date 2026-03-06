// app/gallery/page.tsx
import Navbar from "@/components/demo/culinary/Navbar";
import GalleryGrid from "@/components/demo/culinary/GalleryGrid";
import { Footer } from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main className="bg-brand-charcoal min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-6xl font-serif text-brand-gold mb-6">The Visual Experience</h1>
          <p className="text-white/60 max-w-2xl mx-auto italic">
            A glimpse into the celebrations, weddings, and corporate events we&apos;ve had the honor of catering across Nigeria.
          </p>
        </div>

        {/* We use the masonry grid component from the previous code block */}
        <GalleryGrid />

        <div className="mt-20 text-center">
          <button className="bg-brand-gold text-brand-chocolate px-12 py-5 rounded-full font-bold hover:bg-white transition-all">
            Book Your Event Style
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}