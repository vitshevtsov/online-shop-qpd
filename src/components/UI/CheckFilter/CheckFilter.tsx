import React from 'react';

const CheckFilter = (props: any) => {
    return (
        <>
            <p>{props.filterTitle}</p>
            {props.properties.map((property: any) => {
                return (
                    <div key={property} className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id={`check-${property}`} />
                        <label className="form-check-label" htmlFor={`check-${property}`}>
                            {property}
                        </label>
                    </div>);
            })}
        </>

    );
};

export default CheckFilter;