import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import {cartSlice} from '../../store/reducers/cartSlice';


const CartItem = (props: any) => {
    const {removeFromCart} = cartSlice.actions;
    const dispatch = useAppDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(props.product.id));
    };

    return (
        <div 
            id={props.product.id} 
            className="list-group-item"
        >
            <div className="row">
                <div className="col-8">
                    <h6>{props.product.name}</h6>
                    <p>Бренд: {props.product.properties.brand}</p>
                    <p>{'третье свойство'}</p>
                </div>
                <div className="col-4">
                    <p>Цена: {props.product.properties.price} руб.</p>
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="quantity"></input>
                    <button className="btn-primary" onClick={handleRemoveFromCart}>Удалить из корзины</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
