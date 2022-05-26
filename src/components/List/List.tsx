/* eslint-disable react/destructuring-assignment */
import Pagination from 'components/UI/Pagination/Pagination';
import React from 'react';
import { IListProps } from 'types/props/IListProps';

/**
 * Универсальный компонент для рендера всех списков приложения
 */
export default function List(props: IListProps) {
    const listItems = props.items.map((item: unknown) => props.renderItem(item));
    const isPaginationNeeded = (props.paginationLimit && (props.items.length > props.paginationLimit));
    return (
        <>
            {listItems}
            {isPaginationNeeded && <Pagination
                items={props.items}
                limit={props.paginationLimit}
            />}
        </>
    );
}
