import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setAge } from '../userSlice';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();

  const greet2 = () => {
    const userMessage = createClientMessage('Got it!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));
  };

  const handleOptions  = () => {
    const botMessage = createChatBotMessage(
      "Enter your Name",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCalendar  = (date) => {
    const botMessage = createChatBotMessage(
      `Choose a date to book session on`,
      {
        widget: 'CalendarStrip',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const { name } = useSelector((state) => state.user);
  const handleNameInput  = () => {
    
    const userMessage = createChatBotMessage(`Hi ${name} please select your age`,
      {
        widget: 'Dropdown'
      },
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));
  };

  const handleDayStrip  = (date) => {
    
    const userMessage = createChatBotMessage(`Hi please select a slot for the date ${date}`,
      {
        widget: 'TimeSlotStrip'
      },
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));
  };
  

  const handleDate = (date) => {
    const userMessage = createClientMessage(`${date}`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));

    handleDayStrip(date);

  };

  const handleSlot = (slot) => {
    const userMessage = createClientMessage(`${slot}`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));

    handleNameInput();

  };

  
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleOptions,
            handleNameInput,
            greet2,
            handleDate,
            handleCalendar,
            handleDayStrip,
            handleSlot,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;