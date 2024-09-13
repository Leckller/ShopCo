import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IRoupa from '../../Types/IRoupa';

interface ProductState {
  products: IRoupa[];
  click: boolean
}

const initialState: ProductState = {
  products: [],
  click: false,
};

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    setProducts(state, payload: PayloadAction<IRoupa[]>) {
      state.products = payload.payload;
    },
    click(state, action: PayloadAction<boolean>) {
      state.click = action.payload;
    },
  },
});

export const { setProducts, click } = ProductSlice.actions;

export default ProductSlice.reducer;
