import React from 'react';
import '../styles/DishItem.css';

function DishItem({ name, description, price, image }) {
  return (
    <div className="dish-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Цена: {price} руб.</p>
      <img src={image} alt={name} className="dish-image" />
    </div>
  );
}

export default DishItem;


