"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, MapPin, X, Users } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type Program = {
  title: string;
  category: string;
  duration: string;
  location: string;
  desc: string;
  image: string;
  seats: number;
  specializations: string[];
  eligibility: string;
};

const PROGRAMS: Program[] = [
  {
    title: "B.Tech in Computer Science",
    category: "Undergraduate",
    duration: "4 Years",
    location: "Main Campus",
    image: "/assets/prog-cs.webp",
    desc: "A comprehensive program covering algorithms, data structures, software engineering, system design, and emerging technologies like cloud computing and blockchain.",
    seats: 120,
    specializations: ["AI & Machine Learning", "Cybersecurity", "Cloud Computing", "Data Science"],
    eligibility: "10+2 with PCM, JEE/GUJCET qualified",
  },
  {
    title: "Bachelor of Business Admin (BBA)",
    category: "Undergraduate",
    duration: "3 Years",
    location: "City Campus",
    image: "/assets/prog-bba2.webp",
    desc: "Foundational business principles focusing on global leadership, marketing strategy, financial management, and entrepreneurship for tomorrow's business leaders.",
    seats: 90,
    specializations: ["Marketing", "Finance", "Human Resources", "Entrepreneurship"],
    eligibility: "10+2 in any stream, minimum 60%",
  },
  {
    title: "B.Sc. Forensic Science",
    category: "Undergraduate",
    duration: "3 Years",
    location: "Science Block",
    image: "/assets/prog-forensic.webp",
    desc: "Applied science program bridging chemistry, biology, and criminal investigation, with hands-on laboratory work and internships with law enforcement agencies.",
    seats: 60,
    specializations: ["Crime Scene Investigation", "Digital Forensics", "Toxicology", "Ballistics"],
    eligibility: "10+2 with PCB/PCM, minimum 55%",
  },
  {
    title: "Master of Business Admin (MBA)",
    category: "Postgraduate",
    duration: "2 Years",
    location: "Main Campus",
    image: "/assets/prog-mba.webp",
    desc: "An executive-level management program designed to develop strategic thinking, leadership acumen, and a global business perspective through case studies and live projects.",
    seats: 80,
    specializations: ["International Trade", "Aviation Management", "Business Analytics", "Finance"],
    eligibility: "Bachelor's degree (any), CAT/MAT/GMAT score",
  },
  {
    title: "M.Tech in Artificial Intelligence",
    category: "Postgraduate",
    duration: "2 Years",
    location: "Tech Park",
    image: "/assets/prog-ai.webp",
    desc: "Cutting-edge research and practical application in machine learning, neural networks, NLP, and computer vision for solving real-world problems at scale.",
    seats: 40,
    specializations: ["Deep Learning", "NLP", "Computer Vision", "Robotics"],
    eligibility: "B.Tech/B.E. in CS/IT/ECE, GATE qualified",
  },
  {
    title: "M.Sc. Cyber Security",
    category: "Postgraduate",
    duration: "2 Years",
    location: "Tech Park",
    image: "/assets/prog-cyber.webp",
    desc: "Advanced study in ethical hacking, digital forensics, network security, and cryptography, preparing students to defend critical infrastructure globally.",
    seats: 50,
    specializations: ["Ethical Hacking", "Network Security", "Cloud Security", "Incident Response"],
    eligibility: "B.Tech/B.Sc. CS/IT, minimum 55%",
  },
  {
    title: "Ph.D. in Applied Sciences",
    category: "Doctoral",
    duration: "3–5 Years",
    location: "Research Wing",
    image: "/assets/prog-phd.webp",
    desc: "Intensive research program focusing on sustainable technologies, materials science, and interdisciplinary innovation guided by world-class faculty.",
    seats: 20,
    specializations: ["Nanotechnology", "Environmental Science", "Bio-Materials", "Physics"],
    eligibility: "Master's in relevant field, research proposal required",
  },
  {
    title: "Ph.D. in Management Studies",
    category: "Doctoral",
    duration: "3–5 Years",
    location: "B-School",
    image: "/assets/prog-mba.webp",
    desc: "Groundbreaking research in organizational behavior, business economics, and strategic management, culminating in a peer-reviewed dissertation.",
    seats: 15,
    specializations: ["Organizational Behavior", "Strategy", "HR Management", "Finance"],
    eligibility: "MBA or equivalent, research proposal, interview",
  },
  {
    title: "Advanced Data Analytics",
    category: "Certification",
    duration: "6 Months",
    location: "Online / Hybrid",
    image: "/assets/prog-data.webp",
    desc: "Industry-aligned certification to master big data tools, predictive modeling, Python/R programming, dashboarding, and machine learning fundamentals.",
    seats: 200,
    specializations: ["Python for Data", "Power BI", "Machine Learning", "SQL & Databases"],
    eligibility: "Bachelor's degree in any field",
  },
  {
    title: "Digital Marketing & SEO",
    category: "Certification",
    duration: "3 Months",
    location: "Online",
    image: "/assets/prog-digital.webp",
    desc: "Practical skills in SEO, social media strategy, Google Ads, content marketing, and analytics to launch a modern digital marketing career.",
    seats: 300,
    specializations: ["SEO/SEM", "Social Media", "Content Strategy", "Email Marketing"],
    eligibility: "Open to all graduates",
  },
];

function ProgramModal({ program, onClose }: { program: Program; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ duration: 0.28 }}
          className="bg-white w-full max-w-lg max-h-[88vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-52 overflow-hidden flex-shrink-0">
            <Image
              src={program.image}
              alt={program.title}
              fill
              sizes="(max-width: 1024px) 100vw, 512px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute bottom-4 left-5 text-[10px] font-bold px-2.5 py-1 bg-brand-primary text-white uppercase tracking-widest">
              {program.category}
            </span>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-7">
            <h2 className="text-xl font-serif font-bold text-brand-secondary mb-2 leading-snug">
              {program.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{program.desc}</p>

            {/* Quick info */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { Icon: Clock, label: "Duration", value: program.duration },
                { Icon: Users, label: "Seats", value: program.seats.toString() },
                { Icon: MapPin, label: "Location", value: program.location },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="bg-gray-50 border border-gray-100 p-3 text-center">
                  <Icon className="w-4 h-4 text-brand-primary mx-auto mb-1.5" />
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-xs font-bold text-brand-secondary leading-tight">{value}</p>
                </div>
              ))}
            </div>

            {/* Specializations */}
            <div className="mb-5">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Specializations</p>
              <div className="flex flex-wrap gap-2">
                {program.specializations.map((s) => (
                  <span key={s} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="mb-7 p-4 bg-red-50 border-l-4 border-brand-primary">
              <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">Eligibility</p>
              <p className="text-sm text-gray-700 leading-relaxed">{program.eligibility}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center py-3 bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary-dark transition-colors"
              >
                Apply Now
              </a>
              <button
                onClick={onClose}
                className="flex-1 py-3 text-sm font-semibold border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white transition-colors"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Programs() {
  const categories = ["Undergraduate", "Postgraduate", "Doctoral", "Certification"];
  const [activeCategory, setActiveCategory] = useState("Undergraduate");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const filtered = PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 relative overflow-hidden" style={{background: 'linear-gradient(180deg, #f7f8fa 0%, #ffffff 50%, #f7f8fa 100%)'}}>
      {/* Decorative background SVGs */}
      <div className="absolute top-10 left-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg width="300" height="500" viewBox="0 0 300 500" fill="none">
          <line x1="0" y1="0" x2="300" y2="500" stroke="#0d213b" strokeWidth="1"/>
          <line x1="60" y1="0" x2="360" y2="500" stroke="#0d213b" strokeWidth="0.8"/>
          <line x1="120" y1="0" x2="420" y2="500" stroke="#c0392b" strokeWidth="0.6"/>
          <line x1="0" y1="100" x2="300" y2="600" stroke="#0d213b" strokeWidth="0.5"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
        <svg width="350" height="350" viewBox="0 0 350 350" fill="none">
          <circle cx="350" cy="350" r="280" stroke="#c0392b" strokeWidth="1" strokeDasharray="12 8"/>
          <circle cx="350" cy="350" r="200" stroke="#e2b13c" strokeWidth="0.8"/>
          <circle cx="350" cy="350" r="120" stroke="#0d213b" strokeWidth="0.6" strokeDasharray="6 6"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="eyebrow mb-3">Academic Programs</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-secondary">
            Discover Your Path
          </h2>
          <div className="divider" />
          <p className="text-gray-500 text-sm leading-relaxed">
            Over 50 programs across arts, science, commerce, technology, and law — designed for the world you are entering.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 mb-10 border-b border-gray-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-sm font-semibold -mb-px border-b-2 transition-colors duration-200 ${
                activeCategory === cat
                  ? "border-brand-primary text-brand-primary"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((program) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 overflow-hidden group cursor-pointer hover-lift"
              onClick={() => setSelectedProgram(program)}
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 bg-brand-primary text-white uppercase tracking-widest">
                  {program.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold font-serif text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors leading-snug">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                  {program.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                  <MapPin className="w-3 h-3 text-brand-accent flex-shrink-0" />
                  {program.location}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {program.specializations.slice(0, 2).map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 font-medium">{s}</span>
                  ))}
                  {program.specializations.length > 2 && (
                    <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-400">+{program.specializations.length - 2}</span>
                  )}
                </div>
                <p className="mt-3 inline-flex items-center gap-1 text-brand-primary font-bold text-xs group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-3 h-3" />
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-outline">View All Programs</a>
        </div>
      </div>

      {selectedProgram && (
        <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
      )}
    </section>
  );
}
