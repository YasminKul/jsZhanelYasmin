import React from 'react';
import '../styles/DrinkItem.css';

function DrinkItem({ name, description, price, image }) {
  return (
    <div className="drink-item">
      <img src={image} alt={name} className="drink-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Цена: {price} руб.</p>
    </div>
  );
}

export default DrinkItem;




