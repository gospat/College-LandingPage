import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="section-eyebrow">About</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Bells University of Technology
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                A technology-focused university committed to academic excellence,
                character development, and practical learning that prepares
                students for the future of work.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 bg-white border border-gray-100 shadow-xl p-7 md:p-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-secondary">
                Mission & Vision
              </h2>
              <div className="divider" />
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Our mission is to deliver high-quality teaching, learning, and
                  research that produces graduates with strong technical
                  competence, professional confidence, and an ethical mindset.
                </p>
                <p>
                  Our vision is to be a leading technology-driven university
                  recognized for innovation, impact, and graduates who solve
                  real problems in industry and society.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl p-7 md:p-10">
              <h3 className="text-xl font-serif font-bold text-brand-secondary">
                Quick Links
              </h3>
              <div className="divider" />
              <div className="space-y-3">
                <Link
                  href="/colleges"
                  className="block p-4 bg-brand-light border border-gray-100 hover-lift text-brand-secondary font-semibold"
                >
                  Colleges & Departments →
                </Link>
                <Link
                  href="/programmes"
                  className="block p-4 bg-brand-light border border-gray-100 hover-lift text-brand-secondary font-semibold"
                >
                  Programmes →
                </Link>
                <Link
                  href="/admissions"
                  className="block p-4 bg-brand-light border border-gray-100 hover-lift text-brand-secondary font-semibold"
                >
                  Admissions →
                </Link>
                <Link
                  href="/contact"
                  className="block p-4 bg-brand-light border border-gray-100 hover-lift text-brand-secondary font-semibold"
                >
                  Contact →
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
