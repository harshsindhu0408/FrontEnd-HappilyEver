// in the config
import React from 'react';
import { createChatBotMessage} from 'react-chatbot-kit';
import Dropdown from './Dropdown';
import CalendarStrip from './CalendarStrip';
import GotItWidget from './GotItWidget';
import TimeSlotStrip from './TimeSlotStrip';
const botName = 'ChatBot';

const config = {
  botName: botName,
  lang: 'no',
  initialMessages: [
    createChatBotMessage(
      `Hello, Welcome to student info system! `,
      {
        withAvatar: true,
        widget: 'gotItWidget', // Add the widget for the "Got it!" button
      }
    ),
  ],
  state: {
    gist: '',
    infoBox: '',
  },
  customComponents: {},
  widgets: [
    {
      widgetName: 'gotItWidget',
      widgetFunc: (props) => <GotItWidget {...props} />,
    },
    {
      widgetName: 'Dropdown',
      widgetFunc: (props) => <Dropdown {...props} />,
    },
    {
      widgetName: 'CalendarStrip',
      widgetFunc: (props) => <CalendarStrip {...props} />,
    },
    {
      widgetName: 'TimeSlotStrip',
      widgetFunc: (props) => <TimeSlotStrip {...props} />,
    },

  ],
};

export default config;