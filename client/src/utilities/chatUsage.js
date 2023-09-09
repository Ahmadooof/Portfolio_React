export async function chatUsage() {
    const ourBackendURL = 'https://backend.ahmadhome.com';
  
    try {
      const response1 = await fetch(`${ourBackendURL}/get-visitor-by-ip`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response1.ok) {
        throw new Error('Failed to retrieve visitor data');
      }
  
      const data = await response1.json();
  
      if (!data.visitor || !data.visitor.id) {
        throw new Error('Visitor data is missing or invalid');
      }
  
      const response2 = await fetch(`${ourBackendURL}/increment-messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          visitorId: data.visitor.id,
        }),
      });
  
      if (!response2.ok) {
        throw new Error('Failed to increment messages');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  