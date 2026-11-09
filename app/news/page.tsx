import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";

export default function NewsPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="section-eyebrow">News</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                News & Events
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                Updates from campus: announcements, events, achievements, and
                stories from students and staff.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Campus Announcement",
                date: "Recent",
                desc: "Add official announcements here for admissions, schedules, and key campus updates.",
              },
              {
                title: "Research Highlight",
                date: "Recent",
                desc: "Share research stories, publications, and innovation activities across colleges and centres.",
              },
              {
                title: "Student Achievement",
                date: "Recent",
                desc: "Celebrate competitions, community impact, internships, and outstanding student outcomes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 shadow-xl p-7 md:p-10"
              >
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-primary">
                  {item.date}
                </div>
                <div className="text-xl font-serif font-bold text-brand-secondary mt-2">
                  {item.title}
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">{item.desc}</p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 border-2 border-brand-secondary text-brand-secondary text-sm font-semibold hover:bg-brand-secondary hover:text-white transition-all duration-300"
                >
                  Get updates →
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
