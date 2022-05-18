import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartToggler = () => {
    const {cart} = useAppSelector(state => state.cartReducer);
    return (
        <button
            type="button"
            className="btn btn-md btn-outline-light cart-btn position-relative"
            data-bs-toggle="modal"
            data-bs-target="#cartModal"
            data-bs-whatever="@mdo"
        >
            <FontAwesomeIcon
                className="icon"
                size="lg"
                icon={faCartShopping}
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{!!cart.length && cart.length}</span>
        </button>
    );
};

export default CartToggler;
