import "./chat.scss";
import React, { useEffect, useRef, useState } from "react";
import OpenAI from 'openai';
import { incrementMessages } from "../../utilities/incrementMessages";
import { chatUsage } from "../../utilities/chatUsage";

function ChatWindow() {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Use the correct environment variable name
    dangerouslyAllowBrowser: true, // Enable browser-like environment
  })

  const info = `You are a joyful assistant, 30 years old.\n` +
    `your name ahmad anbarje.\n` +
    `your degree: computer sience graduated in 2020, your marital status: single.\n` +
    `you are living with my mother currently residing in Jeddah KSA,\n` +
    `you are from Syria and hold Swedish and Syrian citizenship. You can speak English, Arabic, Swedish\n` +
    `you are experience in various areas including web programming, DevOps, design, and software programming\n` +
    `you are not working, and you are available immediately to start the new position, your phone number:+966 055 308 1749.\n` +
    `if the 'message' is a question and you could not find relavent answer from this info, then say "Sorry I have no info.".\n` +
    `if the 'message' needs a help with anything, which is not relevente to this info, then say "Sorry I can't help you with that."\n`;

  async function main() {
    try {
      const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // gpt-3.5-turbo, gpt-4
        messages: [
          { "role": "system", "content": `${info}` },
          {
            "role": "user", "content": `Given a 'message' below, try to answer it using the role system content.\n` +
              `message: ${message}?\n\n`
          }],
        stream: true,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 0.7,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      // Create an array to store the response parts
      const responseParts = [];

      for await (const part of stream) {
        const content = part.choices[0]?.delta?.content || '';
        responseParts.push(content);
      }

      // Join the response parts as a single string
      const responseText = responseParts.join('');

      return responseText; // Return the response text instead of logging it
    } catch (error) {
      console.error('Error:', error);
      throw error; // Optionally re-throw the error to handle it elsewhere
    }
  }

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleSendClick = async () => {
    if (message.trim() === "") {
      return; // Don't send empty messages
    }

    const userMessage = { role: 'user', content: message };
    setChatHistory((prevChatHistory) => [...prevChatHistory, userMessage]);

    setMessage("");
    try {
      let nrMessageSent = await chatUsage();
      if (nrMessageSent > 10) {
        const aiResponse = {
          role: 'ai',
          content: 'You have exceeded the available free messages, sorry, but I cannot handle more questions.'
        };
        setChatHistory((prevChatHistory) => [...prevChatHistory, aiResponse]);
        return;
      }

      const responseText = await main();

      const aiResponse = { role: 'ai', content: responseText };
      setChatHistory((prevChatHistory) => [...prevChatHistory, aiResponse]);

      try {
        await incrementMessages();
        console.log('Chat usage incremented successfully');
      } catch (error) {
        console.error('Error incrementing chat usage:', error);
      }

      // scrollToBottom()
    } catch (error) {
      console.error('Error in handleSendClick:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };

  // Function to handle user input message
  const handleUserMessage = () => {
    // Create a welcome message when the user opens the chat window
    // const welcomeMessage = { role: 'ai', content: 'Hello, friend! 😊👋' };
    const welcomeMessage = { role: 'ai', content: 'Sorry, chat is closed today! 😊👋' };

    // Add the welcome message to the chat history
    setChatHistory([welcomeMessage]);

    // Toggle the chat window to make it visible
    setIsOpen(false);
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    handleUserMessage();
  }, [])

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    };

    scrollToBottom();
  }, [chatHistory]); // The empty dependency array ensures this effect runs only once


  return (
    <div>
      <button className={`toggle-chat-button ${isOpen ? "active" : ""}`} onClick={toggleChat}>
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-comments"></i>}
      </button>

      {isOpen && (

        <div className="chat-container" >
          <div className="chat-navbar">
            <span className="chat-title">Chat</span>
            <button className="close-button" onClick={handleCloseChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="chat-body" ref={chatContainerRef}>
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={msg.role === 'user' ? 'user-message' : 'ai-message'}
              >
                {msg.content}</div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              className="chat-input"
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={handleMessageChange}
              onKeyDown={handleKeyPress}
            />
            <button className="chat-send-button" onClick={handleSendClick}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;