import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IRoupa from '../../Types/IRoupa';

interface CartState {
  cart: IRoupa[];
}

const initialState: CartState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    // IMPLEMENTAR UM ALGORITMO MAIS EFICIENTE!!
    addToCart(state, action: PayloadAction<{ product: IRoupa, quantity: number }>) {
      for (let i = 0; i < action.payload.quantity; i++) {
        state.cart.push(action.payload.product);
      }
    },
    removeItem(state, action: PayloadAction<IRoupa>) {
      const index = state.cart.findIndex((e) => e.id === action.payload.id);
      state.cart = [...state.cart.filter((_, i) => i !== index)];
    },
  },
});

export const { addToCart, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
