import React from 'react';

function Chatbot({ language }) {
  return (
    <div className="chatbot">
      <p>{language === 'en' ? 'Hello! How can I help you today?' : 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?'}</p>
    </div>
  );
}

export default Chatbot;
