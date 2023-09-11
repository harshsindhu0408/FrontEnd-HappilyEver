// pages/Page1.js
import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Enter into Student Info System</h1>
      <Link to="/chatbot">
        <button className="mt-2 bg-blue-300 rounded-md px-4 py-2" >Enroll Now</button>
      </Link>
    </div>
  );
};

export default Page1;
