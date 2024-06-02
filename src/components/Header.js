import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src="/images/logo.png" alt="Логотип Кофейни" />
        <h1>COFFEE TOP</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/drinks">Напитки</Link></li>
          <li><Link to="/dishes">Блюда</Link></li>
          <li><Link to="/partners">Партнеры</Link></li>
          <li><Link to="/review">Отзывы</Link></li>
          <li><Link to="/where-we-are">Где мы</Link></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;


