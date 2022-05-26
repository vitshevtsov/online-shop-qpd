import React from 'react';
import getPagesArray from 'utils/getPagesArray';
import getTotalPages from 'utils/getTotalPages';

const Pagination = (props: any) => {
    const totalPages = getTotalPages(props.items, props.limit);
    const pagesArray = getPagesArray(totalPages);
    const pagesPagination = pagesArray.map(num => {
        return <li
            key={num}
            className="page-item"
            
        >
            <a
                className="page-link"
                href="#"
            >
                {num}
            </a>
        </li>;
    });

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pagesPagination}
                <li className="page-item">
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
