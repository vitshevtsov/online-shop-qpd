import React from 'react';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import { useAppSelector } from '../hooks/redux';

const Main = () => {
    const {categories} = useAppSelector(state => state.categoriesReducer); // todo логика популярных категорий
    return (
        <CategoryGroupsPanel categories={categories} />
    );
};

export default Main;