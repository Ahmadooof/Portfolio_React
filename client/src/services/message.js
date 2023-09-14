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

    if (response.status === 200) {
      const data = await response.json();
      return { status: response.status, success: true, responseText: data.response };
    } else if (response.status === 400) {
      return { status: response.status, success: false, message: 'Bad request, please check body.' };
    } else if (response.status === 404) {
      return { status: response.status, success: false, message: 'User or usage not found' };
    }
    else if (response.status === 429) {
      return { status: response.status, success: false, message: 'No more available messages' };
    } else {
      // Handle other response status codes as needed
      throw new Error('Unexpected response status: ' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
