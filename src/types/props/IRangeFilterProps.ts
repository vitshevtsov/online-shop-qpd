export interface IRangeFilterProps {
    maxPriceRange: number[];
    priceRange: number[];
    onChangeMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePriceRange: (e: number | number[]) => void;
}
