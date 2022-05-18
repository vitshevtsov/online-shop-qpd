import { ICategory } from "../types/models/ICategory";

/**
 * Функция поиска категории по id, принимает массив категорий и id, возвращает
 * объект найденной категории, либо undefined, если категория не найдена
 */
const searchCategoryById = (array: ICategory[], id: string | undefined): ICategory | undefined => {
    let result = array.find((item: ICategory) => item.id === Number(id));
    if (result) {
        return result;
    }
    for (let i = 0; i < array.length; i ++) {
        if (array[i].children) {
            result = searchCategoryById(array[i].children as ICategory[], id);
        }
        if (result) {
            return result;
        }
    }
};

export default searchCategoryById;
