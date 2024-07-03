import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const initialCats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { id: 6, name: 'Snow Leopard', latinName: 'Panthera uncia', image: 'snow_leopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

const BigCats = () => {
  const [cats, setCats] = useState(initialCats);
  const [nextId, setNextId] = useState(8); // Start next id from 8 for new cats

  const handleAddCat = (newCat) => {
    const updatedCats = [...cats, { id: nextId, ...newCat }];
    setCats(updatedCats);
    setNextId(nextId + 1);
  };

  const handleDeleteCat = (id) => {
    const updatedCats = cats.filter(cat => cat.id !== id);
    setCats(updatedCats);
  };

  return (
    <div className="big-cats">
      <h2>Big Cats</h2>
      
      {/* AddCatForm component for adding new cats */}
      <AddCatForm onAddCat={handleAddCat} />

      {cats.map((cat) => (
        <div key={cat.id} className="cat-item">
          <SingleCat cat={cat} />
          <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BigCats;
