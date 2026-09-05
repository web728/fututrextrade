import type { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { ExhibitionFilters } from '@/components/exhibitions/ExhibitionFilters';
import { exhibitions } from '@/data/exhibitions';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata(
  'Exhibitions', 
  'Discover Futurex international B2B exhibitions by year, market and industry.', 
  '/exhibitions'
);

export default function ExhibitionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#E3131B] selection:text-white">
      {/* Hero Section Header */}
      <div className="bg-white border-b border-slate-200">
        <PageHero 
          eyebrow="EXHIBITION PORTFOLIO" 
          title={
            <>
              Find the right market.<br />
              <span className="text-[#E3131B]">Meet the right business.</span>
            </>
          } 
          description="Search Futurex’s global international exhibition portfolio by year, country, industry, and status." 
        />
      </div>

      {/* Discovery & Filtering Section */}
      <section className="py-12 sm:py-16 bg-slate-50" id="event-discovery">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <ExhibitionFilters events={exhibitions} />
        </div>
      </section>
    </main>
  );
}