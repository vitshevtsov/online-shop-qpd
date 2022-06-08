import React from "react";
import { ICheckboxesState } from "types/state/ICheckboxesState";
import { ICategory } from "../models/ICategory";
import { IProduct } from "../models/IProduct";

export interface ICategoryFiltersProps {
    priceRange: number[];
    maxPriceRange: number[];
    checkboxesState: ICheckboxesState;
    onChangePriceRange: (e: React.ChangeEvent<HTMLInputElement> | number | number[]) => void;
    onChangeCheckboxesState: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickClearFilters: () => void;
    categoryProducts: IProduct[];
    category: ICategory;
    classNameRootDiv?: string;
}
