"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: Array<{
    name: string;
    href: string;
    dropdown: Array<{ label: string; href: string }>;
  }> = [
    {
      name: "About",
      href: "/#about",
      dropdown: [{ label: "About Bells", href: "/#about" }],
    },
    {
      name: "Academics",
      href: "/colleges",
      dropdown: [
        { label: "Colleges", href: "/colleges" },
        { label: "Programmes", href: "/#programs" },
      ],
    },
    {
      name: "Campus Life",
      href: "/#campus",
      dropdown: [{ label: "Campus Life", href: "/#campus" }],
    },
    {
      name: "Admissions",
      href: "/#contact",
      dropdown: [{ label: "Contact Admissions", href: "/#contact" }],
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-page">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 z-50 group">
              <div className={`flex items-center justify-center transition-colors ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-brand-secondary' : 'text-white'}`}>
                  Bells University of Technology
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 font-medium transition-colors ${
                      isScrolled ? "text-gray-700 hover:text-brand-primary" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-4 w-56"
                      >
                        <div className="bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className={isScrolled ? "btn-primary" : "btn-light"}
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className={`transition-colors ${isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'}`}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 pb-4">
                  <div className="text-lg font-serif font-bold text-brand-secondary mb-3">
                    {link.name}
                  </div>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-brand-primary/20">
                    {(link.dropdown ?? [{ label: "Open", href: link.href }]).map(
                      (item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="text-gray-600 hover:text-brand-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ))}
              <Link
                href="/#contact"
                className="w-full py-4 bg-brand-primary text-white text-center rounded font-semibold mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
