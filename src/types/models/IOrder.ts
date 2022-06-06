import { ICart } from "./ICart";

export interface IOrder {
    id: number;
    orderedItems: ICart[];
    fullName: string;
    fullPrice: number;
    phone: number | string;
    secondPhone?: number | string;
    city: string;
    street: string;
}