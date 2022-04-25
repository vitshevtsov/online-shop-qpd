import React from 'react';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import getPopularCategories from '../utils/getPopularCategories';

const Main = () => {
    return (
        <div className="container-md">
            <h5>Популярные категории</h5>
            <CategoryGroupsPanel categories={getPopularCategories()} />
        </div>
    );


};

export default Main;