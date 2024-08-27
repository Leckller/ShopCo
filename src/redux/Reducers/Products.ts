import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IRoupa from '../../Types/IRoupa';

interface ProductState {
  products: IRoupa[];
}

const initialState: ProductState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    setProducts(state, payload: PayloadAction<IRoupa[]>) {
      state.products = payload.payload;
    },
  },
});

export const { setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
