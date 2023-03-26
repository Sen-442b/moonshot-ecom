import React from "react";
import { Cart, CartProps } from "../../types/cart.types";

const CartItem = (props: CartProps) => {
  const { cartItem } = props;
  const { id, image, price, quantity, name } = cartItem;

  return (
    <div className="cart-item">
      <img className="cart-item-image" src={image} alt={name} />
      <div className="cart-item-details">
        <h2 className="cart-item-name">{name}</h2>
        <p className="cart-item-price">${price * quantity}</p>
        <div className="quantity">
          <button style={{ visibility: quantity > 1 ? "visible" : "hidden" }}>
            -
          </button>
          <span>{quantity}</span>
          <button>+</button>
        </div>
        <div className="button-wrapper">
          <button
            className="cart-item-remove-button"
            style={{ visibility: quantity <= 1 ? "visible" : "hidden" }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
