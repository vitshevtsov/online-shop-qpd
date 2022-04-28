const searchCategoriesContainsQuery = (arr: any, searchQuery: string) => {
    const result: any[] = [];
    arr.forEach((item: any) => {
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            result.push(item);
        }
        if (item.children) {
            const childResult = searchCategoriesContainsQuery(item.children, searchQuery);
            if (childResult) {
                result.push(...childResult);
            }
        }
    });
    if (result.length) {
        return result;
    }
};

export default searchCategoriesContainsQuery;
