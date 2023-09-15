import config from '../utilities/config'

export async function insertNewUsageCredits() {
  try {
    const response = await fetch(`${config.currentdomain}/insert-new-usage-credits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function isUsageCreditsExist() {
  try {
    const response = await fetch(`${config.currentdomain}/is_usage_credits_exists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.isUserExists && data.isUsageExists) {
      console.log("Usage for the user already exists.");
    } else if (data.isUserExists) {
      console.log("User exists but usage doesn't.");
    } else {
      console.log("User doesn't exist.");
    }
  } catch (error) {
    console.error("A problem occurred when checking for usage credits:", error);
  }
}


export async function getAvailableMessages() {
  try {
    const response = await fetch(`${config.currentdomain}/get-available-messages`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return { success: true, availableMessages: data.availableMessages };
    } else if (response.status === 404) {
      return { success: false, message: 'User or usage not found' };
    } else {
      // Handle other response status codes as needed
      throw new Error('Unexpected response status: ' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


  