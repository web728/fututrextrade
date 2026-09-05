import Image from 'next/image';
import type { Exhibition } from '@/types/exhibition';
import { Button } from '@/components/ui/Button';

export function ExhibitionInfo({ event }: { event: Exhibition }) {
  return (
    <section className="section section--light">
      <div className="page-container detail-layout">
        <div className="detail-main">
          <div className="eyebrow"><span aria-hidden="true" />ABOUT THE EVENT</div>
          <h2>A focused B2B meeting point for the {event.industry.toLowerCase()} sector.</h2>
          <p>{event.description}</p>
          <div className="detail-two-col">
            <article>
              <span>01</span>
              <h3>Why exhibit</h3>
              <p>Present your company within a focused trade environment and create direct conversations with professional buyers, distributors and industry stakeholders.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Why visit</h3>
              <p>Discover suppliers and market-ready solutions, compare offerings and build relevant professional relationships around the event sector.</p>
            </article>
          </div>
          <div className="event-highlights">
            <h3>Event highlights</h3>
            <ul>{event.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </div>
        </div>
        <aside className="fact-card">
          {event.logo ? <Image src={event.logo} alt={`${event.shortTitle} logo`} width={320} height={150} /> : null}
          <div><small>Date</small><strong>{event.dateLabel}</strong></div>
          <div><small>Venue</small><strong>{event.venue}</strong></div>
          <div><small>Location</small><strong>{event.city}, {event.country}</strong></div>
          <div><small>Industry</small><strong>{event.industry}</strong></div>
          <Button href={`/contact?event=${encodeURIComponent(event.title)}`}>Event enquiry</Button>
        </aside>
      </div>
    </section>
  );
}
