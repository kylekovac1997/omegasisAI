import Airtable from 'airtable';

// Interface for contact form data
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
}

// Initialize Airtable
// Note: These values should be in environment variables in a production app
let airtableBase: any = null;

const initAirtable = (apiKey: string, baseId: string) => {
  const base = new Airtable({ apiKey }).base(baseId);
  airtableBase = base;
  return base;
};

// Submit contact form data to Airtable
const submitContactForm = async (
  data: ContactFormData,
  tableName: string = 'Contacts'
): Promise<any> => {
  if (!airtableBase) {
    throw new Error('Airtable is not initialized. Call initAirtable first.');
  }

  try {
    const response = await airtableBase(tableName).create([
      {
        fields: {
          Name: data.name,
          Email: data.email,
          Company: data.company || '',
          Phone: data.phone || '',
          Service: data.service,
          Message: data.message,
          Date: new Date().toISOString(),
        },
      },
    ]);

    return response;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export { initAirtable, submitContactForm };