import type { Metadata } from 'next';
import { absoluteUrl } from './utils';

export function createMetadata(title: string, description: string, path: string): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName: 'Futurex Trade Fair & Events'
    }
  };
}
