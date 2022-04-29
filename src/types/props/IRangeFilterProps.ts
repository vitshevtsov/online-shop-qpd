export interface IRangeFilterProps {
    maxPriceRange: number[];
    priceRange: number[];
    onChangeMinPrice: (e: any) => void;
    onChangeMaxPrice: (e: any) => void;
    onChangePriceRange: (e: any) => void;
}