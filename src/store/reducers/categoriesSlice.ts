import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../../types/models/ICategory';
import {ICategoriesState} from '../../types/state/ICategoriesState';
import * as categoriesData from '../../data/categories.json';

const initialState: ICategoriesState = {
    categories: Array.from(categoriesData),
    isLoading: false,
    error: '',
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
});

export default categoriesSlice.reducer;