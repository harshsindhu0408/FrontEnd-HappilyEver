import "./App.css";
import Chatbot from "react-chatbot-kit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-chatbot-kit/build/main.css";
import config from "./bot/config";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";
import Page1 from "./components/Page1";
import Page3 from "./components/Page3";

function App() {
  return (
    <div className="w-full h-full mt-20 flex items-center justify-center bg-gray-300">
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/chatbot" element={<Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />}>
          </Route>
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
