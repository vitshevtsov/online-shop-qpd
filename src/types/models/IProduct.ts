interface IProperty {
    price: number;
    brand: string;
    [propertyName: string]: string | number | undefined;
}

export interface IProduct {
    id: number;
    categoryId: number;
    name: string;
    imgPath: string;
    properties: IProperty;
}
