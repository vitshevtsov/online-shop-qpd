import React from 'react';
import { IPaginationProps } from 'types/props/IPaginationProps';
import getPagesArray from 'utils/getPagesArray';
import getTotalPages from 'utils/getTotalPages';

const Pagination = ({
    items,
    limit,
    activePage,
    onClickPageNum,
    onClickPagePrev,
    onClickPageNext
}: IPaginationProps) => {
    
    const totalPages = getTotalPages(items, limit);
    const pagesArray = getPagesArray(totalPages);

    const paginationControl = pagesArray.map(num => {
        return <li
            key={num}
            className={activePage === num ? "page-item active" : "page-item"}
        >
            <a
                className="page-link"
                href="#"
                onClick={onClickPageNum}
            >
                {num}
            </a>
        </li>;
    });

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={activePage === 1 ? "page-item disabled" : "page-item"}>
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        onClick={onClickPagePrev}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {paginationControl}
                <li className={activePage === totalPages ? "page-item disabled" : "page-item"}>
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        onClick={onClickPageNext}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
