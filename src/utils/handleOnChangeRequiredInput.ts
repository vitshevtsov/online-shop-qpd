import { IInputValueSetter } from "types/other/IInputValueSetter";

const handleOnChangeRequiredInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: IInputValueSetter,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    setState(e.target.value);
    if (e.target.value) {
        setError('');
    } else {
        setError('Поле обязательно для заполнения');
    }
};

export default handleOnChangeRequiredInput;
