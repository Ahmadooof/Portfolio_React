import "./chat.scss";
import React, { useEffect, useRef, useState } from "react";
import { isUserExists } from "../../services/user";
import { getAvailableMessages, insertNewUsageCredits, isUsageCreditsExist } from "../../services/usage";
import { sendMessage } from "../../services/message";

function ChatWindow() {

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [availableMessages, setavilableMessages] = useState(false);
  const [usageCreditsExist, setUsageCreditsExist] = useState(false);
  const [userExists, setUserExists] = useState(false);

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
      return;
    }

    const userMessage = { role: 'user', content: message };
    setChatHistory((prevChatHistory) => [...prevChatHistory, userMessage]);

    setMessage("");

    try {
      if (!userExists) {
        console.log(1)
        let isUserExistsRes = await isUserExists()
        if (isUserExistsRes.status === 200) {
          setUserExists(true)
        } else if (isUserExistsRes.status === 404) {
          throw new Error('user should be exists')
        }
      }

      if (!usageCreditsExist) {
        console.log(2)
        let UsageCreditsExistRes = await isUsageCreditsExist()
        if (UsageCreditsExistRes.status === 200) {
          setUsageCreditsExist(true)
        } else if (UsageCreditsExistRes.status === 404) {
          insertNewUsageCredits()
          setUsageCreditsExist(true)
        }
      }

      const avaliableMessagesRes = await getAvailableMessages()
      if (avaliableMessagesRes.success) {
        setavilableMessages(avaliableMessagesRes.availableMessages)
      }

      if (avaliableMessagesRes.availableMessages >= 0) {
        const resSendMessage = await sendMessage(userMessage.content)
        if (resSendMessage.status === 429) {
          const aiResponse = {
            role: 'ai',
            content: 'You have exceeded the available free messages, sorry, but I cannot handle more questions.'
          };
          setChatHistory((prevChatHistory) => [...prevChatHistory, aiResponse]);
          return;
        } else if (resSendMessage.status === 200) {
          const aiResponse = { role: 'ai', content: resSendMessage.responseText };
          setChatHistory((prevChatHistory) => [...prevChatHistory, aiResponse]);
        }
      }
    } catch (error) {
      console.log('test')
      console.error('Error:', error.message);
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
    // Closed! 😊👋
    const welcomeMessage = { role: 'ai', content: 'Hi, I am AI assistance, which has some info about Ahmad! Try to ask me 😊👋' };

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
            <span className="chat-title">Available Messages: {availableMessages}</span>
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