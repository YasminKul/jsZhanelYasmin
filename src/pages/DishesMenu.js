import React, { useState } from 'react';
import DishItem from '../components/DishItem';
import '../styles/DishesMenu.css';

function DishesMenu() {
  const [dishes] = useState([
    { name: 'Круассан', description: 'Слойка с маслом.', price: 100, image: process.env.PUBLIC_URL + '/images/croissant.jpg' },
    { name: 'Сэндвич', description: 'Сэндвич с ветчиной и сыром.', price: 250, image: process.env.PUBLIC_URL + '/images/sandwich.jpg' },
    { name: 'Торт', description: 'Шоколадный торт.', price: 300, image: process.env.PUBLIC_URL + '/images/cake.jpg' },
  ]);

  return (
    <div className="dishes-menu">
      <h2>Меню блюд</h2>
      {dishes.map((dish, index) => (
        <DishItem key={index} {...dish} />
      ))}
    </div>
  );
}

export default DishesMenu;


