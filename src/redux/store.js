import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import categoriesReducer from './catagoriesSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer
  },
})