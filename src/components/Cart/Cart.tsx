import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {cartSlice} from 'store/reducers/cartSlice';
import { ICart } from 'types/models/ICart';
import CartItem from 'components/CartItem/CartItem';
import List from 'components/List/List';
import ModalWrapperBS from 'components/UI/ModalWrapperBS/ModalWrapperBS';

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

    const modalBody = <>
        {!cart.length && 'Корзина пуста'}
        <List
            items={cart}
            renderItem={renderCartItem}
        />
    </>;

    const modalFooter = <>
        <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClearCart}
        >Очистить корзину
        </button>
        {primButton}
    </>;

    return (
        <ModalWrapperBS
            id='cartModal'
            labelId='cartModalLabel'
            title='Корзина'
            body={modalBody}
            footer={modalFooter}
            classNameSize='modal-xl'
            classNameContent='cartContent'
            classNameHeader='cartContentHeader'
            classNameFooter='cartContentFooter'
        />
    );
};

export default Cart;
