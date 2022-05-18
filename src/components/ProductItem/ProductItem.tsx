import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {cartSlice} from '../../store/reducers/cartSlice';
import { IProductItemProps } from '../../types/props/IProductItemprops';
import mapPropertyName from '../../utils/mapPropertyName';
import List from '../List/List';

/**
 * Компонент рендерит элемент списка товаров. Кнопка заказа м.б. в трех состояниях:
 * Добавить в корзину, товар уже в корзине, товар закончился (в случае, если ранее заказано
 * всё имеющееся на складе количество данного товара)
 */
const ProductItem = (props: IProductItemProps) => {
    const {cart} = useAppSelector(state => state.cartReducer);
    const {stock} = useAppSelector(state => state.stockReducer);
    const isInCart: boolean = cart.some(item => item.id === props.product.id);
    const isInStock: boolean = stock.some(item => item.productId === props.product.id && item.quantity > 0);
    const {addToCart} = cartSlice.actions;
    const dispatch = useAppDispatch();
    const addInCartButtonClassNames = (isInCart)
        ? 'btn btn-outline-primary'
        : 'btn btn-primary';

    const addInCartButton = (isInStock)
        ? <button
            className={addInCartButtonClassNames}
            onClick={() => !isInCart && handleAddToCart()}
        >
            {isInCart ? 'Товар уже в корзине' : 'Добавить в корзину'}
        </button>
        : <button
            className="btn btn-outline-secondary"
            disabled
        >
            Товар закончился
        </button>;
    
    const handleAddToCart = () => {
        dispatch(addToCart({...props.product, quantity: 1}));
    };

    // константа хранит entries всех свойств товара, за исключением цены (она рендерится в разметке отдельно)
    const productProperties = Object.entries(props.product.properties).filter(property => property[0] !== 'price');
    
    const renderProductProperties = (property: any) => {
        return <p
            className="mb-1"
            key={property[0]}
        >{mapPropertyName(property[0])}: {property[1]}
        </p>;
    };

    return (
        <div 
            id={props.product.id.toString()} 
            className="list-group-item list-group-item-action"
        >
            <div className="row row-cols">
                <div className="col-3">
                    <img
                        className="productItemImg"
                        src={props.product.imgPath}
                        alt="product img"
                    />
                </div>
                <div className="col-6">
                    <h6>{props.product.name}</h6>
                    <br/>
                    <List
                        items={productProperties}
                        renderItem={renderProductProperties}
                    />

                </div>
                <div className="col-3">
                    <p className="mb-1">Цена: {props.product.properties.price} руб.</p>
                    {addInCartButton}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
