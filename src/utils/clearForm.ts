/* eslint-disable no-prototype-builtins */
import { initInputErrorState } from "constants/initInputErrorState";
import { IObjOfSetters } from "types/other/IObjOfSetters";

/**
 * Функция очистки формы. Принимает объект сеттеров состояния
 * по ключу, равному id инпута, в этом объекте хранятся сеттеры для:
 * значений инпутов, состояния isDirty и текста ошибки валидации.
 * Устанавливает начальные состояния для каждого сеттера, ничего не возвращает
 */
const clearForm = (objOfSetters: IObjOfSetters) => {

    const entriesArr = Object.entries(objOfSetters);
    
    entriesArr.forEach(entry => {
        entry[1].value('');
        if (entry[1].hasOwnProperty('isDirty') && entry[1].hasOwnProperty('error')) {
            entry[1].isDirty?.(false);
            entry[1].error?.(initInputErrorState);
        }
    });
};

export default clearForm;
