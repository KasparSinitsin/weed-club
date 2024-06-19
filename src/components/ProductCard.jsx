import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import { Heart } from 'phosphor-react';

const ProductCard = ({ product, onAddToCart, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // Check if the product is in the cart and set the initial state
    if (product.inCart) {
      setIsInCart(true);
      setQuantity(product.quantity);
    }
  }, [product]);

  if (!product) {
    return null;
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(product);
  };

  const handleAddToCart = () => {
    setIsInCart(true);
    setQuantity(1);
    onAddToCart(product);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onAddToCart(product, 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onAddToCart(product, -1);
    } else if (quantity === 1) {
      setIsInCart(false);
      setQuantity(0);
      onAddToCart(product, -1);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card-content">
        {product.image && (
          <img src={product.image} alt={product.name} className="product-card-image" />
        )}
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price} Euros</p>
        <div className="product-card-buttons">
          {isInCart ? (
            <div className="quantity-controls">
              <button onClick={handleDecrement} className="quantity-button">-</button>
              <span className="quantity">{quantity}</span>
              <button onClick={handleIncrement} className="quantity-button">+</button>
            </div>
          ) : (
            <button onClick={handleAddToCart} className="add-to-cart-button">
              Add to Cart
            </button>
          )}
          <button onClick={toggleFavorite} className={`favorite-button ${isFavorite ? 'active' : ''}`}>
            <Heart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
