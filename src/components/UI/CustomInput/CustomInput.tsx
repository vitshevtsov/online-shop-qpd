import React from 'react';
import { ICustominputProps } from 'types/props/ICustomInputProps';


const CustomInput = ({
    error,
    id,
    label,
    isRequired,
    type,
    className,
    placeholder,
    value,
    handleOnChange,
    isDirty
}: ICustominputProps) => {

    const errorDiv = <div className="errorDiv">{error}</div>;
    
    const requiredSign = <span>*</span>;

    return (
        <div className="mb-3">
            <label 
                htmlFor={id} 
                className="form-label"
            >
                {label}
                {isRequired && requiredSign}
            </label>
            <input 
                type={type} 
                className={className} 
                id={id} 
                placeholder={placeholder} 
                value={value}
                onChange={handleOnChange}
            />
            {isDirty && errorDiv}
        </div>
    );
};

export default CustomInput;
