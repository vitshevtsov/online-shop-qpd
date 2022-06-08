import { IStockItem } from './../../types/models/IStockItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IStockState} from 'types/state/IStockState';
import * as stockData from 'data/stock.json';
import { ICart } from 'types/models/ICart';

const initialState: IStockState = {
    stock: Array.from(stockData),
};

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        changeStockQuantity(state, action: PayloadAction<ICart[]>) {
            for (let i = 0; i < action.payload.length; i++) {
                const index = state.stock.findIndex((item) => item.productId === action.payload[i].id);
                
                if (index !== -1) {
                    state.stock[index].quantity = state.stock[index].quantity - action.payload[i].quantity;
                }
            }
        }
    },
});

export const stockReducer = stockSlice.reducer;

/**
 * селекторы
 * https://redux.js.org/usage/deriving-data-selectors
 */
export const selectStockQuantity = (stock: IStockItem[], productId: number) => stock.find((item) => item.productId === productId)?.quantity;
