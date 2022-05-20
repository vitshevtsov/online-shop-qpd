import React from "react";

type IInputValueSetter = React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<string | number>>;

interface IInputSetter {
    value: IInputValueSetter;
    isDirty?: React.Dispatch<React.SetStateAction<boolean>>;
    error?: React.Dispatch<React.SetStateAction<string>>;

}

export interface IObjOfSetters {
    [inputId: string]: IInputSetter;
} 
