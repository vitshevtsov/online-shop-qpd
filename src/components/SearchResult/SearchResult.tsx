import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryGroupsPanel from '../CategoryGroupsPanel/CategoryGroupsPanel';
import ProductsList from '../ProductsList/ProductsList';
import { useAppSelector } from '../../hooks/redux';
import searchCategoriesContainsQuery from '../../utils/searchCategoriesContainsQuery';
import searchProductsContainsQuery from '../../utils/searchProductsContainsQuery';

/**
 * Страница результатов поиска. Рендерит результаты для поиска по категориям
 * и по товарам / их характеристикам.
 */
const SearchResult = () => {
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const {products} = useAppSelector(state => state.productsReducer);
    const data = useLocation();

    const searchInCategoriesResult = typeof data.state === 'string'
        ? searchCategoriesContainsQuery(categories, data.state)
        : null;

    const searchInProductsResult = typeof data.state === 'string'
        ? searchProductsContainsQuery(products, data.state)
        : null;

    return (
        <div className="container-md">
            <h5>Результаты поиска для &quot;{data.state}&quot;</h5>
            <h6 className="mt-4 mb-4">Результаты поиска среди категорий:</h6>
            {searchInCategoriesResult && <CategoryGroupsPanel categories={searchInCategoriesResult} />}
            {!searchInCategoriesResult && 'Поиск не дал результатов'}
            <h6 className="mt-4 mb-4">Результаты поиска среди товаров:</h6>
            {searchInProductsResult && <ProductsList rootDivClassName='w-75' products={searchInProductsResult} />}
            {!searchInProductsResult && 'Поиск не дал результатов'}
        </div>
    );
};

export default SearchResult;
