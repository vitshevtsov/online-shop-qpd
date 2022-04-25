import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {cartSlice} from '../../store/reducers/cartSlice';


const CartItem = (props: any) => {
    const {stock} = useAppSelector(state => state.stockReducer);
    const stockQuantity = stock.find((item) => item.productId === props.product.id)?.quantity;
    const {removeFromCart, changeQuantity} = cartSlice.actions;
    const dispatch = useAppDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(props.product.id));
    };

    const handleQuantityInput = (e: any) => {
        if (e.target.value >=1 && stockQuantity && e.target.value <= stockQuantity) {
            dispatch(changeQuantity([e.target.value, props.product.id]));
        }
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
                    <input 
                        type="number" 
                        className="form-control" 
                        id="quantity" 
                        value={props.product.quantity}
                        onChange={handleQuantityInput}
                    />
                    <button className="btn-primary" onClick={handleRemoveFromCart}>Удалить из корзины</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
