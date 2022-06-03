import { IProduct } from "types/models/IProduct";

const searchProductsContainsQuery = (arr: IProduct[], searchQuery: string) => {
    const result: IProduct[] = [];
    arr.forEach((item: IProduct) => {
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            result.push(item);
        }

        const propertiesEntries = Object.entries(item.properties);
        propertiesEntries.forEach((propertyEntry: any[]) => {
            if (propertyEntry[0] !== 'price') {
                if (propertyEntry[1].toLowerCase().includes(searchQuery.toLowerCase())) {
                    result.push(item);
                }
            }
        });

    });
    if (result.length) {
        // удаляем дубликаты на случай, если поисковый запрос содержится в нескольких параметрах / названии
        return Array.from(new Set(result));
    }
};
export default searchProductsContainsQuery;
