import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import "./individual-product.css";
import { getSingleProductAction } from "../../redux/features/productListSlice";
import { addToCartAction } from "../../redux/features/cartSlice";

const IndividualProduct = () => {
  const { slug } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const productListState = useSelector(
    (storeState: RootState) => storeState.productList
  );
  const { cart } = useSelector((storeState: RootState) => storeState.cart);
  const { singleProduct, isLoading } = productListState;
  const { productList } = productListState;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleProductAction(slug || ""));
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!singleProduct) {
    return <div>404</div>;
  }

  const { id, name, description, image, price } = singleProduct;
  const cartHasProduct = cart.find((cartItem) => cartItem.id === id);
  return (
    <div className="product-page">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h1 className="product-name">{name}</h1>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => {
            cartHasProduct
              ? navigate("/cart")
              : dispatch(addToCartAction(singleProduct));
          }}
        >
          {cartHasProduct ? "Move to cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default IndividualProduct;
