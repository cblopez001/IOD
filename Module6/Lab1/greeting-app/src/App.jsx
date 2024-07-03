// src/App.js
import React from 'react';
import Greeting from './components/greetings';

const App = () => {
  return (
    <div>
      <Greeting name="John" />
      <Greeting />
      <Greeting name="Jane">
        Good morning, Jane!
      </Greeting>
    </div>
  );
};

export default App;

