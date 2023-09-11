import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAge } from '../userSlice';
import { useNavigate } from 'react-router-dom';


const Dropdown = ({ onSelect }) => {
  const [selectedAge, setSelectedAge] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCountdown = () => {
    navigate('/page3');
  };

  const handleAgeChange = (event) => {
    const age = event.target.value;
    setSelectedAge(age);

    if (age) {
      dispatch(setAge(age));
      for (let i = countdown; i >= 0; i--) {
        setTimeout(() => {
          setCountdown(i);
          if (i === 0) {
            handleCountdown();
          }
        }, (countdown - i) * 1000);
      }
    }
  };

  return (
    <div className="mb-4 relative">
      {selectedAge ? (
        <div>
          <p className="mt-2 text-sm font-semibold text-center text-gray-700">
            You selected: {selectedAge}
          </p>
          {countdown > 0 && (
            <p className="mt-2 text-sm text-center text-gray-700">
              In {countdown} seconds, bot will exit
            </p>
          )}
        </div>
      ) : (
        <div>
          <label htmlFor="ageDropdown" className="block text-sm font-medium text-gray-700">
            Select Age:
          </label>
          <select
            id="ageDropdown"
            value={selectedAge}
            onChange={handleAgeChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <option value="">Select an age</option>
            {Array.from({ length: 23 }, (_, index) => 18 + index).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
