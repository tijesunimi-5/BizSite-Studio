// app/page.tsx
import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import ProblemSection from "../app/components/ProblemSection";
import FeatureCard from "./components/FeatureCard";
// import SolutionSection from "../app/components/SolutionSection";
// import HowItWorks from "../app/components/HowItWorks";
// import Benefits from "@/components/Benefits";
// import CTASection from "@/components/CTASection";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSection />
       {/* <SolutionSection />
      <HowItWorks /> */}
      <div id="demos" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Try A Real Booking Website</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Makeup Artist" type="Beauty & Glam" href="/demos/makeup" />
          <FeatureCard title="Culinary Chef" type="Private Dining" href="/demos/chef" />
          <FeatureCard title="Fashion Designer" type="Bespoke Couture" href="/demos/fashion" />
          <FeatureCard title="Small Business" type="Retail & Service" href="/demos/business" />
        </div>
      </div>
      {/* <Benefits />
      <CTASection />
      <Footer /> */}
    </main>
  );
}