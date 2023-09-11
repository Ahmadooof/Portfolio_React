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
  
      // Make a GET request to the API endpoint with the specified visitorID
      const response = await fetch(`${ourBackendURL}/get-messages-sent-by-id?visitor_id=${data.visitor.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json(); // Parse the response JSON
  
      // Now you can access the data from the API response
      const messagesSent = responseData.messagesSent;
  
      // Do something with messagesSent, e.g., console.log or return it
      console.log('Messages sent:', messagesSent);
  
      // You can return it if needed
      return messagesSent;
    } catch (error) {
      console.error('Error:', error);
      throw error; // You can choose to re-throw the error for handling higher up the call stack
    }
  }