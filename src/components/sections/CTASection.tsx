"use client";

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Sparkles, ShieldCheck, Zap, ChevronRight } from 'lucide-react';

const links = [
  {
    href: '/participants#exhibitor',
    label: 'Exhibit with us',
    tag: 'BOOTHS & PAVILIONS'
  },
  {
    href: '/participants#visitor',
    label: 'Visit an exhibition',
    tag: 'TRADE PASS'
  },
  {
    href: '/participants#sponsor',
    label: 'Become a sponsor',
    tag: 'BRAND VISIBILITY'
  },
  {
    href: '/contact',
    label: 'Partner with Futurex',
    tag: 'STRATEGIC ALLIANCE'
  }
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function CTASection() {
  return (
    <section 
      className="relative z-20 w-full overflow-hidden text-white bg-[#E3131B] py-20 sm:py-24 select-none"
      style={{
        clipPath: 'polygon(0 2.5vw, 100% 0, 100% calc(100% - 2.5vw), 0 100%)'
      }}
      aria-labelledby="cta-heading"
    >
      {/* 1. Architectural Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      {/* 2. White Edge Accent Divider */}
      <div 
        className="absolute top-0 right-0 w-[55.8%] h-full bg-white pointer-events-none z-0"
        style={{
          clipPath: 'polygon(100% 0, 0 0, 100% 102%)'
        }}
        aria-hidden="true"
      />

      {/* 3. Pure Dark Navy Diagonal Cut (NO Transparency, Pure Navy #0B132B) */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full bg-[#0B132B] pointer-events-none z-0"
        style={{
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Headline & Micro Stats (Red Side) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/30 border border-white/20 rounded-full mb-6 w-fit backdrop-blur-md shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
              <span className="text-[10.5px] font-mono font-black tracking-[0.25em] uppercase text-white">
                ENGAGE // FUTUREX PLATFORMS
              </span>
            </div>

            <h2 
              id="cta-heading"
              className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] tracking-tight mb-5 uppercase"
            >
              Put your brand <br />
              <span className="relative inline-block pb-1">
                where business happens
                <svg
                  className="absolute left-0 -bottom-1 w-full h-[7px] text-white overflow-visible"
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
              </span>.
            </h2>

            <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-[500px]">
              Unlock access to verified trade buyers, strategic industrial alliances, and cross-border joint ventures across South Asian and SAARC markets.
            </p>

            {/* Micro Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-5 border-y border-white/25 max-w-[500px] mb-6">
              <div>
                <p className="text-2xl font-black font-mono text-white tracking-tight">16.5K+</p>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 mt-0.5">Enterprises</p>
              </div>
              <div>
                <p className="text-2xl font-black font-mono text-white tracking-tight">30+</p>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 mt-0.5">Sectors</p>
              </div>
              <div>
                <p className="text-2xl font-black font-mono text-white tracking-tight">100%</p>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 mt-0.5">Verified</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-4 text-xs font-mono font-bold text-white/90">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-white" />
                <span>Trade Buyer Network</span>
              </div>
              <span className="text-white/40">•</span>
              <div className="flex items-center gap-1.5">
                <Zap size={16} className="text-amber-300" />
                <span>Direct Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Cards (Navy Cut Side) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-6 flex flex-col gap-3.5"
          >
            {links.map((item, index) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="group relative flex items-center justify-between p-4 sm:p-5 bg-[#0B132B]/90 hover:bg-[#0B132B] border border-white/20 hover:border-[#E3131B] rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(227,19,27,0.3)] hover:-translate-y-0.5"
                >
                  {/* Left Red Indicator Bar */}
                  <span 
                    className="absolute left-0 top-3 bottom-3 w-[4px] bg-[#E3131B] rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300" 
                    aria-hidden="true" 
                  />

                  {/* Title & Tag */}
                  <div className="flex items-center gap-4 pl-1">
                    <span className="font-mono text-xs font-black tracking-widest px-2.5 py-1 rounded bg-black/60 text-[#E3131B] border border-white/10 group-hover:border-[#E3131B]/50">
                      0{index + 1}
                    </span>
                    <div>
                      <strong className="block font-heading font-black text-white text-base sm:text-lg tracking-tight leading-tight group-hover:text-white transition-colors">
                        {item.label}
                      </strong>
                      <span className="inline-block mt-1 text-[9.5px] font-mono font-extrabold tracking-widest uppercase text-slate-400 group-hover:text-slate-200">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Action Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-[#E3131B] text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-md">
                    <ArrowUpRight size={18} className="stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default CTASection;