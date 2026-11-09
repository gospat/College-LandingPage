"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Lightbulb, Megaphone, MapPin, ChevronsRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Step-based slow count-up hook
function useCountUp(
  target: number,
  step: number,
  duration: number,
  start: boolean
) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const totalSteps = Math.ceil(target / step);
    const intervalMs = duration / totalSteps;
    let current = 0;
    const id = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(id);
    }, intervalMs);
    return () => clearInterval(id);
  }, [target, step, duration, start]);
  return count;
}

function StatCard({
  value,
  suffix,
  label,
  step,
  duration,
}: {
  value: number;
  suffix: string;
  label: string;
  step: number;
  duration: number;
}) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, step, duration, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex-1 px-6 py-7 text-center border-r last:border-r-0 border-gray-100"
    >
      <div className="text-4xl lg:text-5xl font-serif font-bold text-brand-primary mb-1.5 tabular-nums leading-none">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold">
        {label}
      </div>
    </div>
  );
}

const quickLinks = [
  {
    title: "FUTURE STUDENTS",
    icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-white mb-5" strokeWidth={1.2} />,
    desc: "Learn about entry requirements, admission routes, and the support available to help you start strong.",
    btnText: "Explore Admissions",
    bgColor: "#163c54", // Blue
    img: "/assets/students-group.webp",
  },
  {
    title: "ACADEMICS",
    icon: <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-white mb-5" strokeWidth={1.2} />,
    desc: "Explore colleges, programmes, and academic opportunities designed for innovation and real-world impact.",
    btnText: "Explore Academics",
    bgColor: "#a49322", // Gold
    img: "/assets/classroom.webp",
  },
  {
    title: "CALENDARS & KEY DATES",
    icon: <Megaphone className="w-10 h-10 md:w-12 md:h-12 text-white mb-5" strokeWidth={1.2} />,
    desc: "Explore key academic dates, campus visits, public events, class schedules, alumni activities, arts, athletics, and more.",
    btnText: "View Calendars",
    bgColor: "#237ea8", // Cyan
    img: "/assets/convocation.webp",
  },
  {
    title: "VIRTUAL CAMPUS TOURS",
    icon: <MapPin className="w-10 h-10 md:w-12 md:h-12 text-white mb-5" strokeWidth={1.2} />,
    desc: "Take a virtual tour, learn about admission and financial aid, and speak with current students.",
    btnText: "Take a Virtual Tour",
    bgColor: "#4b1418", // Maroon
    img: "/assets/campus-aerial.webp",
  }
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pb-16 md:pb-32">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/hero-campus.webp')" }}
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* SVG decorative graphics */}
        <div className="absolute top-20 right-10 opacity-10 pointer-events-none hidden lg:block" aria-hidden="true">
          <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
            <circle cx="180" cy="180" r="160" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
            <circle cx="180" cy="180" r="120" stroke="#e2b13c" strokeWidth="0.8" />
            <circle cx="180" cy="180" r="70" stroke="white" strokeWidth="0.5" />
            <circle cx="180" cy="180" r="20" fill="#e2b13c" fillOpacity="0.3" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-1/4 opacity-[0.07] pointer-events-none hidden lg:block" aria-hidden="true">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="10" y="10" width="100" height="100" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
            <rect x="30" y="30" width="60" height="60" stroke="#e2b13c" strokeWidth="1" />
          </svg>
        </div>
        {/* Floating dots grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true"
          style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
        <div className="relative z-10 container-page w-full pt-32 md:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="eyebrow text-white/50 mb-5 inline-block">
              Ota, Ogun State, Nigeria
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-[1.05] mb-5">
              Ignite Your
              <br />
              <em className="not-italic italic text-brand-accent font-light">
                Potential.
              </em>
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-10 max-w-lg font-light leading-relaxed">
              Technology-focused learning that blends strong academics with
              practical skills, research thinking, and character development.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#programs"
                className="btn-primary"
              >
                Explore Programmes
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#campus"
                className="btn-ghost"
              >
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Play className="w-3.5 h-3.5" />
                </span>
                Campus Tour
              </a>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5 }}
            className="mt-16 md:mt-24 hidden lg:block max-w-4xl"
          >
            <div className="bg-white border-t-4 border-brand-primary shadow-2xl rounded-sm overflow-hidden">
              <div className="flex divide-x divide-gray-100">
                <StatCard value={1984} suffix="" label="Founded" step={100} duration={2000} />
                <StatCard value={12000} suffix="+" label="Students" step={500} duration={1500} />
                <StatCard value={50000} suffix="+" label="Alumni Worldwide" step={2000} duration={1800} />
                <StatCard value={98} suffix="%" label="Placement Rate" step={5} duration={1500} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section with V-shape top */}
      <section className="relative z-20 w-full -mt-12 md:-mt-28">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full hero-quicklinks-clip"
        >
          {quickLinks.map((link, i) => (
            <div key={i} className="relative group flex flex-col items-center text-center px-6 pt-24 md:pt-36 pb-12 overflow-hidden h-full min-h-[400px]">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: `url(${link.img})` }} 
              />
              {/* Multiply Overlay for rich color tint */}
              <div 
                className="absolute inset-0 mix-blend-multiply opacity-100" 
                style={{ backgroundColor: link.bgColor }} 
              />
              {/* Solid Overlay to control contrast so text is readable */}
              <div 
                className="absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-75" 
                style={{ backgroundColor: link.bgColor }} 
              />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center w-full h-full">
                {link.icon}
                <h3 className="text-white font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
                  {link.title}
                </h3>
                
                {/* Thin separator */}
                <div className="w-12 h-px bg-white/40 mb-5" />
                
                <p className="text-white/90 text-sm font-light leading-relaxed mb-8 flex-grow">
                  {link.desc}
                </p>
                
                <a 
                  href="#" 
                  className="mt-auto bg-white text-gray-900 w-full py-3.5 flex items-center justify-center gap-2 font-medium hover:bg-gray-50 transition-colors shadow-lg text-sm uppercase tracking-wide"
                >
                  {link.btnText}
                  <ChevronsRight className="w-4 h-4 text-brand-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
