import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import editUserSlice from '../features/editUser/editUserSlice';
import cartReducer from '../features/cart/cartSlice';
import singleUserSlice from '../features/userPage/userPageSlice';
import allProductsReducer from '../features/products/AllProductsSlice';
import SingleProductSlice from '../features/products/SingleProductSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    editUser: editUserSlice,
    singleUser: singleUserSlice,
    cart: cartReducer, 
    allProducts: allProductsReducer,
    SingleProduct: SingleProductSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
export * from '../features/auth/authSlice';
