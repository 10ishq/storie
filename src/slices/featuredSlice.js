import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  featuredProducts: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchFeaturedProducts = createAsyncThunk('featuredProducts/fetchFeaturedProducts', () => {
  return axios
    .get('https://fakestoreapi.com/products?limit=5')
    .then(response => response.data)
    
})

const featuredProductslice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchFeaturedProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.loading = false
      state.featuredProducts = action.payload
      state.error = ''
    })
    builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
      state.loading = false
      state.featuredProducts = []
      state.error = action.error.message
    })
  }
})

export default featuredProductslice.reducer