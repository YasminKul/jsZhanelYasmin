import React, { useState, useEffect } from 'react';
import '../styles/ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setMessages([{ text: 'Здравствуйте, чем могу помочь?', sender: 'manager' }]);
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="input-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Напишите сообщение..."
          className="input-field"
        />
        <button type="submit" className="send-button">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
