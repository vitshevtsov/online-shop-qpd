import React from 'react';
import { useAppSelector } from '../../hooks/redux';

const CartToggler = () => {
    const {cart} = useAppSelector(state => state.cartReducer);
    return (
        <button type="button" className="btn btn-sm btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
            Корзина
            <span className="badge bg-danger">{!!cart.length && cart.length}</span>
        </button>
    );
};

export default CartToggler;
