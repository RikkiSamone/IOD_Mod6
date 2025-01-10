import React, { useState } from 'react';

function AddCatForm({addCat}) {
    const [name, setName] = useState('');
    const [latinName, setlatinName] = useState('');
    const [family, setFamily] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCat = {
            id: Math.random(),
            name,
            latinName,
            family,
            image
        };
        addCat(newCat);
        setName('');
        setlatinName('');
        setFamily('');
        setImage('');
    };

    return (
         <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="latinName">Latin Name:</label>
        <input 
          type="text" 
          id="latinName" 
          value={latinName} 
          onChange={(e) => setlatinName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input 
          type="text" 
          id="image" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Big Cat</button>
    </form>
  );
}

export default AddCatForm;
    

    
