"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Library, FlaskConical, Dumbbell, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/assets/slide-1.webp", caption: "Student Innovation Hub" },
  { src: "/assets/campus-aerial.webp", caption: "Our 100-Acre Green Campus" },
  { src: "/assets/slide-2.webp", caption: "World-Class Classrooms" },
  { src: "/assets/slide-3.webp", caption: "Alumni & Graduation Ceremonies" },
  { src: "/assets/slide-4.webp", caption: "Student Life & Activities" },
];

function CampusSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((p) => (p + 1) % SLIDES.length);

  return (
    <div className="relative overflow-hidden h-80 md:h-[440px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={SLIDES[current].src}
          alt={SLIDES[current].caption}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-secondary/55" />

      {/* Caption & CTA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={current + "-cap"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white/70 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            {SLIDES[current].caption}
          </motion.p>
        </AnimatePresence>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Experience Campus Life First-hand
        </h3>
        <a href="#contact" className="btn-primary">
          Schedule a Visit
        </a>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 text-white hover:bg-white/40 transition-colors flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 text-white hover:bg-white/40 transition-colors flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-brand-accent w-6" : "bg-white/50 w-3"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Campus() {
  const facilities = [
    { title: "Modern Library", desc: "Extensive resources, digital archives, and 24/7 study spaces.", icon: <Library className="w-5 h-5 text-white" />, image: "/assets/library.webp" },
    { title: "Advanced Labs", desc: "State-of-the-art research facilities with the latest equipment.", icon: <FlaskConical className="w-5 h-5 text-white" />, image: "/assets/labs.webp" },
    { title: "Sports Complex", desc: "Olympic-standard facilities including pool, courts, and gym.", icon: <Dumbbell className="w-5 h-5 text-white" />, image: "/assets/sports.webp" },
    { title: "Student Hostels", desc: "Comfortable, secure residential halls with modern amenities.", icon: <Home className="w-5 h-5 text-white" />, image: "/assets/hostel.webp" },
  ];

  return (
    <section id="campus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="section-eyebrow">Campus Life</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">
              A World-Class <br />
              <span className="italic font-light">Environment.</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-md leading-relaxed text-sm">
            Our 100-acre lush campus provides the perfect ecosystem for learning, innovation, and personal growth.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {facilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 img-overlay" />
                <div className="absolute top-4 left-4 bg-brand-primary p-2.5">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold font-serif text-brand-secondary mb-1 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Campus Life Slideshow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CampusSlideshow />
        </motion.div>
      </div>
    </section>
  );
}
