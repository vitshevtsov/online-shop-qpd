import React from 'react';
import { IPaginationProps } from 'types/props/IPaginationProps';
import getPagesArray from 'utils/getPagesArray';
import getTotalPages from 'utils/getTotalPages';

const Pagination = (props: IPaginationProps) => {
    
    const totalPages = getTotalPages(props.items, props.limit);
    const pagesArray = getPagesArray(totalPages);

    const paginationControl = pagesArray.map(num => {
        return <li
            key={num}
            className={props.activePage === num ? "page-item active" : "page-item"}
        >
            <a
                className="page-link"
                href="#"
                onClick={props.onClickPageNum}
            >
                {num}
            </a>
        </li>;
    });

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={props.activePage === 1 ? "page-item disabled" : "page-item"}>
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        onClick={props.onClickPagePrev}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {paginationControl}
                <li className={props.activePage === totalPages ? "page-item disabled" : "page-item"}>
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        onClick={props.onClickPageNext}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
