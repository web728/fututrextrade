import { PremiumForm } from './PremiumForm';

export function ContactForm({ defaultEvent }: { defaultEvent?: string }) {
  return (
    <div className="w-full">
      <PremiumForm 
        formType="contact" 
        endpoint="/api/contact" 
        title="Start A Business Conversation" 
        intro="Tell the Futurex team about your exhibition requirements and how we can support your growth." 
        defaultEvent={defaultEvent} 
        submitLabel="Send Enquiry Now" 
      />
    </div>
  );
}