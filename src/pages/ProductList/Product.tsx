import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductComponentProps } from "../../types/product.types";

const Product = (props: ProductComponentProps) => {
  const navigate = useNavigate();
  const { product } = props;
  const { slug, image, description, name, price } = product;

  return (
    <div className="product-card" onClick={() => navigate(`/${slug}`)}>
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
