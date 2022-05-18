import { createSlice } from '@reduxjs/toolkit';
import {IProductsState} from 'types/state/IProductsState';
import * as productsData from 'data/products.json';

const initialState: IProductsState = {
    products: Array.from(productsData),
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
});

export default productsSlice.reducer;
