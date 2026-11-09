"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="apply" className="relative py-24 bg-brand-secondary text-white overflow-hidden">
      {/* Decorative SVG graphic - top right */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="100" r="250" stroke="white" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="300" cy="100" r="180" stroke="#e2b13c" strokeWidth="0.8" />
          <circle cx="300" cy="100" r="100" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      {/* Decorative SVG graphic - bottom left */}
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-50" y="150" width="200" height="200" stroke="#e2b13c" strokeWidth="1" strokeDasharray="6 6" transform="rotate(-30 100 200)" />
          <rect x="-20" y="130" width="150" height="150" stroke="white" strokeWidth="0.6" transform="rotate(-30 100 200)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-white">
              Begin Your Journey <br />
              <span className="italic font-light text-brand-accent">With Us.</span>
            </h3>
            <p className="text-gray-300 text-lg mb-12 max-w-md leading-relaxed">
              Our admissions team is here to guide you through the application process. Reach out to us with any questions about programs, campus life, or financial aid.
            </p>

            <div className="space-y-10">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <div className="mt-1">
                  <h5 className="font-semibold tracking-wide text-lg mb-2 text-white">University Campus</h5>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Benja Village, Km. 8, Idiroko Road<br />
                    Ota, Ogun State, Nigeria
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div className="mt-1">
                  <h5 className="font-semibold tracking-wide text-lg mb-2 text-white">Admissions Helpline</h5>
                  <p className="text-gray-400 leading-relaxed font-light">
                    +234 703 318 0831<br />
                    Mon - Sat, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-accent" />
                </div>
                <div className="mt-1">
                  <h5 className="font-semibold tracking-wide text-lg mb-2 text-white">Email Us</h5>
                  <p className="text-gray-400 leading-relaxed font-light">
                    info@bellsuniversity.edu.ng<br />
                    admissions@bellsuniversity.edu.ng
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Form */}
          <div className="bg-white p-8 md:p-12 shadow-2xl text-gray-900">
            <h4 className="text-2xl font-serif font-bold text-brand-secondary mb-2">Request Information</h4>
            <p className="text-gray-600 text-sm mb-8">Fill out the form below and we will get back to you shortly.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors bg-brand-light" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors bg-brand-light" required />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors bg-brand-light" required />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Program of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors bg-brand-light appearance-none text-gray-700" required>
                  <option value="">Select a program</option>
                  <option value="btech">B.Tech in Computer Science</option>
                  <option value="bba">Bachelor of Business Admin (BBA)</option>
                  <option value="mba">Master of Business Admin (MBA)</option>
                  <option value="phd">Ph.D. Programs</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors bg-brand-light resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 py-4 bg-brand-primary text-white font-bold hover:bg-brand-secondary transition-colors duration-300 mt-4"
              >
                Submit Inquiry
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
