import { useAppSelector } from "../hooks/redux";
import searchCategory from "./searchCategory";

const getPopularCategories = () => {
    const {categories} = useAppSelector(state => state.categoriesReducer);
    
    const {orders} = useAppSelector(state => state.ordersReducer);
    const popularCategories = new Map();

    orders.forEach(order => {
        order.orderedItems.forEach((item: any) => {
            if (popularCategories.has(item.categoryId)) {
                popularCategories.set(item.categoryId, popularCategories.get(item.categoryId) + 1);
            } else {
                popularCategories.set(item.categoryId, 1);
            }
        });
    });

    const sortedEntries = Array.from(popularCategories.entries()).sort((a, b) => b[1] - a[1]);
    const sortedIds = sortedEntries.map(entry => entry[0]);
    // sortedIds.forEach(item => console.log(searchCategory(categories, item).name));
    const sortedCategories = sortedIds.map(id => searchCategory(categories, id));

    return sortedCategories;
};

export default getPopularCategories;
