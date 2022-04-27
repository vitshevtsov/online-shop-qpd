import React, { useEffect, useState } from 'react';
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
    const isChildCategory: boolean = (category.properties);
    const currentCategoryProducts = products.filter((item: any) => item.categoryId === Number(id));

    const properties = category.properties;
    const initialState: any = {};
    if (properties) {
        properties.forEach((propertyName: string) => {
            initialState[propertyName] = [];
        });
    }

    const [selectedProperties, setSelectedProperties] = useState(initialState);
    console.log(selectedProperties);

    // без использования эффекта состояние не обновляется при переходе на другую категорию каталога
    useEffect(() => {
        setSelectedProperties(initialState);
    }, [category]);
    

    const filterProducts = (productsArr: any[], filterQuery: any) => {
        let result = productsArr;
        for (const property in filterQuery) {
            if (filterQuery[property].length) {
                result = result.filter((item: any) => filterQuery[property].includes(item.properties[property]));
            }
        }
        return result;
    };
    const filteredProducts = filterProducts(currentCategoryProducts, selectedProperties);

    const handleSelectProperty = (e: any) => {
        const newProperties = {...selectedProperties};
        console.log(typeof e.target.value);
        console.log(e.target.name);

        if (newProperties[e.target.name].includes(e.target.value)) {
            newProperties[e.target.name] = newProperties[e.target.name].filter((item: any) => item !== e.target.value);
        } else {
            newProperties[e.target.name] = [...newProperties[e.target.name], e.target.value];
        }
        setSelectedProperties(newProperties);
        console.log(selectedProperties);

        console.log(e.target.value);
        console.log(e.target.name);
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
                        <List items={filteredProducts} renderItem={renderProducts} />
                    </div>
                    <div className="col-4">
                        {isChildCategory && <CategoryFilters 
                            category={category} 
                            categoryProducts={currentCategoryProducts}
                            onChangeCheckboxes={handleSelectProperty}
                        />}
                    </div>
                </div>
            </div>     
    );
};

export default Category;
