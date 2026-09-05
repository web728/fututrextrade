import type { MetadataRoute } from 'next';
import { exhibitions } from '@/data/exhibitions';
import { industries } from '@/data/industries';
import { services } from '@/data/services';
import { absoluteUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/exhibitions', '/industries', '/services', '/global-presence', '/participants', '/gallery', '/conferences', '/webinars', '/contact'];
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), changeFrequency: 'monthly' as const, priority: route === '' ? 1 : 0.7 })),
    ...exhibitions.map((event) => ({ url: absoluteUrl(`/exhibitions/${event.slug}`), changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...industries.map((industry) => ({ url: absoluteUrl(`/industries/${industry.slug}`), changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...services.map((service) => ({ url: absoluteUrl(`/services/${service.slug}`), changeFrequency: 'monthly' as const, priority: 0.6 }))
  ];
}
