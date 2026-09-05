import 'server-only';
import { google } from 'googleapis';
import type { SubmissionPayload } from '@/types/enquiry';
import { formTypeLabels } from './validations';

const getTabName = (formType: SubmissionPayload['formType']) => {
  const names: Record<SubmissionPayload['formType'], string | undefined> = {
    contact: process.env.GOOGLE_SHEET_TAB_CONTACT,
    enquiry: process.env.GOOGLE_SHEET_TAB_ENQUIRY,
    exhibitor: process.env.GOOGLE_SHEET_TAB_EXHIBITOR,
    visitor: process.env.GOOGLE_SHEET_TAB_VISITOR,
    sponsor: process.env.GOOGLE_SHEET_TAB_SPONSOR
  };
  return names[formType] || 'Enquiries';
};

export async function appendToGoogleSheet(payload: SubmissionPayload, submittedAt: Date) {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !rawPrivateKey || !spreadsheetId) {
    throw new Error('Google Sheets environment variables are incomplete.');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: rawPrivateKey.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const sheets = google.sheets({ version: 'v4', auth });
  const tab = getTabName(payload.formType);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${tab}'!A:K`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[
        submittedAt.toISOString(),
        formTypeLabels[payload.formType],
        payload.name,
        payload.email,
        payload.phone || '',
        payload.company || '',
        payload.country || '',
        payload.event || '',
        payload.subject || '',
        payload.message || '',
        payload.source || ''
      ]]
    }
  });
}
