// src/App.jsx

import React from 'react';
import { EmojiProvider } from './EmojiContext';
import Emoji from './Emoji';
import BitcoinRates from './BitcoinRates';

const App = () => {
  return (
    <EmojiProvider>
      <div className="app">
        <Emoji />
        <BitcoinRates />
      </div>
    </EmojiProvider>
  );
};

export default App;

