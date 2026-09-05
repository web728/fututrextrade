"use client";

import { motion, type Variants } from 'framer-motion';
import { Target, Compass, Sparkles, Award, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Globe } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

interface PillarsSectionProps {
  visionText?: string;
}

export function PillarsSection({ visionText }: PillarsSectionProps) {
  return (
    <section 
      className="relative z-20 w-full overflow-hidden text-white bg-[#0B132B] py-28 sm:py-36 select-none"
      style={{
        clipPath: 'polygon(0 2.5vw, 100% 0, 100% calc(100% - 2.5vw), 0 100%)'
      }}
      aria-labelledby="pillars-heading"
    >
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* Radial Ambient Lights */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E3131B]/10 rounded-full blur-[160px] pointer-events-none z-0" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md shadow-2xl">
            <Sparkles className="w-3.5 h-3.5 text-[#E3131B]" aria-hidden="true" />
            <span className="text-[10px] font-mono font-black tracking-[0.3em] uppercase text-slate-300">
              CORE STRATEGY & FOUNDATION
            </span>
          </div>

          <h2 
            id="pillars-heading"
            className="font-heading font-black text-white text-3xl sm:text-5xl lg:text-[52px] leading-[1.05] tracking-tight uppercase"
          >
            Guided By <br />
            <span className="relative inline-block pb-1 text-[#E3131B]">
              Purpose & Excellence
              <svg
                className="absolute left-0 -bottom-1 w-full h-[8px] text-[#E3131B] overflow-visible"
                viewBox="0 0 260 8"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 1 6 C 50 1, 150 1, 259 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Pillars Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* 1. MISSION CARD */}
          <motion.article 
            variants={cardVariants} 
            className="group relative flex flex-col justify-between bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-[#E3131B]/80 rounded-2xl p-8 backdrop-blur-2xl transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(227,19,27,0.2)] hover:-translate-y-1.5"
          >
            <span 
              className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#E3131B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              aria-hidden="true" 
            />

            <div>
              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E3131B] group-hover:bg-[#E3131B] group-hover:text-white transition-all duration-300 shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded-full bg-black/40 text-slate-400 border border-white/5 uppercase">
                  Pillar // 01
                </span>
              </div>

              <span className="text-[11px] font-mono font-black tracking-[0.25em] uppercase text-[#E3131B] block mb-2">
                MISSION
              </span>

              <h3 className="font-heading font-extrabold text-white text-xl leading-snug mb-4">
                Catalyzing Regional Industrial Trade
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Organizing specialized, high-impact trade fairs designed to unlock emerging market potential across international territories.
              </p>

              <ul className="space-y-3 pt-6 border-t border-white/10">
                <li className="flex items-start gap-3 text-slate-300 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E3131B] shrink-0 mt-0.5" />
                  <span>Elevate trade exhibition benchmarks continuously</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E3131B] shrink-0 mt-0.5" />
                  <span>Engineered B2B buyer-seller matchmaking</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E3131B] shrink-0 mt-0.5" />
                  <span>Strategic footprint expansion across South Asia</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-white transition-colors">
              <span>ACTION PLAN</span>
              <ArrowUpRight className="w-4 h-4 text-[#E3131B]" />
            </div>
          </motion.article>

          {/* 2. VISION CARD (Featured Center Highlight) */}
          <motion.article 
            variants={cardVariants} 
            className="group relative flex flex-col justify-between bg-gradient-to-b from-[#E3131B]/10 via-white/[0.05] to-white/[0.02] border border-[#E3131B]/40 hover:border-[#E3131B] rounded-2xl p-8 lg:p-9 backdrop-blur-2xl transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_60px_rgba(227,19,27,0.3)] hover:-translate-y-2 lg:-translate-y-2"
          >
            <span 
              className="absolute top-0 left-0 right-0 h-[3px] bg-[#E3131B] rounded-t-2xl" 
              aria-hidden="true" 
            />

            <div>
              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-13 h-13 rounded-xl bg-[#E3131B] text-white flex items-center justify-center shadow-lg shadow-[#E3131B]/30">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="font-mono text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded-full bg-[#E3131B]/20 text-white border border-[#E3131B]/30 uppercase">
                  CORE // 02
                </span>
              </div>

              <span className="text-[11px] font-mono font-black tracking-[0.25em] uppercase text-[#E3131B] block mb-2">
                OUR VISION
              </span>

              <h3 className="font-heading font-black text-white text-2xl leading-snug mb-4">
                The Pinnacle Global B2B Platform
              </h3>

              <p className="text-white text-base leading-relaxed font-semibold mb-6">
                {visionText || "To be the most trusted international platform orchestrating world-class business exhibitions and trade bridges."}
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300 font-medium leading-relaxed">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <Globe className="w-3.5 h-3.5 text-[#E3131B]" />
                  <span>Global Execution</span>
                </div>
                Futurex excels in delivery through unwavering trust, operational commitment, and perseverance.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono font-bold text-white">
              <span className="tracking-wider">LONG TERM ASPIRATION</span>
              <Sparkles className="w-4 h-4 text-[#E3131B]" />
            </div>
          </motion.article>

          {/* 3. VALUES CARD */}
          <motion.article 
            variants={cardVariants} 
            className="group relative flex flex-col justify-between bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-[#E3131B]/80 rounded-2xl p-8 backdrop-blur-2xl transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(227,19,27,0.2)] hover:-translate-y-1.5"
          >
            <span 
              className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#E3131B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              aria-hidden="true" 
            />

            <div>
              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E3131B] group-hover:bg-[#E3131B] group-hover:text-white transition-all duration-300 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded-full bg-black/40 text-slate-400 border border-white/5 uppercase">
                  Pillar // 03
                </span>
              </div>

              <span className="text-[11px] font-mono font-black tracking-[0.25em] uppercase text-[#E3131B] block mb-2">
                CORE VALUES
              </span>

              <h3 className="font-heading font-extrabold text-white text-xl leading-snug mb-5">
                Uncompromising Integrity
              </h3>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 group-hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#E3131B]" />
                    <span className="text-xs font-bold text-white">Business Ethics</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-6">Socially responsible production & green image focus.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 group-hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Zap className="w-4 h-4 text-[#E3131B]" />
                    <span className="text-xs font-bold text-white">Client Integrity</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-6">Unmatched commitment with complete operational clarity.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 group-hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E3131B]" />
                    <span className="text-xs font-bold text-white">Reliability</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-6">Strict execution timelines and high flexibility.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-white transition-colors">
              <span>ETHICAL CODE</span>
              <ArrowUpRight className="w-4 h-4 text-[#E3131B]" />
            </div>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
}

export default PillarsSection;