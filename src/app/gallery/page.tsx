import type { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { GallerySection } from '@/components/sections/GallerySection';
import { CTASection } from '@/components/sections/CTASection';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata(
  'Gallery & Media', 
  'Experience Futurex exhibitions, conferences, webinars, media coverage and virtual platform activity.', 
  '/gallery'
);

export default function GalleryPage() {
  return (
    <main className="relative bg-slate-50 text-slate-900 overflow-hidden">
      {/* Page Hero */}
      <PageHero 
        eyebrow="GALLERY & MEDIA" 
        title={
          <>
            Experience <span className="text-[#E3131B]">Futurex</span>
          </>
        } 
        description="Browse through our high-impact trade exhibitions, B2B conferences, webinars, and global media highlights." 
      />

      {/* Full Gallery Section */}
      <GallerySection full />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}