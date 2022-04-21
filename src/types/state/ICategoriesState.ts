import {ICategory} from '../models/ICategory';

export interface ICategoriesState {
    categories: ICategory[];
    isLoading?: boolean;
    error?: string;
}