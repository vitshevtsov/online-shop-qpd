/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { IListProps } from 'types/props/IListProps';

/**
 * Универсальный компонент для рендера всех списков приложения
 */
export default function List(props: IListProps) {
    const listItems = props.items.map((item: any) => props.renderItem(item));
    return (
        <>
            {listItems}
        </>
    );
}
