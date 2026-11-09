"use client";

import { motion } from "framer-motion";

type NewsItem = {
  title: string;
  tag: string;
  excerpt: string;
  href: string;
};

const NEWS: NewsItem[] = [
  {
    title: "Admissions Updates",
    tag: "Admissions",
    excerpt:
      "Get the latest application guidance, entry routes, and contact details for support.",
    href: "/admissions",
  },
  {
    title: "Campus Announcements",
    tag: "Campus",
    excerpt:
      "Important notices and upcoming activities. This area can be connected to real news posts later.",
    href: "/news",
  },
  {
    title: "Research & Innovation",
    tag: "Research",
    excerpt:
      "Highlights from colleges and centres—projects, collaborations, and innovation activity across campus.",
    href: "/centres",
  },
];

export default function NewsPreview() {
  return (
    <section id="news-preview" className="py-24 bg-brand-light wave-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="section-eyebrow">Updates</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-secondary leading-tight">
              News & Announcements
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              A quick preview of what’s happening across campus. Visit the news
              page for events and announcements.
            </p>
          </div>
          <a
            href="/news"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-secondary text-white text-sm font-semibold hover:bg-brand-primary transition-all duration-300"
          >
            View all news →
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {NEWS.map((n) => (
            <a
              key={n.title}
              href={n.href}
              className="bg-white border border-gray-100 shadow-sm hover-lift p-7"
            >
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-primary">
                {n.tag}
              </div>
              <div className="text-xl font-serif font-bold text-brand-secondary mt-3">
                {n.title}
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">{n.excerpt}</p>
              <div className="mt-6 text-sm font-semibold text-brand-primary">
                Read more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

