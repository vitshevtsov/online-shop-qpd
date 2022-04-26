import React from 'react';
import List from '../components/List/List';
import { useAppSelector } from '../hooks/redux';

const Orders = () => {
    const {orders} = useAppSelector(state => state.ordersReducer);

    const renderOrders = (order: any) => {
        return (
            <div className="list-group-item" key={order.id}>
                <div>Заказ № {order.id}</div>
                <div>Список товаров:</div>
                {order.orderedItems.map((item: any) => <li key={item.id}>{item.name} - {item.quantity} шт.</li>)}
                <div>ФИО: {order.fullName}</div>
                <div>Сумма заказа: {order.fullPrice}</div>          
            </div>
        );
    };
    return (
        <div className="container-md">
            {(orders.length !== 0)
                ? <List items={orders} renderItem={renderOrders}/>
                : <div>Пока нет заказов</div>}
        </div>
    );
};

export default Orders;