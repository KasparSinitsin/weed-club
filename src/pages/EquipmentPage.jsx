import React from 'react';
import ProductList from '../components/ProductList';
import products from '../assets/ProductsData'; // Adjust the path as needed

const EquipmentPage = ({ onAddToCart, onToggleFavorite }) => {
  const equipmentProducts = products.filter((product) => product.category === 'equipment');

  return (
    <div className="equipment-page">
      <ProductList products={equipmentProducts} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

export default EquipmentPage;
