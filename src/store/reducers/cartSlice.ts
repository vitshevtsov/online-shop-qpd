import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from '../../types/models/ICart';
import {ICartState} from '../../types/state/ICartState';

const initialState: ICartState = {
    cart: [],
    isLoading: false,
    error: '',
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProducts(state, action: PayloadAction<ICart[]>) {
            console.log(action.payload);
            state.cart = [...state.cart, ...action.payload];
        }
    },
});

export default cartSlice.reducer;