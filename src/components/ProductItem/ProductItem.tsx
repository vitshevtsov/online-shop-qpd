import React from 'react';

const ProductItem = (props: any) => {
    return (
        <div 
            id={props.product.id} 
            className="list-group-item list-group-item-action"
        >
            <h6>{props.product.name}</h6>
            <br/>
            <p>Цена: {props.product.properties.price} руб.</p>
            <p>Бренд: {props.product.properties.brand}</p>
            <p>{'третье свойство'}</p>

            

        </div>
    );
};

export default ProductItem;

// listItem Example from bootstrap

{/* <div className="list-group">
    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
    </a>
    <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
    </a>
    <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
    </a>
</div>; */}
