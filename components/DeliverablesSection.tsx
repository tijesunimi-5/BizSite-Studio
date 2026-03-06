import { Check } from "lucide-react";
import Image from "next/image";

const DELIVERABLES = [
  "Fully custom brand website design",
  "Mobile-optimized responsive layout",
  "Online booking system for appointments",
  "Service & pricing packages display",
  "Portfolio / work showcase gallery",
  "Instagram content integration",
  "Client testimonials section",
  "Secure contact & inquiry forms",
  "Google Maps & location integration",
  "Basic SEO optimization for visibility",
  "Speed & performance optimization",
  "Analytics & visitor tracking setup",
  "Social media integration",
  "Launch support after delivery"
];

export default function DeliverablesSection() {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-6">What You Get</h2>

          <p className="text-slate-500 mb-8 text-lg">
            This isn’t just a website. It’s a complete digital platform designed
            to help your brand attract clients, showcase your work, and make
            booking your services effortless.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {DELIVERABLES.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#22c55e]/10 rounded-full flex items-center justify-center">
                  <Check size={14} className="text-[#22c55e]" />
                </div>

                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 inline-block">
            <p className="text-sm font-bold text-[#0f172a]">
              Typical Delivery Timeline
            </p>
            <p className="text-2xl font-black text-indigo-600">
              2–5 Business Days
            </p>
          </div>
        </div>

        <div className="relative aspect-square bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden group">

          {/* Image */}
          <Image
            src="/temp.jpg"
            alt="BizSite website preview"
            fill
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

          {/* Label */}
          <div className="absolute bottom-6 left-6">
            <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold tracking-widest text-slate-700 uppercase shadow">
              Website Preview
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}