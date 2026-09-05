import type { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import { PageHero } from '@/components/hero/PageHero';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { conferences } from '@/data/conferences';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata('Conferences', 'Futurex conference platforms for presentations, professional discussion and industry knowledge exchange.', '/conferences');

export default function ConferencesPage() {
  return (
    <>
      <PageHero eyebrow="CONFERENCES" title={<>Knowledge shared in<br />focused business settings.</>} description="Futurex conferences bring presentations, discussion and industry exchange into concise professional formats." />
      <section className="section section--light">
        <div className="page-container service-detail">
          <div><div className="eyebrow"><span aria-hidden="true" />CONFERENCE PLATFORM</div><h2>Concise presentations. Relevant discussion.</h2></div>
          <div className="prose-copy"><p>Futurex’s conference activity is built around presentations followed by discussion, with an emphasis on practical knowledge exchange and industry dialogue.</p><Button href="/contact">Plan a conference</Button></div>
        </div>
      </section>
      <section className="section section--light section--border-top">
        <div className="page-container">
          <div className="eyebrow"><span aria-hidden="true" />PAST CONFERENCES</div>
          <div className="conference-list">
            {conferences.map((item, index) => (
              <article key={`${item.title}-${item.date}`}>
                <span>0{index + 1}</span>
                <div><small>{item.series}</small><h2>{item.title}</h2></div>
                <div className="conference-place"><strong>{item.date}</strong><span><MapPin aria-hidden="true" size={16} />{item.city}, {item.region}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
