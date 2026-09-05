import type { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { webinars } from '@/data/webinars';
import { CTASection } from '@/components/sections/CTASection';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata('Webinars', 'Futurex webinars and virtual platform programming for professional audiences.', '/webinars');

export default function WebinarsPage() {
  return (
    <><PageHero eyebrow="WEBINARS" title={<>Live business experiences,<br />online.</>} description="Futurex has hosted webinars and virtual platform programming for professional audiences." /><section className="section section--light"><div className="page-container webinar-list">{webinars.map((item) => <article key={item.title}><span>{item.date}</span><h2>{item.title}</h2><small>Futurex Virtual Platform</small></article>)}</div></section><CTASection /></>
  );
}
