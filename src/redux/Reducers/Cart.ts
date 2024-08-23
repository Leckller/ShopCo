import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IRoupa from '../../Types/IRoupa';

interface CartState {
  cart: { product:IRoupa, quantity: number }[];
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
      const { product, quantity } = action.payload;
      const productInCart = state.cart.find((p) => p.product.id === product.id);
      if (productInCart) {
        productInCart.quantity++;
        return;
      }
      state.cart.push({ product, quantity });
    },
    removeItem(state, action: PayloadAction<IRoupa>) {
      const product = action.payload;
      const productInCart = state.cart.find((p) => p.product.id === product.id);
      if (!productInCart) { return; }
      if (productInCart.quantity <= 1) {
        state.cart = [...state.cart.filter((r) => r.product.id !== product.id)];
        return;
      }
      productInCart.quantity--;
    },
    removeStakItem(state, action: PayloadAction<IRoupa>) {
      state.cart = [...state.cart.filter((r) => r.product.id !== action.payload.id)];
    },
  },
});

export const { addToCart, removeItem, removeStakItem } = CartSlice.actions;

export default CartSlice.reducer;
