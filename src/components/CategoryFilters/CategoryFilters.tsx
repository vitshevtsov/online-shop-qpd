import React from 'react';
import List from '../List/List';
import CheckFilter from '../UI/CheckFilter/CheckFilter';
import RangeFilter from '../UI/RangeFilter/RangeFilter';
import 'rc-slider/assets/index.css';


const CategoryFilters = (props: any) => {

    const renderCategoryFilters = (propertyName: string) => {
        if (propertyName === 'price') {
            return <RangeFilter
                key='price'
                priceRange={props.priceRange}
                maxPriceRange={props.maxPriceRange}
                onChangeMinPrice={props.onChangeMinPrice}
                onChangeMaxPrice={props.onChangeMaxPrice}
                onChangePriceRange={props.onChangePriceRange}
            />;
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
            <div className="row">
                <div className="col">
                    <h5>Фильтры</h5>
                </div>
                <div className="col">
                    <small className=" btn btn-sm text-warning" onClick={props.onClickClearFilters}>Очистить</small>
                </div>
            </div>
            <List items={props.category.properties} renderItem={renderCategoryFilters} />
        </>
    );
};

export default CategoryFilters;
