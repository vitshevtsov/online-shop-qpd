const handleOnChangeRequiredInput = (e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<any>> , setError: React.Dispatch<React.SetStateAction<any>> ) => {
    setState(e.target.value);
    if (e.target.value) {
        setError('');
    } else {
        setError('Поле обязательно для заполнения');
    }
};

export default handleOnChangeRequiredInput;