import "./chat.scss";
import React, { useEffect, useRef, useState } from "react";
import { isUserExists, userWithDefaultMessages } from "../../services/user";
import { getAvailableMessages, insertNewUsageCredits, isUsageCreditsExist } from "../../services/usage";
import { sendMessage } from "../../services/message";

function ChatWindow() {

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [availableMessages, setAvailableMessages] = useState(null);
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

  const handleMessagesExceeded = () => {
    const aiResponse = {
      role: 'ai',
      content: 'You have exceeded the available free messages, sorry, but I cannot handle more questions.'
    };
    setChatHistory((prevChatHistory) => [...prevChatHistory, aiResponse]);
    setAvailableMessages(0)
  }

  const handleSendClick = async () => {
    if (message.trim() === "") {
      return;
    }

    const userMessage = { role: 'user', content: message };
    setChatHistory((prevChatHistory) => [...prevChatHistory, userMessage]);

    setMessage("");

    try {
      if (availableMessages > 0) {
        const resData = await sendMessage(userMessage.content)
        const aiResponse = { role: 'ai', content: resData.response };
        setChatHistory((prevChatHistory) => [...prevChatHistory, aiResponse]);
        setAvailableMessages(resData.availableMessages);
      } else
        handleMessagesExceeded()

    } catch (error) {
      // console.log('test')
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
    const welcomeMessage = { role: 'ai', content: 'Hi, I am AI assistance, which has some info about Ahmad! Try to ask me 😊👋' };
    setChatHistory([welcomeMessage]);
    setIsOpen(false);
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    handleUserMessage();
  }, [])

  useEffect(() => {
    // console.log('hi');
    try {
      if (availableMessages === null) {

        const getMessages = async () => {
          return await userWithDefaultMessages()
        };

        getMessages()
          .then(res => {
            setAvailableMessages(res.availableMessages);
          })
          .catch(error => console.error('Error:', error));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, []);

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