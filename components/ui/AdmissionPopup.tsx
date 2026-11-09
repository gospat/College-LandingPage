"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, GraduationCap, Star } from "lucide-react";
import Image from "next/image";

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const hasShown = useRef(false);

  useEffect(() => {
    if (hasShown.current || isOpen) return;

    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled >= 0.35 && !hasShown.current) {
        hasShown.current = true;
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  const handleApply = () => {
    handleClose();
    setTimeout(() => {
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-[3px]"
            onClick={handleClose}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.95 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-[780px] bg-white rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(13,33,59,0.22)] flex flex-col sm:flex-row">

              {/* ── Left: Image Panel ── */}
              <div className="relative sm:w-[340px] w-full h-56 sm:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src="/assets/convocation.webp"
                  alt="Bells University of Technology Convocation Ceremony"
                  fill
                  sizes="(max-width: 640px) 100vw, 340px"
                  className="object-cover"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-brand-secondary/80 via-brand-secondary/30 to-transparent" />

                {/* floating badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-bold tracking-[0.12em] uppercase rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Admissions Open
                  </span>
                </div>

                {/* bottom stats strip */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex gap-5">
                  {[
                    { value: "40+", label: "Years" },
                    { value: "Support", label: "Admissions" },
                    { value: "12K+", label: "Alumni" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-white font-bold text-lg leading-none">{s.value}</div>
                      <div className="text-white/60 text-[10px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* second image inset — mobile hidden */}
                <div className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 w-20 h-28 rounded-xl overflow-hidden border-2 border-white/30 shadow-lg">
                  <Image
                    src="/assets/campus-aerial.webp"
                    alt="Campus aerial view"
                    width={80}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* ── Right: Content Panel ── */}
              <div className="flex-1 px-7 py-7 flex flex-col justify-between relative">

                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-brand-secondary/8 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-brand-secondary" strokeWidth={1.6} />
                </div>

                {/* Headline */}
                <div className="mb-4">
                  <p className="text-brand-primary text-xs font-bold tracking-[0.14em] uppercase mb-1.5">
                    2025–26 Session
                  </p>
                  <h2 className="text-[1.65rem] font-serif font-bold text-brand-secondary leading-tight">
                    Your Future Starts<br />
                    <span className="italic font-light text-brand-primary">Here.</span>
                  </h2>
                </div>

                <p className="text-gray-500 text-[13.5px] leading-relaxed mb-5">
                  Applications are open for undergraduate and postgraduate programmes across the university colleges.{" "}
                  <strong className="text-brand-secondary font-semibold">Apply early</strong> to complete your application on time.
                </p>

                {/* Trust row */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-gray-400 text-[11px] ml-1">Rated 4.9 by 2,000+ students</span>
                </div>

                {/* CTAs */}
                <div className="space-y-2.5">
                  <button
                    onClick={handleApply}
                    className="group w-full flex items-center justify-center gap-2 py-3 bg-brand-secondary text-white text-sm font-semibold rounded-xl hover:bg-brand-primary transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-lg"
                  >
                    Apply Now — It&apos;s Free
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full text-center text-gray-400 text-xs hover:text-gray-600 transition-colors py-1"
                  >
                    Remind me later
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
