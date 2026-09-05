import type { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactCard } from '@/components/forms/ContactCard';
import { MapSection } from '@/components/sections/MapSection';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata(
  'Contact Us', 
  'Contact Futurex Trade Fair & Events in New Delhi for exhibition, visitor, sponsor, partnership and service enquiries.', 
  '/contact'
);

export default async function ContactPage({ searchParams }: { searchParams?: Promise<{ event?: string }> }) {
  const query = searchParams ? await searchParams : {};

  return (
    <main className="relative bg-slate-50 text-slate-900 overflow-hidden">
      <PageHero 
        eyebrow="CONTACT US" 
        title={
          <>
            Start A Business <br />
            <span className="text-[#E3131B]">Conversation.</span>
          </>
        } 
        description="Connect with Futurex Trade Fair & Events Pvt. Ltd. in New Delhi for global exhibitions and strategic partnerships." 
      />

      {/* Main Layout Container */}
      <section className="relative z-20 py-12 sm:py-16 bg-slate-100/60 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact Card (Compact Dark Theme) */}
            <div className="lg:col-span-5 h-full">
              <ContactCard />
            </div>

            {/* Right Contact Form (Crisp Light Theme) */}
            <div className="lg:col-span-7">
              <ContactForm defaultEvent={query.event || ''} />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <MapSection />
    </main>
  );
}