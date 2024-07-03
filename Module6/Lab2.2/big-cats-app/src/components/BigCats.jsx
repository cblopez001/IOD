// extended src/BigCats.js to include

import React, { useState } from 'react';
import SingleCat from './SingleCat';

const catsData = [
  { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { name: 'Snow Leopard', latinName: 'Panthera uncia', image: 'snow_leopard.jpg' },
  { name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

const BigCats = () => {
  const [cats, setCats] = useState(catsData);

  const handleAlphabeticalSort = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const handleReverseList = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  const handleFilterPanthera = () => {
    const filteredCats = catsData.filter(cat => cat.latinName.startsWith('Panthera'));
    setCats(filteredCats);
  };

  const handleResetList = () => {
    setCats(catsData);
  };

  return (
    <div className="big-cats">
      <h2>Big Cats</h2>
      
      <div className="button-container">
        <button onClick={handleAlphabeticalSort}>Sort Alphabetically</button>
        <button onClick={handleReverseList}>Reverse List</button>
        <button onClick={handleFilterPanthera}>Filter Panthera Family</button>
        <button onClick={handleResetList}>Reset List</button>
      </div>
      
      {cats.map((cat, index) => (
        <SingleCat key={index} cat={cat} />
      ))}
    </div>
  );
};

export default BigCats;

