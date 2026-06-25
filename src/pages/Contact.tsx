import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Please share a few details about your project.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className="relative pt-32 sm:pt-40 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-4">Contact</div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05]">
            Let's make something <span className="gold-text italic">unforgettable.</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl">
            Tell me about your project — timelines, footage, references — and I'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 sm:p-10"
          >
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-colors ${
                    errors.name ? "border-red-500/60" : "border-white/10"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-colors ${
                    errors.email ? "border-red-500/60" : "border-white/10"
                  }`}
                  placeholder="you@studio.com"
                />
                {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-colors resize-none ${
                    errors.message ? "border-red-500/60" : "border-white/10"
                  }`}
                  placeholder="Tell me about your project, timeline, and goals..."
                />
                {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#a8852b] text-black px-8 py-4 font-medium hover:shadow-[0_15px_50px_-10px_rgba(212,175,55,0.6)] transition-shadow disabled:opacity-70 disabled:cursor-not-allowed min-h-[48px]"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <span>→</span>
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-green-500/10 border border-green-500/30 p-4 text-sm text-green-300"
                >
                  ✓ Thank you! Your message has been received. I'll be in touch within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Availability */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 rounded-full bg-green-500" />
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
                </div>
                <div>
                  <div className="text-sm font-medium">Available for projects</div>
                  <div className="text-xs text-white/50">Currently booking 2–4 weeks out</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/15555555555"
              target="_blank"
              rel="noreferrer"
              className="block glass rounded-2xl p-6 hover:border-[#d4af37]/40 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-2xl shrink-0">
                  💬
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-1">WhatsApp</div>
                  <div className="font-display text-xl group-hover:text-[#d4af37] transition-colors">
                    Quick chat
                  </div>
                  <div className="text-sm text-white/60 mt-1">Fastest way to reach me</div>
                </div>
                <span className="ml-auto text-white/40 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all">→</span>
              </div>
            </a>

            <a
              href="mailto:hello@naveenb.studio"
              className="block glass rounded-2xl p-6 hover:border-[#d4af37]/40 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f5d97a] to-[#a8852b] flex items-center justify-center text-2xl shrink-0">
                  ✉️
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-1">Email</div>
                  <div className="font-display text-xl group-hover:text-[#d4af37] transition-colors break-all">
                    hello@naveenb.studio
                  </div>
                  <div className="text-sm text-white/60 mt-1">For detailed briefs & proposals</div>
                </div>
              </div>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="block glass rounded-2xl p-6 hover:border-[#d4af37]/40 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-orange-400 flex items-center justify-center text-2xl shrink-0">
                  📸
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-1">Instagram</div>
                  <div className="font-display text-xl group-hover:text-[#d4af37] transition-colors">
                    @naveenb.edits
                  </div>
                  <div className="text-sm text-white/60 mt-1">Behind-the-scenes & reels</div>
                </div>
              </div>
            </a>

            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-3">Response time</div>
              <div className="font-display text-2xl">Within 24 hours</div>
              <div className="text-sm text-white/55 mt-1">Mon–Sat · Bangalore, India</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}