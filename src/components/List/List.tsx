/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function List(props: any) {
    const listItems = props.items.map((item: any) => props.renderItem(item));
    return (
        <div>
            <div>{listItems}</div>
        </div>
    );
}
