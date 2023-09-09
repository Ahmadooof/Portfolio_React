export async function insertVisitorInfo() {
  const ourBackendURL = 'https://backend.ahmadhome.com';
  let userIpAddress; // Change `const` to `let` to allow reassignment

  try {
    const ipifyURL = 'https://geo.ipify.org/api/v2';
    const response = await fetch(`${ipifyURL}/country?apiKey=at_M315WjZvcEuvq82Ux8tIKYkhzLtY9`);
    const data = await response.json();
    console.log(data)
    userIpAddress = data.ip;
    const region = data.location.region;

    const response2 = await fetch(`${ourBackendURL}/insert-visitor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ip_address: userIpAddress,
        region: region,
      }),
    });
    if (response2.status === 201) {
      return userIpAddress;
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }

  try {
    const response3 = await fetch(`${ourBackendURL}/get-visitor-by-ip?ip_address=${userIpAddress}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response3);

    if (!response3.ok) {
      throw new Error('Visitor does not exist!');
    }

    const data = await response3.json();
    console.log(data)
    const response4 = await fetch(`${ourBackendURL}/create-default-chat-usage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        visitorId: data.visitor.id,
      }),
    });

    if (!response4.ok) {
      throw new Error('Failed to create default chat usage!');
    }

    // Handle success
    console.log('Default chat usage record created successfully.');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
