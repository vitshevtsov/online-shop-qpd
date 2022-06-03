import React, { useEffect, useMemo, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import CategoryGroupsPanel from 'components/CategoryGroupsPanel/CategoryGroupsPanel';
import { useAppSelector } from 'hooks/redux';
import searchCategoryById from 'utils/searchCategoryById';
import CategoryFilters from 'components/CategoryFilters/CategoryFilters';
import getFilteredProducts from 'utils/getFilteredProducts';
import ProductsList from 'components/ProductsList/ProductsList';
import { IProduct } from 'types/models/IProduct';
import { ICheckboxesState, IPropertyState } from 'types/state/ICheckboxesState';
import CategoryFiltersMobileWrapper from 'components/CategoryFiltersMobileWrapper/CategoryFiltersMobileWrapper';
import CategoryFiltersToggler from 'components/CategoryFiltersToggler/CategoryFiltersToggler';

/**
 * Страница категорий. В соответствии с моделью, категория может быть:
 * 
 * 1) родительской, т.е. содержащей дочерние категории и не содержащей товары,
 * в этом случае рендерится панель дочерних категорий
 * 
 * 2) дочерней, содержащей товары - в этом случае рендерится список товаров
 * и панель фильтрации
 */
const Category = () => {
    const {products} = useAppSelector(state => state.productsReducer);
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const {idAndName}: Readonly<Params<string>> = useParams();
    const id = idAndName?.split('-')[0];
    const category = searchCategoryById(categories, id);
    const currentCategoryProducts = products.filter((item: IProduct) => item.categoryId === Number(id));
    
    const currentPricesSortedArr = currentCategoryProducts.map(product => product.properties.price).sort((a,b) => a - b);
    const initialPriceRange = (currentPricesSortedArr.length > 1)
        ? [currentPricesSortedArr[0], currentPricesSortedArr[currentPricesSortedArr.length - 1]]
        : [currentPricesSortedArr[0], currentPricesSortedArr[0]];

    const initialCheckboxesState: ICheckboxesState = {};
    if (category?.properties) {
        category?.properties.forEach(propertyName => {
            if (propertyName !== 'price') {
                const result: IPropertyState = {};
                const propertyVariants = Array.from(new Set(currentCategoryProducts.map((item: any) => item.properties[propertyName])));
    
                propertyVariants.forEach(variantName => {
                    result[variantName] = false;
                });

                initialCheckboxesState[propertyName] = result;
            }
        });
    }

    const [priceRange, setPriceRange] = useState<number[]>(initialPriceRange);
    const [checkboxesState, setCheckboxesState] = useState<ICheckboxesState>(initialCheckboxesState);

    // без использования эффекта состояние не обновляется при переходе на другую категорию каталога
    useEffect(() => {
        setPriceRange(initialPriceRange);
        setCheckboxesState(initialCheckboxesState);
    }, [category]);

    const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPriceRange = [...priceRange];
        newPriceRange[0] = Number(e.target.value);
        setPriceRange(newPriceRange);
    };

    const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPriceRange = [...priceRange];
        newPriceRange[1] = Number(e.target.value);
        setPriceRange(newPriceRange);
    };

    const handlePriceRange = (eventValue: number[]) => {
        setPriceRange(eventValue);
    };

    const handleCheckboxesState = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckboxesState = {...checkboxesState};
        newCheckboxesState[e.currentTarget.name][e.currentTarget.value] = e.currentTarget.checked;
        setCheckboxesState(newCheckboxesState);
    };

    const handleClearFilters = () => {
        setPriceRange(initialPriceRange);
        setCheckboxesState(initialCheckboxesState);
    };

    const filteredProducts = getFilteredProducts(currentCategoryProducts, priceRange, checkboxesState);

    return (
        (category?.children)
            ? <CategoryGroupsPanel categories={category.children} />
            : <div className="container-md">
                <div className="row">
                    <div className="col-md-9">
                        <h5>
                            {category?.name}
                        </h5>
                        {category?.properties && <CategoryFiltersToggler />}
                        {filteredProducts && <ProductsList
                            products={filteredProducts}
                        />}
                    </div>
                    <div className="col-md-3">
                        {category?.properties && <CategoryFilters 
                            category={category} 
                            categoryProducts={currentCategoryProducts}
                            priceRange={priceRange}
                            maxPriceRange={initialPriceRange}
                            checkboxesState={checkboxesState}
                            onChangeCheckboxesState={handleCheckboxesState}
                            onChangeMinPrice={handleMinPrice}
                            onChangeMaxPrice={handleMaxPrice}
                            onChangePriceRange={handlePriceRange}
                            onClickClearFilters={handleClearFilters}
                            classNameRootDiv="d-none d-md-block"
                        />}
                        {category?.properties && <CategoryFiltersMobileWrapper
                            category={category} 
                            categoryProducts={currentCategoryProducts}
                            priceRange={priceRange}
                            maxPriceRange={initialPriceRange}
                            checkboxesState={checkboxesState}
                            onChangeCheckboxesState={handleCheckboxesState}
                            onChangeMinPrice={handleMinPrice}
                            onChangeMaxPrice={handleMaxPrice}
                            onChangePriceRange={handlePriceRange}
                            onClickClearFilters={handleClearFilters}
                            classNameRootDiv="d-md-none"
                        />}
                        
                    </div>
                </div>
            </div>     
    );
};

export default Category;
