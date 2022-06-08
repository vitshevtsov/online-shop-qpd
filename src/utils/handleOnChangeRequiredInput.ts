import { IInputValueSetter } from "types/other/IInputValueSetter";

const handleOnChangeRequiredInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: IInputValueSetter,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setIsDirty: React.Dispatch<React.SetStateAction<boolean>>
) => {

    setState(e.target.value);
    setIsDirty(true);

    if (e.target.value) {
        setError('');
    } else {
        setError('Поле обязательно для заполнения');
    }
};

export default handleOnChangeRequiredInput;
