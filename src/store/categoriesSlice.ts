import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../types/models/ICategory';
import {CategoriesState} from '../types/state/CategoriesState';
import * as categoriesData from '../data/categories.json';

const initialState: CategoriesState = {
    categories: Array.from(categoriesData),
    isLoading: false,
    error: '',
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategories(state, action: PayloadAction<ICategory[]>) {
            console.log(action.payload);
            state.categories = [...state.categories, ...action.payload];
        }
    },
});

export default categoriesSlice.reducer;