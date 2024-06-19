import React from 'react';
import ProductList from '../components/ProductList';
import products from '../assets/ProductsData'; // Adjust the path as needed

const EdiblesPage = ({ onAddToCart, onToggleFavorite }) => {
  const ediblesProducts = products.filter((product) => product.category === 'edibles');

  return (
    <div className="edibles-page">
      <ProductList products={ediblesProducts} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

export default EdiblesPage;
