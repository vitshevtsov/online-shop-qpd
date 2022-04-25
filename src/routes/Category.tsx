import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryGroupsPanel from '../components/CategoryGroupsPanel/CategoryGroupsPanel';
import List from '../components/List/List';
import ProductItem from '../components/ProductItem/ProductItem';
// import * as products from '../data/products.json';
import { useAppSelector } from '../hooks/redux';
import searchCategory from '../utils/searchCategory';

const Category = () => {
    const {products} = useAppSelector(state => state.productsReducer);
    const {id} = useParams();
    const {categories} = useAppSelector(state => state.categoriesReducer);

    const category = searchCategory(categories, id);
    const currentCategoryProducts = products.filter((item: any) => item.categoryId === Number(id));
    const currentCategoryBrands = Array.from(new Set(currentCategoryProducts.map(item => item.properties.brand)));

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
                        <h5>
                            Фильтры
                        </h5>
                        <p>Цена, руб.</p>
                        <div className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="От" aria-label="Min price" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="До" aria-label="Max price" />
                            </div>
                        </div>
                        <p>Бренд</p>
                        {currentCategoryBrands.map(brandName => {
                            return (
                                <div key={brandName} className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id={`check-${brandName}`} />
                                    <label className="form-check-label" htmlFor={`check-${brandName}`}>
                                        {brandName}
                                    </label>
                                </div>);
                        })}
                    </div>
                </div>
            </div>
            
            
    );
};

export default Category;
