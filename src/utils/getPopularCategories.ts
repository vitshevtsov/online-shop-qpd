/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from "hooks/redux";
import { ICart } from "types/models/ICart";
import { ICategory } from "types/models/ICategory";
import searchCategoryById from "./searchCategoryById";

/**
 * Функция получения списка популярных категорий.
 * 
 * Далее, создает Map вида [id категории заказанного товара - количество в заказах],
 * проходится по всем заказам, затем сортирует массив полученный из map, и преобразует его
 * в массив категорий с помощью функции поиска категории по id.
 * 
 * Возвращает массив категорий.
 * ! Функция не проверяет на наличие заказов, т.к. данная проверка осуществляется в компоненте Main.
 */
const getPopularCategories = (): ICategory[] | undefined => {
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const {orders} = useAppSelector(state => state.ordersReducer);
    const popularCategories: Map<number, number> = new Map();

    orders.forEach(order => {
        order.orderedItems.forEach((item: ICart) => {
            if (popularCategories.has(item.categoryId)) {
                popularCategories.set(item.categoryId, popularCategories.get(item.categoryId)! + 1);
            } else {
                popularCategories.set(item.categoryId, 1);
            }
        });
    });

    const sortedEntries = Array.from(popularCategories.entries()).sort((a, b) => b[1] - a[1]);
    const sortedIds = sortedEntries.map(entry => entry[0]);
    const sortedCategories = sortedIds.map(id => searchCategoryById(categories, id.toString()));

    return sortedCategories as ICategory[];
};

export default getPopularCategories;
