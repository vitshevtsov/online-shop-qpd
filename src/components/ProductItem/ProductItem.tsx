import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {cartSlice} from '../../store/reducers/cartSlice';

const ProductItem = (props: any) => {

    const {cart} = useAppSelector(state => state.cartReducer);
    const {stock} = useAppSelector(state => state.stockReducer);


    const isInCart: boolean = cart.some(item => item.id === props.product.id);
    const isInStock: boolean = stock.some(item => item.productId === props.product.id && item.quantity > 0);
    
    const addInCartButtonClassNames = (isInCart)
        ? 'btn btn-outline-primary'
        : 'btn btn-primary';

    const addInCartButton = (isInStock)
        ? <button className={addInCartButtonClassNames} onClick={() => !isInCart && handleAddToCart()}>
            {isInCart ? 'Товар уже в корзине' : 'Добавить в корзину'}
        </button>
        : <button className="btn btn-outline-secondary" disabled>
            Товар закончился
        </button>;
    
    const {addToCart} = cartSlice.actions;
    const dispatch = useAppDispatch();


    const handleAddToCart = () => {
        dispatch(addToCart({...props.product, quantity: 1}));
    };

    return (
        <div 
            id={props.product.id} 
            className="list-group-item list-group-item-action"
        >
            <div className="row row-cols-2">
                <div className="col">
                    <h6>{props.product.name}</h6>
                    <br/>
                    <p>Бренд: {props.product.properties.brand}</p>
                    <p>{'третье свойство'}</p>
                </div>
                <div className="col">
                    <p>Цена: {props.product.properties.price} руб.</p>
                    {addInCartButton}
                </div>
            </div>
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
