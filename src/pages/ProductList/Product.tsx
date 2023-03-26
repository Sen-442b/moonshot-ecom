import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponentProps } from "../../types/product.types";
import { addToCartAction } from "../../redux/features/cartSlice";
import { AppDispatch, RootState } from "../../redux/store";

const Product = (props: ProductComponentProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((storeState: RootState) => storeState.cart);
  const { product } = props;
  const { id, slug, image, description, name, price } = product;
  const cartHasProduct = cart.find((cartItem) => cartItem.id === id);
  return (
    <div className="product-card" onClick={() => navigate(`/${slug}`)}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();

            cartHasProduct
              ? navigate("/cart")
              : dispatch(addToCartAction(product));
          }}
        >
          {cartHasProduct ? "Move to cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
