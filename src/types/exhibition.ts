export type ExhibitionStatus = 'Upcoming' | 'Completed';

export interface Exhibition {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  edition?: string;
  description: string;
  dateLabel: string;
  startDate: string;
  endDate: string;
  year: number;
  venue: string;
  city: string;
  region?: string;
  country: string;
  industry: string;
  eventType: 'Exhibition';
  image: string;
  logo?: string;
  gallery: string[];
  status: ExhibitionStatus;
  featured: boolean;
  highlights: string[];
}
