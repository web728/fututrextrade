import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/hero/PageHero';
import { ExhibitionGrid } from '@/components/exhibitions/ExhibitionGrid';
import { CTASection } from '@/components/sections/CTASection';
import { exhibitions } from '@/data/exhibitions';
import { getIndustry, industries } from '@/data/industries';
import { absoluteUrl } from '@/lib/utils';

export function generateStaticParams() { return industries.map((industry) => ({ slug: industry.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return { title: industry.name, description: industry.description, alternates: { canonical: absoluteUrl(`/industries/${industry.slug}`) } };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const related = exhibitions.filter((event) => event.industry === industry.name);
  return (
    <>
      <PageHero eyebrow="INDUSTRY" title={industry.name} description={industry.description} />
      <section className="section section--light"><div className="page-container"><div className="eyebrow"><span aria-hidden="true" />RELATED EXHIBITIONS</div><h2 className="section-title">Business platforms for<br />this sector.</h2>{related.length ? <ExhibitionGrid events={related} /> : <p className="empty-state">Futurex lists this as a focus industry. Upcoming event information can be added to the structured exhibition data as schedules are published.</p>}</div></section>
      <CTASection />
    </>
  );
}
