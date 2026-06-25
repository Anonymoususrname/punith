import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "../components/Particles";
import { projects } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Landing() {
  const featured = projects.slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Particles />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              Available for select projects
            </div>

            <h1 className="font-display text-[15vw] sm:text-[12vw] md:text-[10rem] leading-[0.9] font-bold tracking-tight">
              <span className="block text-white">Naveen</span>
              <span className="block gold-text">B.</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
              Video Editor & <span className="text-white">Visual Storyteller</span> — crafting cinematic
              narratives for brands, weddings, and creators worldwide.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#showreel"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-7 py-4 font-medium hover:bg-[#d4af37] transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)]"
              >
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-black/80">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Showreel
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-[#d4af37]/40 px-7 py-4 font-medium text-white hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300"
              >
                Hire Me
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#d4af37] to-transparent"
          />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { v: "100+", l: "Projects Completed" },
              { v: "50+", l: "Happy Clients" },
              { v: "3+", l: "Years Experience" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 sm:p-10 text-center hover:border-[#d4af37]/30 transition-colors"
              >
                <div className="font-display text-5xl sm:text-6xl gold-text font-bold">{s.v}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/60">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORKS PREVIEW */}
      <section id="showreel" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-3">Selected Works</div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">
                Featured <span className="gold-text italic">Stories</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#d4af37] transition-colors group"
            >
              View all work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                variants={item}
                className={`group relative overflow-hidden rounded-2xl glass cursor-pointer ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`relative ${i === 0 ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[4/5]"}`}>
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full glass-strong flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] mb-2">{p.category}</div>
                    <h3 className="font-display text-xl sm:text-2xl">{p.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 text-center"
          >
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">
                Have a story to <span className="gold-text italic">tell?</span>
              </h2>
              <p className="mt-5 text-white/70 max-w-xl mx-auto">
                Let's craft something cinematic together — from wedding films to brand commercials.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#a8852b] text-black px-8 py-4 font-medium hover:shadow-[0_15px_50px_-10px_rgba(212,175,55,0.6)] transition-shadow"
              >
                Start a Project
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}