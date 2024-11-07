
import React from 'react';

const Chatbot = () => (
  <div className="flex justify-center items-center h-screen bg-gray-900">
    <div className="w-full max-w-3xl p-4">
      <h1 className="text-white text-center text-2xl font-bold mb-4">Project Video Demo</h1>
      <video controls className="w-full rounded-lg">
        <source src="/videos/chatbot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default Chatbot;
