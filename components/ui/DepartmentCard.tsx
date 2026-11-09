import Link from "next/link";
import type { Department } from "@/types/university";

export default function DepartmentCard({
  collegeSlug,
  department,
}: {
  collegeSlug: string;
  department: Department;
}) {
  return (
    <Link
      href={`/colleges/${collegeSlug}/departments/${department.slug}`}
      className="block bg-white border border-gray-100 shadow-sm overflow-hidden hover-lift"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="text-lg font-serif font-bold text-brand-secondary">
            {department.name}
          </div>
          {department.status === "pending" ? (
            <div className="shrink-0 text-[11px] font-bold tracking-widest uppercase text-brand-primary">
              Coming soon
            </div>
          ) : null}
        </div>
        <p className="text-gray-600 mt-3 leading-relaxed">
          {department.overview ?? "Department details will be published soon."}
        </p>
        <div className="mt-5 text-brand-primary font-semibold">
          View programmes & staff →
        </div>
      </div>
    </Link>
  );
}
