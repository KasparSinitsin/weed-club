import React, { useContext } from 'react';
import './ShoppingCart.css';
import { AuthContext } from '../contexts/AuthContext'; 

const ShoppingCart = ({ cart, updateCartQuantity }) => {
  const { user } = useContext(AuthContext); 

  const handleIncrease = (productId) => {
    updateCartQuantity(productId, 1);
  };

  const handleOrder = () => {
    if (!user) {
      alert('Please log in to complete your order.'); 
    } else {
      alert('Order placed successfully!');
    }
  };

  const handleDecrease = (productId) => {
    updateCartQuantity(productId, -1);
  };

  const handleRemove = (productId) => {
    updateCartQuantity(productId, -cart.find((item) => item.id === productId).quantity);
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price} Euros</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(item.id)} className="quantity-button">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)} className="quantity-button">+</button>
              </div>
              <button onClick={() => handleRemove(item.id)} className="remove-button">
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart-total">
        <h3>Total: {calculateTotal()} Euros</h3>
        <button onClick={handleOrder} className="order-button">Order</button> 
      </div>
    </div>
  );
};

export default ShoppingCart;
