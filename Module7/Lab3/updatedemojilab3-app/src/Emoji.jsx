// src/Emoji.jsx

import React from 'react';
import { useEmoji } from './EmojiContext';

const Emoji = () => {
  const { isHappy, toggleMood } = useEmoji();

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
