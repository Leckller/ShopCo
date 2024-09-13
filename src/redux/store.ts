import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './Reducers/Cart';
import ProductsReducer from './Reducers/Products';

export const store = configureStore({
  reducer: {
    Cart: CartReducer,
    Products: ProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
