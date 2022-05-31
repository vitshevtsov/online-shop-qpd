import { ICategory } from "../models/ICategory";
import { IProduct } from "../models/IProduct";

export interface ICategoryFiltersProps {
    priceRange: number[];
    maxPriceRange: number[];
    onChangeMinPrice: (e: any) => void;
    onChangeMaxPrice: (e: any) => void;
    onChangePriceRange: (e: any) => void;
    onChangeCheckboxesState: (e: any) => void;
    onClickClearFilters: (e: any) => void;
    categoryProducts: IProduct[];
    category: ICategory;
}
