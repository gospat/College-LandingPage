import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Admissions</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Apply to Bells University
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                Choose your entry route and start your application. This site is
                structured to help you find programmes quickly and connect to
                the right department for support.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page grid gap-8 lg:grid-cols-3">
            <Link
              href="/colleges"
              className="bg-white border border-gray-100 shadow-xl overflow-hidden hover-lift"
            >
              <div className="p-7">
                <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                  Undergraduate
                </div>
                <div className="text-2xl font-serif font-bold text-brand-secondary mt-2">
                  First Degree
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Explore colleges and departments, then start your application
                  with the programme that fits your goals.
                </p>
                <div className="mt-6 text-brand-primary font-semibold">
                  Browse colleges →
                </div>
              </div>
            </Link>

            <Link
              href="/postgraduate"
              className="bg-white border border-gray-100 shadow-xl overflow-hidden hover-lift"
            >
              <div className="p-7">
                <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                  Postgraduate
                </div>
                <div className="text-2xl font-serif font-bold text-brand-secondary mt-2">
                  PGD • Masters • Ph.D
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Explore postgraduate options, programme routes, and contact
                  channels for postgraduate admissions.
                </p>
                <div className="mt-6 text-brand-primary font-semibold">
                  View postgraduate →
                </div>
              </div>
            </Link>

            <Link
              href="/contact"
              className="bg-white border border-gray-100 shadow-xl overflow-hidden hover-lift"
            >
              <div className="p-7">
                <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                  Support
                </div>
                <div className="text-2xl font-serif font-bold text-brand-secondary mt-2">
                  Contact Admissions
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Need help choosing a programme or understanding entry
                  requirements? Reach out and we will guide you.
                </p>
                <div className="mt-6 text-brand-primary font-semibold">
                  Contact us →
                </div>
              </div>
            </Link>
          </div>
        </section>

        <Footer />
      </main>

      <ChatWidget />
    </>
  );
}
