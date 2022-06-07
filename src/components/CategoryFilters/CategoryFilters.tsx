import React from 'react';
import List from 'components/List/List';
import CheckFilter from 'components/UI/CheckFilter/CheckFilter';
import RangeFilter from 'components/UI/RangeFilter/RangeFilter';
import 'rc-slider/assets/index.css';
import { ICategoryFiltersProps } from 'types/props/ICategoryFiltersProps';
import { IProduct } from 'types/models/IProduct';

/**
 * Компонент рендерит боковую панель фильтров для списка характеристик текущей категории
 * Для цены - компонент RangeFilter, для иных - лист чекбоксов (компонент CheckFilter)
 */
const CategoryFilters = ({
    priceRange,
    maxPriceRange,
    onChangeMinPrice,
    onChangeMaxPrice,
    onChangePriceRange,
    categoryProducts,
    checkboxesState,
    onChangeCheckboxesState,
    classNameRootDiv,
    onClickClearFilters,
    category
}: ICategoryFiltersProps) => {

    const renderCategoryFilters = (propertyName: string) => {
        if (propertyName === 'price') {
            return <RangeFilter
                key='price'
                priceRange={priceRange}
                maxPriceRange={maxPriceRange}
                onChangeMinPrice={onChangeMinPrice}
                onChangeMaxPrice={onChangeMaxPrice}
                onChangePriceRange={onChangePriceRange}
            />;
        }

        const propertyVariants = Array.from(new Set(categoryProducts.map((item: IProduct) => item.properties[propertyName])));

        return <CheckFilter 
            key={propertyName} 
            filterTitle={propertyName} 
            variants={propertyVariants as string[]}
            checkboxesState={checkboxesState}
            onChangeCheckboxesState={onChangeCheckboxesState}
        />;    
    };

    return (
        <div className={classNameRootDiv}>
            <div className="row">
                <div className="col">
                    <h5>Фильтры</h5>
                </div>
                <div className="col">
                    <small
                        className=" btn btn-sm text-warning"
                        onClick={onClickClearFilters}
                    >Очистить
                    </small>
                </div>
            </div>
            {category.properties && <List
                items={category.properties}
                renderItem={renderCategoryFilters}
            />}
        </div>
    );
};

export default CategoryFilters;
