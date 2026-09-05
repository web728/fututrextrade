"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Building2, 
  Radio, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  MapPin, 
  ChevronRight, 
  Globe2 
} from 'lucide-react';

interface HubDetail {
  code: string;
  city: string;
  country: string;
  role: string;
  exhibitions: string;
  buyerReach: string;
  sqmDelivered: string;
  address: string;
  keySectors: string[];
}

const operationalHubs: HubDetail[] = [
  {
    code: 'DEL',
    city: 'New Delhi',
    country: 'India',
    role: 'Global Headquarters',
    exhibitions: '14+ Annual Editions',
    buyerReach: '420,000+ Trade Buyers',
    sqmDelivered: '85,000+ Sq.m Managed',
    address: '1st Floor, E-52, Kalkaji, New Delhi 110019',
    keySectors: ['Print & Packaging', 'Wood & Furniture Tech', 'Healthcare & Pharma']
  },
  {
    code: 'BOM',
    city: 'Mumbai',
    country: 'India',
    role: 'Western Commercial Base',
    exhibitions: '8+ Annual Editions',
    buyerReach: '180,000+ Trade Buyers',
    sqmDelivered: '45,000+ Sq.m Managed',
    address: 'Nesco & CIDCO Industrial Corridors',
    keySectors: ['Industrial Engineering', 'Automation', 'Plastics']
  },
  {
    code: 'DAC',
    city: 'Dhaka',
    country: 'Bangladesh',
    role: 'Regional Gateway Hub',
    exhibitions: '6+ Annual Editions',
    buyerReach: '140,000+ Trade Buyers',
    sqmDelivered: '32,000+ Sq.m Managed',
    address: 'ICCB & BICC Trade Complexes',
    keySectors: ['Garment Machinery', 'Packaging & Paper', 'Textile Engineering']
  },
  {
    code: 'NBO',
    city: 'Nairobi',
    country: 'Kenya',
    role: 'East African Command Base',
    exhibitions: '4+ Annual Editions',
    buyerReach: '110,000+ Trade Buyers',
    sqmDelivered: '28,000+ Sq.m Managed',
    address: 'Sarit Expo Centre & KICC, Nairobi',
    keySectors: ['Building & Construction', 'Healthcare Infra', 'Agro-Tech']
  },
  {
    code: 'CMB',
    city: 'Colombo',
    country: 'Sri Lanka',
    role: 'Island Trade Gateway',
    exhibitions: '5+ Annual Editions',
    buyerReach: '95,000+ Trade Buyers',
    sqmDelivered: '22,000+ Sq.m Managed',
    address: 'BMICH & SLECC Exhibition Halls',
    keySectors: ['Hospitality Logistics', 'Industrial Tools', 'Food Processing']
  },
  {
    code: 'KTM',
    city: 'Kathmandu',
    country: 'Nepal',
    role: 'Himalayan Trade Hub',
    exhibitions: '4+ Annual Editions',
    buyerReach: '80,000+ Trade Buyers',
    sqmDelivered: '18,000+ Sq.m Managed',
    address: 'Bhrikutimandap Exhibition Ground',
    keySectors: ['Woodworking Machinery', 'Plastics & Polymers', 'Consumer Tech']
  }
];

export function GlobalPresence() {
  const [selectedHub, setSelectedHub] = useState<HubDetail>(operationalHubs[0]);

  return (
    <div className="relative w-full bg-white overflow-hidden select-none">
      
      {/* Main Outer Dark Section Shell */}
      <section 
        className="relative z-20 w-full bg-slate-950 text-white py-24 sm:py-32 overflow-hidden"
        style={{
          clipPath: 'polygon(0 3vw, 100% 0, 100% calc(100% - 3vw), 0 100%)'
        }}
        aria-labelledby="global-presence-heading"
      >
        {/* Architectural Grid Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        />

        {/* Crisp White Edge Divider Line Behind Red Cut */}
        <div 
          className="absolute top-0 right-0 w-[55.8%] h-full bg-white pointer-events-none z-0"
          style={{
            clipPath: 'polygon(100% 0, 0 0, 100% 102%)'
          }}
          aria-hidden="true"
        />

        {/* Pure 100% Solid Vibrant Red Diagonal Triangle Cut (NO Transparency, NO Blur) */}
        <div
          className="absolute top-0 right-0 w-[55%] h-full bg-[#E3131B] pointer-events-none z-0"
          style={{
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
          
          {/* Header Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 mb-12 border-b border-white/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/20 mb-5 shadow-xl">
                <Radio className="w-3.5 h-3.5 text-[#E3131B] animate-pulse" />
                <span className="text-[10.5px] font-mono font-black tracking-[0.25em] uppercase text-slate-200">
                  CROSS-BORDER INFRASTRUCTURE
                </span>
              </div>

              <h2 
                id="global-presence-heading"
                className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-[48px] leading-[1.08] tracking-tight m-0 uppercase"
              >
                Global reach. <br />
                <span className="text-white drop-shadow-md">
                  Deep regional execution.
                </span>
              </h2>
            </div>

            <div className="max-w-[440px] bg-slate-900/95 p-5 rounded-2xl border border-white/20 shadow-2xl">
              <p className="text-slate-200 text-sm leading-relaxed font-medium m-0">
                Futurex operates permanent regional offices across South Asia and East Africa, eliminating cross-border friction for international exhibitors and institutional buyers.
              </p>
            </div>
          </div>

          {/* Tactical Command Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Hub Selector Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex items-center justify-between mb-1 px-1">
                <span className="font-mono text-[11px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Globe2 size={14} className="text-[#E3131B]" /> SELECT TERMINAL NODE:
                </span>
                <span className="font-mono text-[10px] text-slate-300 font-bold">
                  {operationalHubs.length} NODES ONLINE
                </span>
              </div>

              {operationalHubs.map((hub) => {
                const isSelected = selectedHub.code === hub.code;
                return (
                  <button
                    key={hub.code}
                    type="button"
                    onClick={() => setSelectedHub(hub)}
                    className={`group relative flex items-center justify-between p-4 sm:p-4.5 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-[#E3131B] shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
                        : 'bg-slate-900/80 border-white/10 hover:bg-slate-900 hover:border-white/30'
                    }`}
                  >
                    {/* Active Red Marker */}
                    <span 
                      className={`absolute left-0 top-3 bottom-3 w-[4px] rounded-r-full transition-all duration-300 ${
                        isSelected ? 'bg-[#E3131B] scale-100' : 'bg-transparent scale-0 group-hover:scale-100 group-hover:bg-white/40'
                      }`}
                    />

                    <div className="flex items-center gap-4 pl-2">
                      <span className={`font-mono text-xs font-black tracking-widest px-2.5 py-1 rounded bg-black border ${
                        isSelected ? 'text-[#E3131B] border-[#E3131B]' : 'text-slate-400 border-white/10 group-hover:text-white'
                      }`}>
                        {hub.code}
                      </span>

                      <div>
                        <strong className="block font-heading font-black text-white text-base tracking-tight leading-none mb-1">
                          {hub.city}
                        </strong>
                        <span className="text-xs text-slate-400 font-medium">
                          {hub.country}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-extrabold tracking-wider uppercase border ${
                        isSelected
                          ? 'bg-[#E3131B] border-[#E3131B] text-white shadow-sm'
                          : 'bg-black/40 border-white/10 text-slate-400'
                      }`}>
                        {hub.role}
                      </span>
                      <ChevronRight size={16} className={`transition-transform duration-300 ${isSelected ? 'text-[#E3131B] translate-x-1' : 'text-slate-600 group-hover:text-slate-300'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Terminal Console View */}
            <div className="lg:col-span-7 bg-slate-900 border border-white/20 p-7 sm:p-9 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              
              {/* Top Solid Red Header Line */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#E3131B]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHub.code}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col h-full justify-between gap-8"
                >
                  <div>
                    {/* Console Header Bar */}
                    <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/15">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={15} className="text-[#E3131B]" />
                          <span className="font-mono text-[11px] font-black text-[#E3131B] tracking-widest uppercase">
                            TERMINAL HUB • {selectedHub.code}
                          </span>
                        </div>
                        <h3 className="font-heading font-black text-white text-2xl sm:text-3xl tracking-tight m-0">
                          {selectedHub.city}, {selectedHub.country}
                        </h3>
                        <p className="text-xs font-mono text-slate-300 mt-2 flex items-center gap-1.5">
                          <span className="text-slate-400">Address:</span> {selectedHub.address}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-mono text-xs font-bold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        ACTIVE HUB
                      </div>
                    </div>

                    {/* Metrics Dashboard Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                      <div className="p-4 bg-black/40 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                        <span className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                          <TrendingUp size={13} className="text-[#E3131B]" /> Portfolio
                        </span>
                        <strong className="font-heading font-black text-lg text-white block">
                          {selectedHub.exhibitions}
                        </strong>
                      </div>

                      <div className="p-4 bg-black/40 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                        <span className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                          <Users size={13} className="text-sky-400" /> Buyer Reach
                        </span>
                        <strong className="font-heading font-black text-lg text-white block">
                          {selectedHub.buyerReach}
                        </strong>
                      </div>

                      <div className="p-4 bg-black/40 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                        <span className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                          <Building2 size={13} className="text-emerald-400" /> Space Managed
                        </span>
                        <strong className="font-heading font-black text-lg text-white block">
                          {selectedHub.sqmDelivered}
                        </strong>
                      </div>
                    </div>

                    {/* Priority Portfolios */}
                    <div>
                      <span className="font-mono text-[11px] font-black text-slate-300 uppercase tracking-widest block mb-3">
                        PRIORITY INDUSTRIAL SECTORS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedHub.keySectors.map((sector) => (
                          <span 
                            key={sector}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/50 border border-white/15 rounded-lg text-xs text-slate-100 font-semibold hover:border-white/30 transition-colors"
                          >
                            <CheckCircle2 size={13} className="text-[#E3131B]" />
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-400">
                      Direct booth licensing & delegation services available.
                    </span>

                    <Link
                      href="/global-presence"
                      className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#E3131B] text-white text-xs font-heading font-black tracking-wider uppercase rounded-xl hover:bg-red-700 transition-all duration-300 shadow-[0_4px_25px_rgba(227,19,27,0.5)] hover:-translate-y-0.5 shrink-0"
                    >
                      <span>View Market Dossier</span>
                      <ArrowUpRight size={16} className="stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default GlobalPresence;