import React from 'react';
import CategoryGroupsPanel from '../CategoryGroupsPanel/CategoryGroupsPanel';
import { useAppSelector } from '../../hooks/redux';
import getPopularCategories from '../../utils/getPopularCategories';
import { ICategory } from '../../types/models/ICategory';

/**
 * Главная страница, на которой рендерится список популярных категорий
 */
const Main = () => {
    const {orders} = useAppSelector(state => state.ordersReducer);
    const popularCategories = <CategoryGroupsPanel categories={getPopularCategories() as ICategory[]} />;

    return (
        <div className="container-md">
            <h5>Популярные категории</h5>
            {(orders.length !== 0)
                ? popularCategories
                : <div>
                    <p>Здесь будут отображаться Ваши любимые категории. Пока не сделано ни одного заказа.</p>
                    <a
                        role="button"
                        className="btn btn-primary"
                        data-bs-toggle="offcanvas"
                        href="#offcanvasExample"
                        aria-controls="offcanvasExample"
                    >К покупкам!
                    </a>
                  </div>}
        </div>
    );


};

export default Main;
