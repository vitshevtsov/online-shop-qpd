import React from 'react';
import List from '../List/List';

const CategoryGroupsPanel = (props: any) => {
    const renderPanelCategory =(category: any) => {
        return (
            <div key={category.id} className="col">
                <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{category.name}</h5>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="container-md">
            <div className="row row-cols-5">
                <List items={props.categories} renderItem={renderPanelCategory} />
            </div>
        </div>
    );
};

export default CategoryGroupsPanel;
