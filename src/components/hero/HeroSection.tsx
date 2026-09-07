"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { company } from '@/data/company';

const rotatingPhrases = [
  "industries converge",
  "global trade connects",
  "market leaders meet",
  "emerging sectors grow"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const networkNodes = [
  { id: 'n1', x: 90, y: 120, r: 3.2 },
  { id: 'n2', x: 260, y: 60, r: 2.2 },
  { id: 'n3', x: 340, y: 200, r: 4.2 },
  { id: 'n4', x: 470, y: 90, r: 2.6 },
  { id: 'n5', x: 560, y: 230, r: 3.4 },
  { id: 'n6', x: 640, y: 40, r: 2.2 },
  { id: 'n7', x: 720, y: 160, r: 2.8 },
  { id: 'n8', x: 190, y: 260, r: 2.2 },
];

const networkEdges: [string, string][] = [
  ['n1', 'n3'],
  ['n2', 'n3'],
  ['n3', 'n4'],
  ['n3', 'n8'],
  ['n4', 'n5'],
  ['n4', 'n6'],
  ['n5', 'n7'],
  ['n6', 'n7'],
];

const nodeMap = Object.fromEntries(networkNodes.map((n) => [n.id, n]));

export function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full min-h-[560px] sm:min-h-[640px] lg:h-[88vh] lg:max-h-[840px] overflow-hidden bg-[#07111f] text-white flex items-center justify-center pt-24 pb-14 sm:py-20 select-none isolate border-b border-white/10"
      aria-labelledby="home-hero-title"
    >
      {/* 1. Cinematic Background Exhibition Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image
            src={company.assets.hero}
            alt="Futurex international exhibition floor"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25 md:opacity-[0.28] mix-blend-luminosity filter contrast-125 brightness-90"
          />
        </motion.div>
      </div>

      {/* 2. Top Hairline Horizon Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-red via-white/20 to-transparent z-20" />

      {/* 3. Left Brand Geometry (Mobile optimized scale) */}
      <div 
        className="absolute inset-y-0 left-0 w-full sm:w-[85%] lg:w-[75%] max-w-[1100px] z-[1] pointer-events-none overflow-hidden" 
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1100 880"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full opacity-80 sm:opacity-100"
        >
          <defs>
            <filter id="homeHeroLaserGlowRed" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur1" />
              <feGaussianBlur stdDeviation="12" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="homeHeroLaserGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="homeGeomRedFill" x1="0%" y1="15%" x2="100%" y2="85%">
              <stop offset="0%" stopColor="#E3131B" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#b50f16" stopOpacity="0.55" />
              <stop offset="85%" stopColor="#59090d" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#07111f" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="homeLaserLineRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E3131B" stopOpacity="0.2" />
              <stop offset="40%" stopColor="#ff2a32" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#ff4d52" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ff7a80" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="homeGeomBlueBeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#1e3a8a" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#0f172a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#07111f" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="homeGeomOuterRedFin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E3131B" stopOpacity="0.8" />
              <stop offset="45%" stopColor="#b31218" stopOpacity="0.4" />
              <stop offset="85%" stopColor="#07111f" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <ellipse
            cx="320"
            cy="360"
            rx="360"
            ry="240"
            fill="#E3131B"
            opacity="0.16"
            className="filter blur-[80px]"
          />

          <polygon points="-80,110 560,110 290,760 -80,760" fill="url(#homeGeomRedFill)" />
          <line x1="-80" y1="110" x2="560" y2="110" stroke="url(#homeLaserLineRed)" strokeWidth="2.5" filter="url(#homeHeroLaserGlowRed)" />

          <polygon points="582,-50 422,930 318,930 478,-50" fill="url(#homeGeomBlueBeam)" />
          <line x1="582" y1="-50" x2="422" y2="930" stroke="#93c5fd" strokeWidth="1.8" filter="url(#homeHeroLaserGlowBlue)" />
          <line x1="478" y1="-50" x2="318" y2="930" stroke="#1d4ed8" strokeOpacity="0.35" strokeWidth="1" />

          <polygon points="710,-30 540,910 508,910 678,-30" fill="url(#homeGeomOuterRedFin)" />
          <line x1="710" y1="-30" x2="540" y2="910" stroke="#ff3b44" strokeWidth="2.2" filter="url(#homeHeroLaserGlowRed)" />
        </svg>
      </div>

      {/* 4. Fine Dot Grid Substrate */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-20 md:opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* 5. Contrast Vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `
            linear-gradient(90deg, rgba(7,17,31,0.5) 0%, rgba(7,17,31,0.2) 35%, rgba(7,17,31,0.8) 75%, #07111f 100%),
            linear-gradient(0deg, #07111f 0%, transparent 40%, rgba(7,17,31,0.65) 100%)
          `
        }}
      />

      {/* 6. Network Connectivity Map (Hidden on mobile to prevent clutter) */}
      <div className="hidden md:block absolute inset-0 z-[3] pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.svg
          viewBox="0 0 800 320"
          className="absolute right-[-4%] top-[10%] w-[55%] max-w-[700px] opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <defs>
            <linearGradient id="homeEdgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E3131B" stopOpacity="0.65" />
              <stop offset="55%" stopColor="#94a3b8" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
            </linearGradient>
            <radialGradient id="homeNodeGlowRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff5a5f" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#E3131B" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="homeNodeGlowBlue" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
          </defs>

          <motion.g animate={{ x: [0, 6, -4, 0], y: [0, -4, 3, 0] }} transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}>
            {networkEdges.map(([a, b], i) => {
              const from = nodeMap[a];
              const to = nodeMap[b];
              return (
                <motion.line
                  key={`${a}-${b}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="url(#homeEdgeGradient)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                />
              );
            })}

            {networkNodes.map((n, i) => (
              <g key={n.id}>
                <circle cx={n.x} cy={n.y} r={n.r * 5} fill={i % 2 === 0 ? 'url(#homeNodeGlowRed)' : 'url(#homeNodeGlowBlue)'} opacity={0.55} />
                <motion.circle cx={n.x} cy={n.y} r={n.r} fill={i % 2 === 0 ? '#ff8589' : '#93c5fd'} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }} />
                <circle cx={n.x} cy={n.y} r={n.r + 3.5} fill="none" stroke={i % 2 === 0 ? '#E3131B' : '#2563eb'} strokeOpacity="0.45" strokeWidth="0.8" />
              </g>
            ))}
          </motion.g>
        </motion.svg>
      </div>

      {/* 7. Foreground Content (Compact on mobile) */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[780px]"
        >
          {/* Eyebrow Floating Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-4 sm:mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red shadow-[0_0_8px_#E3131B]" />
            </span>
            <span className="text-[9.5px] sm:text-[11px] font-mono font-bold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-slate-200">
              International B2B Platforms · Est. {company.established}
            </span>
            <Sparkles className="w-3 h-3 text-red hidden sm:inline" aria-hidden="true" />
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
            <h1
              id="home-hero-title"
              className="font-heading font-black text-white text-[28px] sm:text-[42px] md:text-[50px] lg:text-[58px] leading-[1.12] sm:leading-[1.08] tracking-[-0.035em] drop-shadow-md"
            >
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Where</span>

                {/* Responsive Dynamic Phrase Container */}
                <div className="relative inline-flex flex-col justify-center h-[1.25em] min-w-[170px] sm:min-w-[280px] md:min-w-[360px]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={currentIdx}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center text-white font-black whitespace-nowrap"
                    >
                      {rotatingPhrases[currentIdx]}
                    </motion.span>
                  </AnimatePresence>

                  {/* Underline Accent */}
                  <motion.span
                    key={`underline-${currentIdx}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-0 w-full h-[2.5px] sm:h-[3.5px] bg-gradient-to-r from-red via-rose-500 to-sky-400 origin-left rounded-full shadow-[0_2px_14px_rgba(227,19,27,0.9)]"
                    aria-hidden="true"
                  />
                </div>

                <span className="text-red font-black">.</span>
              </div>

              {/* Anchor Line */}
              <span className="block text-slate-300 font-extrabold text-[17px] sm:text-[24px] md:text-[30px] tracking-[-0.03em] mt-1.5 sm:mt-2">
                Connecting global enterprise.
              </span>
            </h1>
          </motion.div>

          {/* Paragraph Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-xs sm:text-[15px] md:text-[16px] max-w-[580px] leading-[1.65] mb-6 sm:mb-7 font-normal drop-shadow-sm"
          >
            Futurex builds high-impact trade exhibitions connecting manufacturers, institutional buyers, and industry decision-makers across South Asia and Africa.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/exhibitions"
              className="relative group overflow-hidden inline-flex items-center justify-center h-11 sm:h-12 px-6 sm:px-7 text-[11px] font-black tracking-[0.1em] uppercase bg-gradient-to-r from-[#E3131B] to-[#b80f15] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 rounded-sm"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Exhibitions
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link
              href="/participants#exhibitor"
              className="inline-flex items-center justify-center h-11 sm:h-12 px-6 sm:px-7 text-[11px] font-black tracking-[0.1em] uppercase text-white bg-white/[0.06] border border-white/20 backdrop-blur-xl hover:bg-white/[0.12] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group rounded-sm"
            >
              Become an Exhibitor
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-slate-300 transition-transform duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Bottom Telemetry Strip */}
          <motion.div 
            variants={itemVariants} 
            className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] font-mono text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Audited Global Participation</span>
            </div>
            <div className="hidden sm:block text-slate-700">|</div>
            <div>
              Platform Network: <span className="text-white font-bold">220+ Exhibitions Completed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 8. Base Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#07111f] to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
    </section>
  );
}

export default HeroSection;