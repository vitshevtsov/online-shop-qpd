import React from 'react';
import mapPropertyName from '../../../utils/mapPropertyName';
import List from '../../List/List';

const CheckFilter = (props: any) => {

    const renderPropertyVariant = (propertyVariant: string) => {
        return (
            <div key={propertyVariant} className="form-check">
                <input className="form-check-input" type="checkbox" value={propertyVariant} name={props.filterTitle} onChange={props.onChangeCheckboxes}/>
                <label className="form-check-label" htmlFor={props.filterTitle}>
                    {propertyVariant}
                </label>
            </div>);
    };
    return (
        <>
            <p>{mapPropertyName(props.filterTitle)}</p>
            <List items={props.variants} renderItem={renderPropertyVariant} />
        </>

    );
};

export default CheckFilter;