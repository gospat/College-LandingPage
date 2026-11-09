import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import StaffCard from "@/components/ui/StaffCard";
import { getDepartmentBySlugs } from "@/data/university";
import { notFound } from "next/navigation";

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ collegeSlug: string; departmentSlug: string }>;
}) {
  const { collegeSlug, departmentSlug } = await params;
  const { college, department } = getDepartmentBySlugs({
    collegeSlug,
    departmentSlug,
  });

  if (!college || !department) notFound();

  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Department</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                {department.name}
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                {department.overview ??
                  "Department details, programmes, and staff listings will be published soon."}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/colleges/${college.slug}`} className="btn-outline">
                  Back to college
                </Link>
                <Link
                  href={`/colleges/${college.slug}/departments/${department.slug}/staff`}
                  className="btn-primary"
                >
                  View staff
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page grid gap-8 lg:grid-cols-2">
            <div className="bg-white border border-gray-100 shadow-sm p-8 box-border min-w-0">
              <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                Programmes
              </div>
              <div className="text-2xl font-serif font-bold text-brand-secondary mt-2">
                Available programmes
              </div>

              {department.programmes.length ? (
                <div className="mt-6 space-y-4">
                  {department.programmes.map((p) => (
                    <div key={p.slug} className="p-5 border border-gray-100 bg-brand-light">
                      <div className="flex items-start justify-between gap-4 min-w-0">
                        <div className="font-semibold text-brand-secondary min-w-0 break-words">
                          {p.name}
                        </div>
                        <div className="text-[11px] font-bold tracking-widest uppercase text-brand-primary shrink-0">
                          {p.level}
                        </div>
                      </div>
                      {p.summary ? (
                        <p className="text-gray-600 mt-3 leading-relaxed">{p.summary}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 mt-5 leading-relaxed">
                  Programme details for this department will be published soon.
                </p>
              )}
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-8 box-border min-w-0">
              <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                Staff
              </div>
              <div className="text-2xl font-serif font-bold text-brand-secondary mt-2">
                Department staff
              </div>

              {department.staff.length ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {department.staff.map((s) => (
                    <StaffCard key={s.slug} staff={s} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 mt-5 leading-relaxed">
                  Staff profiles for this department will be published soon.
                </p>
              )}

              <div className="mt-6">
                <Link
                  href={`/colleges/${college.slug}/departments/${department.slug}/staff`}
                  className="btn-outline"
                >
                  Open staff page →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <ChatWidget />
    </>
  );
}
