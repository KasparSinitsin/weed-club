import React from 'react';
import ProductCard from '../components/ProductCard';
import './FavoritesPage.css';

const FavoritesPage = ({ favorites, onAddToCart, onToggleFavorite }) => {
  return (
    <div className="favorites-page">
      <h1>Favorites</h1>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
            />
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
