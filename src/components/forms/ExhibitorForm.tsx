import { PremiumForm } from './PremiumForm';
export function ExhibitorForm({ defaultEvent }: { defaultEvent?: string }) {
  return <PremiumForm formType="exhibitor" endpoint="/api/exhibitor-enquiry" title="Exhibit with Futurex" intro="Tell us which market or exhibition you are interested in and our team can continue the participation conversation." defaultEvent={defaultEvent} submitLabel="Request exhibitor information" />;
}
