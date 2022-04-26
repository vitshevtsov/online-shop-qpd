import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import List from '../components/List/List';
import ProductItem from '../components/ProductItem/ProductItem';
import { useAppSelector } from '../hooks/redux';
import searchCategory from '../utils/searchCategory';
import CategoryFilters from './CategoryFilters/CategoryFilters';

const Category = () => {
    const {products} = useAppSelector(state => state.productsReducer);
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const {id} = useParams();
    const category = searchCategory(categories, id);
    const currentCategoryProducts = products.filter((item: any) => item.categoryId === Number(id));

    const properties = category.properties;
    const initialState: any = {};
    properties.forEach((propertyName: string) => {
        initialState[propertyName] = [];
    });
    console.log(initialState);
    const [selectedProperties, setSelectedProperties] = useState(initialState);


    const handleSelectProperty = (e: any) => {
        console.log(e.target.value);
        console.log(e.target.id);
    };

    const renderProducts = (product: any) => {
        return (
            <ProductItem key={product.id} product={product} />
        );
    };

    return (
        (category?.children)
            ? <CategoryGroupsPanel categories={category.children} />
            : <div className="container-md">
                <div className="row">
                    <div className="col-8">
                        <h5>
                            {category.name}
                        </h5>
                        <List items={currentCategoryProducts} renderItem={renderProducts} />
                    </div>
                    <div className="col-4">
                        <CategoryFilters 
                            category={category} 
                            categoryProducts={currentCategoryProducts}
                            onChangeCheckboxes={handleSelectProperty}
                        
                        />
                    </div>
                </div>
            </div>     
    );
};

export default Category;
