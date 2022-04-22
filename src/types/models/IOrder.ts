import { ICart } from "./ICart";

export interface IOrder {
    id: number;
    orderedItems: ICart[];
    fullName: string;
    fullPrice: number;
    phoneNumber: number;
    secondPhoneNumber?: number;
    city: string;
    street: string;
}