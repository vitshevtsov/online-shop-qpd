import React from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from 'types/models/ICategory';
import { ICategoryGroupProps } from 'types/props/ICategoryGroupProps';
import List from 'components/List/List';

/**
 * Компонент рендерит группу связанных категорий (родительскую и список дочерних)
 * Используется в боковом меню
 */
const CategoryGroup = ({category}: ICategoryGroupProps) => {

    const subCategories = category.children;
    
    const renderSubCategories = (category: ICategory) => {
        return (
            <li
                key={category.id}
                data-bs-dismiss="offcanvas"
            >
                <Link
                    to={`/category/${category.id}`}
                    className="list-group-item-action"
                >{category.name}
                </Link>
            </li>
        );
    };
    return (
        <div className='text-center text-md-start'>
            <Link
                to={`/category/${category.id}`}
                className="list-group-item-action"
            >
                <h6 data-bs-dismiss="offcanvas">{category.name}</h6>
            </Link>
            {subCategories && <List
                items={subCategories}
                renderItem={renderSubCategories}
            />}
        </div>
    );
};

export default CategoryGroup;
