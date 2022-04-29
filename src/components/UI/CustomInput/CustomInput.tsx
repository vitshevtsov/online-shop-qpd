import React from 'react';

const CustomInput = (props: any) => {
    const errorDiv = <div className="errorDiv">{props.error}</div>;

    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{props.label}</label>
            <input 
                type={props.type} 
                className={props.className} 
                id="exampleFormControlInput1" 
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
