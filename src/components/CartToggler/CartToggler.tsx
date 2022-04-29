import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartToggler = () => {
    const {cart} = useAppSelector(state => state.cartReducer);
    return (
        <button type="button" className="btn btn-sm btn-outline-light" data-bs-toggle="modal" data-bs-target="#cartModal" data-bs-whatever="@mdo">
            <FontAwesomeIcon className="icon" size="2x" icon={faCartShopping} />
            <span className="badge bg-danger">{!!cart.length && cart.length}</span>
        </button>
    );
};

export default CartToggler;
