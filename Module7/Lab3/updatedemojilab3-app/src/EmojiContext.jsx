// src/EmojiContext.jsx

import React, { createContext, useContext, useState } from 'react';

const EmojiContext = createContext();

export const useEmoji = () => {
  return useContext(EmojiContext);
};

export const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(prevIsHappy => !prevIsHappy);
  };

  return (
    <EmojiContext.Provider value={{ isHappy, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
};
