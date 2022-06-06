import Slider from 'rc-slider';
import React from 'react';
import { IRangeFilterProps } from 'types/props/IRangeFilterProps';


const RangeFilter = (props: IRangeFilterProps) => {
    return (
        <>
            <p className="mt-3">Цена, руб.</p>
            <div className="row g-3">
                <div className="col">
                    <input 
                        type="text"
                        className="form-control"
                        aria-label="Min price"
                        min={props.maxPriceRange[0]}
                        max={props.maxPriceRange[1]}
                        value={props.priceRange[0] ?? ''} 
                        onChange={props.onChangeMinPrice}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Max price"
                        min={props.maxPriceRange[0]}
                        max={props.maxPriceRange[1]}
                        value={props.priceRange[1] ?? ''}
                        onChange={props.onChangeMaxPrice}
                    />
                </div>
            </div>
            <br />
            <Slider 
                className="mb-3"
                range
                min={props.maxPriceRange[0]}
                max={props.maxPriceRange[1]}
                value={props.priceRange ?? ''}
                onChange={props.onChangePriceRange}
            />
        </>
    );
};  

export default RangeFilter;
