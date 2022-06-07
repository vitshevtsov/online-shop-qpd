import React from 'react';
import { IProduct } from 'types/models/IProduct';
import { IProductsList } from 'types/props/IProductsListProps';
import List from 'components/List/List';
import ProductItem from 'components/ProductItem/ProductItem';

/**
 * Компонент списка товаров, создан в целях переиспользования рендер-функции
 * и задания стиля корневому элементу
 */
const ProductsList = (props: IProductsList) => {

    const renderProducts = (product: IProduct) => {
        return (
            <ProductItem
                key={product.id}
                product={product}
            />
        );
    };
    
    return (
        <div className={props.rootDivClassName}>
            <List
                items={props.products}
                renderItem={renderProducts}
                paginationLimit={20}
                titleRef={props.titleRef}
            />
        </div>
    );
};

export default ProductsList;
