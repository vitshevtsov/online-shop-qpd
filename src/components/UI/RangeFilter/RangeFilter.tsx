import Slider from 'rc-slider';
import React from 'react';

const RangeFilter = (props: any) => {
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
                        value={props.priceRange[0]} 
                        onChange={props.onChangeMinPrice} />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Max price"
                        min={props.maxPriceRange[0]}
                        max={props.maxPriceRange[1]}
                        value={props.priceRange[1]}
                        onChange={props.onChangeMaxPrice}
                    />
                </div>
            </div>
            <br />
            {/* <label htmlFor="customRange1" className="form-label">Example range</label>
            <input type="range" className="form-range" id="customRange1" min="0" max="50" defaultValue={['20', '40']} /> */}
            <Slider 
                className="mb-3"
                range 
                min={props.maxPriceRange[0]}
                max={props.maxPriceRange[1]}
                value={props.priceRange}
                onChange={props.onChangePriceRange}
            />
        </>
    );
};

    

export default RangeFilter;
