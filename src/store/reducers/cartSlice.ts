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
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cart = [];
        }
    },
});

export default cartSlice.reducer;