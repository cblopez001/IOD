// src/BitcoinRates.jsx

import React from 'react';
import { useEmoji } from './EmojiContext';

const BitcoinRates = () => {
  const { isHappy } = useEmoji();

  return (
    <div className="bitcoin-rates">
      <h2>Current Bitcoin Rates</h2>
      <p>Current Mood: {isHappy ? '😊' : '😢'}</p>
      {/* Replace with actual Bitcoin rate fetching logic */}
      <p>Bitcoin Rate: $XX,XXX</p>
    </div>
  );
};

export default BitcoinRates;
