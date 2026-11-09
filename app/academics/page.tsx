import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Academics</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Academics at Bells
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                Find colleges, departments, and programmes in one place. Each
                department page includes a staff section to help students and
                visitors reach the right people.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page grid gap-8 lg:grid-cols-3">
            <Link
              href="/colleges"
              className="bg-white border border-gray-100 shadow-xl p-7 md:p-10 hover-lift"
            >
              <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                Colleges
              </div>
              <div className="text-2xl font-serif font-bold text-brand-secondary mt-2">
                Departments & Staff
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Browse colleges, then view departments, programmes, and staff in
                each department.
              </p>
              <div className="mt-6 text-brand-primary font-semibold">
                Explore colleges →
              </div>
            </Link>

            <Link
              href="/programmes"
              className="bg-white border border-gray-100 shadow-xl p-7 md:p-10 hover-lift"
            >
              <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                Programmes
              </div>
              <div className="text-2xl font-serif font-bold text-brand-secondary mt-2">
                Full Catalogue
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Search programmes by level and college, then jump back to the
                relevant department page.
              </p>
              <div className="mt-6 text-brand-primary font-semibold">
                Browse programmes →
              </div>
            </Link>

            <a
              href="/admissions"
              className="bg-white border border-gray-100 shadow-xl p-7 md:p-10 hover-lift"
            >
              <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                Admissions
              </div>
              <div className="text-2xl font-serif font-bold text-brand-secondary mt-2">
                Start Your Journey
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Learn how to apply and where to find the admissions support you
                need.
              </p>
              <div className="mt-6 text-brand-primary font-semibold">
                Go to admissions →
              </div>
            </a>
          </div>
        </section>

        <Footer />
      </main>

      <ChatWidget />
    </>
  );
}
