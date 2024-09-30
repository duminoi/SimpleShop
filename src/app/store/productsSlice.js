import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import axios from "axios";
// import
const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=0&limit=10`
    );
    const products = await response.data;
    return products;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    updateProducts: (state, action) => {
      console.log("action", action);
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {})
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log("action", action);
        state.products = action.payload;
        localStorage.setItem("products", JSON.stringify(action.payload));
      });
  },
});
export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
