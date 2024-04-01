import React from 'react';

import { FaPhone, FaComment, FaVideo, FaEnvelope } from 'react-icons/fa';

const Button = ({ icon, text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

const CallButtons = () => {
  const handleCall = () => {
    // Call functionality
    console.log('Call clicked');
  };

  const handleChat = () => {
    // Chat functionality
    console.log('Chat clicked');
  };

  const handleVideoCall = () => {
    // Video call functionality
    console.log('Video call clicked');
  };

  const handleMessage = () => {
    // Message functionality
    console.log('Message clicked');
  };

  return (
    <div className="button-container">
      <Button icon={<FaPhone />} text="Call" onClick={handleCall} />
      <Button icon={<FaComment />} text="Chat" onClick={handleChat} />
      <Button icon={<FaVideo />} text="Video Call" onClick={handleVideoCall} />
      <Button icon={<FaEnvelope />} text="Message" onClick={handleMessage} />
    </div>
  );
};

export default CallButtons;
