import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !latinName || !image) {
      alert('Please fill in all fields');
      return;
    }

    // Create new cat object
    const newCat = {
      name: name,
      latinName: latinName,
      image: image,
    };

    // Pass the new cat object to the parent component
    onAddCat(newCat);

    // Clear form fields after submission
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Cat</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="latinName">Latin Name:</label>
        <input type="text" id="latinName" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
