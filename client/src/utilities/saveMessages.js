// import config from "./config";



// export async function saveMessages(visitorMessage, aiMessage) {

//     try {
//         const response1 = await fetch(`${config.currentdomain}/get-visitor-by-ip`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
    
//         if (!response1.ok) {
//             throw new Error('Failed to retrieve visitor data');
//         }
    
//         const data = await response1.json();
    
//         if (!data.visitor || !data.visitor.id) {
//             throw new Error('Visitor data is missing or invalid');
//         }

//         const response = await fetch(`${config.currentdomain}/save-chat-message`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 visitor_id: data.visitor.id,
//                 visitor_message: visitorMessage,
//                 ai_message: aiMessage, // Indicate if it's a visitor message
//             }),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             console.log('Chat message saved successfully. Inserted ID:', data.insertedId);
//             // Add any further actions you want to take upon successful save.
//         } else {
//             console.error('Failed to save chat message:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error sending the request:', error);
//     }
// }
