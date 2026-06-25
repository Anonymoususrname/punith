import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f5d97a] via-[#d4af37] to-[#a8852b] flex items-center justify-center font-display font-bold text-black">
                N
              </div>
              <div className="font-display text-xl">Naveen B</div>
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
              Premium video editing, color grading, and motion design for creators and brands who care about every frame.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:hello@naveenb.studio" className="hover:text-white transition-colors">
                  hello@naveenb.studio
                </a>
              </li>
              <li>
                <a href="https://wa.me/15555555555" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Naveen B. All rights reserved.</p>
          <p>Crafted with cinematic precision.</p>
        </div>
      </div>
    </footer>
  );
}