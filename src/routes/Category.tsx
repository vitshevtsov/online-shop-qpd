import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import { useAppSelector } from '../hooks/redux';
import searchCategoryById from '../utils/searchCategoryById';
import CategoryFilters from '../components/CategoryFilters/CategoryFilters';
import filterProducts from '../utils/filterProducts';
import ProductsList from '../components/ProductsList/ProductsList';
import { IProduct } from '../types/models/IProduct';

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
    const {id} = useParams();
    const category = searchCategoryById(categories, id);
    const isChildCategory: boolean = (category.properties);
    const currentCategoryProducts = products.filter((item: IProduct) => item.categoryId === Number(id));
    
    const properties = category.properties;
    const currentPricesSortedArr = currentCategoryProducts.map(product => product.properties.price).sort((a,b) => a - b);
    const initialPriceRange = (currentPricesSortedArr.length > 1)
        ? [currentPricesSortedArr[0], currentPricesSortedArr[currentPricesSortedArr.length - 1]]
        : [currentPricesSortedArr[0], currentPricesSortedArr[0]];

    const initialCheckboxesState: any = {};
    if (properties) {
        properties.forEach((propertyName: string) => {
            initialCheckboxesState[propertyName] = [];
        });
    }

    const [selectedProperties, setSelectedProperties] = useState(initialCheckboxesState);
    const [priceRange, setPriceRange] = useState(initialPriceRange);


    // без использования эффекта состояние не обновляется при переходе на другую категорию каталога
    useEffect(() => {
        setPriceRange(initialPriceRange);
        setSelectedProperties(initialCheckboxesState);
    }, [category]);

    const handleMinPrice = (e: any) => {
        const newPriceRange = [...priceRange];
        newPriceRange[0] = e.target.value;
        setPriceRange(newPriceRange);
    };

    const handleMaxPrice = (e: any) => {
        const newPriceRange = [...priceRange];
        newPriceRange[1] = e.target.value;
        setPriceRange(newPriceRange);
    };

    const handlePriceRange = (eventValue: number[]) => {
        setPriceRange(eventValue);
    };

    const handleSelectProperty = (e: any) => {
        const newProperties = {...selectedProperties};
        if (newProperties[e.target.name].includes(e.target.value)) {
            newProperties[e.target.name] = newProperties[e.target.name].filter((item: any) => item !== e.target.value);
        } else {
            newProperties[e.target.name] = [...newProperties[e.target.name], e.target.value];
        }
        setSelectedProperties(newProperties);
    };

    const handleClearFilters = () => {
        setPriceRange(initialPriceRange);
        setSelectedProperties(initialCheckboxesState);
    };

    const filteredProducts = filterProducts(currentCategoryProducts, priceRange, selectedProperties);

    return (
        (category?.children)
            ? <CategoryGroupsPanel categories={category.children} />
            : <div className="container-md">
                <div className="row">
                    <div className="col-9">
                        <h5>
                            {category.name}
                        </h5>
                        {filteredProducts && <ProductsList products={filteredProducts} />}
                    </div>
                    <div className="col-3">
                        {isChildCategory && <CategoryFilters 
                            category={category} 
                            categoryProducts={currentCategoryProducts}
                            priceRange={priceRange}
                            maxPriceRange={initialPriceRange}
                            onChangeCheckboxes={handleSelectProperty}
                            onChangeMinPrice={handleMinPrice}
                            onChangeMaxPrice={handleMaxPrice}
                            onChangePriceRange={handlePriceRange}
                            onClickClearFilters={handleClearFilters}
                        />}
                    </div>
                </div>
            </div>     
    );
};

export default Category;
