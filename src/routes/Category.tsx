import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import List from '../components/List/List';
import ProductItem from '../components/ProductItem/ProductItem';
import { useAppSelector } from '../hooks/redux';
import searchCategory from '../utils/searchCategory';
import CategoryFilters from './CategoryFilters/CategoryFilters';

const Category = () => {
    const {products} = useAppSelector(state => state.productsReducer);
    const {id} = useParams();
    const {categories} = useAppSelector(state => state.categoriesReducer);

    const category = searchCategory(categories, id);
    const currentCategoryProducts = products.filter((item: any) => item.categoryId === Number(id));

    const renderProducts = (product: any) => {
        return (
            <ProductItem key={product.id} product={product} />
        );
    };

    console.log(currentCategoryProducts);
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
                        <CategoryFilters category={category} categoryProducts={currentCategoryProducts} />
                    </div>
                </div>
            </div> 
            
            
    );
};

export default Category;
