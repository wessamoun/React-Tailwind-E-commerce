import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  search: "",
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (api) => {
    try {
      const response = await axios.get(api);
      return response.data.products;
    } catch (error) {
      return error;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      state.search = action.payload;
      console.log(action.payload);
    },
    sortProducts: (state, action) => {
      switch (action.payload) {
        case "Ascending by name":
          state.products.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Descending by name":
          state.products.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "Ascending by price":
          state.products.sort((a, b) => a.price - b.price);
          break;
        case "Descending by price":
          state.products.sort((a, b) => b.price - a.price);
          break;
        default:
        // code block
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      // state.products = (action.payload.filter((product) => !product.category.includes("men") && !product.category.includes("top")))
      // state.products.push(...action.payload.filter((product) => !product.category.includes("men") && !product.category.includes("top")))
    });
  },
});

export const { searchProducts, sortProducts } = productsSlice.actions;

export default productsSlice.reducer;
