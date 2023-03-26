import { configureStore } from "@reduxjs/toolkit";
import { productListReducer } from "./features/productListSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
