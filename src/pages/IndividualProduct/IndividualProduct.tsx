import React from "react";
import "./individual-product.css";

const IndividualProduct = () => {
  return (
    <div className="product-page">
      <div className="product-image">
        <img src="https://picsum.photos/500/350" alt="Product" />
      </div>
      <div className="product-details">
        <h1 className="product-name">Product Name</h1>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="product-price">$19.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default IndividualProduct;
