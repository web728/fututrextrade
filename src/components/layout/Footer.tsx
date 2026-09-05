"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from 'lucide-react';
import { company } from '@/data/company';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://in.linkedin.com/company/futurextrade',
    icon: Linkedin,
    hoverBg: 'hover:border-[#0A66C2] hover:text-[#0A66C2]'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/FuturexGroup/',
    icon: Facebook,
    hoverBg: 'hover:border-[#1877F2] hover:text-[#1877F2]'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/futurexgroup/',
    icon: Instagram,
    hoverBg: 'hover:border-[#E4405F] hover:text-[#E4405F]'
  },
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com/FuturexG',
    icon: Twitter,
    hoverBg: 'hover:border-white hover:text-white'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC9iX-FoOOdePYULF-IYgGZQ',
    icon: Youtube,
    hoverBg: 'hover:border-[#FF0000] hover:text-[#FF0000]'
  }
];

const explore = [
  { href: '/exhibitions', label: 'Trade Exhibitions' },
  { href: '/industries', label: 'Sectors & Industries' },
  { href: '/services', label: 'Turnkey Services' },
  { href: '/global-presence', label: 'Global Corridors' },
] as const;

const companyLinks = [
  { href: '/about', label: 'About Group' },
  { href: '/participants', label: 'Participant Hub' },
  { href: '/gallery', label: 'Visual Archive' },
  { href: '/conferences', label: 'Trade Conferences' },
  { href: '/webinars', label: 'Digital Summits' },
  { href: '/contact', label: 'Contact & Inquiries' },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = (company as any).name || (company as any).legalName || "Futurex Trade Fair and Events Pvt. Ltd.";

  return (
    <footer 
      className="relative z-20 w-full bg-ink text-white border-t border-line-dark overflow-hidden pt-16 sm:pt-24 pb-8 select-none"
      aria-labelledby="footer-heading"
    >
      {/* Precision Blueprint Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* Top Accent Gradient Border */}
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red to-transparent opacity-90" />

      {/* 
        GIANT WATERMARK TYPOGRAPHY
        Uses negative tracking, viewport-width alignment, and horizontal clamping 
        so the final 'E' NEVER gets clipped on any screen size.
      */}
      <div 
        className="absolute bottom-2 sm:bottom-0 left-1/2 -translate-x-1/2 w-screen pointer-events-none select-none overflow-hidden z-0 flex justify-center items-end"
        aria-hidden="true"
      >
        <span className="font-heading font-black text-[13vw] tracking-[-0.04em] text-white/[0.035] uppercase leading-none whitespace-nowrap block text-center px-4">
          FUTUREX TRADE
        </span>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 pb-16 border-b border-line-dark">
          
          {/* Identity, Comprehensive Description & Social Channels (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo / Monogram */}
              <div className="flex items-center gap-3 mb-6">
                {(company as any)?.assets?.logo ? (
                  <div className="relative w-48 h-12">
                    <Image
                      src={(company as any).assets.logo}
                      alt={companyName}
                      fill
                      sizes="200px"
                      className="object-contain object-left"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-sm bg-red flex items-center justify-center font-heading font-black text-white text-base shadow-sm">
                      F
                    </span>
                    <span className="font-heading font-black text-2xl tracking-tight text-white">
                      FUTUREX<span className="text-red">.</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Exact Corporate Portfolio Profile */}
              <p className="text-slate-300/85 text-xs sm:text-[13px] leading-[1.75] font-normal mb-7 max-w-[460px]">
                Futurex Trade Fair & Events Pvt. Ltd. is a renowned international exhibition and corporate events organizer headquartered in New Delhi with branch offices in Mumbai, Colombo, Kathmandu, and Dhaka. With a global track record of 220+ successful trade exhibitions and conferences, Futurex delivers specialized platforms across Building & Infra, Woodworking, Electric Vehicles, Pharma, Garments, Power, Education, and Packaging & Plastics.
              </p>
            </div>

            {/* Social Media Connectivity Hub */}
            <div>
              <span className="font-mono text-[10px] font-bold text-muted-light uppercase tracking-[0.2em] block mb-3">
                CONNECT ACROSS NETWORKS:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Futurex on ${item.name}`}
                      className={`w-9 h-9 flex items-center justify-center bg-white/[0.04] border border-white/10 text-muted-light rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] shadow-sm ${item.hoverBg}`}
                    >
                      <Icon size={15} />
                    </Link>
                  );
                })}
              </div>

              {/* Quick Operational Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                  <Globe size={11} className="text-red" />
                  220+ Exhibitions Delivered
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                  <ShieldCheck size={11} className="text-emerald-400" />
                  Est. {(company as any).established || "2011"}
                </span>
              </div>
            </div>
          </div>

          {/* Column 1: Trade Portfolios (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10.5px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-6 pb-2.5 border-b border-line-dark flex items-center justify-between">
              <span>EXPLORE</span>
              <span className="text-red font-mono">// 01</span>
            </h3>
            <ul className="space-y-3 p-0 m-0 list-none">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-xs text-muted-light hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-line-dark group-hover:bg-red transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Corporate Navigation (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10.5px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-6 pb-2.5 border-b border-line-dark flex items-center justify-between">
              <span>COMPANY</span>
              <span className="text-red font-mono">// 02</span>
            </h3>
            <ul className="space-y-3 p-0 m-0 list-none">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-xs text-muted-light hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-line-dark group-hover:bg-red transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Headquarters & Official Desk (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-[10.5px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-6 pb-2.5 border-b border-line-dark flex items-center justify-between">
              <span>HEADQUARTERS</span>
              <span className="text-red font-mono">// DEL</span>
            </h3>

            <div className="space-y-3.5 text-xs text-muted-light">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-red shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-slate-300">
                  1st Floor, E-52, Kalkaji, New Delhi, Delhi 110019, India
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-red shrink-0" />
                <a 
                  href="tel:+911140538400" 
                  className="hover:text-white transition-colors font-mono tracking-wide"
                >
                  {(company as any).phone || "+91-11-4053-8400"}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-red shrink-0" />
                <a 
                  href="mailto:admin@futurextrade.com" 
                  className="hover:text-white transition-colors font-mono"
                >
                  admin@futurextrade.com
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-red hover:text-white transition-colors"
                >
                  <span>Regional Branch Directory</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Matrix */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            <span>© {currentYear} {companyName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://futurextrade.com/PrivacyPolicy.php" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-line-dark">|</span>
            <a 
              href="https://futurextrade.com/Terms%26Conditons.php" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>

          <div className="text-muted-light/50 hidden lg:block">
            International Trade Platform Standards
          </div>
        </div>

      </div>
    </footer>
  );
}