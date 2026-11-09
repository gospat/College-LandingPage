import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import CollegeCard from "@/components/ui/CollegeCard";
import { COLLEGES } from "@/data/university";

export const metadata = {
  title: "Colleges | Bells University of Technology",
};

export default function CollegesPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-14">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Academics</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Colleges
              </h1>
              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                Browse colleges, then explore departments, programmes, and staff
                information where available.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {COLLEGES.map((college) => (
              <CollegeCard key={college.slug} college={college} />
            ))}
          </div>
        </section>

        <Footer />
      </main>

      <ChatWidget />
    </>
  );
}
