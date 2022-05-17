import React, { useState } from 'react';
import { ICustominputProps } from '../../../types/props/ICustomInputProps';


const CustomInput = (props: ICustominputProps) => {
    const [isDirty, setIsDirty] = useState(props.isDirty);
    const handleOnFocus = () => {
        setIsDirty(true);
    };

    const errorDiv = <div className="errorDiv">{props.error}</div>;
    const requiredSign = <span>*</span>;

    return (
        <div className="mb-3">
            <label 
                htmlFor={props.id} 
                className="form-label"
            >
                {props.label}
                {props.isRequired && requiredSign}
            </label>
            <input 
                type={props.type} 
                className={props.className} 
                id={props.id} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.handleOnChange}
                onFocus={handleOnFocus}
            />
            {isDirty && errorDiv}
        </div>
    );
};

export default CustomInput;
