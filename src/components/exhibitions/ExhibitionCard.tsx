"use client";

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Calendar, MapPin, Mail, Building2, Globe, ArrowUpRight } from 'lucide-react';
import type { ExhibitionItem } from '@/data/exhibitions';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function ExhibitionCard({ event }: { event: ExhibitionItem }) {
  const displayLocation = `${event.venue}, ${event.city}`;

  const mailSubject = encodeURIComponent(`Stall Booking Request: ${event.title} (${event.year || ''})`);
  const mailBody = encodeURIComponent(
    `Dear Futurex Team,\n\nI want to explore stall reservation for ${event.title}.\n\nDates: ${event.dates}\nVenue: ${displayLocation}\n\nPlease share the floor layout plan and stall rates.\n\nCompany Name:\nContact Phone:\nRequired Space (sqm):`
  );
  const inquiryMailHref = `mailto:admin@futurextrade.com?subject=${mailSubject}&body=${mailBody}`;

  return (
    <motion.article 
      variants={cardVariants}
      className="group relative w-full h-[280px] sm:h-[300px] bg-gradient-to-b from-[#0B132B] to-[#060a17] text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#E3131B]/10 transition-all duration-500 isolate border border-slate-800/80 hover:border-slate-700"
    >
      {/* Top Laser Accent Strip */}
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E3131B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

      {/* 1. DEFAULT VIEW: Prominent Logo Display */}
      <div className="relative w-full h-full flex flex-col justify-between p-6 z-10">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(227,19,27,0.12)_0%,transparent_70%)] pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#E3131B] text-white text-[10px] font-mono font-black tracking-widest uppercase rounded-md shadow-sm">
              {event.country}
            </span>
            {event.edition && (
              <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md text-slate-300 text-[9.5px] font-mono font-bold tracking-wider uppercase rounded-md border border-white/10">
                {event.edition}
              </span>
            )}
          </div>

          {event.year && (
            <span className="text-xs font-mono font-bold text-slate-500/80 tracking-widest">
              {event.year}
            </span>
          )}
        </div>

        {/* Hero Logo Canvas */}
        <div className="relative z-10 my-auto flex items-center justify-center w-full h-[120px] px-4 py-2">
          {event.logo ? (
            <div className="relative w-full h-full max-w-[220px] sm:max-w-[240px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <Image
                src={event.logo}
                alt={`${event.title} logo`}
                fill
                sizes="(max-width: 640px) 200px, 240px"
                className="object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                priority={false}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Building2 size={24} className="text-[#E3131B]" />
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-slate-200 line-clamp-2">
                {event.title}
              </h3>
            </div>
          )}
        </div>

        {/* Bottom Quick Indicator */}
        <div className="relative z-10 flex items-center justify-between text-slate-400 text-[11px] font-mono pt-2 border-t border-white/5">
          <span className="truncate max-w-[200px]">{event.city}</span>
          <span className="text-[#E3131B] font-bold group-hover:translate-x-0.5 transition-transform">
            View Details &rarr;
          </span>
        </div>
      </div>

      {/* 2. HOVER OVERLAY: Ultra-Modern Glassmorphic Details */}
      <div className="absolute inset-0 z-20 bg-[#070e20]/95 backdrop-blur-xl p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out pointer-events-none group-hover:pointer-events-auto">
        
        <div className="space-y-3">
          {/* Industry Tag */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E3131B] animate-pulse" />
            <span className="text-[#E3131B] font-mono font-bold text-[10.5px] tracking-widest uppercase">
              {event.industry}
            </span>
          </div>

          {/* Event Title */}
          <h4 className="font-heading font-extrabold text-white text-base sm:text-lg leading-snug tracking-tight">
            {event.title}
          </h4>

          {/* Date & Venue Metadata */}
          <div className="space-y-2 pt-1 text-slate-300">
            <div className="flex items-center gap-2.5 text-xs font-medium">
              <div className="w-6 h-6 rounded-md bg-[#E3131B]/15 flex items-center justify-center shrink-0">
                <Calendar size={13} className="text-[#E3131B]" />
              </div>
              <span className="text-slate-100 font-semibold">{event.dates}</span>
            </div>
            
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                <MapPin size={13} className="text-slate-400" />
              </div>
              <span className="truncate">{displayLocation}</span>
            </div>
          </div>
        </div>

        {/* Quick Action Footer Buttons */}
        <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
          {event.website && (
            <a
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono font-bold uppercase tracking-wider transition-colors duration-200"
            >
              <Globe size={13} />
              <span>Website</span>
              <ArrowUpRight size={12} className="opacity-70" />
            </a>
          )}

          <a
            href={inquiryMailHref}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#E3131B] hover:bg-[#c80f16] text-white text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#E3131B]/20 hover:shadow-lg hover:shadow-[#E3131B]/35 active:scale-95"
          >
            <Mail size={13} />
            <span>Book Stall</span>
          </a>
        </div>

      </div>
    </motion.article>
  );
}

export default ExhibitionCard;