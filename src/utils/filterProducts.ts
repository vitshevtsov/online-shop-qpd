const filterProducts = (productsArr: any[], priceRange: number[], filterQuery: any) => {
    let result = productsArr;
    for (const property in filterQuery) {
        if (filterQuery[property].length) {
            result = result.filter((item: any) => filterQuery[property].includes(item.properties[property]));
        }
    }
    return result.filter(product => product.properties.price >= priceRange[0] && product.properties.price <= priceRange[1]);
};

export default filterProducts;