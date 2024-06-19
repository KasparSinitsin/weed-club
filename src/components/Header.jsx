import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCartSimple, User } from 'phosphor-react';
import './Header.css';

const Header = ({ cart = [] }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <h1 className="logo">Panke420 shop</h1>
      </Link>
      <nav className="nav-links">
        <Link to="/favorites" className="nav-link"><Heart size={24} /></Link>
        <Link to="/cart" className="nav-link">
          <ShoppingCartSimple size={24} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
        <Link to="/login" className="nav-link"><User size={24} /></Link>
      </nav>
    </header>
  );
};

export default Header;
