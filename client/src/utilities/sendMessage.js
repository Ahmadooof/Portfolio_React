import config from "./config";

export async function sendMessage(userMessage) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    };

    try {
        const response = await fetch(`${config.currentdomain}/ask-me`, requestOptions);
        if (response.status === 200) {
            const data = await response.json();
            return data.response;
        } else if (response.status === 404) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        } else if (response.status === 429) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

