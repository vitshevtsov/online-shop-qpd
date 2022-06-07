import { createSlice } from '@reduxjs/toolkit';
import {ICategoriesState} from 'types/state/ICategoriesState';
import * as categoriesData from 'data/categories.json';
import { ICategory } from 'types/models/ICategory';
import { ISearchCategorySelector } from 'types/other/ISearchCategorySelector';

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
 * селекторы
 * https://redux.js.org/usage/deriving-data-selectors
 */
export const selectCategoryById: ISearchCategorySelector = (categories, categoryId) => {
    
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

export const selectCategoriesContainsQuery = (categories: ICategory[], searchQuery: string) => {

    const result: ICategory[] = [];

    categories.forEach((item: ICategory) => {    
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            result.push(item);
        }
        
        if (item.children) {
            const childResult = selectCategoriesContainsQuery(item.children, searchQuery);
            
            if (childResult) {
                result.push(...childResult);
            }
        }
    });
    
    if (result.length) {
        return result;
    }
};
