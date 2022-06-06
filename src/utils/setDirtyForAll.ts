/* eslint-disable no-prototype-builtins */
import { IObjOfSetters } from "types/other/IObjOfSetters";

/**
 * Функция смены состояния всех валидируемых инпутов на Dirty (при сабмите).
 * Принимает объект сеттеров состояния по ключу, равному id инпута,
 * в этом объекте хранятся сеттеры для:
 * значений инпутов, состояния isDirty и текста ошибки валидации.
 * Устанавливает состояние для каждого валидируемого инпута в true, ничего не возвращает
 */
const setDirtyForAll = (objOfSetters: IObjOfSetters) => {
    const entriesArr = Object.entries(objOfSetters);
    entriesArr.forEach(entry => {
        if (entry[1].hasOwnProperty('isDirty')) {
            entry[1].isDirty?.(true);
        }
    });
};

export default setDirtyForAll;
