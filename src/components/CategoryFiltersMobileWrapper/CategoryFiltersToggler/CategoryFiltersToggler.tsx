import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const CategoryFiltersToggler = () => {
    return (
        <button
            type="button"
            className="btn btn-md btn-outline-primary d-md-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCategoryFilters"
            aria-controls="offcanvasCategoryFilters"
        >
            <FontAwesomeIcon
                className="icon"
                size="lg"
                color="var(--backgroundDark)"
                icon={faFilter}
            />
            {' Фильтры'}
        </button>

    );
};

export default CategoryFiltersToggler;
