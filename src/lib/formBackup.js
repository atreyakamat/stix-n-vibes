/**
 * Sends a background form submission to Web3Forms as a backup.
 * If VITE_WEB3FORMS_KEY is not configured, logs the data to console.
 * This runs asynchronously and does not block the user's primary action (e.g. opening WhatsApp).
 * 
 * @param {Object} data - The form fields to submit.
 * @param {string} formName - The name of the form (e.g. "Custom Order Configurator", "General Inquiry", "B2B Partnership")
 */
export async function submitFormBackup(data, formName) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  if (!accessKey) {
    console.warn(`[Web3Forms Backup] VITE_WEB3FORMS_KEY not found in environment variables. Form data for "${formName}" will not be emailed:`, data);
    return;
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Stix N Vibes Form Submission: ${formName}`,
        from_name: 'Stix N Vibes Website',
        ...data
      })
    });

    const result = await response.json();
    if (result.success) {
      console.log(`[Web3Forms Backup] Submission for "${formName}" successful.`);
    } else {
      console.error(`[Web3Forms Backup] Submission failed:`, result.message);
    }
  } catch (error) {
    console.error(`[Web3Forms Backup] Error submitting form:`, error);
  }
}
