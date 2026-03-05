// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import DemoSection from "@/components/DemoSection";
import ProcessSection from "@/components/ProcessSection";
import {CTASection} from "@/components/Benefits";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white selection:bg-indigo-100">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <DeliverablesSection />
      <ProcessSection />
      <DemoSection />
      <CTASection />
      <Footer />
    </main>
  );
}