import { Cart } from "../types/cart.types";
import { Product } from "../types/product.types";

const cartDummy: Cart[] = [];

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

const addToCartService = async (item: Product) => {
  const response = await mockPostCartRequest(true, 1000, item);
  return response;
};

export { addToCartService };
