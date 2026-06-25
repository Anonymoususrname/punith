import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../data";

export default function Services() {
  return (
    <div className="relative pt-32 sm:pt-40 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-4">Services</div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05]">
            Premium <span className="gold-text italic">post-production</span> services.
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl">
            From raw footage to a polished cinematic delivery — every project gets the same obsessive attention to detail.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 sm:p-8 hover:border-[#d4af37]/40 transition-colors"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 blur-3xl transition-all duration-700" />

              <div className="relative">
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="font-display text-2xl mb-3 group-hover:text-[#d4af37] transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{s.description}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37]/80">
                  <span className="w-6 h-px bg-[#d4af37]/60" />
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-3">The Process</div>
            <h2 className="font-display text-4xl sm:text-5xl">
              How we'll <span className="gold-text italic">work together</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Discovery", d: "We discuss your vision, references, and delivery goals." },
              { n: "02", t: "Edit", d: "First cut focusing on story structure and pacing." },
              { n: "03", t: "Polish", d: "Color grading, sound design, and motion graphics." },
              { n: "04", t: "Delivery", d: "Revisions, final exports, and delivery in your formats." },
            ].map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 relative"
              >
                <div className="font-display text-5xl gold-text opacity-30">{p.n}</div>
                <h4 className="mt-3 font-display text-xl">{p.t}</h4>
                <p className="mt-2 text-sm text-white/60">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#a8852b] text-black px-8 py-4 font-medium hover:shadow-[0_15px_50px_-10px_rgba(212,175,55,0.6)] transition-shadow"
          >
            Discuss your project →
          </Link>
        </div>
      </div>
    </div>
  );
}