import React, { useState } from "react";
import { Product } from "../../types/product.types";
import { debounce } from "../../utils/performance.utils";
import { compactLowerCaseStr } from "../../utils/string.utils";
import "./product-list.css";

const productsDummy: Product[] = [
  {
    id: 1,
    name: "Levi Ackerman",
    price: 20,
    image: "https://placeimg.com/640/480/tech",
    description: "Levi Ackerman is a character from Attack on Titans",
  },
  {
    id: 2,
    name: "Armin Artlet",
    price: 30,
    image: "https://placeimg.com/640/480/tech",
    description: "Armin is a character from Attack on Titans",
  },
  {
    id: 3,
    name: "Erwin Smith",
    price: 25,
    image: "https://placeimg.com/640/480/tech",
    description: "Erwin is a character from Attack on Titans",
  },
];

const ProductList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState<Product[]>(productsDummy);

  const filteredProducts = (products: Product[], searchInput: string) => {
    //filters based on name and price of product
    return products.filter((product) => {
      const { name, price } = product;
      return (
        compactLowerCaseStr(name).includes(compactLowerCaseStr(searchInput)) ||
        (!isNaN(Number(searchInput)) && Number(searchInput) >= price)
      );
    });
  };

  const filteredProductsArray = filteredProducts(products, searchInput);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const debounceSearch = debounce(handleSearchInput, 300);
  return (
    <div className="search-product-wrapper">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Products"
          onChange={debounceSearch}
        />
      </div>

      <div className="product-listing-container">
        {filteredProductsArray.length ? (
          filteredProductsArray.map((product) => {
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
          })
        ) : (
          <div className="product-card">
            <p className="product-details">No Product Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
