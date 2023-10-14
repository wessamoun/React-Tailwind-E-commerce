import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  alert: 0,
  alertType: "success",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      !state.cart.find((product) => product.id === action.payload.id) ? state.alertType = "success" : state.alertType = "error";
      !state.cart.find((product) => product.id === action.payload.id) &&
        state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      state.alert = state.alert + 1;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
