// Frontend-only form submission (Formspree / Web3Forms style endpoint).
// Set VITE_FORM_ENDPOINT in .env.local and in Vercel env vars.
export async function submitForm(data) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  if (!endpoint) {
    throw new Error(
      'Contact form is not configured yet. Please reach us on WhatsApp or phone.'
    );
  }

  let res;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error('Network error. Please check your connection and try again.');
  }

  if (!res.ok) {
    throw new Error(
      'We could not send your message. Please try again or contact us on WhatsApp.'
    );
  }
  return true;
}
