import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import * as categories from '../data/categories.json';

const Category = () => {
    const {id} = useParams();

    // const searchCategory = (array: any[], id: any) => {
    //     const currentArray = array;
    //     const result = currentArray.find((item: any) => item.id === Number(id));
    //     if (result) return result;
    //     for (let i = 0; i < currentArray.length; i++) {
    //         if (currentArray[i].children) {
    //             searchCategory(currentArray[i].children, id);
    //         }
    //     }
    // };

    const searchCategory = (array: any[], id: any) => {
        let result = array.find((item: any) => item.id === Number(id));
        if (result) {
            return result;
        }

        // Use a for loop instead of forEach to avoid nested functions
        // Otherwise "return" will not work properly
        for (let i = 0; i < array.length; i ++) {
            if ( array[i].children) {
                result = searchCategory(id, array[i].children);
            }
            // Return the result if the node has been found
            if (result) {
                return result;
            }
        }
        // The node has not been found and we have no more options
        return false;
    };

    // const category = Array.from(categories).find((item: any) => item.id === Number(id));
    const category = searchCategory(Array.from(categories), id);

    return (
        (category?.children)
            ? <CategoryGroupsPanel categories={category.children} />
            : <div>Тут будут товары</div>
    );
};

export default Category;
