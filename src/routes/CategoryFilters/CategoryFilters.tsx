import React from 'react';
import List from '../../components/List/List';
import CheckFilter from '../../components/UI/CheckFilter/CheckFilter';
import RangeFilter from '../../components/UI/RangeFilter/RangeFilter';

const CategoryFilters = (props: any) => {

    const renderCategoryFilters = (propertyName: string) => {
        if (propertyName === 'price') {
            return <RangeFilter key='price' />;
        }
        const propertyVariants = Array.from(new Set(props.categoryProducts.map((item: any) => item.properties[propertyName])));
        return <CheckFilter 
            key={propertyName} 
            filterTitle={propertyName} 
            variants={propertyVariants}
            onChangeCheckboxes={props.onChangeCheckboxes}
        />;
    };

    return (
        <>
            <h5>Фильтры</h5>
            <List items={props.category.properties} renderItem={renderCategoryFilters} />
        </>
    );
};

export default CategoryFilters;