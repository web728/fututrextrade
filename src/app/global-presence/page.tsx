import type { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { GlobalPresence } from '@/components/sections/GlobalPresence';
import { StatsSection } from '@/components/sections/StatsSection';
import { CTASection } from '@/components/sections/CTASection';
import { markets } from '@/data/locations';
import { createMetadata } from '@/lib/metadata';
import { Globe, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = createMetadata(
  'Global Presence', 
  'Explore the South Asian and East African markets connected through Futurex exhibitions.', 
  '/global-presence'
);

export default function GlobalPresencePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#E3131B] selection:text-white">
      {/* 1. Page Hero Header */}
      <div className="bg-white border-b border-slate-200">
        <PageHero 
          eyebrow="GLOBAL PRESENCE" 
          title={
            <>
              Markets connected<br />
              <span className="text-[#E3131B]">by opportunity.</span>
            </>
          } 
          description="Futurex’s exhibition portfolio spans premier industrial hubs across South Asia and East Africa." 
        />
      </div>

      {/* 2. Tactical Global Command Console */}
      <GlobalPresence />

      {/* 3. Portfolio Key Stats Bar */}
      <StatsSection />

      {/* 4. Represented Markets Grid Section (Light Theme) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="max-w-[640px] mb-14">
            <span className="text-[11px] font-mono font-black tracking-[0.25em] uppercase text-[#E3131B] block mb-2">
              REGIONAL DOMAINS
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase">
              Key Represented <span className="text-[#E3131B]">Markets</span>
            </h2>
            <p className="text-slate-600 text-sm mt-2 font-medium">
              Established B2B gateways connected seamlessly through Futurex trade fair infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((market, index) => (
              <article 
                key={market.code || index}
                className="group relative bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-[#E3131B]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-[#E3131B] transition-colors">
                      0{index + 1}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#E3131B] group-hover:text-white transition-all">
                      <Globe size={18} />
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-xl text-slate-900 mb-2 tracking-tight">
                    {market.name}
                  </h3>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed">
                    Market represented in the Futurex international trade exhibition portfolio.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                    STATUS: ACTIVE GATEWAY
                  </span>
                  <ArrowUpRight size={15} className="text-slate-400 group-hover:text-[#E3131B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Footer Section */}
      <CTASection />
    </main>
  );
}