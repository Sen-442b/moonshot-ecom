import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import "./individual-product.css";
import { getSingleProductAction } from "../../redux/features/productListSlice";

const IndividualProduct = () => {
  const { slug } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const productListState = useSelector(
    (storeState: RootState) => storeState.productList
  );
  const { singleProduct, isLoading } = productListState;
  const { productList } = productListState;
  useEffect(() => {
    dispatch(getSingleProductAction(slug || ""));
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!singleProduct) {
    return <div>404</div>;
  }

  const { name, description, image, price } = singleProduct;
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
