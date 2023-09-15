import config from '../utilities/config'

export async function sendMessage(userMessage) {
  try {
    const response = await fetch(`${config.currentdomain}/send-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userMessage }),
    });

    if (response.status === 200 || response.status === 429) {
      return await response.json();
    }
    else {
      throw new Error('Unexpected response status: ' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
