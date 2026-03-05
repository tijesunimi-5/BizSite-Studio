export default function FeatureCard({ title, type, href }: { title: string, type: string, href: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl group bg-slate-900 aspect-video flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 opacity-40 group-hover:opacity-60 transition-opacity" />
      <div className="relative text-center z-10 p-6">
        <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-300 text-sm mb-6">{type}</p>
        <button className="px-6 py-2 bg-white text-[#0f172a] rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
          Preview Demo
        </button>
      </div>
    </div>
  );
}