"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, CalendarCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { featuredExhibitions } from '@/data/exhibitions';
import { ExhibitionGrid } from '@/components/exhibitions/ExhibitionGrid';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
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
  const [showAll, setShowAll] = useState<boolean>(false);

  // Filter 16 upcoming exhibitions based on selected corridor
  const filteredEvents = featuredExhibitions.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'East Africa') {
      return ['Kenya', 'Uganda', 'Tanzania'].includes(item.country);
    }
    return item.country?.toLowerCase() === activeTab.toLowerCase();
  });

  // Display initial 6 or all 16 items based on toggle
  const visibleEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6);

  return (
    <section 
      className="relative z-20 w-full bg-[#f8fafc] text-[#07111f] py-16 sm:py-20 md:py-24 border-b border-slate-200 overflow-hidden select-none"
      aria-labelledby="upcoming-exhibitions-title"
    >
      {/* Precision Blueprint Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(203, 213, 225, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 213, 225, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8">
        
        {/* Editorial Header Bar */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-slate-200"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2.5px] bg-[#E3131B] block" aria-hidden="true" />
              <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500">
                OFFICIAL TRADE CALENDAR // 16 EDITIONS SCHEDULED
              </span>
            </div>
            <h2 
              id="upcoming-exhibitions-title"
              className="font-heading font-black text-[#07111f] text-2xl sm:text-4xl md:text-[44px] tracking-[-0.03em] leading-[1.1]"
            >
              Upcoming Global Exhibitions.
            </h2>
          </div>

          <div className="flex items-center gap-4 self-start md:self-end">
            <span className="font-mono text-xs text-slate-500 font-semibold hidden sm:inline">
              Showing {visibleEvents.length} of {filteredEvents.length} Platforms
            </span>
            <Link 
              href="/exhibitions" 
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#07111f] hover:text-[#E3131B] transition-colors pb-1 border-b border-[#07111f] hover:border-[#E3131B] group"
            >
              <span>Full Directory</span>
              <ArrowUpRight 
                size={15} 
                aria-hidden="true" 
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              />
            </Link>
          </div>
        </motion.div>

     {/* Platform Corridor Filter Tabs */}
<div className="flex items-center gap-2 overflow-x-auto pt-6 pb-6 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
  {filterTabs.map((tab) => {
    const isSelected = activeTab === tab.id;
    return (
      <button
        key={tab.id}
        onClick={() => {
          setActiveTab(tab.id);
          setShowAll(false);
        }}
        type="button"
        className={`relative px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shrink-0 rounded-[2px] ${
          isSelected 
            ? 'bg-[#07111f] shadow-sm' 
            : 'bg-white border border-slate-300 hover:border-[#07111f]'
        }`}
      >
        {isSelected && (
          <motion.span
            layoutId="activeExhibitionIndicator"
            className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E3131B] z-10"
            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
          />
        )}
        <span className={`relative z-10 transition-colors ${
          isSelected ? '!text-white font-extrabold' : 'text-slate-700 hover:text-[#07111f]'
        }`}>
          {tab.label}
        </span>
      </button>
    );
  })}
</div>

        {/* Exhibition Grid Render */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${showAll}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ExhibitionGrid events={visibleEvents} />
          </motion.div>
        </AnimatePresence>

        {/* Load More / Expand 16 Editions Toggle */}
        {filteredEvents.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-[#07111f] text-xs font-mono font-bold uppercase tracking-wider text-[#07111f] hover:bg-slate-50 transition-all shadow-xs rounded-[2px] active:scale-95 cursor-pointer"
            >
              <span>{showAll ? 'Show Less Editions' : `View All ${filteredEvents.length} Scheduled Exhibitions`}</span>
              {showAll ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>
        )}

        {/* Commercial Corridor Callout Box */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 sm:mt-16 bg-[#07111f] text-white p-6 sm:p-8 md:p-10 border border-white/10 overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl rounded-[2px]"
        >
          <span 
            className="absolute -right-20 -top-20 w-72 h-72 bg-[#E3131B]/20 blur-[90px] pointer-events-none rounded-full" 
            aria-hidden="true" 
          />

          <div className="relative z-10 flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/[0.06] border border-white/15 flex items-center justify-center text-[#E3131B] shrink-0 mt-0.5 rounded-[2px]">
              <CalendarCheck size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E3131B] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-red-400">
                  SOUTH ASIA & EAST AFRICA CORRIDORS
                </span>
              </div>
              <h3 className="font-heading font-black text-lg sm:text-xl md:text-2xl text-white tracking-tight leading-snug">
                Planning stalls across India, Bangladesh, Nepal, or Kenya?
              </h3>
              <p className="text-slate-300 text-xs sm:text-[13.5px] leading-relaxed mt-2 font-normal">
                Access certified floor layouts, verified visitor demographic profiles, and direct stall reservation portals for all upcoming industrial trade shows.
              </p>
            </div>
          </div>

          <Link
            href="/exhibitions"
            className="relative z-10 w-full sm:w-auto shrink-0 inline-flex items-center justify-center h-12 px-7 text-xs font-heading font-black tracking-wider uppercase bg-[#E3131B] text-white hover:bg-[#b80f15] transition-all duration-300 shadow-[0_6px_20px_rgba(227,19,27,0.45)] hover:-translate-y-0.5 active:scale-95 rounded-[2px]"
          >
            <span>Explore Complete Calendar</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default UpcomingExhibitions;