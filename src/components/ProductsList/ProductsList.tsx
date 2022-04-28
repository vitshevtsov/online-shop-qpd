import React from 'react';
import List from '../List/List';
import ProductItem from '../ProductItem/ProductItem';

const ProductsList = (props: any) => {
    const renderProducts = (product: any) => {
        return (
            <ProductItem key={product.id} product={product} />
        );
    };
    return (
        <div className={props.rootDivClassName}>
            <List items={props.products} renderItem={renderProducts} />
        </div>
    );
};

export default ProductsList;
