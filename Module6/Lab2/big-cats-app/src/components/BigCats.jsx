// src/BigCats.js

import React from 'react';
import SingleCat from './SingleCat';

const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '../public/images/cheetah.jpeg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: '../public/images/cougar.jpeg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: '../public/images/jaguar.jpeg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: '../public/images/leopard.jpeg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: '../public/images/lion.jpeg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: '../public/images/snow-leopard.jpeg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: '../public/images/tiger.jpeg' }
];

const BigCats = () => {
  return (
    <div className="big-cats-list">
      {cats.map(cat => (
        <SingleCat key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default BigCats;
