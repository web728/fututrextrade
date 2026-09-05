import type { Industry } from '@/types/content';
import { company } from './company';

const image = company.assets.exhibition;

export const industries: Industry[] = [
  { slug: 'building-infrastructure', name: 'Building & Infrastructure', description: 'Business platforms connecting construction, building materials, infrastructure and allied professional communities.', image },
  { slug: 'agriculture', name: 'Agriculture', description: 'Trade exhibitions bringing agricultural technology, inputs, suppliers and professional buyers together.', image },
  { slug: 'wood-woodworking', name: 'Wood & Woodworking', description: 'Industry events for woodworking machinery, materials, manufacturing and related supply chains.', image },
  { slug: 'electric-vehicles', name: 'Electric Vehicles', description: 'Focused exhibition platforms for the fast-evolving electric mobility ecosystem.', image },
  { slug: 'power-energy', name: 'Power & Energy', description: 'Business meetings for solar, electrical, power, lighting and energy solutions.', image },
  { slug: 'pharmaceuticals', name: 'Pharmaceuticals', description: 'Professional B2B opportunities across healthcare and pharmaceutical markets.', image },
  { slug: 'home-appliances', name: 'Home Appliances', description: 'Business networking for appliance brands, suppliers and distribution partners.', image },
  { slug: 'garments', name: 'Garments', description: 'Trade platforms serving garment manufacturing and connected supply chains.', image },
  { slug: 'education', name: 'Education', description: 'Professional engagement across education markets, services and institutional networks.', image },
  { slug: 'printing-packaging', name: 'Printing & Packaging', description: 'Exhibitions for printing, corrugation, packaging and converting industries.', image },
  { slug: 'plastics', name: 'Plastics', description: 'Industry-focused opportunities across plastics and associated manufacturing sectors.', image }
];

export const getIndustry = (slug: string) => industries.find((item) => item.slug === slug);
