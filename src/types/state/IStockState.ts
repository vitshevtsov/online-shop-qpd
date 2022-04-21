import {IStockItem} from '../models/IStockItem';

export interface IStockState {
    stock: IStockItem[];
    isLoading?: boolean;
    error?: string;
}