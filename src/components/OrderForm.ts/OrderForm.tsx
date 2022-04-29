import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {ordersSlice} from '../../store/reducers/ordersSlice';
import { cartSlice } from '../../store/reducers/cartSlice';
import { stockSlice } from '../../store/reducers/stockSlice';
import { IOrder } from '../../types/models/IOrder';
import handleOnChangeRequiredInput from '../../utils/handleOnChangeRequiredInput';
import CustomInput from '../UI/CustomInput/CustomInput';

const OrderForm = () => {

    const [name, setName] = useState('');
    const [nameIsDirty, setNameIsDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле обязательно для заполнения');

    const [surname, setSurname] = useState('');
    const [surnameIsDirty, setSurnameIsDirty] = useState(false);
    const [surnameError, setSurnameError] = useState('Поле обязательно для заполнения');

    const [phone, setPhone] = useState(0);
    const [phoneIsDirty, setPhoneIsDirty] = useState(false);
    const [phoneError, setPhoneError] = useState('Поле обязательно для заполнения');
    
    const [secondPhone, setSecondPhone] = useState(0);
    
    const [city, setCity] = useState('');
    const [cityIsDirty, setCityIsDirty] = useState(false);
    const [cityError, setCityError] = useState('Поле обязательно для заполнения');
    
    const [street, setStreet] = useState('');
    const [streetIsDirty, setStreetIsDirty] = useState(false);
    const [streetError, setStreetError] = useState('Поле обязательно для заполнения');
    
    const handleOnChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleOnChangeRequiredInput(e, setName, setNameError);
    };

    const handleOnChangeSurnameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleOnChangeRequiredInput(e, setSurname, setSurnameError);
    };
    
    const handleOnChangePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleOnChangeRequiredInput(e, setPhone, setPhoneError);
    };

    const handleOnChangeSecondPhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondPhone(Number(e.target.value));
    };
    
    const handleOnChangeCityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleOnChangeRequiredInput(e, setCity, setCityError);
    };

    const handleOnChangeStreetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleOnChangeRequiredInput(e, setStreet, setStreetError);
    };

    const handleOnFocusNameInput = () => {
        setNameIsDirty(true);
    };
    
    const handleOnFocusSurnameInput = () => {
        setSurnameIsDirty(true);
    };

    const handleOnFocusPhoneInput = () => {
        setPhoneIsDirty(true);
    };

    const handleOnFocusCityInput = () => {
        setCityIsDirty(true);
    };

    const handleOnFocusStreetInput = () => {
        setStreetIsDirty(true);
    };
    const {cart} = useAppSelector(state => state.cartReducer);
    const {orders} = useAppSelector(state => state.ordersReducer);
    const {addToOrders} = ordersSlice.actions;
    const {clearCart} = cartSlice.actions;
    const {changeStockQuantity} = stockSlice.actions;
    const dispatch = useAppDispatch();

    const handleAddToOrders = () => {
        if (name && surname && phone && city && street) {
            const order: IOrder = {
                id: orders.length + 1,
                orderedItems: cart,
                fullName: `${name} ${surname}`,
                fullPrice: cart.map((item: any) => item.properties.price * item.quantity).reduce((a,b) => a + b),
                phone: phone,
                city: city,
                street: street
            };
            if (secondPhone) {
                order.secondPhone = secondPhone;
            }
            dispatch(addToOrders(order));
            dispatch(clearCart());
            dispatch(changeStockQuantity(cart));
            alert(JSON.stringify(order));
        } else {
            // setNameIsDirty(true);
            // setNameError('Поле обязательно для заполнения');
            alert('Заполните все поля');
        }
    };


    return (
        <div className="modal fade" id="exampleModalToggle2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <div className="col-6">
                                    <CustomInput
                                        label='Имя*'
                                        placeholder='Введите имя'
                                        value={name}
                                        isDirty={nameIsDirty}
                                        error={nameError}
                                        handleOnChange={handleOnChangeNameInput}
                                        handleOnFocus={handleOnFocusNameInput}
                                    />
                                </div>
                                <div className="col-6">
                                    <CustomInput 
                                        label='Фамилия*'
                                        placeholder='Введите фамилию'
                                        value={surname}
                                        isDirty={surnameIsDirty}
                                        error={surnameError}
                                        handleOnChange={handleOnChangeSurnameInput}
                                        handleOnFocus={handleOnFocusSurnameInput}
                                        
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <CustomInput 
                                        label='Телефон*'
                                        placeholder='Введите номер телефона'
                                        value={phone}
                                        isDirty={phoneIsDirty}
                                        error={phoneError}
                                        handleOnChange={handleOnChangePhoneInput}
                                        handleOnFocus={handleOnFocusPhoneInput}
                                    />
                                </div>
                                <div className="col-6">
                                    <CustomInput 
                                        label='Телефон, если не дозвонимся'
                                        placeholder='Введите номер телефона'
                                        value={secondPhone}
                                        handleOnChange={handleOnChangeSecondPhoneInput}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <CustomInput 
                                        label='Город*'
                                        placeholder='Введите город'
                                        value={city}
                                        isDirty={cityIsDirty}
                                        error={cityError}
                                        handleOnChange={handleOnChangeCityInput}
                                        handleOnFocus={handleOnFocusCityInput}
                                    />
                                </div>
                                <div className="col-6">
                                    <CustomInput 
                                        label='Улица*'
                                        placeholder='Введите улицу'
                                        value={street}
                                        isDirty={streetIsDirty}
                                        error={streetError}
                                        handleOnChange={handleOnChangeStreetInput}
                                        handleOnFocus={handleOnFocusStreetInput}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleAddToOrders}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;
