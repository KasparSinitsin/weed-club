import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import FavoritesPage from './components/FavoritesPage';
import ShoppingCart from './components/ShoppingCart';
import WeedPage from './pages/WeedPage';
import HashPage from './pages/HashPage';
import SeedsPage from './pages/SeedsPage';
import EdiblesPage from './pages/EdiblesPage';
import EquipmentPage from './pages/EquipmentPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage'; 
import { AuthProvider, useAuth } from './contexts/AuthContext';
import products from './assets/ProductsData';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const updateCartQuantity = (productId, quantityChange) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + quantityChange) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const toggleFavorite = (product) => {
    const isFavorite = favorites.some((item) => item.id === product.id);
    if (isFavorite) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header cart={cart} favorites={favorites} />
          <div className="main-container">
            <Sidebar />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="main-content">
                      <ProductList
                        products={products}
                        onAddToCart={addToCart}
                        onToggleFavorite={toggleFavorite}
                        layout="hero"
                      />
                    </div>
                  }
                />
                <Route
                  path="/favorites"
                  element={
                    <FavoritesPage
                      favorites={favorites}
                      onAddToCart={addToCart}
                      onToggleFavorite={toggleFavorite}
                    />
                  }
                />
                <Route
                  path="/cart"
                  element={<ShoppingCart cart={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />}
                />
                <Route path="/weed" element={<WeedPage onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />} />
                <Route path="/hash" element={<HashPage onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />} />
                <Route path="/seeds" element={<SeedsPage onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />} />
                <Route path="/edibles" element={<EdiblesPage onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />} />
                <Route path="/equipment" element={<EquipmentPage onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} /> 
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
