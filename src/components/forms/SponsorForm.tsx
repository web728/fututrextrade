import { PremiumForm } from './PremiumForm';
export function SponsorForm({ defaultEvent }: { defaultEvent?: string }) {
  return <PremiumForm formType="sponsor" endpoint="/api/sponsor-enquiry" title="Sponsor or partner with Futurex" intro="Share the event, market or partnership opportunity you would like to discuss." defaultEvent={defaultEvent} submitLabel="Start partnership conversation" />;
}
