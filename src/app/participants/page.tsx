import type { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { ExhibitorForm } from '@/components/forms/ExhibitorForm';
import { VisitorForm } from '@/components/forms/VisitorForm';
import { SponsorForm } from '@/components/forms/SponsorForm';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata('Participants', 'Exhibit, visit, sponsor or partner with Futurex exhibitions and business events.', '/participants');

export default async function ParticipantsPage({ searchParams }: { searchParams?: Promise<{ event?: string }> }) {
  const query = searchParams ? await searchParams : {};
  const defaultEvent = query.event || '';
  return (
    <>
      <PageHero eyebrow="PARTICIPATE" title={<>Choose how you want<br />to do business.</>} description="Futurex creates participation paths for exhibitors, visitors, sponsors and industry partners." />
      <section className="participant-intro section section--light"><div className="page-container participant-grid"><article><span>01</span><h2>Exhibit with us</h2><p>Position your company in front of focused trade audiences and open direct business conversations.</p></article><article><span>02</span><h2>Visit an exhibition</h2><p>Discover suppliers, products, technologies and relevant professional relationships.</p></article><article><span>03</span><h2>Become a sponsor</h2><p>Build high-visibility engagement around an industry community aligned with your market.</p></article><article><span>04</span><h2>Partner with Futurex</h2><p>Discuss association, market access and business-platform collaboration with the Futurex team.</p></article></div></section>
      <section className="form-section" id="exhibitor"><div className="page-container"><ExhibitorForm defaultEvent={defaultEvent} /></div></section>
      <section className="form-section form-section--light" id="visitor"><div className="page-container"><VisitorForm defaultEvent={defaultEvent} /></div></section>
      <section className="form-section" id="sponsor"><div className="page-container"><SponsorForm defaultEvent={defaultEvent} /></div></section>
    </>
  );
}
