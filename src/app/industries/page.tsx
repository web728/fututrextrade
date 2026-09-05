import type { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { IndustryGrid } from '@/components/industries/IndustryGrid';
import { CTASection } from '@/components/sections/CTASection';
import { industries } from '@/data/industries';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata(
  'Industries', 
  'Explore the industrial sectors connected through Futurex exhibitions and business events.', 
  '/industries'
);

export default function IndustriesPage() {
  return (
    <main className="relative bg-slate-50 text-slate-900 overflow-hidden">
      {/* Page Hero Section */}
      <PageHero 
        eyebrow="INDUSTRIES" 
        title={
          <>
            Industries We <span className="text-[#E3131B]">Connect</span>
          </>
        } 
        description="Focused, high-impact exhibition platforms designed to bridge emerging technologies and business expansion across global markets." 
      />

      {/* Main Grid Section with Clean Light Container */}
      <section className="relative z-20 py-16 sm:py-24 bg-slate-100/60 border-t border-b border-slate-200">
        {/* Subtle Architectural Pattern Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
          <IndustryGrid industries={industries} />
        </div>
      </section>

      {/* Call To Action Section */}
      <CTASection />
    </main>
  );
}