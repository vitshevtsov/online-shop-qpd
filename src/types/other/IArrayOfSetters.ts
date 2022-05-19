import React from "react";

interface IInputSetter {
    value: React.Dispatch<React.SetStateAction<any>>;
    isDirty?: React.Dispatch<React.SetStateAction<any>>;
    error?: React.Dispatch<React.SetStateAction<any>>;

}

export interface IObjOfSetters {
    [inputId: string]: IInputSetter;
} 
