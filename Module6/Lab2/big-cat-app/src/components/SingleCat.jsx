// src/components/SingleCat.jsx

import React from 'react';

const SingleCat = ({ name, latinName, image }) => {
  return (
    <div className="cat">
      <h3>{name}</h3>
      <p>Latin Name: {latinName}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default SingleCat;
