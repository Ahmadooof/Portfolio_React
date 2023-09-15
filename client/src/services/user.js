import config from '../utilities/config'

export async function userWithDefaultMessages() {
  try {
    const response = await fetch(`${config.currentdomain}/user/WithDefaultMessages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return;
    }

    const data = await response.json();
    if (response.status === 200 || response.status === 201)
      return data;

  } catch (error) {
    console.error('Error:', error);
  }
}