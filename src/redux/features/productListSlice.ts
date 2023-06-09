import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getProductListService,
  getSingleProductService,
} from "../../services/productListServices";
import { Product, ProductListResponse } from "../../types/product.types";

const initialState = {
  productList: <Product[]>[],
  isLoading: false,
  hasError: false,
  message: "",
  singleProduct: <Product | null>null,
};

const getProductListAction = createAsyncThunk(
  "productList/getProductListAction",
  async (_, thunkAPI) => {
    try {
      const response = (await getProductListService()) as ProductListResponse;

      if (response.status === 200) {
        return response.products;
      }
      throw response;
    } catch (error: any) {
      //replace with a valid error type
      thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const getSingleProductAction = createAsyncThunk(
  "productList/getSingleProductAction",
  async (slug: string, thunkAPI) => {
    try {
      const response = (await getSingleProductService(slug)) as {
        status: number;
        product: Product;
      };
      if (response.status === 200) {
        return response.product;
      }
      throw response;
    } catch (error: any) {
      //replace with a valid error type
      thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductListAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProductListAction.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.message = "";
      state.hasError = false;
      state.productList = action.payload;
    },
    [getProductListAction.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.message = action.payload;
    },
    [getSingleProductAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getSingleProductAction.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.message = "";
      state.hasError = false;
      state.singleProduct = action.payload;
    },
    [getSingleProductAction.rejected.type]: (state, action) => {
      state.isLoading = true;
      state.hasError = true;
      state.message = action.payload;
    },
  },
});

const productListReducer = productListSlice.reducer;
export { productListReducer, getProductListAction, getSingleProductAction };
