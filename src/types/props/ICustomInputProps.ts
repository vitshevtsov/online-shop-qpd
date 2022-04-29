export interface ICustominputProps {
    error?: string;
    label: string;
    type: string;
    className: string;
    placeholder: string;
    value: string | number;
    handleOnChange: (e: any) => void;
    handleOnFocus?: () => void;
    isDirty?: boolean;
    id?: string;
}
