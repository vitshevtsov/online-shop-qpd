import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {cartSlice} from '../../store/reducers/cartSlice';
import CartItem from '../CartItem/CartItem';
import List from '../List/List';

const Cart = () => {

    const {cart} = useAppSelector(state => state.cartReducer);

    const renderCartItem = (cartItem: any) => {
        return (
            <CartItem key={cartItem.id} product={cartItem} />
        );
    };
    const {clearCart} = cartSlice.actions;
    const dispatch = useAppDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());

    };


    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Корзина</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {!cart.length && 'Корзина пуста'}
                        <List items={cart} renderItem={renderCartItem}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClearCart}>Очистить корзину</button>
                        <button type="button" className="btn btn-primary">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
