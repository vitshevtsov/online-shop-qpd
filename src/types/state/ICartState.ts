import {ICart} from '../models/ICart';

export interface ICartState {
    cart: ICart[] | [];
    isLoading?: boolean;
    error?: string;
}