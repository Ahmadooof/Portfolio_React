import config from '../utilities/config'

export async function insertUser() {
  try {
    // const ipifyURL = 'https://geo.ipify.org/api/v2';
    // const response = await fetch(`${ipifyURL}/country?apiKey=at_M315WjZvcEuvq82Ux8tIKYkhzLtY9`);
    // const data = await response.json();
    // console.log(data)
    // userIpAddress = data.ip;
    // const region = data.location.region;
    await fetch(`${config.currentdomain}/insert-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error:', error);
  }
}


export async function isUserExists() {
  try {
    const response = await fetch(`${config.currentdomain}/is-user-exists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response
    } else if (response.status === 404) {
      return response
    } else {
      throw new Error('Unexpected response status: ' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}