"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
  } 
};

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
      className="relative w-full h-[92vh] min-h-[660px] max-h-[860px] overflow-hidden bg-[#03070d] text-white flex items-center justify-center pt-8 pb-20"
      aria-labelledby="home-hero-title"
    >
      {/* 1. Cinematic Background Image (Strictly Contained) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.div 
          className="relative w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image 
            src={company.assets.hero} 
            alt="Futurex international exhibition floor" 
            fill 
            priority 
            sizes="70vw" 
            className="object-cover object-center opacity-25 mix-blend-luminosity filter contrast-125 brightness-75"
          />
        </motion.div>
      </div>

      {/* 2. Seamless Depth Overlays - Absolute Bottom Cutoff to #03070d */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 35%, rgba(227,19,27,0.08) 0%, transparent 60%),
            linear-gradient(90deg, rgba(3,7,13,0.98) 0%, rgba(3,7,13,0.7) 50%, rgba(3,7,13,0.98) 100%),
            linear-gradient(0deg, #03070d 0%, rgba(3,7,13,0.9) 15%, transparent 50%, rgba(3,7,13,0.8) 100%)
          `
        }} 
      />

      {/* 3. Dynamic Geometric Accent Layers (Red - Blue - Red) */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Layer 1: Crimson Red (Left) */}
        <motion.span 
          animate={{
            x: [0, 20, -12, 0],
            y: [0, -16, 14, 0],
            rotate: [-10, -8, -12, -10]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute block border border-red-500/20 backdrop-blur-[2px] shadow-[0_0_50px_rgba(227,19,27,0.25)]"
          style={{
            width: '540px',
            height: '540px',
            left: '-100px',
            top: '80px',
            background: 'radial-gradient(circle at 35% 35%, rgba(227,19,27,0.52), rgba(227,19,27,0.06) 65%, transparent)',
            transform: 'skewX(-12deg)'
          }}
        />

        {/* Layer 2: Electric Deep Blue (Center) */}
        <motion.span 
          animate={{
            x: [0, -18, 14, 0],
            y: [0, 16, -12, 0],
            rotate: [-10, -12, -8, -10]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute block border border-sky-500/20 backdrop-blur-[2px] shadow-[0_0_50px_rgba(23,103,166,0.2)]"
          style={{
            width: '420px',
            height: '420px',
            left: '260px',
            top: '40px',
            background: 'radial-gradient(circle at 50% 50%, rgba(23,103,166,0.42), rgba(23,103,166,0.05) 70%, transparent)',
            transform: 'skewX(-12deg)'
          }}
        />

        {/* Layer 3: Deep Crimson (Right) */}
        <motion.span 
          animate={{
            x: [0, 16, -16, 0],
            y: [0, -14, 16, 0],
            rotate: [-10, -7, -11, -10]
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          className="absolute block border border-red-600/25 backdrop-blur-[2px] shadow-[0_0_60px_rgba(189,13,20,0.3)]"
          style={{
            width: '360px',
            height: '380px',
            left: '480px',
            top: '140px',
            background: 'radial-gradient(circle at 40% 40%, rgba(189,13,20,0.45), rgba(189,13,20,0.08) 65%, transparent)',
            transform: 'skewX(-12deg)'
          }}
        />
      </div>

      {/* 4. Center-Focused Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[820px]"
        >
          {/* Eyebrow Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl mb-6 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--red)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--red)]" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.22em] uppercase text-slate-200">
              International B2B Platforms · Est. {company.established}
            </span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 
              id="home-hero-title"
              className="font-heading font-black text-white text-[30px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.1] tracking-[-0.04em]"
            >
              <div className="flex flex-nowrap items-center whitespace-nowrap overflow-hidden text-ellipsis gap-x-2 sm:gap-x-3">
                <span>Where</span>
                
                {/* Dynamic Phrase Container */}
                <div className="relative inline-flex flex-col justify-center h-[1.22em] min-w-[200px] sm:min-w-[320px] md:min-w-[410px]">
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
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--red)] via-red-500 to-sky-500 origin-left rounded-full shadow-[0_2px_14px_rgba(227,19,27,0.85)]"
                    aria-hidden="true"
                  />
                </div>
                
                <span className="text-[var(--red)] font-black">.</span>
              </div>

              {/* Fixed Anchor Line */}
              <span className="block text-slate-400 font-bold text-[20px] sm:text-[28px] md:text-[34px] tracking-[-0.035em] mt-2">
                Connecting global enterprise.
              </span>
            </h1>
          </motion.div>
          
          {/* Paragraph Description */}
          <motion.p 
            variants={itemVariants} 
            className="text-slate-300/85 text-[14px] sm:text-[16px] max-w-[600px] leading-[1.7] mb-8 font-normal"
          >
            Futurex builds high-impact trade exhibitions connecting manufacturers, institutional buyers, and industry decision-makers across South Asia and Africa.
          </motion.p>
          
          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Link 
              href="/exhibitions" 
              className="relative group overflow-hidden inline-flex items-center justify-center min-h-[48px] px-7 text-[11px] font-extrabold tracking-[0.1em] uppercase bg-gradient-to-r from-[#E3131B] to-[#b80f15] text-white transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(227,19,27,0.5)] hover:shadow-[0_14px_30px_-4px_rgba(227,19,27,0.75)] hover:-translate-y-0.5 active:scale-95 rounded-sm"
            >
              <span className="relative z-10 flex items-center">
                Explore Exhibitions
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
            
            <Link 
              href="/participants#exhibitor" 
              className="inline-flex items-center justify-center min-h-[48px] px-7 text-[11px] font-extrabold tracking-[0.1em] uppercase text-white bg-white/[0.05] border border-white/20 backdrop-blur-2xl hover:bg-white/[0.12] hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group rounded-sm shadow-xl"
            >
              Become an Exhibitor
              <ArrowUpRight className="w-4 h-4 ml-2 text-slate-300 transition-transform duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

    
    </section>
  );
}