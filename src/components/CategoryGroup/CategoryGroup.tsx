import React from 'react';
import List from '../List/List';

const CategoryGroup = (props: any) => {
    const titleCategory = props.category.name;
    const subCategories = props.category.children;
    const renderSubCategories = (category: any) => {
        return (
            <li key={category.id}>
                <a className="list-group-item-action">{category.name}</a>
            </li>
        );
    };
    
    return (
        <div>
            <h6>{titleCategory}</h6>
            <List items={subCategories} renderItem={renderSubCategories} />
        </div>
    );
};

export default CategoryGroup;
