import React from "react";
import "./cart.css";
import CartItem from "./CartItem";
const Cart = () => {
  return (
    <div className="cart-page">
      <h1 className="cart-heading">Shopping Cart</h1>
      <div className="cart-items">
        <CartItem />
      </div>
      <div className="cart-summary">
        <p className="cart-subtotal">Subtotal: $89.97</p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
