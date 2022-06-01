export interface IPropertyState {
    [propertyVariant: string]: boolean;
}

export interface ICheckboxesState {
    [propertyName: string]: IPropertyState;
}
