// src/Emoji.jsx

import React, { useState } from 'react';

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(prevIsHappy => !prevIsHappy);
  };

  return (
    <div className="emoji-container">
      <h2>Emoji Component</h2>
      <div className="emoji">
        {isHappy ? (
          <span role="img" aria-label="Happy Emoji">
            😊
          </span>
        ) : (
          <span role="img" aria-label="Sad Emoji">
            😢
          </span>
        )}
      </div>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;