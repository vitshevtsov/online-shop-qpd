export interface IRangeFilterProps {
    maxPriceRange: number[];
    priceRange: number[];
    onChangePriceRange: (e: React.ChangeEvent<HTMLInputElement> | number | number[]) => void;
}
