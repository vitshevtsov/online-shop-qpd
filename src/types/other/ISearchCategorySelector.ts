import { ICategory } from "types/models/ICategory";

export type ISearchCategorySelector = (categories: ICategory[], categoryId: string | undefined) => ICategory | undefined;