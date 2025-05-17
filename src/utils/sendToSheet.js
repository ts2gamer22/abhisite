export async function sendToGoogleSheet(data) {
    const url = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
  
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
  