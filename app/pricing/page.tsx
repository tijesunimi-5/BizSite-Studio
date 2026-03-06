// app/pricing/page.tsx
"use client";
import { useEffect, useState } from "react";
import PricingHero from "@/components/PricingHero";
import PricingCard from "@/components/PricingCard";
import { PRICING_DATA, Currency } from "@/pricing";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    // Automatic IP detection
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code === "NG") {
          setCurrency("NGN");
        }
      })
      .catch(() => console.log("Geolocation failed, defaulting to USD"));
  }, []);

  return (
    <main className="bg-[#fafafa] min-h-screen">
      <PricingHero currency={currency} setCurrency={setCurrency} />

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        <PricingCard
          title="Starter Website"
          description="Perfect for individual creatives looking for a professional online home."
          currency={currency}
          price={PRICING_DATA.starter[currency]}
          features={[
            "Custom website design",
            "Mobile responsive",
            "Services & portfolio pages",
            "Contact / inquiry form",
            "Social media integration",
            "Basic SEO setup",
          ]}
        />
        <PricingCard
          isPopular
          title="Professional Website"
          description="Best for growing brands that need automation and booking efficiency."
          currency={currency}
          price={PRICING_DATA.pro[currency]}
          features={[
            "Everything in Starter",
            "Booking system setup",
            "Client inquiry automation",
            "Advanced portfolio showcase",
            "Google Map integration",
            "Advanced SEO structure",
          ]}
        />
        <PricingCard
          title="Premium Brand Website"
          description="For established brands requiring high-performance custom UI."
          currency={currency}
          price={PRICING_DATA.premium[currency]}
          features={[
            "Everything in Professional",
            "Custom Brand UI design",
            "Advanced Animations",
            "Blog / Content Section",
            "Booking + Payment Integration",
            "Priority Support",
          ]}
        />
      </section>

      {/* Trust Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What every BizSite Studio website includes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 max-w-4xl mx-auto">
            {[
              "Fast performance",
              "SEO optimized structure",
              "Mobile-first design",
              "Easy to update",
              "Modern technologies",
              "Conversion-focused",
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#22c55e]" />
                <span className="text-slate-600 font-semibold">{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}