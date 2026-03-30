import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const SHEET_ID = '140-KUCrS36Dl_33lUv_FZXA92SuO8xkBCSbwmpwIH3I';
const CONTACTS_SHEET = 'Contacts';
const ENERGY_AUDIT_SHEET = 'Energy Audit';

interface ContactFormData {
  name: string;
  company: string;
  contact: string;
  type: 'contact' | 'energy-audit';
  timestamp?: string;
}

async function getGoogleSheetsClient() {
  const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  
  if (!credentials) {
    throw new Error('Google Service Account credentials not found');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(credentials),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();
    
    // Add timestamp in IST
    const timestamp = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    // Determine which sheet to use
    const sheetName = data.type === 'energy-audit' ? ENERGY_AUDIT_SHEET : CONTACTS_SHEET;
    
    // Prepare the row data
    const rowData = [
      timestamp,
      data.name,
      data.company || '',
      data.contact,
    ];

    // Get Google Sheets client
    const sheets = await getGoogleSheetsClient();

    // Append data to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${sheetName}!A:D`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
