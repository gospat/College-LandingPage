"use client";

import { motion } from "framer-motion";
import { COLLEGES } from "@/data/university";
import Link from "next/link";
import Image from "next/image";

type SpotlightPerson = {
  title: string;
  subtitle: string;
  href: string;
  photoSrc: string;
};

const SPOTLIGHT: SpotlightPerson[] = [
  {
    title: "Office of the Vice Chancellor",
    subtitle: "Academic leadership and university governance",
    href: "/about",
    photoSrc: "/assets/founder.webp",
  },
  {
    title: "Registrar",
    subtitle: "Admissions and student records support",
    href: "/admissions",
    photoSrc: "/assets/alumni-michael.webp",
  },
  {
    title: "Dean, College of Engineering",
    subtitle: "Engineering programmes and student support",
    href: "/colleges/engineering",
    photoSrc: "/assets/labs.webp",
  },
];

export default function StaffSpotlight() {
  const extra = COLLEGES.flatMap((c) =>
    c.departments.flatMap((d) =>
      d.staff.slice(0, 1).map((s) => ({
        title: s.title,
        subtitle: `${c.name} • ${d.name}`,
        href: `/colleges/${c.slug}/departments/${d.slug}`,
        photoSrc: "/assets/students-group.webp",
      }))
    )
  ).slice(0, 3);

  const people = [...SPOTLIGHT, ...extra].slice(0, 6);

  return (
    <section id="staff" className="py-24 bg-white wave-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="section-eyebrow">People</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-secondary leading-tight">
              Staff Spotlight
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Connect with the right office or department. Each department page
              includes a staff section so you can reach the right people quickly.
            </p>
          </div>
          <Link href="/colleges" className="btn-outline">
            Browse departments →
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {people.map((p) => (
            <a
              key={`${p.href}-${p.title}`}
              href={p.href}
              className="group bg-white border border-gray-100 shadow-sm overflow-hidden hover-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={p.photoSrc}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/65 via-brand-secondary/15 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-lg font-serif font-bold text-brand-secondary">
                  {p.title}
                </div>
                <div className="text-gray-500 mt-2 leading-relaxed">
                  {p.subtitle}
                </div>
                <div className="mt-5 text-sm font-semibold text-brand-primary">
                  View →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
