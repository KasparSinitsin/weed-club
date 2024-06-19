import React from 'react';
import ProductList from '../components/ProductList';
import products from '../assets/ProductsData'; // Adjust the path as needed

const SeedsPage = ({ onAddToCart, onToggleFavorite }) => {
  const seedsProducts = products.filter((product) => product.category === 'seeds');

  return (
    <div className="seeds-page">
      <ProductList products={seedsProducts} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

export default SeedsPage;
