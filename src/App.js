import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DrinksMenu from './pages/DrinksMenu';
import DishesMenu from './pages/DishesMenu';
import PartnersMenu from './pages/PartnersMenu';
import ReviewsPage from './pages/ReviewsPage';
import Tabs from './pages/Tabs';
import './styles/App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<DrinksMenu />} />
          <Route path="/dishes" element={<DishesMenu />} />
          <Route path="/partners" element={<PartnersMenu />} />
          <Route path="/review" element={<ReviewsPage />} />
          <Route path="/where-we-are" element={<Tabs />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;



