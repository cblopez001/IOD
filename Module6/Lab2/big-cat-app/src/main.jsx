// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming your main component is named App
import './styles.css'; // Import your CSS file for styling

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
