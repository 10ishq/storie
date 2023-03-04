import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  products: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchAllProducts = createAsyncThunk('allProducts/fetchAllProducts', () => {
  return axios
    .get('https://fakestoreapi.com/products')
    .then(response => response.data)
    console.log(response.data)
})

const allProductslice = createSlice({
  name: 'allProducts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false
      state.allProducts = action.payload
      state.error = ''
    })
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false
      state.allProducts = []
      state.error = action.error.message
    })
  }
})

export default allProductslice.reducer