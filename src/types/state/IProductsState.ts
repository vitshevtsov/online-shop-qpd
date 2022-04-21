import {IProduct} from '../models/IProduct';

export interface IProductsState {
    products: IProduct[];
    isLoading?: boolean;
    error?: string;
}