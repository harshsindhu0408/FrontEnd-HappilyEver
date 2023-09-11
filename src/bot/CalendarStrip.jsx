import React from "react";

const CalendarStrip = ( props ) => {
  const numDays = 8;

  const currentDate = new Date();
  const dates = Array.from({ length: numDays }, (_, index) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + index);
    return date;
  });

  const handleDateClick = (date) => {
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
    props.actionProvider.handleDate(formattedDate);
    console.log(date);
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {dates.map((date, index) => (
        <button
          key={index}
          className="bg-blue-500 text-white p-2 rounded-full flex flex-col items-center justify-center cursor-pointer transition transform hover:scale-105 focus:outline-none"
          onClick={() => handleDateClick(date)}
        >
          <div className="font-semibold">{date.getDate()}</div>
          <div className="text-xs">{date.toLocaleString('default', { month: 'short' })}</div>
        </button>
      ))}
    </div>
  );
};

export default CalendarStrip;
