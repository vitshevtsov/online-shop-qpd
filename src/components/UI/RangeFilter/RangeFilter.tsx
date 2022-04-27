import Slider from 'rc-slider';
import React from 'react';

const RangeFilter = () => {
    return (
        <>
            <p>Цена, руб.</p>
            <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="От" aria-label="Min price" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="До" aria-label="Max price" />
                </div>
            </div>
            <br />
            {/* <label htmlFor="customRange1" className="form-label">Example range</label>
            <input type="range" className="form-range" id="customRange1" min="0" max="50" defaultValue={['20', '40']} /> */}
            <Slider range min={20} max={40} defaultValue={[20, 40]}/>
        </>
    );
};

    

export default RangeFilter;
