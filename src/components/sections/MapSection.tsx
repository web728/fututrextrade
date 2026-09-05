"use client";

import { MapPin, Navigation } from 'lucide-react';
import { company } from '@/data/company';

export function MapSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6859345202657!2d77.2185!3d28.5492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30000000001%3A0x3408f615f7253508!2sFuturex%20Trade%20Fair%20%26%20Events%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section className="relative py-12 bg-white border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#E3131B] mb-1">
              <MapPin className="w-3.5 h-3.5" />
              LOCATION DIRECTORY
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
              Visit Our Head Office
            </h3>
          </div>

          <a
            href="https://www.google.com/maps?cid=3748197811609641352"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-[#E3131B] text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xl transition-colors duration-300 shadow-sm self-start sm:self-auto"
          >
            <Navigation className="w-3.5 h-3.5" />
            Get Directions
          </a>
        </div>

        {/* Embedded Map Container */}
        <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
          <iframe
            title="Futurex Office Location Map"
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}