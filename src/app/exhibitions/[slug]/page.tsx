import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExhibitionHero } from '@/components/exhibitions/ExhibitionHero';
import { ExhibitionInfo } from '@/components/exhibitions/ExhibitionInfo';
import { RelatedExhibitions } from '@/components/exhibitions/RelatedExhibitions';
import { GallerySection } from '@/components/sections/GallerySection';
import { CTASection } from '@/components/sections/CTASection';
import { exhibitions, getExhibition } from '@/data/exhibitions';
import { absoluteUrl } from '@/lib/utils';

export function generateStaticParams() {
  return exhibitions.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getExhibition(slug);
  if (!event) return {};
  const url = absoluteUrl(`/exhibitions/${event.slug}`);
  return {
    title: event.title,
    description: `${event.title}, ${event.dateLabel}, at ${event.venue} in ${event.city}, ${event.country}.`,
    alternates: { canonical: url },
    openGraph: { title: event.title, description: event.description, url, type: 'website' }
  };
}

export default async function ExhibitionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getExhibition(slug);
  if (!event) notFound();
  const related = exhibitions.filter((item) => item.slug !== event.slug && (item.industry === event.industry || item.country === event.country));
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: event.status === 'Completed' ? 'https://schema.org/EventCompleted' : 'https://schema.org/EventScheduled',
    description: event.description,
    image: event.image,
    location: {
      '@type': 'Place',
      name: event.venue,
      address: `${event.city}, ${event.country}`
    },
    organizer: { '@type': 'Organization', name: 'Futurex Trade Fair & Events Pvt. Ltd.', url: absoluteUrl('/') },
    url: absoluteUrl(`/exhibitions/${event.slug}`)
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Exhibitions', item: absoluteUrl('/exhibitions') },
      { '@type': 'ListItem', position: 3, name: event.title, item: absoluteUrl(`/exhibitions/${event.slug}`) }
    ]
  };
  return (
    <>
      <ExhibitionHero event={event} />
      <ExhibitionInfo event={event} />
      <section className="section section--dark"><div className="page-container"><div className="eyebrow eyebrow--light"><span aria-hidden="true" />EVENT EXPERIENCE</div><h2 className="dark-section-title">Exhibition moments.<br />Business in motion.</h2></div></section>
      <GallerySection />
      <RelatedExhibitions events={related} />
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
