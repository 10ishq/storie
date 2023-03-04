import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
import featuredProductsReducer from '../slices/featuredSlice'
import allProductsReducer from '../slices/allProductslice'

const store = configureStore({
    reducer:{
        cart: cartReducer,
        featuredProducts: featuredProductsReducer,
        allProducts: allProductsReducer
    },

})

export default store