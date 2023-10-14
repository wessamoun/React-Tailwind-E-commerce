import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  categories: [],
}
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (api) => {
    try {
      const response = await axios.get(api);
      return response.data
    } catch (error) {
      return error
    }
  }
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = (action.payload)
    })
  },
})


export default categoriesSlice.reducer