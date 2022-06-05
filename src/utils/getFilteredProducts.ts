import { IProduct } from "types/models/IProduct";
import { ICheckboxesState } from "types/state/ICheckboxesState";

const getFilteredProducts = (productsArr: IProduct[], priceRange: number[], checkboxesState: ICheckboxesState) => {
    let result = productsArr;

    for (const property in checkboxesState) {
        // создадим массив уникальных значений (true или false) для каждого свойства.
        // если длина массива === 1, значит выбраны все чекбоксы (все true) либо не выбран ни один (все false)
        // в этом случае не фильтруем результат по данному свойству
        // если длина массива === 2, значит оставляем только товары, соотв-е выбранным чекбоксам
        const valuesSet = Array.from(new Set(Object.values(checkboxesState[property])));
        if (valuesSet.length === 2) {
            result = result.filter((item: IProduct) => checkboxesState[property][item.properties[property]!]);
        }
    }

    return result.filter(product => product.properties.price >= priceRange[0] && product.properties.price <= priceRange[1]);
};

export default getFilteredProducts;
