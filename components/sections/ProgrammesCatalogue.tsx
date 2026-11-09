"use client";

import { useMemo, useState } from "react";
import { COLLEGES } from "@/data/university";
import type { ProgramLevel } from "@/types/university";

type ProgrammeRow = {
  slug: string;
  name: string;
  level: ProgramLevel;
  summary: string;
  collegeSlug: string;
  collegeName: string;
  departmentSlug: string;
  departmentName: string;
};

export default function ProgrammesCatalogue() {
  const programmes = useMemo<ProgrammeRow[]>(() => {
    return COLLEGES.flatMap((college) =>
      college.departments.flatMap((department) =>
        department.programmes.map((program) => ({
          slug: program.slug,
          name: program.name,
          level: program.level,
          summary: program.summary ?? "",
          collegeSlug: college.slug,
          collegeName: college.name,
          departmentSlug: department.slug,
          departmentName: department.name,
        }))
      )
    );
  }, []);

  const colleges = useMemo(
    () => COLLEGES.map((c) => ({ slug: c.slug, name: c.name })),
    []
  );

  const [level, setLevel] = useState<ProgramLevel | "All">("All");
  const [college, setCollege] = useState<string>("All");
  const [q, setQ] = useState<string>("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return programmes.filter((p) => {
      if (level !== "All" && p.level !== level) return false;
      if (college !== "All" && p.collegeSlug !== college) return false;
      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        p.departmentName.toLowerCase().includes(query) ||
        p.collegeName.toLowerCase().includes(query)
      );
    });
  }, [programmes, level, college, q]);

  return (
    <div className="bg-white border border-gray-100 shadow-xl">
      <div className="p-6 md:p-8 border-b border-gray-100">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Level
            </div>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as ProgramLevel | "All")}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors bg-brand-light text-gray-700"
            >
              <option value="All">All</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Diploma">Diploma</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              College
            </div>
            <select
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors bg-brand-light text-gray-700"
            >
              <option value="All">All</option>
              {colleges.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Search
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Programme, department, college…"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors bg-brand-light text-gray-700"
            />
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="text-sm text-gray-500 mb-5">
          Showing <span className="font-semibold text-brand-secondary">{filtered.length}</span>{" "}
          programme{filtered.length === 1 ? "" : "s"}
        </div>

        {filtered.length === 0 ? (
          <div className="p-8 border border-gray-100 bg-brand-light text-gray-600">
            No results. Try changing your filters.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((p) => (
              <a
                key={p.slug}
                href={`/colleges/${p.collegeSlug}/departments/${p.departmentSlug}`}
                className="block border border-gray-100 bg-white hover-lift p-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-primary">
                      {p.level}
                    </div>
                    <div className="text-lg font-serif font-bold text-brand-secondary mt-2">
                      {p.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {p.collegeName} • {p.departmentName}
                    </div>
                  </div>
                  <div className="text-brand-primary font-semibold flex-shrink-0">
                    →
                  </div>
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">{p.summary}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
