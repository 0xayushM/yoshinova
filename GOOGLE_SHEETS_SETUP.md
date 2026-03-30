# Google Sheets API Setup for Contact Forms

This document explains how to set up the Google Sheets API integration for the contact forms.

## Prerequisites

1. A Google Cloud Platform account
2. The Google Sheet ID: `140-KUCrS36Dl_33lUv_FZXA92SuO8xkBCSbwmpwIH3I`
3. Two sheets in the spreadsheet:
   - `Contacts` - for general contact form submissions
   - `Energy Audit` - for energy audit requests

## Setup Steps

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API for your project

### 2. Create Service Account Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details
4. Grant the service account the "Editor" role
5. Click "Done"

### 3. Create and Download API Key

1. Click on the created service account
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select JSON format
5. Download the JSON file

### 4. Share the Google Sheet

1. Open the Google Sheet: https://docs.google.com/spreadsheets/d/140-KUCrS36Dl_33lUv_FZXA92SuO8xkBCSbwmpwIH3I/edit
2. Click "Share"
3. Add the service account email (found in the JSON file as `client_email`)
4. Give it "Editor" permissions

### 5. Set Environment Variable

Create a `.env.local` file in the root directory with the entire service account JSON as a single-line string:

```
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"your-project","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}'
```

**Important:** 
- Copy the entire JSON content from the downloaded service account key file
- Remove all newlines and format it as a single line
- Wrap it in single quotes
- For production (Vercel/Netlify), add this as an environment variable in your deployment settings

## Sheet Structure

### Contacts Sheet
Columns: Timestamp | Name | Company | Contact Number

### Energy Audit Sheet
Columns: Timestamp | Name | Company | Contact Number

## Testing

After setup, test the forms:
1. Navigate to any service page
2. Click "Contact Us" button
3. Fill in the form and submit
4. Check the Google Sheet to verify the data was added

## Security Notes

- Never commit `.env.local` to version control
- The API key/credentials should never be exposed in client-side code
- All form submissions go through the server-side API route
- Consider adding rate limiting to prevent spam
