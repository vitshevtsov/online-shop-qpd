/* eslint-disable react/destructuring-assignment */
import Pagination from 'components/UI/Pagination/Pagination';
import React, { useEffect, useState } from 'react';
import { IListProps } from 'types/props/IListProps';
import getCurrentPageItems from 'utils/getCurrentPageItems';

/**
 * Универсальный компонент для рендера всех списков приложения
 * Пагинация рендерится, если пропом в лист передан лимит элементов
 * на 1 стр., и при этом всего элементов больше, чем этот лимит
 */
export default function List(props: IListProps) {
    const [page, setPage] = useState<number>(1);
    const isPaginationNeeded = (props.paginationLimit && (props.items.length > props.paginationLimit));

    const currentPageItems = (isPaginationNeeded)
        ? getCurrentPageItems(props.items, props.paginationLimit as number, page)
        : props.items;

    const listItems = currentPageItems.map((item: unknown) => props.renderItem(item));
    
    const handleOnClickPageNum = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setPage(Number(e.currentTarget.innerHTML));
    };

    const handleOnClickPagePrev = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setPage(prevState => prevState - 1);
    };

    const handleOnClickPageNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setPage(prevState => prevState + 1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <>
            {listItems}
            {isPaginationNeeded && <Pagination
                items={props.items}
                limit={props.paginationLimit as number}
                onClickPageNum={handleOnClickPageNum}
                onClickPagePrev={handleOnClickPagePrev}
                onClickPageNext={handleOnClickPageNext}
                activePage={page}
            />}
        </>
    );
}
