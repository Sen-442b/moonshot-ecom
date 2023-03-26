import { Product } from "./product.types";

export type Cart = Product & {
  quantity: number;
};

export type CartResponse = {
  status: number;
  cart: Cart[];
};
