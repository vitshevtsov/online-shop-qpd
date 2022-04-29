import { IProduct } from "../models/IProduct";

export interface IProductsList {
    products: IProduct[];
    rootDivClassName?: string;
}