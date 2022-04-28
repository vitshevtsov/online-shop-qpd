const searchCategoryById = (array: any[], id: any) => {
    let result = array.find((item: any) => item.id === Number(id));
    if (result) {
        return result;
    }
    for (let i = 0; i < array.length; i ++) {
        if (array[i].children) {
            result = searchCategoryById(array[i].children, id);
        }
        if (result) {
            return result;
        }
    }
    return false;
};

export default searchCategoryById;
