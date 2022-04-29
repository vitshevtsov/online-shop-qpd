import React from 'react';
import { ICustominputProps } from '../../../types/props/ICustomInputProps';


const CustomInput = (props: ICustominputProps) => {
    const errorDiv = <div className="errorDiv">{props.error}</div>;

    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">{props.label}</label>
            <input 
                type={props.type} 
                className={props.className} 
                id={props.id} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.handleOnChange}
                onFocus={props.handleOnFocus}
                
            />
            {props.isDirty && errorDiv}
        </div>
    );
};

export default CustomInput;
