import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {cartSlice} from '../../store/reducers/cartSlice';
import { ICart } from '../../types/models/ICart';
import CartItem from '../CartItem/CartItem';
import List from '../List/List';

/**
 * Компонент рендерит модальное окно корзины
 */
const Cart = () => {
    const {cart} = useAppSelector(state => state.cartReducer);
    const {clearCart} = cartSlice.actions;
    const dispatch = useAppDispatch();
    
    const renderCartItem = (cartItem: ICart) => {
        return (
            <CartItem
                key={cartItem.id}
                product={cartItem}
            />
        );
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const primButton = (cart.length)
        ? <button
            type="button"
            className="btn btn-primary"
            data-bs-target="#orderFormModalToggle2"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
        >Оформить заказ
          </button>
        : <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
        >Продолжить покупки
          </button>;

    return (
        <div
            className="modal fade"
            id="cartModal"
            tabIndex={-1}
            aria-labelledby="cartModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content cartContent">
                    <div className="modal-header cartContentHeader">
                        <h5
                            className="modal-title"
                            id="cartModalLabel"
                        >Корзина
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                        </button>
                    </div>
                    <div className="modal-body">
                        {!cart.length && 'Корзина пуста'}
                        <List
                            items={cart}
                            renderItem={renderCartItem}
                        />
                    </div>
                    <div className="modal-footer cartContentFooter">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleClearCart}
                        >Очистить корзину
                        </button>
                        {primButton}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
