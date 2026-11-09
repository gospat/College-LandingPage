import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";

export default function CentresPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Centres</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Centres & Units
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                University centres and units support innovation, research, and
                services across the campus community.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Research & Innovation",
              "Entrepreneurship Support",
              "ICT Services",
              "Quality Assurance",
              "Health Services",
              "Student Affairs",
            ].map((name) => (
              <div
                key={name}
                className="bg-white border border-gray-100 shadow-xl p-7 md:p-10"
              >
                <div className="text-xl font-serif font-bold text-brand-secondary">
                  {name}
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Details can be added here for mandate, services, staff, and
                  contact channels for this unit.
                </p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-brand-secondary text-white text-sm font-semibold hover:bg-brand-primary transition-all duration-300"
                >
                  Contact →
                </a>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>

      <ChatWidget />
    </>
  );
}
