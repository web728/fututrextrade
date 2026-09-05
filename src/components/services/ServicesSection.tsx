"use client";

import { motion, type Variants } from 'framer-motion';
import { services } from '@/data/services';
import { ServiceCard } from './ServiceCard';
import { Sparkles, Cpu, Layers } from 'lucide-react';

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export function ServicesSection() {
  return (
    <section className="relative z-20 w-full bg-[#f8f9fa] text-[#050c18] py-24 sm:py-32 overflow-hidden border-t border-slate-200 select-none">
      
      {/* Precision Light Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* Top Angular SVG Cut Edge */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12 text-white fill-current"
        >
          <path d="M1200 0L0 0 0 120 1200 0z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Header & Section Title Module */}
        <div className="mb-14 border-b border-slate-200 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-md">
              <Sparkles size={13} className="text-[var(--color-red)]" />
              <span className="text-[10.5px] font-mono font-extrabold tracking-[0.24em] uppercase text-slate-700">
                TURNKEY CAPABILITIES
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 shadow-sm rounded">
                <Cpu size={14} className="text-[var(--color-red)]" />
                <span>END-TO-END EXECUTION</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 shadow-sm rounded">
                <Layers size={14} className="text-sky-600" />
                <span>MODULAR LOGISTICS</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <h2 className="font-heading font-black text-[#050c18] text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] tracking-tight">
                B2B industrial platforms, <br />
                <span className="text-[var(--color-red)]">
                  delivered end to end.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal m-0 max-w-[480px]">
                From exhibition concept and space architecture to international buyer acquisition and multi-country operational logistics.
              </p>
            </div>
          </div>
        </div>
        
        {/* Light Mode Architectural Services List */}
        <motion.div 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 divide-y divide-slate-200 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden"
        >
        {services.map((service: any, index: number) => (
  <ServiceCard 
    key={service.slug || service.id || index} 
    service={service} 
    index={index} 
  />
))}
        </motion.div>

      </div>

      {/* Bottom Angular Red & White Cut Overlay Accent */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 overflow-hidden leading-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-14 text-[var(--color-red)] fill-current opacity-90"
        >
          <path d="M0 120L1200 0 1200 120 0 120z" />
        </svg>
      </div>

    </section>
  );
}

export default ServicesSection;