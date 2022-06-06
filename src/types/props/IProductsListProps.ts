import { MutableRefObject } from "react";
import { IProduct } from "../models/IProduct";

export interface IProductsList {
    products: IProduct[];
    rootDivClassName?: string;
    titleRef?: MutableRefObject<HTMLDivElement | null>;
}