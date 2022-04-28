import React from 'react';
import { useAppSelector } from '../hooks/redux';

const SearchResult = (props: any) => {
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const searchedCategoriesResult = (searchQuery: string) => {

        // let result = [];
        
        // categories.forEach((item: any) => item.name === Number(id));
        // if (result) {
        //     return result;
        // }
        // for (let i = 0; i < array.length; i ++) {
        //     if (array[i].children) {
        //         result = searchCategory(array[i].children, id);
        //     }
        //     if (result) {
        //         return result;
        //     }
        // }
        // return false;

    };

    return (
        <div className="container-md">
            <h5>Результаты поиска для {props.searchQuery}</h5>

        </div>
    );
};

export default SearchResult;