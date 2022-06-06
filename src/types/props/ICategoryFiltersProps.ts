import React from "react";
import { ICheckboxesState } from "types/state/ICheckboxesState";
import { ICategory } from "../models/ICategory";
import { IProduct } from "../models/IProduct";

export interface ICategoryFiltersProps {
    priceRange: number[];
    maxPriceRange: number[];
    checkboxesState: ICheckboxesState;
    onChangeMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePriceRange: (e: number | number[]) => void;
    onChangeCheckboxesState: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickClearFilters: () => void;
    categoryProducts: IProduct[];
    category: ICategory;
    classNameRootDiv?: string;
}
