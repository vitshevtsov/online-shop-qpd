import { ICategory } from "types/models/ICategory";

const searchCategoriesContainsQuery = (arr: ICategory[], searchQuery: string) => {
    const result: ICategory[] = [];
    arr.forEach((item: ICategory) => {
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
