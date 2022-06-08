import { createSlice } from '@reduxjs/toolkit';
import {IProductsState} from 'types/state/IProductsState';
import * as productsData from 'data/products.json';
import { IProduct } from 'types/models/IProduct';

const initialState: IProductsState = {
    products: Array.from(productsData),
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
});

export const productsReducer = productsSlice.reducer;

/**
 * селекторы
 * https://redux.js.org/usage/deriving-data-selectors
 */

export const selectProductsContainsQuery = (products: IProduct[], searchQuery: string) => {

    const result: IProduct[] = [];
    
    products.forEach((item) => {
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            result.push(item);
        }

        const propertiesEntries = Object.entries(item.properties);

        propertiesEntries.forEach((propertyEntry: [string, string | number | undefined]) => {
            if (propertyEntry[0] !== 'price' && typeof propertyEntry[1] === 'string') {
                if (propertyEntry[1].toLowerCase().includes(searchQuery.toLowerCase())) {
                    result.push(item);
                }
            }
        });

    });

    if (result.length) {
        // удаляем дубликаты на случай, если поисковый запрос содержится в нескольких параметрах / названии
        return Array.from(new Set(result));
    }
};
