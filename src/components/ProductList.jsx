import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import heroImage from '../assets/hero.jpg';

const ProductList = ({ products, onAddToCart, onToggleFavorite, layout }) => {
  const firstTwoProducts = products.slice(0, 2);
  const remainingProducts = products.slice(2);

  return (
    <div className={`product-list-container ${layout}`}>
      {layout === "hero" && (
        <>
          <div className="hero-section">
            <img src={heroImage} alt="Hero" className="hero-image" />
            <div className="greeting-message">
              <p>Welcome to the Panke420 shop!</p>
              <p>This shop is available exclusively for the members of the Panke420 club.</p>
            </div>
          </div>
          <div className="best-offer-section">
            <div className="best-offer">Best offers:</div>
            <div className="first-two-products">
              {firstTwoProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          </div>
        </>
      )}
      <div className={`remaining-products ${layout === "hero" ? "" : "full-grid"}`}>
        {(layout === "hero" ? remainingProducts : products).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
