import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCartService, editCartService } from "../../services/cartServices";
import { Cart, CartQuantity, CartResponse } from "../../types/cart.types";
import { Product } from "../../types/product.types";

const initialState = {
  cart: <Cart[]>[],
  isLoading: false,
  hasError: false,
  message: "",
};

const addToCartAction = createAsyncThunk(
  "cart/addToCart",
  async (productItem: Product, thunkAPI) => {
    try {
      const response = (await addToCartService(productItem)) as CartResponse;
      if (response.status === 201 || response.status === 200) {
        return response.cart;
      }
      throw response;
    } catch (error: any) {
      //replace with valid error type
      thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const changeCartQuantityAction = createAsyncThunk(
  "cart/editCart",
  async (cartItemDetails: CartQuantity, thunkAPI) => {
    cartItemDetails;
    const response = (await editCartService(cartItemDetails)) as CartResponse;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [addToCartAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addToCartAction.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.cart = action.payload;
    },
    [addToCartAction.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.message = action.payload;
    },
  },
});

const cartReducer = cartSlice.reducer;

export { cartReducer, addToCartAction };
