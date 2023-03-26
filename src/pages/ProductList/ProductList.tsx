import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { getProductListAction } from "../../redux/features/productListSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { Product } from "../../types/product.types";
import { compactLowerCaseStr } from "../../utils/string.utils";
import ProductComponent from "./Product";
import "./product-list.css";

const ProductList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState<Product[]>();
  const dispatch = useDispatch<AppDispatch>();
  const productListState = useSelector(
    (storeState: RootState) => storeState.productList
  );
  const { productList, isLoading } = productListState;

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

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

  const filteredProductsArray = filteredProducts(productList, searchInput);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="product-card">
        <p className="product-details">Loading</p>
      </div>
    );
  }
  return (
    <div className="search-product-wrapper">
      <div className="product-listing-container">
        <SearchInput handleSearchInput={handleSearchInput} />
        {filteredProductsArray.length ? (
          filteredProductsArray.map((product) => (
            <ProductComponent key={product.id} product={product} />
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
