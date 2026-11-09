import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";

export default function PostgraduatePage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Postgraduate</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Postgraduate School
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                Postgraduate study is built around strong supervision, research
                culture, and programmes designed for depth and impact across
                disciplines.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Postgraduate Diploma (PGD)",
                desc: "A structured entry route designed to strengthen foundations and prepare candidates for advanced study.",
              },
              {
                title: "Masters (Academic/Professional)",
                desc: "Programme options that combine research thinking with practical relevance to industry and society.",
              },
              {
                title: "M.Phil / Ph.D",
                desc: "Advanced research training with a focus on scholarly contribution, publications, and academic excellence.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-100 shadow-xl p-7 md:p-10"
              >
                <div className="text-xl font-serif font-bold text-brand-secondary">
                  {card.title}
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">{card.desc}</p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-brand-secondary text-white text-sm font-semibold hover:bg-brand-primary transition-all duration-300"
                >
                  Enquire →
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
