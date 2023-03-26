import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./individual-product.css";

const IndividualProduct = () => {
  const { slug } = useParams();
  const productListState = useSelector(
    (storeState: RootState) => storeState.productList
  );
  const { productList } = productListState;
  const currProduct = productList.find(
    ({ slug: prodSlug }) => prodSlug === slug
  );
  if (!currProduct) {
    return <div>404</div>;
  }
  const { name, description, image, price } = currProduct;
  return (
    <div className="product-page">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h1 className="product-name">{name}</h1>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default IndividualProduct;
