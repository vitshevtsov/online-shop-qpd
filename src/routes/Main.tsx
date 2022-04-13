import React from 'react';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import * as categoriesData from '../data/categories.json';

const Main = () => {
    const categoriesArr = Array.from(categoriesData); // todo логика популярных категорий
    return (
        <CategoryGroupsPanel categories={categoriesArr} />
    );
};

export default Main;