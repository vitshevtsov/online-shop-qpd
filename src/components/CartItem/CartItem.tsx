import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import {cartSlice} from 'store/reducers/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { ICartItemProps } from 'types/props/ICartItemProps';


const CartItem = (props: ICartItemProps) => {
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
            id={props.product.id.toString()} 
            className="list-group-item"
        >
            <div className="row">
                <div className="col-lg-1 text-center d-flex align-items-center p-2">
                    <img
                        className="cartItemImg mx-auto"
                        src={props.product.imgPath}
                    />
                </div>
                <div className="col-lg-6 d-flex align-items-center ps-5 my-3">
                    <h6 className="align-middle">{props.product.name}</h6>
                </div>
                <div className="col-lg-5 row text-center d-flex justify-content-center mx-auto">
                    <div className="col-6 d-flex align-items-center row">
                        <input 
                            type="number" 
                            className="form-control col" 
                            id="quantity" 
                            value={props.product.quantity}
                            onChange={handleQuantityInput}
                        />
                        <small className="text-secondary col">Доступно на складе: {stockQuantity} шт.</small>
                    </div>
                    <div className="col-4 text-center d-flex align-items-center">
                        <h5>{props.product.properties.price * props.product.quantity} руб.</h5>
                    </div>
                    <div className="col-2 text-center d-flex align-items-center text-secondary">
                        <FontAwesomeIcon
                            className="icon"
                            size="1x"
                            icon={faTrashCan}
                            onClick={handleRemoveFromCart}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartItem;
