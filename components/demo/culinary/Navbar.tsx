// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="font-serif text-2xl font-bold text-brand-chocolate tracking-tighter">
          COCOA <span className="text-brand-gold">&</span> GOLD
        </span>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-brand-charcoal">
          <a href="/demos/cullinary/menu" className="hover:text-brand-gold transition-colors">Menu</a>
          <a href="/demos/cullinary/gallery" className="hover:text-brand-gold transition-colors">Gallery</a>
          <a href="/demos/cullinary/about" className="hover:text-brand-gold transition-colors">Our Story</a>
        </div>
        <button className="bg-brand-chocolate text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all">
          Book Now
        </button>
      </div>
    </nav>
  );
}