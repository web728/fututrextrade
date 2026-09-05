"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Interface ko flexible aur exact rakhein
export interface ServiceType {
  title: string;
  description: string;
  slug?: string;
  id?: string | number;
  [key: string]: any; // Baki parameters ke error ko prevent karega
}

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const formattedIndex = String(index + 1).padStart(2, '0');
  const serviceSlug = service.slug || service.id || `service-${index}`;

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
      }}
      className="group relative bg-white hover:bg-[#050c18] transition-all duration-500 p-7 sm:p-9 border-b border-slate-200 last:border-b-0"
    >
      <div 
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--color-red)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" 
        aria-hidden="true" 
      />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        <div className="flex items-start gap-6 sm:gap-8 max-w-[850px]">
          <div className="flex flex-col items-center justify-center min-w-[54px] h-[54px] rounded-xl bg-slate-100 group-hover:bg-white/10 border border-slate-200 group-hover:border-white/20 transition-colors duration-500 shrink-0">
            <span className="font-mono text-xl font-black text-[var(--color-red)] group-hover:text-white transition-colors duration-300">
              {formattedIndex}
            </span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-xl sm:text-2xl font-heading font-black text-[#050c18] group-hover:text-white transition-colors duration-300 tracking-tight">
                {service.title}
              </h3>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1 px-2.5 py-0.5 bg-[var(--color-red)]/15 border border-[var(--color-red)]/30 rounded-full text-[10px] font-mono font-bold uppercase text-[var(--color-red)]">
                <CheckCircle2 size={11} /> Turnkey
              </span>
            </div>

            <p className="text-slate-600 group-hover:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal m-0 transition-colors duration-300">
              {service.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between lg:justify-end gap-4 border-t lg:border-t-0 border-slate-100 group-hover:border-white/10 pt-4 lg:pt-0">
          <span className="lg:hidden text-[11px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-slate-500 uppercase">
            Explore Capabilities
          </span>

          <Link 
            href={`/services#${serviceSlug}`}
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-slate-300 group-hover:border-[var(--color-red)] bg-slate-50 group-hover:bg-[var(--color-red)] text-[#050c18] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_4px_20px_rgba(227,19,27,0.4)]"
            aria-label={`Learn more about ${service.title}`}
          >
            <ArrowUpRight size={18} className="stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}