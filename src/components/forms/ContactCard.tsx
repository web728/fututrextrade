"use client";

import { Mail, Phone, Building2, Globe2, Clock, MapPin, Linkedin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { company } from '@/data/company';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://in.linkedin.com/company/futurextrade',
    icon: Linkedin,
    hoverBg: 'hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/FuturexGroup/',
    icon: Facebook,
    hoverBg: 'hover:border-[#1877F2] hover:bg-[#1877F2]/10 hover:text-[#1877F2]'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/futurexgroup/',
    icon: Instagram,
    hoverBg: 'hover:border-[#E4405F] hover:bg-[#E4405F]/10 hover:text-[#E4405F]'
  },
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com/FuturexG',
    icon: Twitter,
    hoverBg: 'hover:border-white hover:bg-white/10 hover:text-white'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC9iX-FoOOdePYULF-IYgGZQ',
    icon: Youtube,
    hoverBg: 'hover:border-[#FF0000] hover:bg-[#FF0000]/10 hover:text-[#FF0000]'
  }
];

export function ContactCard() {
  return (
    <div className="group relative flex flex-col justify-between h-full bg-[#0B132B] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl overflow-hidden">
      {/* Background Subtle Grid & Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#E3131B]/15 blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-5">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#E3131B] animate-pulse" />
          <span className="text-[10px] font-mono font-black tracking-[0.2em] uppercase text-slate-200">
            HEADQUARTERS // NEW DELHI
          </span>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg font-heading font-extrabold text-white leading-snug tracking-tight mb-1">
            {company.address}
          </h2>
          <p className="text-[11px] text-slate-400 font-mono tracking-wider uppercase flex items-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-[#E3131B]" />
            Global Exhibition Operations Hub
          </p>
        </div>

        {/* Working Hours Badge */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
          <Clock className="w-4 h-4 text-[#E3131B] shrink-0" />
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Working Hours</span>
            <span className="font-semibold text-white">Mon – Fri: 10:00 AM – 06:00 PM</span>
          </div>
        </div>

        {/* Quick Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
          <a 
            href={`tel:${company.phone}`}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#E3131B]/60 hover:bg-white/10 transition-all duration-300 group/link"
          >
            <div className="w-8 h-8 rounded-lg bg-[#E3131B]/10 border border-[#E3131B]/20 flex items-center justify-center text-[#E3131B] group-hover/link:bg-[#E3131B] group-hover/link:text-white transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Phone</span>
              <span className="text-xs font-bold text-white group-hover/link:text-[#E3131B] transition-colors truncate block">{company.phone}</span>
            </div>
          </a>

          <a 
            href={`mailto:${company.email}`}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#E3131B]/60 hover:bg-white/10 transition-all duration-300 group/link"
          >
            <div className="w-8 h-8 rounded-lg bg-[#E3131B]/10 border border-[#E3131B]/20 flex items-center justify-center text-[#E3131B] group-hover/link:bg-[#E3131B] group-hover/link:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Email</span>
              <span className="text-xs font-bold text-white group-hover/link:text-[#E3131B] transition-colors truncate block">{company.email}</span>
            </div>
          </a>
        </div>

        {/* Social Media Network Links */}
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">Connect With Us</span>
          <div className="flex items-center gap-2 flex-wrap">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 ${item.hoverBg}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Branch Offices Footer */}
      <div className="relative z-10 pt-4 mt-5 border-t border-white/10">
        <div className="flex items-start gap-2.5 text-slate-300 text-xs">
          <Building2 className="w-4 h-4 text-[#E3131B] shrink-0 mt-0.5" />
          <span className="leading-snug text-[11px]">
            <strong className="text-white font-mono uppercase tracking-wider">Branches:</strong>{' '}
            {company.offices.slice(1).join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
}