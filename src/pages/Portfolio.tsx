import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Category, type Project } from "../data";
import Lightbox from "../components/Lightbox";

const categories: ("All" | Category)[] = [
  "All",
  "Wedding Films",
  "Commercial Ads",
  "Social Media Reels",
  "Cinematic Edits",
];

export default function Portfolio() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="relative pt-32 sm:pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-4">Portfolio</div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05]">
            A reel of <span className="gold-text italic">cinematic</span> moments.
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl">
            Weddings, commercials, reels, and cinematic edits — explore the work I've poured my craft into.
          </p>
        </motion.div>

        {/* Category pills */}
        <div className="mt-12 flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5 sm:mx-0 sm:px-0">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 border ${
                active === c
                  ? "bg-[#d4af37] text-black border-[#d4af37]"
                  : "glass text-white/70 border-white/10 hover:border-[#d4af37]/40 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                onClick={() => setSelected(p)}
                className="group relative mb-5 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl glass"
              >
                <div className="relative">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full glass-strong flex items-center justify-center hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <div className="rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">
                      {p.category}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-xl">{p.title}</h3>
                    <p className="mt-1 text-xs text-white/60 line-clamp-2">{p.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-20 text-center text-white/50">
            No projects found in this category yet.
          </div>
        )}
      </div>

      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}