import React from 'react';
import { Link } from 'react-router-dom';
import List from '../List/List';

const CategoryGroup = (props: any) => {
    const subCategories = props.category.children;
    const renderSubCategories = (category: any) => {
        console.log(category.id);
        return (
            <li key={category.id} data-bs-dismiss="offcanvas">
                <Link to={`/category${category.id}`} className="list-group-item-action">{category.name}</Link>
            </li>
        );
    };
    console.log(props.category.id);
    // todo не работает переход кликом на титульную ссылку группы категорий
    return (
        <div>
            <Link to={`/category${props.category.id}`} className="list-group-item-action" ><h6 data-bs-dismiss="offcanvas">{props.category.name}</h6></Link>
            <List items={subCategories} renderItem={renderSubCategories} />
        </div>
    );
};

export default CategoryGroup;
