import CategoryFilters from 'components/CategoryFilters/CategoryFilters';
import React from 'react';
import { ICategoryFiltersProps } from 'types/props/ICategoryFiltersProps';

const CategoryFiltersMobileWrapper = ({
    category,
    categoryProducts,
    priceRange,
    maxPriceRange,
    checkboxesState,
    onChangeCheckboxesState,
    onChangeMaxPrice,
    onChangeMinPrice,
    onChangePriceRange,
    onClickClearFilters,
    classNameRootDiv
}: ICategoryFiltersProps) => {
    
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
                    category={category} 
                    categoryProducts={categoryProducts}
                    priceRange={priceRange}
                    maxPriceRange={maxPriceRange}
                    checkboxesState={checkboxesState}
                    onChangeCheckboxesState={onChangeCheckboxesState}
                    onChangeMinPrice={onChangeMinPrice}
                    onChangeMaxPrice={onChangeMaxPrice}
                    onChangePriceRange={onChangePriceRange}
                    onClickClearFilters={onClickClearFilters}
                    classNameRootDiv={classNameRootDiv}
                />
            </div>  
        </div>
    );
};

export default CategoryFiltersMobileWrapper;
