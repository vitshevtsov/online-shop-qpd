import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import CategoryGroup from '../CategoryGroup/CategoryGroup';
import List from '../List/List';

const SideMenu = () => {
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const [openedCategory, setOpenedCategory] = useState<any>(categories[0]); // todo сделать проверку есть ли в сторе категории

    const selectedCategory = (id: any) => categories.find((item: any) => item.id === id);
    const handleOnMouseOverCategory = (e: any) => {
        setOpenedCategory(selectedCategory(+e.currentTarget.id));
    };

    const renderCategory = (category: any) => {
        return (
            <li 
                key={category.id} 
                id={category.id} 
                onMouseOver={handleOnMouseOverCategory}
                data-bs-dismiss="offcanvas"
            >
                <Link to={`/category${category.id}`} className="list-group-item list-group-item-action">{category.name}</Link>
            </li>
        );
    };
    const renderCategoryGroups =(category: any) => {
        return (
            <CategoryGroup key={category.id} category={category} />
        );
    };
        
    return (
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Каталог</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body row">
                <div className="col-4">
                    <List items={categories} renderItem={renderCategory} /> 
                </div>
                <div className="col-8">
                    <h5 className="openedCategoryTitle">
                        {openedCategory.name}
                    </h5>
                    <div className="row row-cols-2">
                        <List items={openedCategory.children} renderItem={renderCategoryGroups} />
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default SideMenu;
