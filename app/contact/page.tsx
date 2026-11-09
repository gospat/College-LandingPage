import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Contact</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Get in Touch
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                Contact the university for admissions enquiries, general
                information, and campus visits.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-2">
            <div className="bg-white border border-gray-100 shadow-xl p-7 md:p-10">
              <div className="text-xl font-serif font-bold text-brand-secondary">
                Contact Details
              </div>
              <div className="divider" />

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Address
                  </div>
                  <div className="mt-2">
                    Benja Village, Km. 8, Idiroko Road, Ota, Ogun State, Nigeria
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Phone
                  </div>
                  <a
                    className="mt-2 inline-block text-brand-primary font-semibold"
                    href="tel:+2347033180831"
                  >
                    +234 703 318 0831
                  </a>
                </div>

                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Email
                  </div>
                  <a
                    className="mt-2 inline-block text-brand-primary font-semibold"
                    href="mailto:info@bellsuniversity.edu.ng"
                  >
                    info@bellsuniversity.edu.ng
                  </a>
                </div>

                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Hours
                  </div>
                  <div className="mt-2">Mon — Sat: 9AM — 6PM</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl overflow-hidden">
              <iframe
                title="Bells University of Technology location"
                src="https://www.google.com/maps?q=Bells%20University%20of%20Technology%20Ota&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "520px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <ChatWidget />
    </>
  );
}
