import React from "react";

export interface ICustominputProps {
    error?: string;
    label: string;
    type: string;
    className: string;
    placeholder: string;
    value: string | number;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isDirty?: boolean;
    isRequired?: boolean;
    id?: string;
}
