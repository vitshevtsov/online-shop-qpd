const mapPropertyName = (property: string) => {
    let result;
    switch(property) {
    case 'price': result = 'Цена';
        break;
    case 'brand': result = 'Бренд';
        break;
    case 'color': result = 'Цвет';
        break;
    case 'RAM': result = 'Оперативная память';
        break;
    case 'series': result = 'Серия';
        break;
    case 'chipset': result = 'Чипсет';
        break;
    case 'diagonal': result = 'Диагональ';
        break;
    case 'power': result = 'Мощность';
        break;
    case 'height': result = 'Высота';
        break;
    case 'volume': result = 'Объем';
        break;
    }
    return result;
};

export default mapPropertyName;
