const getTotalPages = (items: unknown[], limit: number) => {
    
    return Math.ceil(items.length / limit);
};

export default getTotalPages;
