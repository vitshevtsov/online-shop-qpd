import React from 'react';
import List from 'components/List/List';
import CheckFilter from 'components/UI/CheckFilter/CheckFilter';
import RangeFilter from 'components/UI/RangeFilter/RangeFilter';
import 'rc-slider/assets/index.css';
import { ICategoryFiltersProps } from 'types/props/ICategoryFiltersProps';

/**
 * Компонент рендерит боковую панель фильтров для списка характеристик текущей категории
 * Для цены - компонент RangeFilter, для иных - лист чекбоксов (компонент CheckFilter)
 */
const CategoryFilters = (props: ICategoryFiltersProps) => {

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
                    <small
                        className=" btn btn-sm text-warning"
                        onClick={props.onClickClearFilters}
                    >Очистить
                    </small>
                </div>
            </div>
            {props.category.properties && <List
                items={props.category.properties}
                renderItem={renderCategoryFilters}
            />}
        </>
    );
};

export default CategoryFilters;
