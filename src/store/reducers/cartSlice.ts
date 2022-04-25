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
        },
        changeQuantity(state, action: PayloadAction<[number, number]>) {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === action.payload[1]) {
                    state.cart[i].quantity = action.payload[0];
                    break;
                }
            }
        }
    },
});

export default cartSlice.reducer;