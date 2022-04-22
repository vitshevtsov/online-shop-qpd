import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {ordersSlice} from '../../store/reducers/ordersSlice';
import { IOrder } from '../../types/models/IOrder';
// import {cartSlice} from '../../store/reducers/cartSlice';
// import CartItem from '../CartItem/CartItem';
// import List from '../List/List';

// todo должен принимать список заказанных товаров
const OrderForm = () => {

    const {orders} = useAppSelector(state => state.ordersReducer);
    const {addToOrders} = ordersSlice.actions;
    const dispatch = useAppDispatch();

    const handleAddToOrders = () => {
        const order: IOrder = {
            id: orders.length + 1,
            orderedItems: [],
            fullName: '',
            fullPrice: 0,
            phoneNumber: 0, // todo second phone
            city: '',
            street: ''
        };
        dispatch(addToOrders(order));
    };


    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Оформление заказа</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <h6>Получатель</h6>
                            </div>
                            <div className="row">
                                <div className="col-6">Инпут имени</div>
                                <div className="col-6">Инпут фамилии</div>
                            </div>
                            <div className="row">
                                <div className="col-6">Телефон</div>
                                <div className="col-6">Телефон, если не дозвонимся</div>
                            </div>
                            <div className="row">
                                <div className="col-6">Город</div>
                                <div className="col-6">Улица</div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleAddToOrders}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;
