import { configureStore } from '@reduxjs/toolkit'
import featuredProductsReducer from '../slices/featuredSlice'
import allProductsReducer from '../slices/allProductslice'
import { persistStore } from "redux-persist";
import persistedCartReducer from '../slices/cartSlice'


const store = configureStore({
    reducer:{
        cart: persistedCartReducer,
        featuredProducts: featuredProductsReducer,
        allProducts: allProductsReducer
    },

})

const persistor = persistStore(store);

export { store, persistor };