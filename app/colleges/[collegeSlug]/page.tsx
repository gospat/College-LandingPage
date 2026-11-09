import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import DepartmentCard from "@/components/ui/DepartmentCard";
import { getCollegeBySlug } from "@/data/university";
import { notFound } from "next/navigation";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ collegeSlug: string }>;
}) {
  const { collegeSlug } = await params;
  const college = getCollegeBySlug(collegeSlug);

  if (!college) notFound();

  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="section-eyebrow">College</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                {college.name}
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                {college.description ?? "College details will be published soon."}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                  Departments
                </div>
                <div className="text-2xl font-serif font-bold text-brand-secondary mt-2">
                  Explore departments
                </div>
              </div>
            </div>

            {college.departments.length ? (
              <div className="grid gap-6 md:grid-cols-2">
                {college.departments.map((department) => (
                  <DepartmentCard
                    key={department.slug}
                    collegeSlug={college.slug}
                    department={department}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-100 shadow-sm p-8">
                <div className="text-brand-secondary font-serif font-bold text-xl">
                  Departments will be published soon
                </div>
                <p className="text-gray-600 mt-3 leading-relaxed max-w-2xl">
                  We are preparing the department directory for this college,
                  including programmes and staff listings.
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
