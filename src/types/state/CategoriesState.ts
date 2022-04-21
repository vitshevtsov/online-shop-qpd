import {ICategory} from '../models/ICategory';

export interface CategoriesState {
    categories: ICategory[];
    isLoading?: boolean;
    error?: string;
}