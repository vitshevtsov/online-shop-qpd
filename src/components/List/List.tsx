/* eslint-disable react/destructuring-assignment */
import Pagination from 'components/UI/Pagination/Pagination';
import React, { useState } from 'react';
import { IListProps } from 'types/props/IListProps';
import getCurrentPageItems from 'utils/getCurrentPageItems';

/**
 * Универсальный компонент для рендера всех списков приложения
 * Пагинация рендерится, если пропом в лист передан лимит элементов
 * на 1 стр., и при этом всего элементов больше, чем этот лимит
 */
export default function List({
    paginationLimit,
    items,
    renderItem,
    titleRef
}: IListProps) {

    const [page, setPage] = useState<number>(1);
    const isPaginationNeeded = (paginationLimit && (items.length > paginationLimit));

    const currentPageItems = (isPaginationNeeded)
        ? getCurrentPageItems(items, paginationLimit as number, page)
        : items;

    const listItems = currentPageItems.map((item: unknown) => renderItem(item));
    
    const handleOnClickPageNum = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setPage(Number(e.currentTarget.innerHTML));

        if (titleRef && titleRef.current) {
            titleRef.current.scrollIntoView();
        }
    };

    const handleOnClickPagePrev = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setPage(prevState => prevState - 1);

        if (titleRef && titleRef.current) {
            titleRef.current.scrollIntoView();
        }
    };

    const handleOnClickPageNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setPage(prevState => prevState + 1);

        if (titleRef && titleRef.current) {
            titleRef.current.scrollIntoView();
        }
    };

    return (
        <>
            {listItems}
            {isPaginationNeeded && <Pagination
                items={items}
                limit={paginationLimit as number}
                onClickPageNum={handleOnClickPageNum}
                onClickPagePrev={handleOnClickPagePrev}
                onClickPageNext={handleOnClickPageNext}
                activePage={page}
            />}
        </>
    );
}
