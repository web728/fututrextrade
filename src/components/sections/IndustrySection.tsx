"use client";

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { industries } from '@/data/industries';
import { IndustryGrid } from '@/components/industries/IndustryGrid';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

export function IndustrySection() {
  return (
    <section className="relative z-20 w-full bg-off text-ink py-20 sm:py-28 overflow-hidden border-t border-line">
      {/* Precision Blueprint Technical Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(217,220,225,0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(217,220,225,0.45) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-line"
        >
          <div>
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper border border-line mb-4 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-red" aria-hidden="true" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted font-mono">
                INDUSTRIES WE CONNECT
              </span>
            </div>

            <h2 className="font-heading font-black text-ink text-3xl sm:text-4xl lg:text-[46px] leading-[1.1] tracking-[-0.035em]">
              Focused sectors. <br />
              <span className="text-muted font-bold">Serious business.</span>
            </h2>
          </div>

          {/* View All Button */}
          <Link 
            href="/industries" 
            className="group inline-flex items-center gap-2.5 px-6 py-3 bg-paper border border-line text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-ink hover:border-ink hover:bg-off transition-all duration-300 shadow-xs hover:shadow-sm"
            style={{ borderRadius: '2px' }}
          >
            <span>Explore All Sectors</span>
            <ArrowUpRight 
              size={15} 
              aria-hidden="true" 
              className="text-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
            />
          </Link>
        </motion.div>

        {/* Dynamic Industry Grid */}
        <IndustryGrid industries={industries.slice(0, 6)} />

      </div>
    </section>
  );
}