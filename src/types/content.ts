export interface Industry {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  person: string;
  company: string;
  role?: string;
}

export interface GalleryItem {
  id: string;
  category: 'Exhibitions' | 'Conferences' | 'Webinars' | 'Media Coverage' | 'Virtual Platform';
  title: string;
  image: string;
}
