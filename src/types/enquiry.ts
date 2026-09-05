export type FormType = 'contact' | 'enquiry' | 'exhibitor' | 'visitor' | 'sponsor';

export interface SubmissionPayload {
  formType: FormType;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  event?: string;
  subject?: string;
  message?: string;
  source?: string;
  website?: string;
}

export interface SubmissionRecord extends Omit<SubmissionPayload, 'website'> {
  status: 'new' | 'reviewing' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  integrations?: {
    googleSheets: 'pending' | 'success' | 'failed';
    email: 'pending' | 'success' | 'failed';
  };
}
