"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Layers, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { featuredExhibitions } from '@/data/exhibitions';
import { ExhibitionGrid } from '@/components/exhibitions/ExhibitionGrid';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const filterTabs = [
  { id: 'all', label: 'All Editions' },
  { id: 'India', label: 'India' },
  { id: 'Nepal', label: 'Nepal' },
  { id: 'Bangladesh', label: 'Bangladesh' },
  { id: 'East Africa', label: 'East Africa' }
] as const;

export function UpcomingExhibitions() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredEvents = (activeTab === 'all' 
    ? featuredExhibitions 
    : featuredExhibitions.filter(item => {
        if (activeTab === 'East Africa') {
          return ['Kenya', 'Uganda', 'Tanzania'].includes(item.country);
        }
        return item.country.toLowerCase() === activeTab.toLowerCase();
      })
  ).slice(0, 4);

  return (
    <section 
      className="relative bg-off py-20 md:py-28 border-b border-line overflow-hidden"
      aria-labelledby="upcoming-exhibitions-title"
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* 1. Editorial Header Bar */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-7 border-b border-line"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-red block" aria-hidden="true" />
              <span className="text-[10.5px] font-extrabold tracking-[0.18em] uppercase text-muted">
                Official Trade Calendar
              </span>
            </div>
            <h2 
              id="upcoming-exhibitions-title"
              className="font-heading font-black text-ink text-3xl sm:text-4xl md:text-5xl tracking-[-0.035em] leading-[1.05]"
            >
              Upcoming Global Exhibitions.
            </h2>
          </div>

          <Link 
            href="/exhibitions" 
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.06em] text-ink hover:text-red transition-colors pb-1 border-b border-ink hover:border-red self-start md:self-end group"
          >
            <span>View All Exhibitions</span>
            <ArrowUpRight 
              size={14} 
              aria-hidden="true" 
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
            />
          </Link>
        </motion.div>

        {/* 2. Platform Filter Tabs (Sharp Architectural Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pt-7 pb-8 scrollbar-none">
          {filterTabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`relative px-4 py-2.5 text-[11px] font-extrabold tracking-[0.08em] uppercase transition-all duration-200 cursor-pointer shrink-0 ${
                  isSelected 
                    ? 'text-white bg-ink shadow-sm' 
                    : 'text-muted bg-paper border border-line hover:border-ink hover:text-ink'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeExhibitionIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-red"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3. Exhibition Grid Render */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ExhibitionGrid events={filteredEvents} editorial={activeTab === 'all'} />
          </motion.div>
        </AnimatePresence>

        {/* 4. Commercial Corridor Callout Box */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 bg-ink text-white p-7 sm:p-9 border border-line-dark overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          {/* Subtle Ambient Red Glow */}
          <span 
            className="absolute -right-16 -top-16 w-64 h-64 bg-red/20 blur-[80px] pointer-events-none rounded-full" 
            aria-hidden="true" 
          />

          <div className="relative z-10 flex items-start gap-4 max-w-2xl">
            <div className="w-11 h-11 bg-white/[0.04] border border-white/10 flex items-center justify-center text-red shrink-0 mt-0.5">
              <CalendarCheck size={20} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.14em] text-red block mb-1">
                South Asia & East Africa Corridors
              </span>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight">
                Planning stalls across India, Bangladesh, Nepal or Kenya?
              </h3>
              <p className="text-muted-light text-xs sm:text-[13px] leading-relaxed mt-1">
                Access certified floor layouts, verified visitor demographic profiles, and direct stall reservation portals for all upcoming editions.
              </p>
            </div>
          </div>

          <Link
            href="/exhibitions"
            className="relative z-10 shrink-0 inline-flex items-center justify-center min-h-[46px] px-6 text-[11px] font-extrabold tracking-[0.06em] uppercase bg-red text-white hover:bg-red-deep transition-all duration-300 shadow-[0_6px_16px_-6px_rgba(227,19,27,0.5)] hover:-translate-y-0.5 group"
          >
            <span>Explore Complete Calendar</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}