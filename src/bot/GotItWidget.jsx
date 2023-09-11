import React, { useState, useEffect } from 'react';

const GotItWidget = (props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(true);
  }, []);

  const handleClick = () => {
    setShowButton(false);
    props.actionProvider.greet2();
    props.actionProvider.handleOptions();

  };

  return (
    <div>
      {showButton && (
        <button className="cursor-pointer bg-blue-300 rounded-md px-4 py-2" onClick={handleClick}>
          Got it!
        </button>
      )}
    </div>
  );
};

export default GotItWidget;
