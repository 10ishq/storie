import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
  cartItems: [],
  total: 0,
};

const cartPersistConfig = {
  key: 'cart',
  storage: storage,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const quantity= action.payload.quantity || 1;

      // console.log(item);
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== item.id
          );
        } else {
          existingItem.quantity -= 1;
        }
        state.total = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
    // updateCart function
    updateCart: (state, action) => {
        const item = action.payload;
        
        const existingItem = state.cartItems.find(
            (cartItem) => cartItem.id === item.id
        );
        if (existingItem) {
            existingItem.quantity = item.quantity;
        }
        state.total = state.cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        },
    removeItemFromCart: (state, action) => {
        const item = action.payload;
        state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== item.id
        );
        state.total = state.cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    },
  },
});

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice.reducer);

export default persistedCartReducer;
export const { addToCart, removeFromCart, updateCart, removeItemFromCart } = cartSlice.actions;
