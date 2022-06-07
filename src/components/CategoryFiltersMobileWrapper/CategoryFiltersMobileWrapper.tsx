import CategoryFilters from 'components/CategoryFilters/CategoryFilters';
import React from 'react';
import { ICategoryFiltersProps } from 'types/props/ICategoryFiltersProps';

const CategoryFiltersMobileWrapper = (props: ICategoryFiltersProps) => {
    
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasCategoryFilters"
            aria-labelledby="offcanvasCategoryFiltersLabel"
        >
            <div className="offcanvas-header">
                <h5
                    className="offcanvas-title"
                    id="offcanvasCategoryFiltersLabel"
                >Каталог
                </h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                </button>
            </div>
            <div className="offcanvas-body">
                <CategoryFilters
                    category={props.category} 
                    categoryProducts={props.categoryProducts}
                    priceRange={props.priceRange}
                    maxPriceRange={props.maxPriceRange}
                    checkboxesState={props.checkboxesState}
                    onChangeCheckboxesState={props.onChangeCheckboxesState}
                    onChangeMinPrice={props.onChangeMinPrice}
                    onChangeMaxPrice={props.onChangeMaxPrice}
                    onChangePriceRange={props.onChangePriceRange}
                    onClickClearFilters={props.onClickClearFilters}
                    classNameRootDiv={props.classNameRootDiv}
                />
            </div>  
        </div>
    );
};

export default CategoryFiltersMobileWrapper;
