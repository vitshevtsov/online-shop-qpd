import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import * as categories from '../data/categories.json';
import searchCategory from '../utils/searchCategory';

const Category = () => {
    const {id} = useParams();
    const category = searchCategory(Array.from(categories), id);

    return (
        (category?.children)
            ? <CategoryGroupsPanel categories={category.children} />
            : <div>Тут будут товары</div>
    );
};

export default Category;
