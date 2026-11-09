"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      role: "Class of 2018 · Lead Researcher, GlobalTech",
      text: "The rigorous academic environment and continuous support from faculty at Bells strengthened my approach to problem-solving. It’s a place that genuinely fosters innovation.",
      image: "/assets/alumni-sarah.webp",
    },
    {
      id: 2,
      name: "Michael Chang",
      role: "Class of 2021 · Founder, Innovate Solutions",
      text: "The campus life and focus on practical entrepreneurship gave me the exact tools I needed to launch my own startup right after graduation. The alumni network is incredibly strong.",
      image: "/assets/alumni-michael.webp",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Class of 2019 · Senior Analyst, FinCorp",
      text: "From world-class libraries to exceptional mentorship, my time at Bells was the foundation of my career. The university truly stands by its commitment to excellence.",
      image: "/assets/alumni-priya.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden wave-top" style={{background: 'linear-gradient(160deg, #f7f8fa 0%, #f0f2f5 100%)'}}>
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none" style={{background: 'radial-gradient(circle, #c0392b 0%, transparent 70%)', transform: 'translate(30%, -30%)'}} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none" style={{background: 'radial-gradient(circle, #0d213b 0%, transparent 70%)', transform: 'translate(-20%, 20%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">Alumni Stories</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">
            Hear From Our <span className="italic font-light">Graduates.</span>
          </h2>
        </div>

        {/* Main Testimonial Block */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Quote Card */}
          <div className="relative min-h-[280px] p-8 rounded-2xl" style={{background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 40px rgba(13,33,59,0.08), 0 0 0 1px rgba(13,33,59,0.05)', border: '1px solid rgba(255,255,255,0.8)'}}>
            <Quote className="absolute -top-2 -left-2 w-14 h-14 text-brand-primary opacity-10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl md:text-2xl text-gray-700 font-serif leading-relaxed italic mb-8">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-secondary">{testimonials[currentIndex].name}</h5>
                    <p className="text-xs text-gray-500 font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-3 mt-10">
              <button onClick={prev} className="w-11 h-11 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-11 h-11 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 ml-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "bg-brand-primary w-6" : "bg-gray-300 w-3"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative max-w-sm mx-auto lg:ml-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="aspect-[3/4] overflow-hidden shadow-2xl relative"
              >
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-brand-accent -z-10" />
            <div className="absolute -top-5 -left-5 w-28 h-28 border-2 border-brand-primary -z-10" />
          </div>
        </div>

        {/* Alumni Photo Strip */}
        <div className="grid grid-cols-3 gap-4">
          {["/assets/students-group.webp", "/assets/research.webp", "/assets/convocation.webp"].map((src, i) => (
            <div key={i} className="relative h-40 overflow-hidden group">
              <Image
                src={src}
                alt={`Campus life ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 33vw, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-secondary/20 group-hover:bg-brand-secondary/0 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
