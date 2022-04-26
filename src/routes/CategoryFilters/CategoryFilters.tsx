import React from 'react';
import CheckFilter from '../../components/UI/CheckFilter/CheckFilter';
import RangeFilter from '../../components/UI/RangeFilter/RangeFilter';
import mapPropertyName from '../../utils/mapPropertyName';

const CategoryFilters = (props: any) => {
    const categoryFilters = props.category.properties.map((propertyName: string) => {

        if (propertyName === 'price') {
            return <RangeFilter key='price' />;
        }
        const propertyVariants = Array.from(new Set(props.categoryProducts.map((item: any) => item.properties[propertyName])));
        return <CheckFilter key={propertyName} filterTitle={mapPropertyName(propertyName)} properties={propertyVariants} />;

    });

    return (
        <>
            <h5>Фильтры</h5>
            {categoryFilters}
        </>
    );
};

export default CategoryFilters;