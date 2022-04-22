import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/models/IProduct';
import {IProductsState} from '../../types/state/IProductsState';
import * as productsData from '../../data/products.json';

const initialState: IProductsState = {
    products: Array.from(productsData),
    isLoading: false,
    error: '',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
});

export default productsSlice.reducer;