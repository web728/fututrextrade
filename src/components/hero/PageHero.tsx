"use client";

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tagline?: string;
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } 
  }
};

// Node coordinates for the connectivity network map
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

export function PageHero({ eyebrow, title, description, tagline }: PageHeroProps) {
  return (
    <section 
      className="relative w-full py-24 sm:py-28 md:py-36 bg-[#07111f] text-white overflow-hidden border-b border-white/10 select-none isolate"
      aria-label="Page Header"
    >
      {/* 1. Precision Blueprint Technical Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      {/* 2. Left Architectural Geometry (Wall-to-wall precision match with Home Hero) */}
      <div 
        className="absolute inset-y-0 left-0 w-[78%] max-w-[1050px] z-[1] pointer-events-none overflow-hidden" 
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1100 880"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <filter id="pageHeroLaserGlowRed" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur1" />
              <feGaussianBlur stdDeviation="14" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="pageHeroLaserGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="pageGeomRedFill" x1="0%" y1="15%" x2="100%" y2="85%">
              <stop offset="0%" stopColor="#E3131B" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#b50f16" stopOpacity="0.55" />
              <stop offset="85%" stopColor="#59090d" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#07111f" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="pageLaserLineRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E3131B" stopOpacity="0.2" />
              <stop offset="40%" stopColor="#ff2a32" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#ff4d52" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ff7a80" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="pageGeomBlueBeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#1e3a8a" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#0f172a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#07111f" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="pageGeomOuterRedFin" x1="0%" y1="0%" x2="100%" y2="100%">
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
            className="filter blur-[90px]"
          />

          <polygon
            points="-80,110 560,110 290,760 -80,760"
            fill="url(#pageGeomRedFill)"
          />

          <line
            x1="-80"
            y1="110"
            x2="560"
            y2="110"
            stroke="url(#pageLaserLineRed)"
            strokeWidth="2.5"
            filter="url(#pageHeroLaserGlowRed)"
          />

          <polygon
            points="582,-50 422,930 318,930 478,-50"
            fill="url(#pageGeomBlueBeam)"
          />
          <line
            x1="582"
            y1="-50"
            x2="422"
            y2="930"
            stroke="#93c5fd"
            strokeWidth="1.8"
            filter="url(#pageHeroLaserGlowBlue)"
          />
          <line
            x1="478"
            y1="-50"
            x2="318"
            y2="930"
            stroke="#1d4ed8"
            strokeOpacity="0.35"
            strokeWidth="1"
          />

          <polygon
            points="710,-30 540,910 508,910 678,-30"
            fill="url(#pageGeomOuterRedFin)"
          />
          <line
            x1="710"
            y1="-30"
            x2="540"
            y2="910"
            stroke="#ff3b44"
            strokeWidth="2.2"
            filter="url(#pageHeroLaserGlowRed)"
          />
        </svg>
      </div>

      {/* 3. Right-Hand Connectivity Network Map & Rotating Meridian */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <motion.svg
          viewBox="0 0 800 320"
          className="absolute right-[-4%] top-[8%] w-[58%] max-w-[720px] opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <defs>
            <linearGradient id="pageEdgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E3131B" stopOpacity="0.65" />
              <stop offset="55%" stopColor="#94a3b8" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
            </linearGradient>
            <radialGradient id="pageNodeGlowRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff5a5f" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#E3131B" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="pageNodeGlowBlue" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Network Edges */}
          <motion.g
            animate={{ x: [0, 6, -4, 0], y: [0, -4, 3, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          >
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
                  stroke="url(#pageEdgeGradient)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                />
              );
            })}

            {/* Network Nodes */}
            {networkNodes.map((n, i) => (
              <g key={n.id}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r * 5}
                  fill={i % 2 === 0 ? 'url(#pageNodeGlowRed)' : 'url(#pageNodeGlowBlue)'}
                  opacity={0.55}
                />
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill={i % 2 === 0 ? '#ff8589' : '#93c5fd'}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r + 3.5}
                  fill="none"
                  stroke={i % 2 === 0 ? '#E3131B' : '#2563eb'}
                  strokeOpacity="0.45"
                  strokeWidth="0.8"
                />
              </g>
            ))}
          </motion.g>
        </motion.svg>

        {/* Meridian Globe Orbit Motif */}
        <motion.svg
          viewBox="0 0 400 400"
          className="absolute right-[5%] bottom-[-20%] w-[36%] max-w-[380px] opacity-[0.22]"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="200" cy="200" r="160" fill="none" stroke="#E3131B" strokeWidth="0.75" strokeDasharray="2 10" />
          <ellipse cx="200" cy="200" rx="160" ry="60" fill="none" stroke="#2563eb" strokeWidth="0.6" />
          <ellipse cx="200" cy="200" rx="90" ry="160" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="0.5" />
        </motion.svg>
      </div>

      {/* 4. Soft Text Contrast Vignette */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-[#07111f]/60 via-[#07111f]/25 to-transparent" 
        aria-hidden="true" 
      />

      {/* Top Hairline Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-red via-white/20 to-transparent z-10" />

      {/* 5. Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.05 }
            }
          }}
          className="max-w-[880px]"
        >
          {/* Eyebrow Floating Badge with Breadcrumb */}
          <motion.div 
            variants={fadeInVariants} 
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 shadow-[0_2px_12px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red shadow-[0_0_8px_#E3131B]" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.24em] uppercase text-slate-200">
                {eyebrow}
              </span>
              <Sparkles className="w-3 h-3 text-red" aria-hidden="true" />
            </div>

            {/* Micro Breadcrumb */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-slate-600" />
              <span className="text-white/80 font-bold">{eyebrow}</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeInVariants} className="mb-4">
            <h1 className="font-heading font-black text-white text-[34px] sm:text-[50px] md:text-[62px] leading-[1.08] tracking-[-0.035em] drop-shadow-md">
              {title}
            </h1>
            
            {/* Sleek Underline Accent */}
            <div className="relative w-44 sm:w-56 h-[4px] mt-3 sm:mt-4 overflow-visible">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 240 6" fill="none">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  d="M 2 3 C 70 1, 170 1, 238 3"
                  stroke="url(#pageHeroUnderline)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="pageHeroUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E3131B" />
                    <stop offset="65%" stopColor="#b80f15" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Tagline */}
          {tagline ? (
            <motion.div variants={fadeInVariants} className="flex items-center gap-2.5 mb-3 mt-4">
              <span className="h-[2px] w-5 bg-red" />
              <p className="text-[#ff4d54] text-[16px] sm:text-[19px] font-mono font-bold tracking-wide">
                {tagline}
              </p>
            </motion.div>
          ) : null}

          {/* Description */}
          {description ? (
            <motion.p 
              variants={fadeInVariants} 
              className="text-slate-300 text-[15px] sm:text-[17px] max-w-[720px] leading-[1.68] font-normal mt-3"
            >
              {description}
            </motion.p>
          ) : null}
        </motion.div>
      </div>

      {/* 6. Base Ambient Hairline Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#07111f] to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
    </section>
  );
}

export default PageHero;