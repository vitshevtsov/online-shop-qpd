import React from 'react';
import mapPropertyName from '../../../utils/mapPropertyName';

const CheckFilter = (props: any) => {
    return (
        <>
            <p>{mapPropertyName(props.filterTitle)}</p>
            {props.variants.map((propertyVariant: string) => {
                return (
                    <div key={propertyVariant} className="form-check">
                        <input className="form-check-input" type="checkbox" value={propertyVariant} name={props.filterTitle} onChange={props.onChangeCheckboxes}/>
                        <label className="form-check-label" htmlFor={props.filterTitle}>
                            {propertyVariant}
                        </label>
                    </div>);
            })}
        </>

    );
};

export default CheckFilter;