import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import List from '../components/List/List';
import ProductItem from '../components/ProductItem/ProductItem';
import * as categories from '../data/categories.json';
import * as products from '../data/products.json';
import searchCategory from '../utils/searchCategory';

const Category = () => {
    const {id} = useParams();
    const category = searchCategory(Array.from(categories), id);
    const currentCategoryproducts = Array.from(products).filter((item: any) => item.categoryId === Number(id));

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
                        <List items={currentCategoryproducts} renderItem={renderProducts} />
                    </div>
                    <div className="col-4">
                        <h5>
                            Фильтры
                        </h5>
                    </div>
                </div>
            </div>
            
            
    );
};

export default Category;
