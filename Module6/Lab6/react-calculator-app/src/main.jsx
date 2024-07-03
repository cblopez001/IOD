// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/calculator.css'; // Import your global CSS styles here (if needed)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
