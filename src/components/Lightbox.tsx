import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "../data";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function Lightbox({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-5xl"
          >
            <div className="relative rounded-2xl overflow-hidden glass-strong shadow-[0_30px_80px_-20px_rgba(212,175,55,0.25)]">
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:text-[#d4af37] hover:scale-110 transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="aspect-video bg-black">
                <video
                  key={project.id}
                  src={project.videoUrl}
                  poster={project.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-2">
                  {project.category}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{project.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}