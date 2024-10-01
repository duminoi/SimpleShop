import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const getProductsFromLocalStorage = () => {
//   if (typeof window !== "undefined") {
//     const products = localStorage.getItem("products");
//     return products ? JSON.parse(products) : [];
//   }
//   return [];
// };

// const initialState = {
//   products: getProductsFromLocalStorage(),
// };

// export const getProducts = createAsyncThunk(
//   "products/getProducts",
//   async () => {
//     const response = await axios.get(
//       `https://api.escuelajs.co/api/v1/products?offset=0&limit=10`
//     );
//     return response.data;
//   }
// );
const fetchProducts = async () => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products?offset=0&limit=10`
  );
  return response.data;
};
export const products = fetchProducts();
// export const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     updateProducts: (state, action) => {
//       state.products = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProducts.pending, (state) => {})
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.products = action.payload;
//         if (typeof window !== "undefined") {
//           localStorage.setItem("products", JSON.stringify(action.payload));
//         }
//       });
//   },
// });

// export const { updateProducts } = productSlice.actions;
// export default productSlice.reducer;
