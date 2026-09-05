"use client";

import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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

export function PageHero({ eyebrow, title, description, tagline }: PageHeroProps) {
  return (
    <section 
      className="relative w-full py-20 sm:py-24 md:py-32 bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden border-b border-[var(--color-line-dark)] select-none"
      aria-label="Page Header"
    >
      {/* 1. Subtle Precision Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.14] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* 2. Three Soft Translucent Facet Layers (Red -> Navy -> Deep Red) */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
        
        {/* Layer 1: Backing Extended Red Wash (Soft Ambient) */}
        <motion.div
          animate={{ x: [0, -5, 3, 0], y: [0, 3, -2, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 will-change-transform"
        >
          <svg 
            className="w-full h-full min-w-[1280px] object-cover" 
            viewBox="0 0 1600 700" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <polygon 
              points="-120,0 760,0 520,700 -120,700" 
              fill="var(--color-red)" 
              fillOpacity="0.08" 
            />
            <line 
              x1="760" y1="0" x2="520" y2="700" 
              stroke="var(--color-red)" 
              strokeWidth="1" 
              strokeOpacity="0.2" 
              strokeDasharray="8 8" 
            />
          </svg>
        </motion.div>

        {/* Layer 2: Mid Navy Wedge (Adds Architectural Depth) */}
        <motion.div
          animate={{ x: [0, 4, -4, 0], y: [0, -3, 2, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute inset-0 will-change-transform"
        >
          <svg 
            className="w-full h-full min-w-[1280px] object-cover" 
            viewBox="0 0 1600 700" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <polygon 
              points="-100,20 620,30 420,680 -100,680" 
              fill="var(--color-navy-2)" 
              fillOpacity="0.45" 
            />
            <line 
              x1="620" y1="30" x2="420" y2="680" 
              stroke="var(--color-blue)" 
              strokeWidth="1" 
              strokeOpacity="0.3" 
            />
          </svg>
        </motion.div>

        {/* Layer 3: Foreground Crisp Crimson Facet (Frosted & Semi-Sheer) */}
        <motion.div
          animate={{ x: [0, -3, 3, 0], y: [0, 2, -2, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-0 will-change-transform"
        >
          <svg 
            className="w-full h-full min-w-[1280px] object-cover" 
            viewBox="0 0 1600 700" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="softFrontBlade" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="var(--color-red)" stopOpacity="0.32" />
                <stop offset="60%" stopColor="var(--color-red-deep)" stopOpacity="0.22" />
                <stop offset="100%" stopColor="var(--color-ink-2)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <polygon 
              points="-80,80 500,95 320,640 -80,630" 
              fill="url(#softFrontBlade)" 
            />
            <line 
              x1="500" y1="95" x2="320" y2="640" 
              stroke="var(--color-paper)" 
              strokeWidth="1.2" 
              strokeOpacity="0.3" 
            />
            <line 
              x1="-80" y1="80" x2="500" y2="95" 
              stroke="var(--color-paper)" 
              strokeWidth="1" 
              strokeOpacity="0.15" 
            />
          </svg>
        </motion.div>
      </div>

      {/* 3. High-Contrast Backdrop Dimmer */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-[var(--color-ink)]/75 via-transparent to-transparent" 
        aria-hidden="true" 
      />

      {/* 4. Soft Corner Radial Bloom */}
      <div 
        className="absolute -top-32 -left-24 w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(227,19,27,0.18)_0%,transparent_70%)] pointer-events-none blur-[100px] z-0" 
        aria-hidden="true" 
      />

      {/* Top Hairline Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[var(--color-red)]/80 via-[var(--color-paper)]/25 to-transparent z-10" />

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
          {/* Eyebrow Floating Pill */}
          <motion.div 
            variants={fadeInVariants} 
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--color-ink-2)]/90 border border-[var(--color-line-dark)] shadow-[0_2px_12px_rgba(0,0,0,0.4)] backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-red)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-red)] shadow-[0_0_8px_var(--color-red)]" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.24em] uppercase text-[var(--color-muted-light)]">
              {eyebrow}
            </span>
            <Sparkles className="w-3 h-3 text-[var(--color-red)]" aria-hidden="true" />
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeInVariants} className="mb-4">
            <h1 className="font-heading font-black text-white text-[34px] sm:text-[50px] md:text-[62px] leading-[1.08] tracking-[-0.03em] drop-shadow-sm">
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
                  stroke="url(#tokenUnderline)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="tokenUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-red)" />
                    <stop offset="65%" stopColor="var(--color-red-deep)" />
                    <stop offset="100%" stopColor="var(--color-paper)" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Tagline */}
          {tagline ? (
            <motion.div variants={fadeInVariants} className="flex items-center gap-2.5 mb-3 mt-4">
              <span className="h-[2px] w-5 bg-[var(--color-red)]" />
              <p className="text-[#ff4d54] text-[16px] sm:text-[19px] font-mono font-bold tracking-wide">
                {tagline}
              </p>
            </motion.div>
          ) : null}

          {/* Description */}
          {description ? (
            <motion.p 
              variants={fadeInVariants} 
              className="text-[#d5dce6] text-[15px] sm:text-[17px] max-w-[720px] leading-[1.68] font-normal"
            >
              {description}
            </motion.p>
          ) : null}
        </motion.div>
      </div>

      {/* 6. Base Ambient Vignette */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-ink)] to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
    </section>
  );
}

export default PageHero;