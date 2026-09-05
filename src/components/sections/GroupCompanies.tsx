"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Globe, Layers, Activity, Palette } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface GroupCompanyItem {
  id: string;
  name: string;
  tagline: string;
  role: string;
  description: string;
  url: string;
  logo?: string;
  highlight?: string;
  accent: string;
}

const companiesData: GroupCompanyItem[] = [
  {
    id: 'studio',
    name: 'Futurex Studio',
    tagline: 'Turnkey Exhibition Stand Architecture',
    role: 'STAND BUILD & PRODUCTION',
    description:
      'A world-class exhibition stand builder providing turnkey solutions spanning bespoke 3D stall design, structural fabrication, on-site setup, and seamless execution across global venues.',
    url: 'https://futurexstudio.com/',
    logo: '/images/group/futurex-studio.png', // Logo path ya fallback icon render hoga
    highlight: 'Turnkey Global Stand Solutions',
    accent: 'from-amber-500 to-red'
  },
  {
    id: 'fdma',
    name: 'FDMA (Futurex Digital)',
    tagline: 'Full-Service Digital Marketing Agency',
    role: 'DIGITAL TRANSFORMATION & PR',
    description:
      'A full-service digital marketing agency merging imaginative strategy with modern tech to help industrial brands scale in the digital transformation era through performance media, SEO, and corporate PR.',
    url: 'https://futurexpr.com/',
    logo: '/images/group/fdma.png',
    highlight: 'Full-Funnel Growth & PR',
    accent: 'from-blue to-cyan-500'
  },
  {
    id: 'healthcare',
    name: 'Futurex Healthcare',
    tagline: 'Critical Medical Infrastructure & Healthcare Systems',
    role: 'HEALTHCARE INFRASTRUCTURE',
    description:
      'The young subsidiary of Multinational MSME Futurex Group. Renowned for delivering critical healthcare solutions including building India’s largest Covid Care ICU in Mumbai in record time.',
    url: 'https://www.futurexhealth.com/',
    logo: '/images/group/futurex-healthcare.png',
    highlight: 'Record-Time Hospital Deployment',
    accent: 'from-emerald-500 to-teal-600'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function GroupCompanies() {
  return (
    <section className="relative z-20 w-full bg-off text-ink py-20 sm:py-28 overflow-hidden border-t border-line">
      {/* Precision Blueprint Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(217,220,225,0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(217,220,225,0.45) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
        <SectionHeading 
          eyebrow="FUTUREX ECOSYSTEM" 
          title={<>Specialist businesses.<br />One integrated group.</>} 
          copy="A multi-disciplinary corporate network delivering turnkey trade infrastructure, global digital performance, and mission-critical healthcare systems."
        />

        {/* Corporate Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {companiesData.map((company, index) => (
            <motion.article 
              key={company.id} 
              variants={cardVariants}
              className="group relative flex flex-col justify-between h-full bg-paper border border-line p-7 sm:p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-ink/40 hover:shadow-[0_18px_40px_-14px_rgba(7,17,31,0.09)] hover:-translate-y-1 overflow-hidden"
              style={{ borderRadius: '2px' }}
            >
              {/* Top Active Crimson Accent Line */}
              <span 
                className="absolute top-0 left-0 w-0 h-[2.5px] bg-red transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" 
                aria-hidden="true" 
              />

              {/* Ambient Radial Glow on Hover */}
              <div 
                className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-red/5 blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                aria-hidden="true" 
              />

              <div>
                {/* Header: Index + Role Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="font-mono text-[10.5px] font-bold tracking-[0.18em] uppercase text-muted group-hover:text-red transition-colors duration-200">
                    DIVISION // 0{index + 1}
                  </span>

                  <span className="inline-flex items-center px-2 py-0.5 bg-off border border-line text-[9px] font-mono font-bold tracking-wider uppercase text-slate-600">
                    {company.role}
                  </span>
                </div>

                {/* Company Logo Box / Brand Header */}
                <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-line/70">
                  <div className="w-12 h-12 flex items-center justify-center bg-off border border-line p-2 shrink-0 group-hover:border-ink/30 transition-colors">
                    {/* Fallback clean monogram icons if PNG logo is loading or pending */}
                    {company.id === 'studio' && <Palette className="w-6 h-6 text-red" />}
                    {company.id === 'fdma' && <Layers className="w-6 h-6 text-blue" />}
                    {company.id === 'healthcare' && <Activity className="w-6 h-6 text-emerald-600" />}
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-ink text-xl sm:text-[22px] leading-tight tracking-tight group-hover:text-red transition-colors duration-200">
                      {company.name}
                    </h3>
                    <p className="text-[11.5px] font-semibold text-slate-500 line-clamp-1 mt-0.5">
                      {company.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted text-sm leading-[1.7] font-normal mb-6">
                  {company.description}
                </p>

                {/* Milestone Pill */}
                {company.highlight && (
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-off border border-line/80 text-[10.5px] font-semibold text-slate-700 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-red" aria-hidden="true" />
                    <span>{company.highlight}</span>
                  </div>
                )}
              </div>

              {/* Action Footer: Direct Outbound Link */}
              <div className="pt-4 border-t border-line/80 flex items-center justify-between mt-auto">
                <Link
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-ink group-hover:text-red transition-colors duration-200"
                >
                  <Globe size={13} className="text-muted group-hover:text-red transition-colors" />
                  <span>View Website</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                  Offsite
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}