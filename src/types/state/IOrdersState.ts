import {IOrder} from '../models/IOrder';

export interface IOrdersState {
    orders: IOrder[] | [];
    isLoading?: boolean;
    error?: string;
}