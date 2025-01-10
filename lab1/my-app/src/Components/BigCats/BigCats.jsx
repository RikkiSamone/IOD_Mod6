import React, { useState } from "react";
import SingleCat from "./SingleCat";
import AddBigCatForm from "../CatForm/AddCatForm";


function BigCats() {
    const [filter, setFilter] = useState('all');
    const [cats, setCats] = useState([
        {
            id: 1,
            name: 'Cheetah',
            latinName: 'Acinonyx Jubatus',
            family: 'Acinonyx',
            image: 'images/cats/cheetahs.jpeg'
        },

        {
            id: 2,
            name: 'Cougar',
            latinName: 'Puma Concolor',
            family: 'Puma',
            image: 'images/cats/cougar.jpeg'
        },

        {
            id: 3,
            name: 'Jaguar',
            latinName: 'Panthera Onca',
            family: "Panthera",
            image: 'images/cats/jaguar.jpeg'
        },

        {
            id: 4,
            name: 'Leopard',
            latinName: 'Panthera Pardus',
            image: 'images/cats/leopard.jpeg'
        },

        {
            id: 5,
            name: 'Lion',
            latinName: 'Panthera Leo',
            family: "Panthera",
            image: 'images/cats/lion.jpeg'
        },

        {
            id: 6,
            name: 'Snow Leopard',
            latinName: 'Panthera Uncia',
            family: "Panthera",
            image: 'images/cats/snow leopard.jpeg'
        },

        {
            id: 7,
            name: 'Tiger',
            latinName: 'Panthera Tigris',
            family: "Panthera",
            image: 'images/cats/tiger.jpeg'
        },

    ]);

    const addCat = (newCat) => {
    setCats(prevCats => [...prevCats, newCat]); 
  };

  const filteredCats = filter === 'all' ? cats : cats.filter(cat => cat.family === filter);

    return (
        <div>
            <h2>Big Cats</h2>
<div>
        <button onClick={() => setFilter('all')}>All Cats</button>
        <button onClick={() => setFilter('Panthera')}>Panthera Family</button>
        <button onClick={() => setFilter('Acinonyx')}>Acinonyx Family</button>
        <button onClick={() => setFilter('Puma')}>Puma Family</button>
      </div>
    <div>
            {filteredCats.map(cat => (
                <SingleCat
                    key={cat.id}
                    name={cat.name}
                    latinName={cat.latinName}
                    image={cat.image}>
                </SingleCat>
            ))}
        </div>

            <AddBigCatForm addCat={addCat} />
            </div>
    );
};

export default BigCats;