import React from "react";
import "./cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Cart = () => {
  const { cart, isLoading, hasError, message } = useSelector(
    (storeState: RootState) => storeState.cart
  );

  const checkoutAmount = cart.reduce(
    (acc, cv) => acc + cv.price * cv.quantity,
    0
  );

  console.log({ hasError, message });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart-page">
      <h1 className="cart-heading">Shopping Cart</h1>
      <div className="cart-items">
        {cart.length ? (
          cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div>Your cart is Empty</div>
        )}
      </div>
      <div className="cart-summary">
        <p className="cart-subtotal">Subtotal: ${checkoutAmount}</p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
