/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryGroupsPanel from 'components/CategoryGroupsPanel/CategoryGroupsPanel';
import ProductsList from 'components/ProductsList/ProductsList';
import { useAppSelector } from 'hooks/redux';
import { selectCategoriesContainsQuery } from 'store/reducers/categoriesSlice';
import { selectProductsContainsQuery } from 'store/reducers/productsSlice';

/**
 * Страница результатов поиска. Рендерит результаты для поиска по категориям
 * и по товарам / их характеристикам.
 */
const SearchResult = () => {

    const titleSearchInProductsRef = useRef<null | HTMLDivElement>(null);
    
    const data = useLocation();

    const searchInCategoriesResult = typeof data.state === 'string'
        ? useAppSelector(state => selectCategoriesContainsQuery(state.categoriesReducer.categories, data.state as string))
        : null;

    const searchInProductsResult = typeof data.state === 'string'
        ? useAppSelector(state => selectProductsContainsQuery(state.productsReducer.products, data.state as string))
        : null;

    return (
        <div className="container-md">
            <h5>Результаты поиска для &quot;{data.state}&quot;</h5>
            <h6 className="mt-4 mb-4">Результаты поиска среди категорий:</h6>
            {searchInCategoriesResult && <CategoryGroupsPanel categories={searchInCategoriesResult} />}
            {!searchInCategoriesResult && 'Поиск не дал результатов'}
            <h6
                ref={titleSearchInProductsRef}
                className="mt-4 mb-4"
            >Результаты поиска среди товаров:</h6>
            {searchInProductsResult && <ProductsList
                rootDivClassName='w-75 mx-auto'
                products={searchInProductsResult}
                titleRef={titleSearchInProductsRef}
            />}
            {!searchInProductsResult && 'Поиск не дал результатов'}
        </div>
    );
};

export default SearchResult;
