const mapPropertyName = (property: string): string => {

    // todo types
    // https://stackoverflow.com/questions/56568423/typescript-no-index-signature-with-a-parameter-of-type-string-was-found-on-ty
    const propertiesMapperRuEng: any = {
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
