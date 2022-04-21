import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStockItem } from '../../types/models/IStockItem';
import {IStockState} from '../../types/state/IStockState';
import * as stockData from '../../data/stock.json';

const initialState: IStockState = {
    stock: Array.from(stockData),
    isLoading: false,
    error: '',
};

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        addProducts(state, action: PayloadAction<IStockItem[]>) {
            console.log(action.payload);
            state.stock = [...state.stock, ...action.payload];
        }
    },
});

export default stockSlice.reducer;