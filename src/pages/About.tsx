import { motion } from "framer-motion";
import { skills, timeline, software } from "../data";

export default function About() {
  return (
    <div className="relative pt-32 sm:pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-4">About</div>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.05]">
              The editor behind <span className="gold-text italic">the cut.</span>
            </h1>

            <div className="relative mt-10 rounded-3xl overflow-hidden glass-strong">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80"
                  alt="Naveen B"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37]">Based in</div>
                  <div className="font-display text-xl mt-1">Bangalore, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              I'm <span className="text-white font-medium">Naveen B</span> — a video editor and visual storyteller
              obsessed with the rhythm of the cut. For over three years I've helped creators, brands, and couples
              turn raw footage into stories that feel <em className="gold-text not-italic">cinematic</em>.
            </p>
            <p className="mt-5 text-white/65 leading-relaxed">
              My approach blends editorial pacing, precise color science, and intentional sound design. Whether it's
              a five-minute wedding highlight or a 60-second commercial, the goal is always the same: leave the
              viewer feeling something.
            </p>

            {/* Software cards */}
            <div className="mt-12">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-5">Primary Software</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {software.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="group glass rounded-xl p-4 hover:border-[#d4af37]/40 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} mb-3 opacity-90 group-hover:opacity-100 transition`} />
                    <div className="font-medium text-sm">{s.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">{s.tag}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mt-12">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-6">Skills & Expertise</h3>
              <div className="space-y-5">
                {skills.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-white/80">{s.name}</span>
                      <span className="text-[#d4af37] font-medium">{s.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + i * 0.05 }}
                        className="h-full bg-gradient-to-r from-[#f5d97a] via-[#d4af37] to-[#a8852b] rounded-full relative"
                      >
                        <div className="absolute inset-y-0 right-0 w-8 bg-white/30 blur-md" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-3">Journey</div>
            <h2 className="font-display text-4xl sm:text-5xl">
              Experience <span className="gold-text italic">timeline</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37]/60 via-[#d4af37]/20 to-transparent" />

            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 mb-10 ${
                  i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`sm:text-right ${i % 2 === 0 ? "" : "sm:text-left"}`}>
                  <div className="font-display text-xl gold-text">{t.year}</div>
                </div>
                <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2">
                  <div className="relative w-3 h-3 rounded-full bg-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                  </div>
                </div>
                <div className={`mt-2 sm:mt-0 ${i % 2 === 0 ? "sm:text-left" : "sm:text-right"}`}>
                  <div className="glass rounded-2xl p-6 hover:border-[#d4af37]/30 transition-colors">
                    <h4 className="font-display text-xl">{t.role}</h4>
                    <div className="text-sm text-[#d4af37]/80 mt-1">{t.company}</div>
                    <p className="mt-3 text-sm text-white/65 leading-relaxed">{t.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}