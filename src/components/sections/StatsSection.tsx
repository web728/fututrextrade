"use client";

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ShieldCheck, Award, TrendingUp, Globe2, CheckCircle2 } from 'lucide-react';
import { company } from '@/data/company';

const statIcons = [Award, TrendingUp, ShieldCheck, Globe2];

// Self-contained smooth spring counter (zero dependencies, works 100% on scroll)
function CounterCell({ value, suffix = "" }: { value: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const numericTarget = typeof value === 'number' 
    ? value 
    : parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;

  const motionVal = useMotionValue(0);
  
  // Luxury smooth mechanical spring feel
  const springVal = useSpring(motionVal, {
    damping: 30,
    stiffness: 75,
    mass: 0.9
  });

  useEffect(() => {
    if (isInView) {
      motionVal.set(numericTarget);
    }
  }, [isInView, motionVal, numericTarget]);

  useEffect(() => {
    const unsubscribe = springVal.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString('en-IN');
      }
    });
    return () => unsubscribe();
  }, [springVal]);

  return (
    <span className="inline-flex items-baseline font-heading font-black text-ink">
      <span ref={ref}>0</span>
      {suffix && <span className="text-red ml-0.5">{suffix}</span>}
    </span>
  );
}

export function StatsSection() {
  const statsList = (company as any)?.stats || [
    { value: 220, suffix: '+', label: 'Trade Exhibitions' },
    { value: 16500, suffix: '+', label: 'Global Exhibitors' },
    { value: 1200000, suffix: '+', label: 'Trade Buyers' },
    { value: 5, suffix: ' Hubs', label: 'Regional Capitals' }
  ];

  return (
    <section 
      className="relative z-20 w-full bg-off border-y border-line py-16 sm:py-24 overflow-hidden select-none" 
      aria-label="Futurex Impact Metrics"
    >
      {/* Precision Blueprint Architecture Grid (Light Mode) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(217, 220, 225, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(217, 220, 225, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Header Telemetry Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-line">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-5 h-[2.5px] bg-red block" aria-hidden="true" />
            <span className="text-[11px] font-mono font-extrabold tracking-[0.2em] uppercase text-muted">
              PLATFORM SCALE // AUDITED IMPACT METRICS
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-paper border border-line text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider rounded-[2px] shadow-xs">
            <ShieldCheck size={14} className="text-blue shrink-0" />
            <span>Audited B2B Industrial Performance</span>
          </div>
        </div>

        {/* 4-Column High-Precision Light Ledger Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line bg-paper border border-line shadow-sm rounded-[2px]">
          {statsList.map((stat: any, idx: number) => {
            const Icon = statIcons[idx % statIcons.length];

            return (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-7 sm:p-9 flex flex-col justify-between transition-colors duration-300 hover:bg-off/60"
              >
                {/* Red Laser Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent group-hover:bg-red transition-all duration-300" />

                {/* Card Top Metadata & Icon */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.18em] text-muted group-hover:text-red transition-colors">
                    // 0{idx + 1} METRIC
                  </span>
                  <div className="w-8 h-8 rounded-[2px] bg-off border border-line flex items-center justify-center text-slate-500 group-hover:text-white group-hover:bg-red group-hover:border-red transition-all duration-300 shadow-xs">
                    <Icon size={15} />
                  </div>
                </div>

                {/* Animated Spring Counter Display */}
                <div className="my-2">
                  <div className="text-4xl sm:text-5xl lg:text-[50px] tracking-tight leading-none">
                    <CounterCell value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>

                {/* Metric Label & Assurance */}
                <div className="mt-6 pt-4 border-t border-line/80">
                  <strong className="block font-heading font-extrabold text-xs sm:text-[13px] uppercase tracking-wider text-ink group-hover:text-red transition-colors">
                    {stat.label}
                  </strong>
                  <span className="text-[11px] font-medium text-muted mt-1 flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                    Verified commercial records
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default StatsSection;