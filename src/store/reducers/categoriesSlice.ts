import { createSlice } from '@reduxjs/toolkit';
import {ICategoriesState} from '../../types/state/ICategoriesState';
import * as categoriesData from '../../data/categories.json';

const initialState: ICategoriesState = {
    categories: Array.from(categoriesData),
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
});

export default categoriesSlice.reducer;