import { ICart } from "./ICart";

export interface IOrder {
    id: number;
    orderedItems: ICart[];
    fullName: string;
    fullPrice: number;
    phone: number;
    secondPhone?: number;
    city: string;
    street: string;
}