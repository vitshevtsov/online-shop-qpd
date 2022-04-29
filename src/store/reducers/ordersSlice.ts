import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder } from '../../types/models/IOrder';
import {IOrdersState} from '../../types/state/IOrdersState';

const initialState: IOrdersState = {
    orders: [],
};

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addToOrders(state, action: PayloadAction<IOrder>) {
            state.orders = [...state.orders, action.payload];
        },
    },
});

export default ordersSlice.reducer;
