import type { Exhibition } from '@/types/exhibition';
import { ExhibitionGrid } from './ExhibitionGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function RelatedExhibitions({ events }: { events: Exhibition[] }) {
  if (!events.length) return null;
  return (
    <section className="section section--light section--border-top">
      <div className="page-container">
        <SectionHeading eyebrow="RELATED EXHIBITIONS" title={<>Continue exploring<br />the portfolio.</>} />
        <ExhibitionGrid events={events.slice(0, 3)} />
      </div>
    </section>
  );
}
