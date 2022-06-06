import { createSlice } from '@reduxjs/toolkit';
import {ICategoriesState} from 'types/state/ICategoriesState';
import * as categoriesData from 'data/categories.json';
import { ICategory } from 'types/models/ICategory';

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

/**
 * Не мемоизированные селекторы
 * (мемоизация требуется, если каждый раз возвращается новое значение - напр., filter)
 * Для мемоизированных необх. исп-ть createSelector
 * https://redux.js.org/usage/deriving-data-selectors
 */
export const selectCategoryById = (categories: ICategory[], categoryId: string | undefined): ICategory | undefined => {
    let result = categories.find((item: ICategory) => item.id === Number(categoryId));
    if (result) {
        return result;
    }
    for (let i = 0; i < categories.length; i ++) {
        if (categories[i].children) {
            result = selectCategoryById(categories[i].children as ICategory[], categoryId);
        }
        if (result) {
            return result;
        }
    }
};
