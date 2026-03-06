import { InstagramIcon, MessageSquare, Music } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-6">BizSite Studio</h2>
          <p className="text-slate-500 max-w-sm">Building the digital infrastructure for the next generation of service-based entrepreneurs.</p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-slate-700">Explore</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><Link href="/#how-it-works" className="hover:text-[#6366f1]">How it Works</Link></li>
            <li><a href="/demos" className="hover:text-[#6366f1]">Demos</a></li>
            <li><a href="/pricing" className="hover:text-[#6366f1]">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-slate-700">Contact</h4>
          <p className="text-slate-500 text-sm">tijesunimiidowu16@gmail.com</p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/bizsitestudio" className="text-red-500">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/09152282614" className="text-green-500">
              <MessageSquare />
            </a>
            {/* <a href="" className="text-black">
              <Music />
            </a> */}
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