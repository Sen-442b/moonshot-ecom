import React from "react";
import { ProductComponentProps } from "../../types/product.types";

const Product = (props: ProductComponentProps) => {
  const { product } = props;
  const { id, image, description, name, price } = product;
  return (
    <div key={id} className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
