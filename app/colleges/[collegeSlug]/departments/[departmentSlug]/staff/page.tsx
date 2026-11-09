import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import StaffCard from "@/components/ui/StaffCard";
import { getDepartmentBySlugs } from "@/data/university";
import { notFound } from "next/navigation";

export default async function DepartmentStaffPage({
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
              <p className="section-eyebrow">Staff</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                {department.name}
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                Staff profiles and contact details will be published here.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/colleges/${college.slug}/departments/${department.slug}`}
                  className="btn-outline"
                >
                  Back to department
                </Link>
                <Link href="/#contact" className="btn-primary">
                  Contact admissions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page">
            {department.staff.length ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {department.staff.map((s) => (
                  <StaffCard key={s.slug} staff={s} />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-100 shadow-sm p-8 box-border min-w-0">
                <div className="text-brand-secondary font-serif font-bold text-xl">
                  Staff listing coming soon
                </div>
                <p className="text-gray-600 mt-3 leading-relaxed max-w-2xl">
                  We are preparing a verified directory of staff profiles for this
                  department. In the meantime, use the contact section to reach
                  the university.
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>

      <ChatWidget />
    </>
  );
}
