import React, { Component } from 'react';
import DrinkItem from '../components/DrinkItem';
import '../styles/DrinksMenu.css';

class DrinksMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [
        { name: 'Эспрессо', description: 'Крепкий черный кофе.', price: 150, image: `${process.env.PUBLIC_URL}/images/espresso.jpg` },
        { name: 'Латте', description: 'Кофе с молоком.', price: 200, image: `${process.env.PUBLIC_URL}/images/latte.jpg` },
        { name: 'Капучино', description: 'Кофе с молоком и пенкой.', price: 200, image: `${process.env.PUBLIC_URL}/images/cappuccino.jpg` },
      ]
    };
  }

  render() {
    return (
      <div className="drinks-menu">
        <h2>Меню напитков</h2>
        <div className="drinks-container">
          {this.state.drinks.map((drink, index) => (
            <DrinkItem key={index} {...drink} />
          ))}
        </div>
      </div>
    );
  }
}

export default DrinksMenu;








