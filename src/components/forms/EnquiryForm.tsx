import { PremiumForm } from './PremiumForm';
export function EnquiryForm() {
  return <PremiumForm formType="enquiry" endpoint="/api/enquiry" title="General enquiry" intro="For company, event, service or partnership questions." submitLabel="Send general enquiry" />;
}
