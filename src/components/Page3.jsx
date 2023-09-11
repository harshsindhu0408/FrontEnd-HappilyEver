// pages/Page3.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Page3 = () => {
  const { name, age } = useSelector((state) => state.user);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start gap-6 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl mb-4">Your name <span className='font-bold'>{name}</span> aged <span className='font-bold'>{age}</span> has been added to student system.</h1>
      <Link to="/">
        <button className="px-2 py-2 bg-blue-300 rounded-md" >You may exit now</button>
      </Link>
    </div>
  );
};

export default Page3;
