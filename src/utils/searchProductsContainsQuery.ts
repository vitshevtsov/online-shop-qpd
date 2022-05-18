const searchProductsContainsQuery = (arr: any, searchQuery: string) => {
    const result: any[] = [];
    arr.forEach((item: any) => {
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
