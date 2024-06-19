import React from 'react';
import ProductList from '../components/ProductList';
import products from '../assets/ProductsData'; // Adjust the path as needed

const WeedPage = ({ onAddToCart, onToggleFavorite }) => {
  const weedProducts = products.filter((product) => product.category === 'weed');

  return (
    <div className="weed-page">
      <ProductList products={weedProducts} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

export default WeedPage;
