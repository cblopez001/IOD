// src/SingleCat.jsx

import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <div className="cat-item">
      <h2>{cat.name}</h2>
      <p>Latin Name: {cat.latinName}</p>
      <img src={require(`./images/${cat.image}`).default} alt={cat.name} />
    </div>
  );
};

export default SingleCat;
