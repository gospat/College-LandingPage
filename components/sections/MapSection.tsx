"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export default function MapSection() {
  return (
    <section className="border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <p className="section-eyebrow">Location</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-secondary">
              Ota, Ogun State, Nigeria
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bells+University+of+Technology+Ota+Ogun+State"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-brand-secondary text-brand-secondary text-sm font-semibold hover:bg-brand-secondary hover:text-white transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </motion.div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden border border-neutral-200 shadow-sm"
          style={{ height: "420px" }}
        >
          <iframe
            title="Bells University of Technology location — Ota, Ogun State"
            src="https://www.google.com/maps?q=Bells%20University%20of%20Technology%20Ota%20Ogun%20State&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(0.15) contrast(1.02) saturate(0.9)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm border-t border-neutral-100 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center bg-brand-primary text-white">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-secondary">Bells University of Technology</p>
                <p className="text-xs text-neutral-400">
                  Benja Village, Km. 8, Idiroko Road, Ota, Ogun State
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bells+University+of+Technology+Ota+Ogun+State"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex text-xs font-bold text-brand-secondary hover:text-brand-primary items-center gap-1 transition-colors"
            >
              Open in Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
