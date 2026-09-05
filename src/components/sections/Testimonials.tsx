'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Star, CheckCircle2, ExternalLink } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

// Official Futurex Kalkaji New Delhi listing link for writing direct reviews
const GOOGLE_REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=Futurex+Trade+Fair+and+Events+1st+floor+E-52+Kalkaji+New+Delhi+Delhi+110019+India";

const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 25 : -25,
    filter: 'blur(3px)'
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -25 : 25,
    filter: 'blur(3px)',
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  })
};

export function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const reducedMotion = useReducedMotion();

  const total = testimonials.length;
  const currentIndex = ((page % total) + total) % total;
  const item = testimonials[currentIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="relative z-20 w-full bg-off text-ink py-20 sm:py-28 overflow-hidden border-t border-line">
      {/* Precision Blueprint Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(217,220,225,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(217,220,225,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Top Proof Bar: Google Business Live Card */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-8 border-b border-line">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper border border-line mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-red" aria-hidden="true" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-muted">
                VERIFIED CREDIBILITY
              </span>
            </div>
            <h2 className="font-heading font-black text-ink text-2xl sm:text-3xl lg:text-4xl tracking-tight m-0">
              Trusted by exhibitors, partners & buyers.
            </h2>
          </div>

          {/* Google Rating Verified Pill Box */}
          <div className="flex flex-wrap items-center gap-4 bg-paper border border-line p-3 sm:p-4 shadow-xs" style={{ borderRadius: '2px' }}>
            <div className="flex items-center gap-3 pr-4 border-r border-line">
              {/* Google G Logo SVG */}
              <div className="w-8 h-8 rounded-full bg-off flex items-center justify-center border border-line/60">
                <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black text-ink text-lg leading-none">4.4</span>
                  <div className="flex items-center text-[#FBBC05]">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" stroke="none" />
                    ))}
                    <Star size={14} fill="currentColor" stroke="none" className="opacity-40" />
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider block mt-1">
                  Google Verified Rating
                </span>
              </div>
            </div>

            {/* Direct Link to Google Reviews */}
            <Link
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-red transition-colors duration-200"
            >
              <span>Write a Review</span>
              <ExternalLink size={13} className="text-muted" />
            </Link>
          </div>
        </div>

        {/* Main Testimonial Card Shell */}
        <div 
          className="relative bg-paper border border-line p-8 sm:p-12 lg:p-16 shadow-sm overflow-hidden"
          style={{ borderRadius: '2px' }}
        >
          {/* Top Brand Accent Line */}
          <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-red" aria-hidden="true" />

          {/* Testimonial Active Slide */}
          <div className="relative z-10 min-h-[220px] sm:min-h-[190px] flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={page}
                custom={direction}
                variants={reducedMotion ? undefined : slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full max-w-[960px]"
              >
                {/* 5 Golden Stars Header for individual review card */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200" style={{ borderRadius: '2px' }}>
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    Verified Attendee / Exhibitor
                  </span>
                </div>

                <blockquote className="m-0 font-heading font-bold text-ink text-xl sm:text-2xl lg:text-[26px] leading-[1.4] tracking-tight">
                  “{(item as any).quote || (item as any).content || (item as any).text}”
                </blockquote>

                {/* Reviewer Meta Information */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ink text-white font-heading font-black text-sm flex items-center justify-center shrink-0">
                    {((item as any).person || (item as any).name || 'U').charAt(0)}
                  </div>
                  <div>
                    <strong className="block font-heading font-black text-ink text-base tracking-tight">
                      {(item as any).person || (item as any).name || (item as any).author}
                    </strong>
                    <span className="block text-xs font-medium text-muted mt-0.5 tracking-wide">
                      {[(item as any).title, (item as any).company].filter(Boolean).join(' · ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls & Navigation */}
          <div className="relative z-10 mt-12 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            
            {/* Pagination Numbers & Progress Line */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-black tracking-widest text-ink">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              
              <div className="relative w-32 h-[3px] bg-line overflow-hidden rounded-full">
                <motion.div 
                  className="absolute top-0 bottom-0 left-0 bg-red"
                  animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>

              <span className="font-mono text-xs font-bold tracking-widest text-muted">
                {String(total).padStart(2, '0')}
              </span>
            </div>

            {/* Tactile Arrows */}
            <div className="flex items-center gap-2">
              <button 
                type="button" 
                onClick={() => paginate(-1)} 
                aria-label="Previous review"
                className="w-10 h-10 flex items-center justify-center bg-off border border-line text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
                style={{ borderRadius: '2px' }}
              >
                <ArrowLeft size={16} />
              </button>

              <button 
                type="button" 
                onClick={() => paginate(1)} 
                aria-label="Next review"
                className="w-10 h-10 flex items-center justify-center bg-off border border-line text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
                style={{ borderRadius: '2px' }}
              >
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}