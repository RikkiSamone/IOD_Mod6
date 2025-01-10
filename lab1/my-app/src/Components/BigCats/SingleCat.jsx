// src/Components/BigCats/SingleCat.js

import React from 'react';

function SingleCat ({ name, latinName, image }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{latinName}</p>
      <img src={image} alt={name} style={{ margin: '20px', width: '200px', height: 'auto' }} />
    </div>
  );
}

export default SingleCat;