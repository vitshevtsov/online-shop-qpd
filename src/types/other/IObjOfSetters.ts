import React from "react";
import { IInputValueSetter } from "./IInputValueSetter";

interface IInputSetter {
    value: IInputValueSetter;
    isDirty?: React.Dispatch<React.SetStateAction<boolean>>;
    error?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IObjOfSetters {
    [inputId: string]: IInputSetter;
} 
