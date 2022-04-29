/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { IListProps } from '../../types/props/IListProps';

export default function List(props: IListProps) {
    const listItems = props.items.map((item: any) => props.renderItem(item));
    return (
        <>
            {listItems}
        </>
    );
}
