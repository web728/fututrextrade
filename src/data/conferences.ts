export interface ConferenceItem {
  title: string;
  date: string;
  city: string;
  region: string;
  series: string;
}

export const conferences: ConferenceItem[] = [
  { title: 'EV Dynamics 2024', date: '7 September 2024', city: 'Chennai', region: 'Tamil Nadu', series: 'Futurex Conference' },
  { title: 'EV Dynamics 2024', date: '7 December 2024', city: 'Pune', region: 'Maharashtra', series: 'Futurex Conference' },
  { title: 'EV Dynamics 2023', date: '27 May 2023', city: 'Chennai', region: 'Tamil Nadu', series: 'Futurex Conference' },
  { title: 'EV Dynamic Conference 2022', date: '14 November 2022', city: 'Pune', region: 'Maharashtra', series: 'Futurex Conference' }
];
