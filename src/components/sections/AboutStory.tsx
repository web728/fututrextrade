"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Globe2, Building2, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { company } from '@/data/company';

const copyVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export function AboutStory() {
  return (
    <div className="relative w-full bg-white overflow-hidden py-10">
      
      {/* Background Section Container with Sharp Asymmetric Diagonal Cut */}
      <section 
        className="relative z-20 w-full bg-[#03070f] text-white py-28 sm:py-36 select-none overflow-hidden"
        style={{
          clipPath: 'polygon(0 5vw, 100% 0, 100% calc(100% - 6vw), 0 100%)'
        }}
      >
        {/* Precision Blueprint Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
          aria-hidden="true"
        />

        {/* Dynamic Angled Red Cut Overlay Accent at Bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-[var(--color-red)] via-[#ff2a34] to-[var(--color-red)] opacity-95 pointer-events-none"
          style={{
            clipPath: 'polygon(0 80%, 100% 0%, 100% 100%, 0 100%)'
          }}
          aria-hidden="true"
        />

        {/* Glassmorphic Glow Orbs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[var(--color-red)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Edge Angled Red Hairline */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-red)] to-transparent shadow-[0_0_12px_var(--color-red)]" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
          
          {/* Architectural Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[var(--color-red)] block rounded-full shadow-[0_0_8px_var(--color-red)]" aria-hidden="true" />
              <span className="font-mono text-[11px] font-black tracking-[0.28em] uppercase text-slate-200">
                PLATFORM SCALE // TRUST MECHANISM
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.06] border border-white/15 rounded-full text-xs font-mono text-slate-300">
              <ShieldCheck size={14} className="text-sky-400" />
              <span className="uppercase tracking-wider font-semibold">Audited B2B Trade Network</span>
            </div>
          </div>

          {/* Main Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Premium Framed Exhibition Image */}
            <div className="lg:col-span-5 relative min-h-[440px] sm:min-h-[520px] lg:min-h-[560px] rounded-2xl overflow-hidden border border-white/20 bg-[#050c18] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <motion.div
                initial={{ scale: 1.06, opacity: 0.85 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image 
                  src={company.assets.exhibition} 
                  alt="Trade visitors and business discussions at a Futurex exhibition" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Dark Gradient Contrast Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#03070f] via-transparent to-[#03070f]/50" />

              {/* Status Badge Top Left */}
              <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-black/70 backdrop-blur-md border border-white/25 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-pulse shadow-[0_0_6px_var(--color-red)]" />
                ORGANIZER OF RECORD
              </div>

              {/* Proof Box Bottom */}
              <div className="absolute bottom-5 left-5 right-5 z-10 bg-black/80 backdrop-blur-xl border border-white/20 p-5 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Award className="w-4.5 h-4.5 text-[var(--color-red)] shrink-0" />
                  <span className="text-[11px] font-black tracking-wider uppercase text-white">
                    15+ Years Industrial Leadership
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed m-0 font-normal">
                  Connecting manufacturers, machinery suppliers, and global trade buyers across SAARC and East Africa.
                </p>
              </div>
            </div>

            {/* Right Column: High Contrast Typography & Footprint */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={copyVariants}
              >
                {/* Eyebrow Floating Pill */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.08] border border-white/15 rounded-md mb-5">
                  <Sparkles size={13} className="text-[var(--color-red)]" />
                  <span className="text-[10.5px] font-mono font-extrabold tracking-[0.22em] uppercase text-slate-300">
                    ABOUT FUTUREX GROUP
                  </span>
                </motion.div>

                {/* Main "Since 2011" Headline Accent */}
                <motion.div variants={itemVariants} className="mb-2">
                  <h2 className="font-heading font-black text-6xl sm:text-7xl lg:text-[84px] tracking-tight text-[var(--color-red)] leading-none drop-shadow-[0_4px_20px_rgba(227,19,27,0.3)]">
                    Since 2011
                  </h2>
                </motion.div>

                {/* Bright Crisp Subheadline */}
                <motion.h3 
                  variants={itemVariants}
                  className="font-heading font-black text-white text-2xl sm:text-3xl lg:text-[40px] leading-[1.12] tracking-tight mb-6"
                >
                  Building platforms where global industries meet opportunity.
                </motion.h3>

                {/* Narrative Text */}
                <motion.p 
                  variants={itemVariants}
                  className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-[620px]"
                >
                  Headquartered in New Delhi with branch offices in Mumbai, Colombo, Kathmandu, and Dhaka, Futurex is an international exhibition organizer delivering 220+ successful high-impact trade fairs and bilateral investment forums.
                </motion.p>

                {/* Interactive Glassmorphic Footprint Matrix */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-white/10 mb-8">
                  
                  {/* Offices Box */}
                  <div className="flex items-start gap-3.5 p-4 bg-white/[0.05] border border-white/15 rounded-xl hover:border-white/35 hover:bg-white/[0.08] transition-all duration-300 shadow-md">
                    <div className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-[var(--color-red)] shrink-0">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <strong className="block text-[11px] font-extrabold text-white uppercase tracking-wider mb-1 font-mono">
                        Established Offices
                      </strong>
                      <span className="text-xs text-slate-300 leading-relaxed font-normal">
                        New Delhi (HQ) · Mumbai · Dhaka · Colombo · Kathmandu
                      </span>
                    </div>
                  </div>

                  {/* Target Markets Box */}
                  <div className="flex items-start gap-3.5 p-4 bg-white/[0.05] border border-white/15 rounded-xl hover:border-white/35 hover:bg-white/[0.08] transition-all duration-300 shadow-md">
                    <div className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-sky-400 shrink-0">
                      <Globe2 size={18} />
                    </div>
                    <div>
                      <strong className="block text-[11px] font-extrabold text-white uppercase tracking-wider mb-1 font-mono">
                        Target Markets
                      </strong>
                      <span className="text-xs text-slate-300 leading-relaxed font-normal">
                        India · Nepal · Bangladesh · Sri Lanka · Kenya · Tanzania
                      </span>
                    </div>
                  </div>

                </motion.div>

                {/* Premium White Glass Button CTA */}
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <Link 
                    href="/about" 
                    className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black text-xs font-heading font-black tracking-wider uppercase rounded-full hover:bg-[var(--color-red)] hover:text-white transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_30px_rgba(227,19,27,0.5)] hover:-translate-y-0.5"
                  >
                    <span>Our Full Story</span>
                    <ArrowUpRight 
                      size={17} 
                      aria-hidden="true" 
                      className="stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" 
                    />
                  </Link>
                </motion.div>

              </motion.div>
            </div>

          </div>

        </div>

        {/* Bottom Hairline Diagonal Border */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" 
          aria-hidden="true" 
        />
      </section>

    </div>
  );
}

export default AboutStory;