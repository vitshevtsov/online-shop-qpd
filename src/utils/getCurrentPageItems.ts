const getCurrentPageItems = (items: unknown[], limit: number, page: number) => {
    const result = [...items].splice((page - 1) * limit);
    result.length = limit;
    return result.filter(Boolean); // фильтр убирает пустые индексы, если элементов меньше чем лимит
};

export default getCurrentPageItems;
