import "./chat.scss";
import React, { useEffect, useState } from "react";

function ChatWindow() {
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

    // Function to add an initial message when the component mounts
    useEffect(() => {
      setChatHistory(["Chat is closed today, please come back another day :)"]); // Add your initial message here
    }, []);

  const handleSendClick = () => {
    if (message.trim() === "") {
      return; // Don't send empty messages
    }

    // Add the message to the chat history
    setChatHistory([...chatHistory, message]);

    // Clear the input field
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div>
      <button className={`toggle-chat-button ${isOpen ? "active" : ""}`} onClick={toggleChat}>
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-comments"></i>}
      </button>

      {isOpen && (

        <div className="chat-container">
          <div className="chat-navbar">
            <span className="chat-title">Chat</span>
            <button className="close-button" onClick={handleCloseChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="chat-body">
            {chatHistory.map((msg, index) => (
              <div key={index}>{msg}</div>
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
