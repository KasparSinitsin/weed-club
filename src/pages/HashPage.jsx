import React from 'react';
import ProductList from '../components/ProductList';
import products from '../assets/ProductsData'; // Adjust the path as needed

const HashPage = ({ onAddToCart, onToggleFavorite }) => {
  const hashProducts = products.filter((product) => product.category === 'hash');

  return (
    <div className="hash-page">
      <ProductList products={hashProducts} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

export default HashPage;
