export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-6">BizSite Studio</h2>
          <p className="text-slate-500 max-w-sm">Building the digital infrastructure for the next generation of service-based entrepreneurs.</p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-[#6366f1]">How it Works</a></li>
            <li><a href="#" className="hover:text-[#6366f1]">Demos</a></li>
            <li><a href="#" className="hover:text-[#6366f1]">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <p className="text-slate-500 text-sm">hello@bizsitestudio.com</p>
          <div className="flex gap-4 mt-6">
            {/* Social Icons would go here */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-50 text-center text-slate-400 text-xs">
        © 2026 BizSite Studio. All rights reserved.
      </div>
    </footer>
  );
}