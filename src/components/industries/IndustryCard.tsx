"use client";

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import type { Industry } from '@/types/content';

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  return (
    <motion.div variants={cardItemVariants} className="h-full">
      <Link 
        href={`/industries/${industry.slug}`} 
        className="group relative flex flex-col justify-between h-full bg-white border border-slate-200/80 hover:border-[#E3131B]/50 rounded-2xl p-7 sm:p-8 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(227,19,27,0.08)] hover:-translate-y-1.5 overflow-hidden"
      >
        {/* Subtle Accent Glow on Hover */}
        <div 
          className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#E3131B]/5 blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          aria-hidden="true" 
        />

        {/* Top Active Indicator Line */}
        <span 
          className="absolute top-0 left-0 right-0 h-[3px] bg-[#E3131B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" 
          aria-hidden="true" 
        />

        <div>
          {/* Card Meta Row */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 group-hover:border-[#E3131B]/20 group-hover:text-[#E3131B] group-hover:bg-[#E3131B]/5 transition-colors duration-300">
              SECTOR // {String(index + 1).padStart(2, '0')}
            </span>

            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-600 group-hover:text-white group-hover:bg-[#E3131B] group-hover:border-[#E3131B] transition-all duration-300 shadow-sm">
              <ArrowUpRight size={17} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Industry Title */}
          <h3 className="font-heading font-extrabold text-slate-900 text-2xl leading-snug tracking-tight mb-3 transition-colors duration-200 group-hover:text-[#E3131B]">
            {industry.name}
          </h3>

          {/* Industry Description */}
          <p className="text-slate-600 text-sm leading-relaxed font-normal line-clamp-3 mb-8">
            {industry.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 group-hover:text-slate-900 transition-colors duration-200">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#E3131B]" />
            <span>EXPLORE NETWORK</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E3131B] transition-colors duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}

export default IndustryCard;