import { Cart, CartQuantity } from "../types/cart.types";
import { Product } from "../types/product.types";

let cartDummy: Cart[] = [];

const mockPostCartRequest = (
  success: boolean,
  timeout = 300,
  cartItem: Product
) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (success && cartItem) {
        cartDummy.push({ ...cartItem, quantity: 1 });
        res({ status: 201, cart: cartDummy });
      } else {
        rej({ status: 500, message: "Something went wrong" });
      }
    }, timeout);
  });
};

const mockEditCartRequest = (
  success: boolean,
  timeout = 300,
  cartItemDetails: CartQuantity
) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (success && cartItemDetails) {
        const updatedCartDummy = cartDummy.map((cartItem) =>
          cartItem.id === cartItemDetails.id
            ? { ...cartItem, quantity: cartItemDetails.quantity }
            : cartItem
        );
        cartDummy = updatedCartDummy;
        res({ status: 201, cart: cartDummy });
      } else {
        rej({ status: 500, message: "Something went wrong" });
      }
    }, timeout);
  });
};

const addToCartService = async (item: Product) => {
  const response = await mockPostCartRequest(true, 1000, item);
  return response;
};

const editCartService = async (cartItemDetails: CartQuantity) => {
  const response = await mockEditCartRequest(true, 1000, cartItemDetails);
  return response;
};

export { addToCartService, editCartService };
