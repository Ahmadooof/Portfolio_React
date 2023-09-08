
export async function getvisitorInfo() {
  try {
    const ipifyURL = 'https://geo.ipify.org/api/v2'

    const response = await fetch(`${ipifyURL}/country?apiKey=at_M315WjZvcEuvq82Ux8tIKYkhzLtY9`);
    const data = await response.json();
    // console.log(data)
    const userIpAddress = data.ip;
    const region = data.location.region;

    const ourBackendURL = 'https://backend.ahmadhome.com';
    // Send the IP address to your Express server
    const response2 = await fetch(`${ourBackendURL}/insert-visitor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ip_address: userIpAddress,
        region: region
      }),
    });

    if (response2.status === 201) {
      return userIpAddress;
    }
  } catch (error) {
    console.error('Error capturing IP address:', error);
    throw error;
  }
}
