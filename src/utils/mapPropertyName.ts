import {IPropertiesMapperRuEng} from '../types/other/IPropertiesMapperRuEng';

const mapPropertyName = (property: string): string => {
    
    const propertiesMapperRuEng: IPropertiesMapperRuEng = {
        price: 'Цена',
        brand: 'Бренд',
        color: 'Цвет',
        RAM: 'Оперативная память',
        series: 'Серия',
        chipset: 'Чипсет',
        diagonal: 'Диагональ',
        power: 'Мощность',
        height: 'Высота',
        volume: 'Объем',
    };

    return propertiesMapperRuEng[property];
};

export default mapPropertyName;
