import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import * as categories from '../data/categories.json';

const Category = () => {
    const {categoryId} = useParams();
    const category = Array.from(categories).find((item: any) => item.id === Number(categoryId));

    return (
        (category?.children)
            ? <CategoryGroupsPanel categories={category!.children} />
            : <div>Тут будут товары</div>
    );
};

export default Category;
