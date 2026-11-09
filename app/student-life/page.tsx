import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";

export default function StudentLifePage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Student Life</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Campus Experience
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                Student life is more than lectures. Discover housing, clubs,
                athletics, events, and the support systems that help students
                thrive.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Housing",
                desc: "Comfortable on-campus accommodation designed to support learning, wellbeing, and community.",
              },
              {
                title: "Clubs & Societies",
                desc: "Student-led communities for skills, leadership, creativity, and meaningful friendships.",
              },
              {
                title: "Athletics & Fitness",
                desc: "Sports, recreation, and health-focused activities that balance academic life.",
              },
              {
                title: "Student Support",
                desc: "Guidance, counselling, and support services that help students navigate university life.",
              },
              {
                title: "Events",
                desc: "Academic, social, and cultural activities throughout the session for a vibrant campus calendar.",
              },
              {
                title: "Career Readiness",
                desc: "Workshops, internship support, and employability preparation for confident graduates.",
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
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 border-2 border-brand-secondary text-brand-secondary text-sm font-semibold hover:bg-brand-secondary hover:text-white transition-all duration-300"
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
