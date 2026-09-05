import type { GalleryItem } from '@/types/content';
import { company } from './company';

export const galleryItems: GalleryItem[] = [
  { id: 'g1', category: 'Exhibitions', title: 'Futurex exhibition floor', image: company.assets.exhibition },
  { id: 'g2', category: 'Conferences', title: 'Futurex conference experience', image: company.assets.hero },
  { id: 'g3', category: 'Media Coverage', title: 'Industry engagement', image: company.assets.exhibition },
  { id: 'g4', category: 'Webinars', title: 'Professional online programming', image: company.assets.hero },
  { id: 'g5', category: 'Virtual Platform', title: 'Virtual exhibition platform', image: company.assets.exhibition }
];
