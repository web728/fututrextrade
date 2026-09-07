export interface ExhibitionItem {
  id: string;
  slug: string;
  title: string;
  edition?: string;
  dates: string;
  venue: string;
  city: string;
  country: 'India' | 'Nepal' | 'Bangladesh' | 'Kenya' | 'Uganda' | 'Tanzania';
  industry: string;
  year: string;
  website: string;
  logo: string;
}

export const featuredExhibitions: ExhibitionItem[] = [
  {
    id: 'bangladesh-buildcon-2026',
    slug: 'bangladesh-buildcon-2026',
    title: '10th Bangladesh Buildcon International Expo',
    edition: '10th Edition',
    dates: '17th to 19th September 2026',
    venue: 'ICCB Exhibition Hall',
    city: 'Dhaka',
    country: 'Bangladesh',
    industry: 'Architecture & Building Materials',
    year: '2026',
    website: 'https://bangladeshbuildcon.com',
    logo: '/images/logos/bangladesh-buildcon.png'
  },
  {
    id: 'bangladesh-wood-metal-2026',
    slug: 'bangladesh-wood-metal-2026',
    title: '10th Bangladesh Wood & Metal Industries Expo',
    edition: '10th Edition',
    dates: '17th to 19th September 2026',
    venue: 'ICCB Exhibition Hall',
    city: 'Dhaka',
    country: 'Bangladesh',
    industry: 'Woodworking & Metal Machinery',
    year: '2026',
    website: 'https://bangladeshwood.com',
    logo: '/images/logos/bangladesh-wood.png'
  },
  {
    id: 'india-ev-show-2026',
    slug: 'india-ev-show-2026',
    title: '8th Edition India EV International Show',
    edition: '8th Edition',
    dates: '2nd to 4th October 2026',
    venue: 'Auto Cluster Exhibition Centre',
    city: 'Pune',
    country: 'India',
    industry: 'Electric Vehicles & Mobility Tech',
    year: '2026',
    website: 'https://indiaevshow.com',
    logo: '/images/logos/india-ev.png'
  },
  {
    id: 'india-battery-show-2026',
    slug: 'india-battery-show-2026',
    title: 'India Battery International Show',
    edition: 'Annual Edition',
    dates: '2nd to 4th October 2026',
    venue: 'Auto Cluster Exhibition Centre',
    city: 'Pune',
    country: 'India',
    industry: 'Battery Tech & Energy Storage',
    year: '2026',
    website: 'https://indiabatteryshow.com',
    logo: '/images/logos/india-battery.png'
  },
  {
    id: 'india-solar-show-2026',
    slug: 'india-solar-show-2026',
    title: 'India Solar International Show',
    edition: 'Annual Edition',
    dates: '2nd to 4th October 2026',
    venue: 'Auto Cluster Exhibition Centre',
    city: 'Pune',
    country: 'India',
    industry: 'Photovoltaic & Solar Energy',
    year: '2026',
    website: 'https://indiasolarshow.com',
    logo: '/images/logos/india-solar.png'
  },
  {
    id: 'nepal-electric-power-2026',
    slug: 'nepal-electric-power-2026',
    title: "5th Nepal Electric, Power and Lights Int'l Expo",
    edition: '5th Edition',
    dates: '18th to 20th December 2026',
    venue: 'Bhrikuti Mandap',
    city: 'Kathmandu',
    country: 'Nepal',
    industry: 'Power, Grid & Electrical Engineering',
    year: '2026',
    website: 'https://nepalelectricexpo.com',
    logo: '/images/logos/nepal-electric.png'
  },
  {
    id: 'odisha-mining-infra-2027',
    slug: 'odisha-mining-infra-2027',
    title: "5th Odisha Mining & Infrastructure Int'l Expo",
    edition: '5th Edition',
    dates: '7th to 10th January 2027',
    venue: 'Baramunda Ground',
    city: 'Bhubaneswar, Odisha',
    country: 'India',
    industry: 'Mining Machinery & Heavy Infrastructure',
    year: '2027',
    website: 'https://odishaminingexpo.com',
    logo: '/images/logos/odisha-mining.png'
  },
  {
    id: 'nepal-wood-2027',
    slug: 'nepal-wood-2027',
    title: '12th Edition Nepal Wood International Expo',
    edition: '12th Edition',
    dates: '28th to 31st January 2027',
    venue: 'Bhrikuti Mandap',
    city: 'Kathmandu',
    country: 'Nepal',
    industry: 'Wood Processing & Furniture Tech',
    year: '2027',
    website: 'https://nepalwood.com',
    logo: '/images/logos/nepal-wood.png'
  },
  {
    id: 'nepal-agritech-2027',
    slug: 'nepal-agritech-2027',
    title: '9th Nepal Agritech International Expo',
    edition: '9th Edition',
    dates: '18th to 20th February 2027',
    venue: 'Bhrikuti Mandap',
    city: 'Kathmandu',
    country: 'Nepal',
    industry: 'Agri Machinery & Farm Automation',
    year: '2027',
    website: 'https://nepalagritech.com',
    logo: '/images/logos/nepal-agritech.png'
  },
  {
    id: 'nepal-buildcon-2027',
    slug: 'nepal-buildcon-2027',
    title: '12th Nepal Buildcon International Expo',
    edition: '12th Edition',
    dates: '25th to 28th February 2027',
    venue: 'Bhrikuti Mandap',
    city: 'Kathmandu',
    country: 'Nepal',
    industry: 'Construction & Heavy Equipment',
    year: '2027',
    website: 'https://nepalbuildcon.com',
    logo: '/images/logos/nepal-buildcon.png'
  },
  {
    id: 'kenya-buildcon-2027',
    slug: 'kenya-buildcon-2027',
    title: '4th Edition Kenya Buildcon International Expo',
    edition: '4th Edition',
    dates: '9th to 11th June 2027',
    venue: 'The Sarit Expo Centre',
    city: 'Nairobi',
    country: 'Kenya',
    industry: 'Building Construction & Materials',
    year: '2027',
    website: 'https://kenyabuildcon.com',
    logo: '/images/logos/kenya-buildcon.png'
  },
  {
    id: 'kenya-wood-2027',
    slug: 'kenya-wood-2027',
    title: '4th Edition Kenya Wood International Expo',
    edition: '4th Edition',
    dates: '9th to 11th June 2027',
    venue: 'The Sarit Expo Centre',
    city: 'Nairobi',
    country: 'Kenya',
    industry: 'Woodworking Machinery & Timber',
    year: '2027',
    website: 'https://kenyawood.com',
    logo: '/images/logos/kenya-wood.png'
  },
  {
    id: 'kenya-solar-electric-2027',
    slug: 'kenya-solar-electric-2027',
    title: '3rd Kenya Solar, Electric, Power & Lights Expo',
    edition: '3rd Edition',
    dates: '9th to 11th June 2027',
    venue: 'The Sarit Expo Centre',
    city: 'Nairobi',
    country: 'Kenya',
    industry: 'Solar Grid & Lighting Technology',
    year: '2027',
    website: 'https://kenyasolarexpo.com',
    logo: '/images/logos/kenya-solar.png'
  },
  {
    id: 'uganda-buildcon-2027',
    slug: 'uganda-buildcon-2027',
    title: '6th Edition Uganda Buildcon International Expo',
    edition: '6th Edition',
    dates: '4th to 6th August 2027',
    venue: 'Uma Show Grounds',
    city: 'Kampala',
    country: 'Uganda',
    industry: 'Commercial Construction & Engineering',
    year: '2027',
    website: 'https://ugandabuildcon.com',
    logo: '/images/logos/uganda-buildcon.png'
  },
  {
    id: 'tanzania-buildcon-2027',
    slug: 'tanzania-buildcon-2027',
    title: 'Tanzania Buildcon International Expo',
    edition: 'Inaugural Edition',
    dates: '25th to 27th August 2027',
    venue: 'Diamond Jubilee Expo Center',
    city: 'Dar-es-Salaam',
    country: 'Tanzania',
    industry: 'Building Technology & Project Architecture',
    year: '2027',
    website: 'https://tanzaniabuildcon.com',
    logo: '/images/logos/tanzania-buildcon.png'
  },
  {
    id: 'icpma-corru-pack-2028',
    slug: 'icpma-corru-pack-2028',
    title: '3rd Edition ICPMA Corru Pack Print India',
    edition: '3rd Edition',
    dates: '9th to 12th February 2028',
    venue: 'Yashobhoomi, IICC, Dwarka',
    city: 'New Delhi',
    country: 'India',
    industry: 'Corrugated Packaging & Printing Tech',
    year: '2028',
    website: 'https://corrupackprint.com',
    logo: '/images/logos/icpma-corru.png'
  }
];