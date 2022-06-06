import { ICheckboxesState } from "types/state/ICheckboxesState";

export interface ICheckFilterProps {
    filterTitle: string;
    variants: string[];
    checkboxesState: ICheckboxesState;
    onChangeCheckboxesState: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
