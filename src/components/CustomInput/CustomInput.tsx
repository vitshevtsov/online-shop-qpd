import React from 'react';
import styles from './CustomInput.module.css';


const CustomInput = (props: any) => {
    const errorDiv = <div className={styles.errorDiv}>{props.error}</div>;

    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{props.label}</label>
            <input 
                type="text" 
                className="form-control" 
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
