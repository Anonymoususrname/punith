import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-500 ${
          scrolled || open ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled || open
              ? "glass-strong shadow-[0_8px_40px_-12px_rgba(212,175,55,0.15)]"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f5d97a] via-[#d4af37] to-[#a8852b] flex items-center justify-center font-display font-bold text-black text-lg shadow-lg shadow-[#d4af37]/20">
              N
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-wide">Naveen B</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37]/80 hidden sm:block">
                Video Editor
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-[#d4af37]" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-r from-[#d4af37] to-[#a8852b] text-black hover:shadow-lg hover:shadow-[#d4af37]/30 transition-shadow"
          >
            Hire Me
            <span aria-hidden>→</span>
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-5 h-px bg-white transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span className={`block w-5 h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block w-5 h-px bg-white transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-5 mt-2 rounded-2xl glass-strong p-4 z-50"
          >
            <div className="flex flex-col">
              {links.map((l, i) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive ? "text-[#d4af37] bg-white/5" : "text-white/80 hover:bg-white/5"
                    }`
                  }
                >
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="block"
                  >
                    {l.label}
                  </motion.span>
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-2 rounded-full px-5 py-3 text-center text-sm font-medium bg-gradient-to-r from-[#d4af37] to-[#a8852b] text-black"
              >
                Hire Me →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}