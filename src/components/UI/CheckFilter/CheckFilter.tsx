import React from 'react';
import { ICheckFilterProps } from 'types/props/ICheckFilterProps';
import mapPropertyName from 'utils/mapPropertyName';
import List from 'components/List/List';

const CheckFilter = ({
    filterTitle,
    onChangeCheckboxesState,
    checkboxesState,
    variants
}: ICheckFilterProps) => {
    
    const renderPropertyVariant = (propertyVariant: string) => {
        return (
            <div
                key={propertyVariant}
                className="form-check"
            >
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={propertyVariant}
                    name={filterTitle}
                    onChange={onChangeCheckboxesState}
                    checked={checkboxesState?.[filterTitle]?.[propertyVariant] ?? false}
                />
                <label
                    className="form-check-label"
                    htmlFor={filterTitle}
                >
                    {propertyVariant}
                </label>
            </div>);
    };
    
    return (
        <>
            <p className="mt-3">{mapPropertyName(filterTitle)}</p>
            <List
                items={variants}
                renderItem={renderPropertyVariant}
            />
        </>
    );
};

export default CheckFilter;
