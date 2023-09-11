import React from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../userSlice';

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();
  const parse = (message) => {
    const nameRegex = /^[a-z A-Z]+$/; // Simple regex to match alphabetic names
    if (nameRegex.test(message)) {
      actions.handleCalendar(message);
      dispatch(setName(message));
      console.log(message);
      return;
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
