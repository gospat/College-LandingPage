"use client";

import { motion } from "framer-motion";
import CollegeCard from "@/components/ui/CollegeCard";
import { COLLEGES } from "@/data/university";
import Link from "next/link";

export default function CollegesPreview() {
  return (
    <section id="colleges" className="py-24 bg-brand-light wave-top">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="section-eyebrow">Academics</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-secondary leading-tight">
              Colleges & Departments
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Explore our colleges. Each college includes departments, programmes,
              and staff—so prospective students can quickly find what they need.
            </p>
          </div>
          <Link href="/colleges" className="btn-primary">
            View all colleges →
          </Link>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {COLLEGES.slice(0, 3).map((college) => (
            <CollegeCard key={college.slug} college={college} />
          ))}
        </div>
      </div>
    </section>
  );
}
