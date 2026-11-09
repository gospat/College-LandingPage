import Link from "next/link";
import type { College } from "@/types/university";

export default function CollegeCard({ college }: { college: College }) {
  return (
    <Link
      href={`/colleges/${college.slug}`}
      className="group block bg-white border border-gray-100 shadow-sm overflow-hidden hover-lift"
    >
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="text-xl font-serif font-bold text-brand-secondary">
            {college.name}
          </div>
          {college.status === "pending" ? (
            <div className="shrink-0 text-[11px] font-bold tracking-widest uppercase text-brand-primary">
              Coming soon
            </div>
          ) : null}
        </div>
        <p className="text-gray-600 mt-3 leading-relaxed">
          {college.description ?? "Details will be published soon."}
        </p>
        <div className="mt-6 text-brand-primary font-semibold">
          View departments →
        </div>
      </div>
    </Link>
  );
}
