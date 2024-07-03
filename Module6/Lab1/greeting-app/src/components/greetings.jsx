// src/components/Greeting.jsx
import React from 'react';

const Greeting = ({ name, children }) => {
  return (
    <div>
      {children ? children : `Hello ${name ? name : 'World'}`}
    </div>
  );
};

export default Greeting;
