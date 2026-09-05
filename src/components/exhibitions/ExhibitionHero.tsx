import Image from 'next/image';
import { CalendarDays, MapPin } from 'lucide-react';
import type { Exhibition } from '@/types/exhibition';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function ExhibitionHero({ event }: { event: Exhibition }) {
  return (
    <section className="detail-hero">
      <Image src={event.image} alt={`${event.title} exhibition`} fill priority sizes="100vw" />
      <div className="detail-overlay" />
      <div className="page-container detail-copy">
        <div className="eyebrow eyebrow--light"><span aria-hidden="true" />{event.country} · {event.industry}</div>
        <Badge>{event.status}</Badge>
        <h1>{event.title}</h1>
        <div className="detail-meta">
          <span><CalendarDays aria-hidden="true" />{event.dateLabel}</span>
          <span><MapPin aria-hidden="true" />{event.venue}, {event.city}{event.region ? `, ${event.region}` : ''}, {event.country}</span>
        </div>
        <div className="hero-actions">
          <Button href={`/participants?event=${encodeURIComponent(event.title)}#exhibitor`}>Become an exhibitor</Button>
          <Button href={`/participants?event=${encodeURIComponent(event.title)}#visitor`} variant="ghost">Plan your visit</Button>
        </div>
      </div>
    </section>
  );
}
