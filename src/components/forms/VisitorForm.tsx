import { PremiumForm } from './PremiumForm';
export function VisitorForm({ defaultEvent }: { defaultEvent?: string }) {
  return <PremiumForm formType="visitor" endpoint="/api/visitor-enquiry" title="Plan your visit" intro="Select the exhibition you are interested in and share your visitor enquiry with the Futurex team." defaultEvent={defaultEvent} submitLabel="Send visitor enquiry" />;
}
