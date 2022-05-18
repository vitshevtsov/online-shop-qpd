import React from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '../../types/models/ICategory';
import { ICategoryGroupsPanelProps } from '../../types/props/ICategoryGroupsPanelProps';
import List from '../List/List';

/**
 * Компонент рендерит панель категорий в соответствии с переданным списком,
 * используется на главной странице (передаются популярные категории) и 
 * в результатах поиска
 */
const CategoryGroupsPanel = (props: ICategoryGroupsPanelProps) => {
    const renderPanelCategory =(category: ICategory) => {
        return (
            <div
                key={category.id}
                className="col"
            >
                <Link
                    to={`/category${category.id}`}
                    className="card h-100 list-group-item list-group-item-action text-center"
                >
                    <img
                        src={category.imgPath}
                        className="card-img-top"
                        alt="category img"
                    />
                    <div className="card-body">
                        <h6 className="card-title">{category.name}</h6>
                    </div>
                </Link>
            </div>
        );
    };
    return (
        <div className="container-md">
            <div className="row row-cols-5">
                <List
                    items={props.categories}
                    renderItem={renderPanelCategory}
                />
            </div>
        </div>
    );
};

export default CategoryGroupsPanel;
