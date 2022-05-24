/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-prototype-builtins */
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import {ordersSlice} from 'store/reducers/ordersSlice';
import { cartSlice } from 'store/reducers/cartSlice';
import { stockSlice } from 'store/reducers/stockSlice';
import { IOrder } from 'types/models/IOrder';
import handleOnChangeRequiredInput from 'utils/handleOnChangeRequiredInput';
import CustomInput from 'components/UI/CustomInput/CustomInput';
import { ICart } from 'types/models/ICart';
import { initInputErrorState } from 'constants/initInputErrorState';
import clearForm from 'utils/clearForm';
import setDirtyForAll from 'utils/setDirtyForAll';
import { IObjOfSetters } from 'types/other/IObjOfSetters';

/**
 * Компонент модального окна оформления заказа, открывается из корзины
 * Все поля, кроме второго телефона, содержат валидацию на обязательность заполнения
 * Состояние валидации сбрасывается при успешном оформлении заказа
 */
const OrderForm = () => {

    const objOfSetters: IObjOfSetters = {};

    const [name, setName] = useState<string>('');
    const [nameIsDirty, setNameIsDirty] = useState<boolean>(false);
    const [nameError, setNameError] = useState<string>(initInputErrorState);
    objOfSetters.name = {
        value: setName,
        isDirty: setNameIsDirty,
        error: setNameError,
    };

    const [surname, setSurname] = useState<string>('');
    const [surnameIsDirty, setSurnameIsDirty] = useState<boolean>(false);
    const [surnameError, setSurnameError] = useState<string>(initInputErrorState);
    objOfSetters.surname = {
        value: setSurname,
        isDirty: setSurnameIsDirty,
        error: setSurnameError,
    };


    const [phone, setPhone] = useState<number | string>('');
    const [phoneIsDirty, setPhoneIsDirty] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<string>(initInputErrorState);
    objOfSetters.phone = {
        value: setPhone,
        isDirty: setPhoneIsDirty,
        error: setPhoneError,
    };
    
    const [secondPhone, setSecondPhone] = useState<number | string>('');
    objOfSetters.secondPhone = {
        value: setSecondPhone,
    };
    
    const [city, setCity] = useState<string>('');
    const [cityIsDirty, setCityIsDirty] = useState<boolean>(false);
    const [cityError, setCityError] = useState<string>(initInputErrorState);
    objOfSetters.city = {
        value: setCity,
        isDirty: setCityIsDirty,
        error: setCityError,
    };
    
    const [street, setStreet] = useState<string>('');
    const [streetIsDirty, setStreetIsDirty] = useState<boolean>(false);
    const [streetError, setStreetError] = useState<string>(initInputErrorState);
    objOfSetters.street = {
        value: setStreet,
        isDirty: setStreetIsDirty,
        error: setStreetError,
    };

    const isValid = !!(name && surname && phone && city && street);
    
    // если у инпута есть состояние ошибки, то вызываем функцию для обязательных инпутов
    // в противном случае вызываем только сеттер изменения значения
    // todo нужно ли передавать значение для телефона как number
    const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (objOfSetters[e.currentTarget.id].hasOwnProperty('error')) {
            handleOnChangeRequiredInput(
                e,
                objOfSetters[e.currentTarget.id].value,
                objOfSetters[e.currentTarget.id].error!
            );
        } else {
            objOfSetters[e.currentTarget.id].value(e.target.value);
        }
    };
    
    const handleOnFocusInput = (e: React.FocusEvent<HTMLInputElement>) => {
        if (objOfSetters[e.currentTarget.id].hasOwnProperty('isDirty')) {
            objOfSetters[e.currentTarget.id].isDirty?.(true);
        }
    };

    const {cart} = useAppSelector(state => state.cartReducer);
    const {orders} = useAppSelector(state => state.ordersReducer);
    const {addToOrders} = ordersSlice.actions;
    const {clearCart} = cartSlice.actions;
    const {changeStockQuantity} = stockSlice.actions;
    const dispatch = useAppDispatch();

    const handleAddToOrders = () => {
        if (isValid) {
            const order: IOrder = {
                id: orders.length + 1,
                orderedItems: cart,
                fullName: `${name} ${surname}`,
                fullPrice: cart.map((item: ICart) => item.properties.price * item.quantity).reduce((a,b) => a + b),
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

            clearForm(objOfSetters);

        } else {
            setDirtyForAll(objOfSetters);
        }
    };

    return (
        <div
            className="modal fade"
            id="orderFormModalToggle2"
            tabIndex={-1}
            aria-labelledby="orderFormModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title"
                            id="orderFormModalLabel"
                        >Оформление заказа
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
                        <form>
                            <div className="row">
                                <h6>Получатель</h6>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <CustomInput
                                        id='name'
                                        type="text"
                                        className='form-control'
                                        label='Имя'
                                        placeholder='Введите имя'
                                        value={name}
                                        isDirty={nameIsDirty}
                                        isRequired
                                        error={nameError}
                                        handleOnChange={handleOnChangeInput}
                                        handleOnFocus={handleOnFocusInput}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <CustomInput 
                                        id='surname'
                                        type="text"
                                        className='form-control'
                                        label='Фамилия'
                                        placeholder='Введите фамилию'
                                        value={surname}
                                        isDirty={surnameIsDirty}
                                        isRequired
                                        error={surnameError}
                                        handleOnChange={handleOnChangeInput}
                                        handleOnFocus={handleOnFocusInput}
                                        
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <CustomInput 
                                        id='phone'
                                        type='number'
                                        className='form-control numberInputWithoutSpin'
                                        label='Телефон'
                                        placeholder='Введите номер телефона'
                                        value={phone}
                                        isDirty={phoneIsDirty}
                                        isRequired
                                        error={phoneError}
                                        handleOnChange={handleOnChangeInput}
                                        handleOnFocus={handleOnFocusInput}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <CustomInput 
                                        id='secondPhone'
                                        type='number'
                                        className='form-control numberInputWithoutSpin'
                                        label='Телефон, если не дозвонимся'
                                        placeholder='Введите номер телефона'
                                        value={secondPhone}
                                        handleOnChange={handleOnChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <CustomInput 
                                        id='city'
                                        type="text"
                                        className='form-control'
                                        label='Город'
                                        placeholder='Введите город'
                                        value={city}
                                        isDirty={cityIsDirty}
                                        isRequired
                                        error={cityError}
                                        handleOnChange={handleOnChangeInput}
                                        handleOnFocus={handleOnFocusInput}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <CustomInput 
                                        id='street'
                                        type="text"
                                        className='form-control'
                                        label='Улица'
                                        placeholder='Введите улицу'
                                        value={street}
                                        isDirty={streetIsDirty}
                                        isRequired
                                        error={streetError}
                                        handleOnChange={handleOnChangeInput}
                                        handleOnFocus={handleOnFocusInput}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        {isValid && <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={handleAddToOrders}
                        >Оформить заказ
                        </button>}
                        {!isValid && <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleAddToOrders}
                        >Оформить заказ
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;
