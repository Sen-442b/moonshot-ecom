import React, { useState } from "react";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Product } from "../../types/product.types";
import { debounce } from "../../utils/performance.utils";
import { compactLowerCaseStr } from "../../utils/string.utils";
import ProductComponent from "./Product";
import "./product-list.css";

const productsDummy: Product[] = [
  {
    id: 1,
    slug: "levi-123",
    name: "Levi Ackerman",
    price: 20,
    image: "https://placeimg.com/640/480/tech",
    description: "Levi Ackerman is a character from Attack on Titans",
  },
  {
    id: 2,
    slug: "armin-456",
    name: "Armin Artlet",
    price: 30,
    image: "https://placeimg.com/640/480/tech",
    description: "Armin is a character from Attack on Titans",
  },
  {
    id: 3,
    slug: "erwin-789",
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

  return (
    <div className="search-product-wrapper">
      <div className="product-listing-container">
        <SearchInput handleSearchInput={handleSearchInput} />
        {filteredProductsArray.length ? (
          filteredProductsArray.map((product) => (
            <ProductComponent product={product} />
          ))
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
