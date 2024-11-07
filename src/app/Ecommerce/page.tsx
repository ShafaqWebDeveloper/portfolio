
import React from 'react';

const Ecommerce = () => (
  <div className="flex justify-center items-center h-screen bg-gray-900">
    <div className="w-full max-w-5xl p-4">
      <h1 className="text-white text-center text-2xl font-bold mb-4">Ecommerce Webiste  Video Demo</h1>
      <video controls className="w-full rounded-lg">
        <source src="/videos/ecommerce.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default Ecommerce;
