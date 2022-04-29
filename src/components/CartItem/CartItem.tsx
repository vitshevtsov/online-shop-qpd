import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {cartSlice} from '../../store/reducers/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

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
                <div className="col-1 text-center d-flex align-items-center">
                    <img className="cartItemImg" src={props.product.imgPath}/>
                </div>
                <div className="col-6 text-center d-flex align-items-center ps-5">
                    <h6 className="align-middle">{props.product.name}</h6>
                </div>
                <div className="col-2 text-center d-flex align-items-center">
                    <input 
                        type="number" 
                        className="form-control" 
                        id="quantity" 
                        value={props.product.quantity}
                        onChange={handleQuantityInput}
                    />
                    <small className="text-danger">Доступно на складе: {stockQuantity} шт.</small>
                </div>
                <div className="col-2 text-center d-flex align-items-center">
                    <h4>{props.product.properties.price * props.product.quantity} руб.</h4>
                </div>
                <div className="col-1 text-center d-flex align-items-center text-secondary">
                    <FontAwesomeIcon className="icon" size="2x" icon={faTrashCan} onClick={handleRemoveFromCart} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
