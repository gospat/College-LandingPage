import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import ProgrammesCatalogue from "@/components/sections/ProgrammesCatalogue";

export default function ProgrammesPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Academics</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Programmes
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                Explore programmes by level and by college. Each programme links
                back to its department for staff and related information.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ProgrammesCatalogue />
          </div>
        </section>

        <Footer />
      </main>

      <ChatWidget />
    </>
  );
}
