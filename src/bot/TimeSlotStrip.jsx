import React, { useState } from 'react';

const TimeSlotStrip = (props) => {
  const timeSlots = [
    'Morning 11AM',
    'Afternoon 3PM',
    'Evening 7PM',
  ];

  const handleTimeSlotClick = (timeSlot) => {
    // Handle the click event when a time slot is selected
    props.actionProvider.handleSlot(timeSlot);
  };

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {timeSlots.map((timeSlot, index) => (
        <button
          key={index}
          className="bg-blue-500 text-white p-2 rounded-lg flex flex-col items-center justify-center cursor-pointer transition transform hover:scale-105 focus:outline-none text-xs" // Adjust text size here
          onClick={() => handleTimeSlotClick(timeSlot)}
        >
          <div className="font-semibold">{timeSlot}</div>
        </button>
      ))}
    </div>
  );
};

export default TimeSlotStrip;
