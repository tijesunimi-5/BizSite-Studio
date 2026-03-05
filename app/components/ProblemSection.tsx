const PAIN_POINTS = [
  "Endless WhatsApp back-and-forth",
  "Repeatedly explaining pricing",
  "Clients asking availability late at night",
  "Double-booked appointments",
  "Lack of professional brand identity"
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f172a]">The Manual Booking Trap</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((point, idx) => (
            <div key={idx} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <span className="text-2xl">✕</span>
              </div>
              <p className="text-lg font-semibold text-[#0f172a]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}