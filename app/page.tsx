import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Founder from "@/components/sections/Founder";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Campus from "@/components/sections/Campus";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-brand-light font-sans">
        <Navbar />
        <Hero />
        <Founder />
        <About />
        <Programs />
        <Campus />
        <Testimonials />
        <CTA />
        <MapSection />
        <Footer />
      </main>
      {/* Global overlays */}
      <ChatWidget />
    </>
  );
}
