import React from "react";

const CartItem = () => {
  return (
    <div className="cart-item">
      <img className="cart-item-image" src="product-image.jpg" alt="Product" />
      <div className="cart-item-details">
        <h2 className="cart-item-name">Product Name</h2>
        <p className="cart-item-price">$19.99</p>
        <button className="cart-item-remove-button">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
