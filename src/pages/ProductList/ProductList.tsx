import React from "react";
import { Product } from "../../types/product-types";
import "./product-list.css";

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 20,
    image: "https://placeimg.com/640/480/tech",
    description: "This is product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 30,
    image: "https://placeimg.com/640/480/tech",
    description: "This is product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 25,
    image: "https://placeimg.com/640/480/tech",
    description: "This is product 3",
  },
];

const ProductList = () => {
  return (
    <div className="product-listing-container">
      {products.map((product) => {
        const { id, image, name, description, price } = product;
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
      })}
    </div>
  );
};

export default ProductList;
