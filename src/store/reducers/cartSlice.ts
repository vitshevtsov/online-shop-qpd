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
        addToCart(state, action: PayloadAction<ICart>) {
            state.cart = [...state.cart, action.payload];
        }
    },
});

export default cartSlice.reducer;