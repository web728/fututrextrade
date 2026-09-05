import mongoose, { Schema } from 'mongoose';

const submissionFields = {
  formType: { type: String, required: true, index: true },
  name: { type: String, required: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, default: '' },
  company: { type: String, default: '' },
  country: { type: String, default: '' },
  event: { type: String, default: '' },
  subject: { type: String, default: '' },
  message: { type: String, default: '' },
  source: { type: String, default: '' },
  status: { type: String, enum: ['new', 'reviewing', 'closed'], default: 'new', index: true },
  integrations: {
    googleSheets: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' },
    email: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' }
  }
};

export const createSubmissionModel = (modelName: string) => {
  const schema = new Schema(submissionFields, { timestamps: true, versionKey: false });
  return mongoose.models[modelName] || mongoose.model(modelName, schema);
};
