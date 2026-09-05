"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Building2 } from 'lucide-react';
import type { Exhibition } from '@/types/exhibition';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function ExhibitionCard({ 
  event, 
  large = false 
}: { 
  event: Exhibition; 
  large?: boolean;
}) {
  const displayDate = 
    (event as any).date || 
    (event as any).dates || 
    ((event as any).startDate ? `${(event as any).startDate} - ${(event as any).endDate}` : 'Dates TBA');

  const displayLocation = 
    (event as any).location || 
    [(event as any).city, (event as any).country || (event as any).venue].filter(Boolean).join(', ') ||
    'Venue TBA';

  const displayYear = (event as any).year || (event as any).editionYear || '';

  return (
    <motion.article 
      variants={cardVariants}
      className={`group relative bg-white border border-slate-200 rounded-2xl flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#E3131B]/50 transition-all duration-300 hover:-translate-y-1.5 ${
        large ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
      }`}
    >
      <div>
        {/* Logo Header Banner Container (No Background Image, Pure Premium Dark Canvas) */}
        <div className={`relative w-full overflow-hidden bg-slate-950 flex items-center justify-center border-b border-slate-800 ${large ? 'h-[240px]' : 'h-[190px]'}`}>
          
          {/* Subtle Ambient Red Glow Behind Logo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,19,27,0.15)_0%,transparent_70%)] pointer-events-none" />

          {/* Top Pill Badges */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
            <span className="px-2.5 py-1 bg-[#E3131B] text-white text-[10px] font-mono font-extrabold tracking-widest uppercase rounded-md shadow-md">
              {event.country}
            </span>
            {event.edition && (
              <span className="px-2.5 py-1 bg-slate-900/90 backdrop-blur-md text-slate-200 text-[9.5px] font-bold tracking-wider uppercase rounded-md border border-slate-700">
                {event.edition}
              </span>
            )}
          </div>

          {/* Watermark Year Silhouette */}
          {displayYear && (
            <span className="absolute -bottom-3 right-3 text-white/5 font-heading font-black text-7xl sm:text-8xl tracking-tighter select-none pointer-events-none leading-none">
              {displayYear}
            </span>
          )}

          {/* Centered Standalone Exhibition Brand Logo */}
          <div className="relative z-10 flex items-center justify-center w-[170px] sm:w-[200px] h-20 px-4 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/80 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-[#E3131B]/60">
            {event.logo ? (
              <div className="relative w-full h-11">
                <Image
                  src={event.logo}
                  alt={`${event.title} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs font-bold uppercase">
                <Building2 size={18} className="text-[#E3131B]" />
                <span>{event.title}</span>
              </div>
            )}
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E3131B]" />
            <span className="text-[#E3131B] font-mono font-bold text-[10px] tracking-widest uppercase">
              {event.industry || 'B2B Trade Platform'}
            </span>
          </div>

          <h3 className={`font-heading font-black text-slate-900 tracking-tight line-clamp-2 transition-colors duration-200 group-hover:text-[#E3131B] ${
            large ? 'text-xl sm:text-2xl mb-4' : 'text-[17px] sm:text-lg leading-snug mb-3.5'
          }`}>
            <Link href={`/exhibitions/${event.slug}`}>
              {event.title}
            </Link>
          </h3>

          {/* Location & Date Info Meta Strip */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center gap-2.5 px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg">
              <Calendar size={14} className="text-[#E3131B] shrink-0" />
              <span className="text-xs font-bold text-slate-800 tracking-tight truncate">
                {displayDate}
              </span>
            </div>
            
            <div className="flex items-center gap-2.5 px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg">
              <MapPin size={14} className="text-slate-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-600 truncate">
                {displayLocation}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 sm:px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <Link 
          href={`/exhibitions/${event.slug}`}
          className="inline-flex items-center gap-1.5 text-[11px] font-mono font-black uppercase tracking-wider text-slate-900 group-hover:text-[#E3131B] transition-colors"
        >
          <span>View Profile</span>
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          href="/participants#exhibitor"
          className="text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-[#E3131B] px-3.5 py-1.5 rounded-lg transition-colors shadow-sm"
        >
          Exhibit
        </Link>
      </div>
    </motion.article>
  );
}