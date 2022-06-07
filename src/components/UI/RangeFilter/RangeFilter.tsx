import Slider from 'rc-slider';
import React from 'react';
import { IRangeFilterProps } from 'types/props/IRangeFilterProps';


const RangeFilter = ({
    maxPriceRange,
    priceRange,
    onChangeMinPrice,
    onChangeMaxPrice,
    onChangePriceRange
}: IRangeFilterProps) => {
    
    return (
        <>
            <p className="mt-3">Цена, руб.</p>
            <div className="row g-3">
                <div className="col">
                    <input 
                        type="text"
                        className="form-control"
                        aria-label="Min price"
                        min={maxPriceRange[0]}
                        max={maxPriceRange[1]}
                        value={priceRange[0] ?? ''} 
                        onChange={onChangeMinPrice}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Max price"
                        min={maxPriceRange[0]}
                        max={maxPriceRange[1]}
                        value={priceRange[1] ?? ''}
                        onChange={onChangeMaxPrice}
                    />
                </div>
            </div>
            <br />
            <Slider 
                className="mb-3"
                range
                min={maxPriceRange[0]}
                max={maxPriceRange[1]}
                value={priceRange ?? ''}
                onChange={onChangePriceRange}
            />
        </>
    );
};  

export default RangeFilter;
