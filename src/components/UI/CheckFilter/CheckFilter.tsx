import React from 'react';
import { ICheckFilterProps } from 'types/props/ICheckFilterProps';
import mapPropertyName from 'utils/mapPropertyName';
import List from 'components/List/List';

// const CheckFilter = (props: ICheckFilterProps) => {
const CheckFilter = (props: any) => {

    const renderPropertyVariant = (propertyVariant: string) => {
        // console.log(propertyVariant);
        console.log(props.checkboxesState);
        return (
            <div
                key={propertyVariant}
                className="form-check"
            >
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={propertyVariant}
                    name={props.filterTitle}
                    onChange={props.onChangeCheckboxesState}
                    checked={props.checkboxesState[propertyVariant]}
                    
                />
                <label
                    className="form-check-label"
                    htmlFor={props.filterTitle}
                >
                    {propertyVariant}
                </label>
            </div>);
    };
    return (
        <>
            <p className="mt-3">{mapPropertyName(props.filterTitle)}</p>
            <List
                items={props.variants}
                renderItem={renderPropertyVariant}
            />
        </>
    );
};

export default CheckFilter;
