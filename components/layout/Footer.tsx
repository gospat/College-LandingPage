"use client";

import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-white pt-20 border-t-4 border-brand-primary">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="space-y-6">
            {/* Logo → reloads page on click */}
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <GraduationCap className="w-8 h-8 text-brand-accent" />
              <div>
                <span className="text-2xl font-serif font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors">
                  Bells University of Technology
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A premier institution dedicated to academic excellence, innovation, and shaping the future leaders of tomorrow.
            </p>
            <div className="flex gap-3">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-accent hover:bg-brand-accent/10 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-lg">University</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Colleges", href: "/colleges" },
                { label: "Programmes", href: "/#programs" },
                { label: "Campus Life", href: "/#campus" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-accent transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-brand-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-lg">Academics</h4>
            <ul className="space-y-3">
              {["Undergraduate", "Postgraduate", "Research", "Centres & Units", "News & Events"].map((link) => (
                <li key={link}>
                  <Link href="/#programs" className="text-sm text-gray-400 hover:text-brand-accent transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-brand-primary" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-lg">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Join our mailing list to receive the latest news, admission updates, and events.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="input-dark"
                required
              />
              <button type="submit" className="btn-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Bells University of Technology. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex gap-5">
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Use</a>
            </div>

            {/* Developer Credit */}
            <p className="text-xs text-gray-500">
              Designed &amp; Developed by{" "}
              <a
                href="https://codermayank69.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent font-semibold hover:text-white transition-colors underline underline-offset-2"
              >
                Mayank Singh
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
